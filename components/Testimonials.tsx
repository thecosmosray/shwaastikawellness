"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    title: "Intuitive Healing",
    note: "A shared client experience from an Intuitive Healing session.",
    image: "/images/testimonial/Sai%20GokulIntuitive%20Healing.png",
    alt: "Sai Gokul Intuitive Healing testimonial",
    imageClassName: "object-contain p-4",
  },
  {
    title: "Womb Healing",
    note: "A practice review shared after Womb Healing support.",
    image: "/images/testimonial/Practice%20ReviewWomb%20Healing.png",
    alt: "Practice Review Womb Healing testimonial",
    imageClassName: "object-contain p-4",
  },
  {
    title: "Intuitive Healing",
    note: "A client reflection from an Intuitive Healing session.",
    image: "/images/testimonial/Intuitive%20Healing.png",
    alt: "Intuitive Healing testimonial",
    imageClassName: "object-contain p-4",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <article className="h-full rounded-[1.35rem] border border-[#eadfce] bg-white p-3 shadow-sm shadow-[#6b513b]/4 sm:rounded-[1.5rem]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.05rem] bg-[#fff7ec] p-3 sm:rounded-[1.2rem]">
        <div className="absolute inset-3 rounded-[0.9rem] bg-white shadow-inner" />
        <Image
          src={testimonial.image}
          alt={testimonial.alt}
          fill
          className={testimonial.imageClassName}
          sizes="(max-width: 640px) 92vw, (max-width: 1180px) 45vw, 360px"
          loading="lazy"
          quality={88}
        />
      </div>
      <div className="px-3 py-5">
        <h3 className="text-xl font-bold text-[#17120f]">{testimonial.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#4f463e]">{testimonial.note}</p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf8] px-4 py-12 sm:px-8 sm:py-14 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffdf8_0%,#fff8ef_52%,#ffffff_100%)]" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a6f55]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-[#17120f] sm:text-4xl">
            Shared Experiences
          </h2>
          <Link
            href="/testimonials"
            className="mt-7 inline-flex rounded-full border border-[#d8c7ad] bg-white px-6 py-3 text-sm font-semibold text-[#3f352d] transition hover:border-[#8d735f] hover:bg-[#fffdf8]"
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
            loop={testimonials.length > 3}
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
