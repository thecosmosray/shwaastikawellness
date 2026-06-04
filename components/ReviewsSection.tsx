"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import LightboxModal from "@/components/LightboxModal";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import { extractedReviews, type Review } from "@/data/reviews";

const USER_REVIEWS_KEY = "shwaastika-user-reviews";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[1.25rem] leading-none" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-[#bda98b]" : "text-[#eae3d9]"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const mobileReviewSwiperRef = useRef<SwiperInstance | null>(null);
  const desktopReviewSwiperRef = useRef<SwiperInstance | null>(null);
  const [activeDesktopDot, setActiveDesktopDot] = useState(0);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    window.localStorage.removeItem(USER_REVIEWS_KEY);
  }, []);

  const reviews = extractedReviews;

  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d735f]">Reviews</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#241d18] sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#4f463e]">
              <span className="editorial-highlight">Google reviews</span> of our clients.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAllReviews((current) => !current)}
              className="rounded-full border border-[#d8cab5] bg-[#fffefa] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#565c43] shadow-sm transition hover:border-[#565c43] hover:bg-[#565c43] hover:text-white"
              aria-expanded={showAllReviews}
            >
              {showAllReviews ? "Show Less" : "Read All Reviews"}
            </button>
            {!showAllReviews ? (
              <div className="hidden gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => desktopReviewSwiperRef.current?.slidePrev()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c7ad] bg-white text-xl text-[#241d18] shadow-sm transition hover:bg-[#fff7ec]"
                  aria-label="Previous Google review"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={() => desktopReviewSwiperRef.current?.slideNext()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c7ad] bg-white text-xl text-[#241d18] shadow-sm transition hover:bg-[#fff7ec]"
                  aria-label="Next Google review"
                >
                  &rarr;
                </button>
              </div>
            ) : null}
          </div>
        </Reveal>

        {!showAllReviews ? (
          <div className="mt-10 md:hidden">
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => mobileReviewSwiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c7ad] bg-[#fffdf8] text-xl text-[#241d18] shadow-sm transition hover:border-[#8d735f] hover:bg-white"
                aria-label="Previous review"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => mobileReviewSwiperRef.current?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c7ad] bg-[#fffdf8] text-xl text-[#241d18] shadow-sm transition hover:border-[#8d735f] hover:bg-white"
                aria-label="Next review"
              >
                &rarr;
              </button>
            </div>
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                mobileReviewSwiperRef.current = swiper;
              }}
              autoplay={{
                delay: 3600,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={700}
              slidesPerView={1.04}
              spaceBetween={16}
              className="review-mobile-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  <ReviewCard review={review} variant="mobile" onClick={() => setSelectedReview(review)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : null}

        {!showAllReviews ? (
          <div className="mt-10 hidden md:block">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                desktopReviewSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveDesktopDot(swiper.realIndex % 3)}
              autoplay={{
                delay: 3600,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={700}
              loop={reviews.length > 3}
              slidesPerView={2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="review-mobile-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  <ReviewCard review={review} onClick={() => setSelectedReview(review)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : null}

        {!showAllReviews ? (
          <div className="mt-7 hidden justify-center gap-2 md:flex" aria-label="Google reviews carousel position">
            {Array.from({ length: 3 }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => desktopReviewSwiperRef.current?.slideToLoop(index)}
                className={`h-2.5 rounded-full transition ${
                  activeDesktopDot === index ? "w-8 bg-[#3f5f46]" : "w-2.5 bg-[#d2c3a9]"
                }`}
                aria-label={`Show Google reviews group ${index + 1}`}
                aria-pressed={activeDesktopDot === index}
              />
            ))}
          </div>
        ) : null}

        {showAllReviews ? (
          <div className="mt-10">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} onClick={() => setSelectedReview(review)} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllReviews(false)}
                className="rounded-full border border-[#d8cab5] bg-[#fffefa] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#565c43] shadow-sm transition hover:border-[#565c43] hover:bg-[#565c43] hover:text-white"
              >
                Show Less
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <LightboxModal
        isOpen={Boolean(selectedReview)}
        title={selectedReview ? `${selectedReview.name} review` : "Google review"}
        onClose={() => setSelectedReview(null)}
      >
        {selectedReview ? (
          <article className="rounded-[1.75rem] border border-[#eae3d9] bg-[#fffdf8] p-6 shadow-sm sm:p-9 relative overflow-hidden">
            {/* Subtle decorative quote mark for modal */}
            <span className="absolute top-2 -right-2 text-[8rem] leading-none text-[#f3eadb] font-serif z-0 select-none opacity-40">
              "
            </span>

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3eadb] text-lg font-semibold text-[#8d7158] border border-[#e5d9c7]">
                      {getInitials(selectedReview.name) || "R"}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[#2f2822]">{selectedReview.name}</h3>
                    <p className="mt-0.5 text-sm text-[#8a7a6a]">
                      {selectedReview.time}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-[#f8f4ec] border border-[#eae3d9]">
                  <Image
                    src="/images/google.png"
                    alt="Google review"
                    width={18}
                    height={18}
                    className="object-contain opacity-80"
                  />
                </div>
              </div>

              <div className="mt-7">
                <ReviewStars rating={selectedReview.rating} />
              </div>

              <div className="mt-6">
                <p className="font-serif italic whitespace-pre-line text-[1.1rem] leading-[1.8] text-[#5c5249] sm:text-[1.2rem]">
                  {selectedReview.review}
                </p>
              </div>
            </div>
          </article>
        ) : null}
      </LightboxModal>
    </section>
  );
}
