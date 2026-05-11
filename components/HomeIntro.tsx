"use client";

import { motion } from "framer-motion";

export default function HomeIntro() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="absolute left-1/2 top-8 -z-10 h-64 w-64 -translate-x-1/2 rounded-full border border-[#d7c8ad]/16" />
      <div className="absolute bottom-10 right-[12%] -z-10 h-32 w-32 rounded-full bg-[#c7d6bd]/16 blur-3xl" />

      <motion.article
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
          Founder Message
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
          A Space to Return Home to Yourself
        </h2>
        <div className="mx-auto mt-8 max-w-4xl space-y-7 text-left text-lg leading-9 text-[#3f372f] sm:text-xl sm:leading-10">
          <p>
            Wellness comes with a choice. A choice to look within, to listen deeply, and to
            surrender to the wisdom beyond the mind. True transformation doesn&rsquo;t come
            from curiosity alone it comes from the strong desire to live fully, with hope
            and belief that something greater is guiding us.
          </p>
          <p>
            This is the space I hold: a space where you are invited to reconnect with
            yourself, release what weighs you down and step into balance, joy and clarity.
            Whether through intuitive healing or psychic guidance, the journey begins when
            you are ready to surrender - ready to return home to yourself.
          </p>
          <p className="pt-2 text-right font-semibold italic text-[#7a6b5e]">
            -Preeti Semwal Bembi
          </p>
        </div>
      </motion.article>
    </section>
  );
}
