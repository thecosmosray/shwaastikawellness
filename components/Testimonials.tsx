"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    title: "Client Reflection",
    note: "A shared client experience from a healing session.",
    image: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.24%20(1).webp",
    alt: "Client review about feeling freshness after practice",
  },
  {
    title: "Client Reflection",
    note: "A client message about clarity and choosing the right path.",
    image: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.25.webp",
    alt: "Client review for craniosacral therapy and healing session",
  },
  {
    title: "Client Reflection",
    note: "A review shared after personal guidance and support.",
    image: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.35.webp",
    alt: "Client review shared for Preeti Semwal",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <article className="h-full rounded-[1.5rem] border border-[#e5d9c7] bg-white p-3 shadow-sm">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-[#fbf8f1]">
        <Image
          src={testimonial.image}
          alt={testimonial.alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 92vw, (max-width: 1180px) 45vw, 360px"
          loading="lazy"
          quality={88}
        />
      </div>
      <div className="px-3 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
          Client Feedback
        </p>
        <h3 className="mt-2 text-xl font-semibold text-[#332b24]">{testimonial.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#6a5d52]">{testimonial.note}</p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#fbf8f1] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
            Shared Experiences
          </h2>
          <Link
            href="/testimonials"
            className="mt-7 inline-flex rounded-full border border-[#cdbd9f] bg-white px-6 py-3 text-sm font-semibold text-[#3f352d] transition hover:border-[#8a9b72] hover:bg-[#fbf8f1]"
          >
            View All Testimonials
          </Link>
        </Reveal>

        <div className="mt-10 lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={650}
            loop
            pagination={{ clickable: true }}
            slidesPerView={1.05}
            spaceBetween={16}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 18,
              },
              900: {
                slidesPerView: 2.15,
                spaceBetween: 20,
              },
              1180: {
                slidesPerView: 2.75,
                spaceBetween: 20,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.image} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.image} delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
