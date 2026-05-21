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
    <div className="flex gap-1 text-lg" aria-label={`${rating} out of 5 stars`}>
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

export default function ReviewsSection() {
  const mobileReviewSwiperRef = useRef<SwiperInstance | null>(null);
  const desktopReviewSwiperRef = useRef<SwiperInstance | null>(null);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  useEffect(() => {
    window.localStorage.removeItem(USER_REVIEWS_KEY);
  }, []);

  const reviews = extractedReviews;

  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">Reviews</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-justify text-base leading-8 text-[#675b50]">
              Curated client experiences preserved from earlier public Google reviews.
            </p>
          </div>
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => desktopReviewSwiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-white text-xl text-[#2f2822] shadow-sm transition hover:bg-[#f3eadb]"
              aria-label="Previous Google review"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => desktopReviewSwiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-white text-xl text-[#2f2822] shadow-sm transition hover:bg-[#f3eadb]"
              aria-label="Next Google review"
            >
              &rarr;
            </button>
          </div>
        </Reveal>

        <div className="mt-10 md:hidden">
          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => mobileReviewSwiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-[#fbf8f1] text-xl text-[#2f2822] shadow-sm transition hover:border-[#8a9b72] hover:bg-white"
              aria-label="Previous review"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => mobileReviewSwiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-[#fbf8f1] text-xl text-[#2f2822] shadow-sm transition hover:border-[#8a9b72] hover:bg-white"
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

        <div className="mt-10 hidden md:block">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              desktopReviewSwiperRef.current = swiper;
            }}
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
      </div>

      <LightboxModal
        isOpen={Boolean(selectedReview)}
        title={selectedReview ? `${selectedReview.name} review` : "Google review"}
        onClose={() => setSelectedReview(null)}
      >
        {selectedReview ? (
          <article className="rounded-[1.5rem] border border-[#e5d9c7] bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-start gap-4 pr-12">
              <div className="relative h-14 w-14 shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3f5f46] text-lg font-semibold text-white">
                  {getInitials(selectedReview.name) || "R"}
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-white">
                  <Image
                    src="/images/google.png"
                    alt="Google review"
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain"
                  />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-xl font-semibold text-[#2f2822]">{selectedReview.name}</h3>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1a73e8] text-xs font-bold text-white" aria-label="Verified public review">
                    &#10003;
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#7a6d61]">{selectedReview.time}</p>
              </div>
            </div>

            <div className="mt-6">
              <ReviewStars rating={selectedReview.rating} />
            </div>

            <p className="mt-5 whitespace-pre-line text-justify text-base leading-8 text-[#3f352d] sm:text-lg sm:leading-9">
              {selectedReview.review}
            </p>
          </article>
        ) : null}
      </LightboxModal>
    </section>
  );
}
