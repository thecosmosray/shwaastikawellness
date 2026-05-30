"use client";

import { motion } from "framer-motion";

const videoId = "Ev1XFL6iW6w";
const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;

export default function FeaturedConversation() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf8] px-5 pb-12 pt-5 sm:px-8 sm:pb-14 sm:pt-6 lg:px-10 lg:pb-16 lg:pt-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_10%,rgba(255,255,255,0.85),transparent_26%),radial-gradient(circle_at_86%_24%,rgba(234,215,200,0.36),transparent_30%),linear-gradient(135deg,#fffdf8_0%,#fffaf2_44%,#f8f1e8_100%)]" />
      <div className="absolute left-[8%] top-8 -z-10 h-36 w-36 rounded-full bg-white/55 blur-3xl" />
      <div className="absolute bottom-12 right-[10%] -z-10 h-44 w-44 rounded-full bg-[#dfe9d8]/65 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8d735f]">
            Featured Conversation
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-[#241d18] sm:text-4xl lg:text-[2.65rem]">
            Soulful Sharing with Preeti Semwal
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-justify text-base leading-8 text-[#4f463e] sm:text-lg">
            A gentle conversation on healing, intuition, transformation, and returning to
            emotional balance from within.
          </p>
        </div>

        <div className="mt-6 rounded-[2rem] border border-[#eadfce] bg-white/78 p-3 shadow-2xl shadow-[#6b513b]/7 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[#6b513b]/10 sm:mt-7 sm:p-4">
          <div className="group relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#17130f]">
            <iframe
              title="Soulful Sharing with Preeti Semwal YouTube interview"
              src={youtubeEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/20 transition group-hover:ring-white/35" />
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-[#eadfce] bg-white/78 p-5 text-center shadow-sm backdrop-blur sm:flex-row sm:text-left">
          <p className="text-justify text-base italic leading-7 text-[#4f463e]">
            &quot;Conversations that heal, inspire, and reconnect us with ourselves.&quot;
          </p>
          <a
            href={youtubeWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2b211a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2b211a]/12 transition hover:-translate-y-0.5 hover:bg-[#5f4a38]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-[#2f2822]">
              Play
            </span>
            Watch on YouTube
          </a>
        </div>
      </motion.div>
    </section>
  );
}
