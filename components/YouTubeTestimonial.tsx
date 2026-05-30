"use client";

import { motion } from "framer-motion";

const videoId = "YAllrLq8FXc";
const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;

export default function YouTubeTestimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf8] px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(234,223,206,0.36),transparent_24%),linear-gradient(135deg,#ffffff_0%,#fffaf2_54%,#fffdf8_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl items-center gap-6 rounded-[1.75rem] border border-[#eadfce] bg-white/58 p-4 shadow-xl shadow-[#6b513b]/6 backdrop-blur-sm sm:p-5 lg:grid-cols-[0.72fr_1fr] lg:p-6"
      >
        <div className="max-w-lg lg:pl-2">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a6f55] sm:text-sm">
            Featured Client Story
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-[#17120f] sm:text-3xl">
            A Deeper Reflection in Their Own Voice
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4f463e] sm:text-base">
            A personal video testimonial shared by a client, presented here as a fuller
            reflection alongside the written screenshot experiences.
          </p>
          <a
            href={youtubeWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#2b211a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2b211a]/12 transition hover:-translate-y-0.5 hover:bg-[#5f4a38]"
          >
            Watch on YouTube
          </a>
        </div>

        <div className="rounded-[1.45rem] border border-[#eadfce] bg-white p-2.5 shadow-lg shadow-[#6b513b]/7 sm:p-3">
          <div className="relative aspect-video overflow-hidden rounded-[1.15rem] bg-[#17130f]">
            <iframe
              title="Client testimonial video"
              src={youtubeEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 rounded-[1.15rem] ring-1 ring-inset ring-white/20" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
