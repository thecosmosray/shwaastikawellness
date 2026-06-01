"use client";

import { FormEvent, useState } from "react";

type FormErrors = {
  firstName?: string;
  email?: string;
  consent?: string;
  form?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!firstName.trim()) {
      nextErrors.firstName = "Please enter your first name.";
    }

    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!consent) {
      nextErrors.consent = "Please confirm your consent to receive emails.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");

    if (!validate()) {
      return;
    }

    const subscriber = {
      firstName: firstName.trim(),
      email: email.trim(),
      consent,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscriber),
      });
      const result = (await response.json()) as { message?: string; field?: keyof FormErrors };

      if (!response.ok) {
        if (result.field) {
          setErrors({ [result.field]: result.message || "Please check this field." });
        } else {
          setErrors({
            form: result.message || "Unable to process subscription. Please try again later.",
          });
        }
        return;
      }

      setFirstName("");
      setEmail("");
      setConsent(false);
      setErrors({});
      setSuccessMessage(
        result.message || "Thank you for subscribing.",
      );
    } catch {
      setErrors({ form: "Unable to process subscription. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div className="newsletter-organic mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-[#e4d8c4] bg-[#e4e3d6] px-5 py-12 text-center shadow-xl shadow-[#6b513b]/6 sm:rounded-[3rem] sm:px-10 sm:py-16 lg:px-16">
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#76695d]">
            Shwaastika Wellness
          </p>
          <h2 className="mt-4 text-4xl leading-tight text-[#25211d] sm:text-5xl">
            Join the Wellness Letter
          </h2>
          <p className="editorial-prose editorial-prose-center mt-5 max-w-2xl">
            Receive gentle reflections, healing insights, and mindful reminders from
            Shwaastika Wellness.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-4xl text-left" noValidate>
            <div className="grid gap-5">
              <div>
                <label className="sr-only" htmlFor="newsletter-email">
                  Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrors((current) => ({ ...current, email: undefined, form: undefined }));
                    setSuccessMessage("");
                  }}
                  placeholder="Email Address"
                  className="w-full rounded-full border border-white/70 bg-white/88 px-6 py-4 text-base text-[#2f2822] shadow-sm outline-none transition placeholder:text-[#76695d] focus:border-[#bda98b] focus:bg-white focus:ring-2 focus:ring-[#bda98b]/20"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "newsletter-email-error" : undefined}
                />
                {errors.email ? (
                  <p id="newsletter-email-error" className="mt-2 px-5 text-sm text-[#8f453a]">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="sr-only" htmlFor="newsletter-first-name">
                  First Name
                </label>
                <input
                  id="newsletter-first-name"
                  type="text"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    setErrors((current) => ({ ...current, firstName: undefined, form: undefined }));
                    setSuccessMessage("");
                  }}
                  placeholder="First Name"
                  className="w-full rounded-full border border-white/70 bg-white/88 px-6 py-4 text-base text-[#2f2822] shadow-sm outline-none transition placeholder:text-[#76695d] focus:border-[#bda98b] focus:bg-white focus:ring-2 focus:ring-[#bda98b]/20"
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? "newsletter-first-name-error" : undefined}
                />
                {errors.firstName ? (
                  <p id="newsletter-first-name-error" className="mt-2 px-5 text-sm text-[#8f453a]">
                    {errors.firstName}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-3xl">
              <label className="flex items-start gap-3 text-sm leading-6 text-[#3f372f]">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => {
                    setConsent(event.target.checked);
                    setErrors((current) => ({ ...current, consent: undefined, form: undefined }));
                    setSuccessMessage("");
                  }}
                  className="mt-1 h-4 w-4 rounded border-[#bda98b] text-[#5f4a38] focus:ring-[#bda98b]"
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "newsletter-consent-error" : undefined}
                />
                <span>I consent to receive emails from Shwaastika Wellness.</span>
              </label>
              {errors.consent ? (
                <p id="newsletter-consent-error" className="mt-2 pl-7 text-sm text-[#8f453a]">
                  {errors.consent}
                </p>
              ) : null}
            </div>

            <div className="mt-9 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#5f4a38] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-[#5f4a38]/14 transition hover:-translate-y-0.5 hover:bg-[#2f2822] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {errors.form ? (
              <p className="mx-auto mt-7 max-w-2xl rounded-full bg-white/72 px-5 py-3 text-center text-sm font-semibold text-[#8f453a]">
                {errors.form}
              </p>
            ) : null}

            {successMessage ? (
              <p className="mx-auto mt-7 max-w-2xl rounded-full bg-white/72 px-5 py-3 text-center text-sm font-semibold text-[#3f5f46]">
                {successMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
