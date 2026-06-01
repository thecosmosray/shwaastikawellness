import { NextResponse } from "next/server";

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type BrevoError = {
  code?: string;
  message?: string;
};

type BrevoContact = {
  email?: string;
  listIds?: number[];
};

type BrevoOperation = "contact lookup" | "contact creation" | "contact reactivation";

type BrevoResult<T> = {
  body?: T | BrevoError;
  ok: boolean;
  status: number;
};

type NewsletterPayload = {
  firstName?: unknown;
  email?: unknown;
  consent?: unknown;
};

class BrevoRequestError extends Error {
  brevoCode?: string;
  brevoMessage?: string;
  operation: BrevoOperation;
  status: number;

  constructor(operation: BrevoOperation, status: number, error?: BrevoError) {
    super(
      `Brevo ${operation} failed with HTTP ${status}${
        error?.code ? ` (${error.code})` : ""
      }${error?.message ? `: ${error.message}` : ""}`,
    );
    this.name = "BrevoRequestError";
    this.brevoCode = error?.code;
    this.brevoMessage = error?.message;
    this.operation = operation;
    this.status = status;
  }
}

function jsonResponse(message: string, status: number, extra?: Record<string, unknown>) {
  return NextResponse.json({ message, ...extra }, { status });
}

function parseBrevoBody<T>(bodyText: string): T | BrevoError | undefined {
  if (!bodyText) {
    return undefined;
  }

  try {
    return JSON.parse(bodyText) as T | BrevoError;
  } catch {
    return { message: bodyText };
  }
}

function getBrevoError<T>(result: BrevoResult<T>): BrevoError {
  if (!result.body || typeof result.body !== "object") {
    return {};
  }

  const maybeError = result.body as BrevoError;
  return {
    code: maybeError.code,
    message: maybeError.message,
  };
}

function brevoHeaders(apiKey: string) {
  return {
    "Content-Type": "application/json",
    "api-key": apiKey,
  };
}

function brevoContactUrl(email: string) {
  return `${BREVO_CONTACTS_URL}/${encodeURIComponent(email)}?identifierType=email_id`;
}

function isContactNotFound<T>(result: BrevoResult<T>, error?: BrevoError) {
  return result.status === 404 || error?.code === "document_not_found";
}

function isDuplicateContact<T>(result: BrevoResult<T>, error?: BrevoError) {
  return result.status === 400 && error?.code === "duplicate_parameter";
}

async function brevoRequest<T>(request: {
  apiKey: string;
  body?: Record<string, unknown>;
  method: "GET" | "POST" | "PUT";
  url: string;
}): Promise<BrevoResult<T>> {
  const response = await fetch(request.url, {
    method: request.method,
    headers: brevoHeaders(request.apiKey),
    body: request.body ? JSON.stringify(request.body) : undefined,
  });
  const bodyText = await response.text();
  const body = parseBrevoBody<T>(bodyText);

  return {
    body,
    ok: response.ok,
    status: response.status,
  };
}

async function getBrevoContact(email: string, apiKey: string) {
  return brevoRequest<BrevoContact>({
    apiKey,
    method: "GET",
    url: brevoContactUrl(email),
  });
}

async function addExistingContactToList(email: string, apiKey: string, listId: number) {
  const body = {
    listIds: [listId],
  };

  return brevoRequest<BrevoContact>({
    apiKey,
    body,
    method: "PUT",
    url: brevoContactUrl(email),
  });
}

async function createBrevoContact(
  email: string,
  firstName: string,
  apiKey: string,
  listId: number,
) {
  const body = {
    email,
    attributes: firstName ? { FIRSTNAME: firstName } : undefined,
    listIds: [listId],
    updateEnabled: false,
  };

  return brevoRequest<BrevoContact>({
    apiKey,
    body,
    method: "POST",
    url: BREVO_CONTACTS_URL,
  });
}

async function handleExistingContact(email: string, apiKey: string, listId: number) {
  const contactResult = await getBrevoContact(email, apiKey);

  if (!contactResult.ok) {
    const contactError = getBrevoError(contactResult);

    if (isContactNotFound(contactResult, contactError)) {
      return null;
    }

    throw new BrevoRequestError("contact lookup", contactResult.status, contactError);
  }

  const contact = (contactResult.body ?? {}) as BrevoContact;

  if (contact.listIds?.includes(listId)) {
    return jsonResponse("You are already subscribed.", 200, {
      status: "already_subscribed",
    });
  }

  const reactivateResponse = await addExistingContactToList(email, apiKey, listId);

  if (!reactivateResponse.ok) {
    const reactivateError = getBrevoError(reactivateResponse);
    throw new BrevoRequestError(
      "contact reactivation",
      reactivateResponse.status,
      reactivateError,
    );
  }

  return jsonResponse("Your subscription has been reactivated.", 200, {
    status: "reactivated",
  });
}

export async function POST(request: Request) {
  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return jsonResponse("Please submit a valid newsletter request.", 400);
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";

  if (!email || !emailPattern.test(email)) {
    return jsonResponse("Please enter a valid email address.", 400, { field: "email" });
  }

  if (payload.consent !== true) {
    return jsonResponse("Please confirm your consent to receive emails.", 400, {
      field: "consent",
    });
  }

  // Add BREVO_API_KEY to your local .env file and to your hosting provider's
  // environment variables. Never expose this value in frontend code.
  const apiKey = process.env.BREVO_API_KEY;

  // Add the numeric Brevo newsletter list ID as BREVO_LIST_ID in the same places.
  const rawListId = process.env.BREVO_LIST_ID;
  const listId = Number(rawListId);

  if (!apiKey) {
    return jsonResponse("Unable to process subscription. Please try again later.", 500);
  }

  if (!Number.isInteger(listId) || listId <= 0) {
    return jsonResponse("Unable to process subscription. Please try again later.", 500);
  }

  try {
    const existingContactResponse = await handleExistingContact(email, apiKey, listId);

    if (existingContactResponse) {
      return existingContactResponse;
    }

    const createResponse = await createBrevoContact(email, firstName, apiKey, listId);

    if (createResponse.ok) {
      return jsonResponse("Thank you for subscribing.", 201, {
        status: "subscribed",
      });
    }

    const createError = getBrevoError(createResponse);

    if (isDuplicateContact(createResponse, createError)) {
      const duplicateRaceResponse = await handleExistingContact(email, apiKey, listId);

      if (duplicateRaceResponse) {
        return duplicateRaceResponse;
      }
    }

    throw new BrevoRequestError("contact creation", createResponse.status, createError);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      const errorDetails =
        error instanceof Error
          ? {
              message: error.message,
              stack: error.stack,
              ...(error instanceof BrevoRequestError
                ? {
                    operation: error.operation,
                    status: error.status,
                    brevoCode: error.brevoCode,
                    brevoMessage: error.brevoMessage,
                  }
                : {}),
            }
          : { message: "Unknown newsletter subscription error", error };

      return NextResponse.json(errorDetails, { status: 500 });
    }

    return jsonResponse("Unable to process subscription. Please try again later.", 502);
  }
}
