"use client";

import Image from "next/image";
import type { Review } from "@/data/reviews";

type ReviewCardProps = {
  review: Review;
  variant?: "default" | "mobile";
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-[#fbbc04]" : "text-[#d7d0c5]"}
          aria-hidden="true"
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function ReviewCard({ review, variant = "default" }: ReviewCardProps) {
  const isMobileVariant = variant === "mobile";

  return (
    <article
      className={[
        "flex flex-col rounded-[1.4rem] border border-[#e5d9c7] bg-white p-5 shadow-sm shadow-[#6b513b]/8 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#6b513b]/10",
        isMobileVariant ? "h-[440px]" : "h-[390px] sm:h-[420px]",
      ].join(" ")}
    >
      <div className="shrink-0 flex items-start gap-3">
        <div className="relative h-12 w-12 shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f5f46] text-base font-semibold text-white">
            {getInitials(review.name) || "R"}
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-white">
            <Image
              src="/images/google.png"
              alt="Google review"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="truncate text-base font-semibold text-[#2f2822]">{review.name}</h3>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1a73e8] text-xs font-bold text-white" aria-label="Verified public review">
              &#10003;
            </span>
          </div>
          <p className="mt-0.5 text-sm text-[#7a6d61]">{review.time}</p>
        </div>
      </div>

      <div className="mt-4">
        <StarRating rating={review.rating} />
      </div>

      <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-2 [scrollbar-color:#cdbd9f_transparent] [scrollbar-width:thin]">
        <p className="whitespace-pre-line text-justify text-[15px] leading-7 text-[#3f352d]">
          {review.review}
        </p>
      </div>
    </article>
  );
}
