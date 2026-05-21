"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import LightboxModal from "@/components/LightboxModal";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import { extractedReviews, type Review } from "@/data/reviews";

const USER_REVIEWS_KEY = "shwaastika-user-reviews";
const INITIAL_VISIBLE_REVIEWS = 5;
const REVIEWS_PER_LOAD = 5;

type ReviewFormState = {
  name: string;
  rating: number;
  review: string;
};

const emptyForm: ReviewFormState = {
  name: "",
  rating: 5,
  review: "",
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

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
  const reviewSwiperRef = useRef<SwiperInstance | null>(null);
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [form, setForm] = useState<ReviewFormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ReviewFormState, string>>>({});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setUserReviews(readJson<Review[]>(USER_REVIEWS_KEY, []));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const reviews = useMemo(() => [...userReviews, ...extractedReviews], [userReviews]);
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMoreReviews = visibleCount < reviews.length;

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof ReviewFormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.review.trim()) {
      nextErrors.review = "Review message is required.";
    }

    if (!form.rating || form.rating < 1 || form.rating > 5) {
      nextErrors.rating = "Choose a rating from 1 to 5.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const nextReview: Review = {
      id: `local-${Date.now()}`,
      name: form.name.trim(),
      time: "Just now",
      rating: form.rating,
      review: form.review.trim(),
    };

    setUserReviews((currentReviews) => {
      const nextReviews = [nextReview, ...currentReviews];
      window.localStorage.setItem(USER_REVIEWS_KEY, JSON.stringify(nextReviews));
      return nextReviews;
    });
    setVisibleCount((currentCount) => Math.max(currentCount, INITIAL_VISIBLE_REVIEWS));
    setForm(emptyForm);
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">Reviews</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-justify text-base leading-8 text-[#675b50]">
              Public client experiences from earlier Google reviews, along with new reviews shared here.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex w-full justify-center rounded-full bg-[#2f2822] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f2822]/15 transition hover:bg-[#3f5f46] md:w-auto"
          >
            Write a Review
          </button>
        </Reveal>

        <div className="mt-10 md:hidden">
          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => reviewSwiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-[#fbf8f1] text-xl text-[#2f2822] shadow-sm transition hover:border-[#8a9b72] hover:bg-white"
              aria-label="Previous review"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => reviewSwiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-[#fbf8f1] text-xl text-[#2f2822] shadow-sm transition hover:border-[#8a9b72] hover:bg-white"
              aria-label="Next review"
            >
              &rarr;
            </button>
          </div>
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              reviewSwiperRef.current = swiper;
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

        <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <Reveal key={review.id} delay={(index % 3) * 0.06}>
              <ReviewCard review={review} onClick={() => setSelectedReview(review)} />
            </Reveal>
          ))}
        </div>

        {hasMoreReviews ? (
          <div className="mt-10 hidden justify-center md:flex">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + REVIEWS_PER_LOAD, reviews.length))}
              className="rounded-full border border-[#cdbd9f] bg-[#fbf8f1] px-7 py-3 text-sm font-semibold text-[#3f352d] transition hover:border-[#8a9b72] hover:bg-white"
            >
              Load more reviews
            </button>
          </div>
        ) : null}
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

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#17130f]/45 px-5 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-modal-title"
              className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[1.5rem] border border-white/70 bg-[#fffdf8] p-6 shadow-2xl shadow-[#17130f]/20 sm:p-7"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">Review</p>
                  <h3 id="review-modal-title" className="mt-2 text-2xl font-semibold text-[#2f2822]">
                    Write a Review
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setErrors({});
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8cbb9] text-xl text-[#3f352d] transition hover:border-[#3f5f46] hover:bg-white"
                  aria-label="Close review form"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleReviewSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="review-name" className="text-sm font-semibold text-[#3f352d]">
                    Name
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    className="mt-2 w-full rounded-[1rem] border border-[#d8cbb9] bg-white px-4 py-3 text-[#2f2822] outline-none transition focus:border-[#3f5f46] focus:ring-2 focus:ring-[#3f5f46]/15"
                  />
                  {errors.name ? <p className="mt-2 text-sm text-[#a23b2d]">{errors.name}</p> : null}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#3f352d]">Rating</p>
                  <div className="mt-2 flex gap-2">
                    {Array.from({ length: 5 }, (_, index) => {
                      const rating = index + 1;
                      return (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setForm((current) => ({ ...current, rating }))}
                          className="text-3xl leading-none transition hover:scale-110"
                          aria-label={`${rating} star rating`}
                        >
                          <span className={rating <= form.rating ? "text-[#fbbc04]" : "text-[#d7d0c5]"}>
                            &#9733;
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.rating ? <p className="mt-2 text-sm text-[#a23b2d]">{errors.rating}</p> : null}
                </div>

                <div>
                  <label htmlFor="review-message" className="text-sm font-semibold text-[#3f352d]">
                    Review message
                  </label>
                  <textarea
                    id="review-message"
                    value={form.review}
                    onChange={(event) => setForm((current) => ({ ...current, review: event.target.value }))}
                    rows={5}
                    className="mt-2 w-full resize-none rounded-[1rem] border border-[#d8cbb9] bg-white px-4 py-3 text-[#2f2822] outline-none transition focus:border-[#3f5f46] focus:ring-2 focus:ring-[#3f5f46]/15"
                  />
                  {errors.review ? <p className="mt-2 text-sm text-[#a23b2d]">{errors.review}</p> : null}
                </div>

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setErrors({});
                    }}
                    className="rounded-full border border-[#d8cbb9] px-6 py-3 text-sm font-semibold text-[#3f352d] transition hover:border-[#3f5f46] hover:bg-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-[#2f2822] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3f5f46]"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
