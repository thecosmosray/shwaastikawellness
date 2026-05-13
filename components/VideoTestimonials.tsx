"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const videoTestimonials = [
  {
    title: "Healing Experience",
    label: "Video testimonial 1",
    note: "A personal reflection on clarity and emotional alignment.",
    src: "/images/testimonial/WhatsApp%20Video%202025-09-11%20at%2017.13.47.mp4",
  },
  {
    title: "Mind Body Spirit Alignment",
    label: "Video testimonial 2",
    note: "A shared experience after a guided wellness session.",
    src: "/images/testimonial/WhatsApp%20Video%202025-09-11%20at%2017.25.48.mp4",
  },
  {
    title: "Journey of Support",
    label: "Video testimonial 3",
    note: "A story of feeling supported and seen.",
    src: "/images/testimonial/WhatsApp%20Video%202025-09-11%20at%2017.30.10.mp4",
  },
];

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const activeVideo = videoTestimonials[activeIndex];

  const selectVideo = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
  };

  useEffect(() => {
    const section = videoSectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="mb-8 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
            Video Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
            Video Experiences
          </h2>
        </motion.div>

        <div
          ref={videoSectionRef}
          className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.58fr)]"
        >
          <motion.div
            key={activeVideo.title}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="relative mx-auto w-full max-w-[820px] overflow-hidden rounded-[1.75rem] border border-[#e5d9c7] bg-[#fbf8f1] p-3 shadow-xl shadow-[#6b513b]/10"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#ead7c8,#fff8ef_48%,#dfe9d8)]">
              <video
                key={activeVideo.src}
                ref={videoRef}
                src={activeVideo.src}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="h-[250px] w-full bg-[#17130f] object-contain sm:h-[360px] lg:h-[430px] xl:h-[460px]"
                aria-label={activeVideo.title}
              />
              {!isPlaying ? (
                <div className="pointer-events-none absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-2xl bg-white/78 p-3 backdrop-blur transition-opacity sm:left-5 sm:top-5 sm:max-w-sm sm:p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
                    {activeVideo.label}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#2f2822] sm:mt-2 sm:text-2xl">
                    {activeVideo.title}
                  </h3>
                  <p className="mt-1 hidden text-sm text-[#66584d] sm:block">{activeVideo.note}</p>
                </div>
              ) : null}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {videoTestimonials.map((video, index) => (
              <button
                key={video.title}
                type="button"
                onClick={() => selectVideo(index)}
                className={`rounded-[1.5rem] border p-3 text-left transition ${
                  activeIndex === index
                    ? "border-[#3f5f46] bg-[#f3eadb]"
                    : "border-[#e5d9c7] bg-white hover:bg-[#fbf8f1]"
                }`}
                aria-pressed={activeIndex === index}
              >
                <div className="flex gap-4">
                  <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-2xl bg-[#17130f]">
                    <video
                      src={video.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-[#17130f]/22 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      Play
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
                      Preview
                    </p>
                    <h3 className="mt-1 font-semibold text-[#2f2822]">{video.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
