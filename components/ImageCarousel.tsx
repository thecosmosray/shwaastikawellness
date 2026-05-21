"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import LightboxModal from "@/components/LightboxModal";

export type CarouselImage = {
  title: string;
  label: string;
  tone: string;
  src?: string;
  alt?: string;
};

type ImageCarouselProps = {
  eyebrow: string;
  heading: string;
  images: CarouselImage[];
};

export default function ImageCarousel({ eyebrow, heading, images }: ImageCarouselProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const activeLightboxImage = lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <section className="bg-[#fbf8f1] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              {heading}
            </h2>
          </div>
          <div className="flex w-full justify-between gap-3 sm:w-auto sm:justify-start">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-white text-xl text-[#2f2822] shadow-sm hover:bg-[#f3eadb]"
              aria-label={`Previous ${heading}`}
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-white text-xl text-[#2f2822] shadow-sm hover:bg-[#f3eadb]"
              aria-label={`Next ${heading}`}
            >
              &rarr;
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveDot(swiper.realIndex % 3)}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={850}
          loop={images.length > 3}
          slidesPerView={1.08}
          spaceBetween={16}
          breakpoints={{
            640: {
              slidesPerView: 1.65,
              spaceBetween: 18,
            },
            900: {
              slidesPerView: 2.35,
              spaceBetween: 20,
            },
            1180: {
              slidesPerView: 3.15,
              spaceBetween: 20,
            },
          }}
          className="testimonial-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.title}>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group w-full rounded-[1.5rem] border border-[#e5d9c7] bg-white p-2.5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6b513b]/10"
                aria-label={`Open ${image.title}`}
              >
                <div
                  className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.15rem] bg-gradient-to-br ${image.tone} p-4`}
                  style={{ position: "relative" }}
                >
                  {image.src ? (
                    <>
                      <Image
                        src={image.src}
                        alt={image.alt ?? image.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 92vw, (max-width: 1180px) 45vw, 320px"
                        loading="lazy"
                        quality={88}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/22 via-transparent to-white/5" />
                      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/86 p-4 text-center shadow-lg shadow-black/10 backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
                          {image.label}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-[#2f2822] sm:text-xl">{image.title}</h3>
                      </div>
                    </>
                  ) : (
                    <div className="rounded-2xl bg-white/78 p-4 text-center backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
                        {image.label}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-[#2f2822] sm:text-2xl">{image.title}</h3>
                      <p className="mt-3 text-sm text-[#66584d]">Open client reflection</p>
                    </div>
                  )}
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-7 flex justify-center gap-2" aria-label="Client stories carousel position">
          {Array.from({ length: 3 }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={`h-2.5 rounded-full transition ${
                activeDot === index ? "w-8 bg-[#3f5f46]" : "w-2.5 bg-[#d2c3a9]"
              }`}
              aria-label={`Show client stories group ${index + 1}`}
              aria-pressed={activeDot === index}
            />
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={Boolean(activeLightboxImage)}
        title={activeLightboxImage?.title ?? "Client reflection"}
        onClose={() => setLightboxIndex(null)}
      >
        {activeLightboxImage ? (
          <div className={`flex min-h-[70vh] items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${activeLightboxImage.tone} p-3 sm:p-5`}>
            {activeLightboxImage.src ? (
              <div
                className="relative h-[72vh] w-full overflow-hidden rounded-[1.25rem] bg-white/72 shadow-xl backdrop-blur"
                style={{ position: "relative" }}
              >
                <Image
                  src={activeLightboxImage.src}
                  alt={activeLightboxImage.alt ?? activeLightboxImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 92vw, 720px"
                  quality={92}
                />
              </div>
            ) : (
              <div className="max-w-xl rounded-[1.5rem] bg-white/85 p-8 text-center shadow-xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
                  {activeLightboxImage.label}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-[#2f2822]">
                  {activeLightboxImage.title}
                </h3>
                <p className="mt-4 text-[#66584d]">
                  Shared with identifying details withheld for privacy.
                </p>
              </div>
            )}
          </div>
        ) : null}
      </LightboxModal>
    </section>
  );
}
