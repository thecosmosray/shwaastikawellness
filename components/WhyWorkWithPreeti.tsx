"use client";

import { useState } from "react";
import LightboxModal from "@/components/LightboxModal";
import Reveal from "@/components/Reveal";

const reasons = [
  "Ex-Indian Air Force Officer with 25+ years of experience in leadership, resilience, and working in high-pressure environments.",
  "Deeply rooted in Himalayan spiritual traditions, yoga, meditation, and awareness-based practices.",
  "Intuitive energy healer working with physical, emotional, and mental well-being through compassionate and individualized guidance.",
  "Mountaineer, expedition leader, endurance athlete, and solo traveller, bringing lived experience of resilience, inner strength, and self-discovery.",
  "Certified yoga and meditation practitioner integrating ancient wisdom with practical everyday application.",
  "A holistic approach that combines energy work, awareness, breathwork, movement, mindfulness, and lifestyle practices to support lasting inner transformation.",
  "Sessions designed not only to provide support and clarity, but to help individuals build greater self-awareness, emotional balance, confidence, and connection with themselves.",
];

export default function WhyWorkWithPreeti() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_28%,rgba(234,219,226,0.26),transparent_24%),linear-gradient(180deg,#ffffff_0%,#fffbf5_55%,#ffffff_100%)]" />
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-8 border-y border-[#eadfce] py-10 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a6f55]">
              Why Work With Preeti Semwal
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17120f] sm:text-4xl">
              A Unique Blend of Experience, Awareness & Healing
            </h2>
          </div>

          <div className="rounded-[1.35rem] border border-[#eadfce] bg-white p-5 shadow-sm shadow-[#6b513b]/3 sm:rounded-[1.75rem] sm:p-7">
            <p className="text-base font-medium leading-8 text-[#2f2822]">
              Her work brings together disciplined real-world experience, Himalayan
              spiritual grounding, intuitive energy healing, yoga, meditation, and
              awareness-based practices.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-6 inline-flex w-full justify-center rounded-full border border-[#d8c7ad] bg-white px-6 py-3.5 text-center text-sm font-bold text-[#2f2822] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8d735f] hover:bg-[#fffdf8] sm:w-auto"
            >
              Why Work With Preeti Semwal
            </button>
          </div>
        </div>
      </Reveal>

      <LightboxModal
        isOpen={isOpen}
        title="Why Work With Preeti Semwal"
        onClose={() => setIsOpen(false)}
      >
        <article className="overflow-hidden rounded-[1.35rem] border border-[#e5d9c7] bg-white shadow-sm sm:rounded-[1.5rem]">
          <div className="bg-[#fbf8f1] px-5 py-7 sm:px-7 sm:py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
              Experience & Approach
            </p>
            <h3 className="mt-3 pr-12 text-2xl font-semibold leading-tight text-[#2f2822] sm:text-3xl">
              A Unique Blend of Experience, Awareness & Healing
            </h3>
          </div>
          <ul className="grid gap-0 text-justify text-base leading-7 text-[#4b423b]">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 border-t border-[#eee4d4] px-5 py-4 sm:px-7">
                <span className="mt-0.5 shrink-0 font-semibold text-[#3f5f46]">&#10003;</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </article>
      </LightboxModal>
    </section>
  );
}
