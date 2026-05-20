"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items?: FAQItem[];
  eyebrow?: string;
  title?: string;
  sectionClassName?: string;
  initialOpenIndex?: number;
};

const defaultFaqs = [
  {
    question: "Are these sessions only spiritual in nature?",
    answer:
      "No. While the work includes deeper awareness-based practices, the sessions are grounded, practical, and experience-oriented. The focus is on helping individuals develop greater clarity, emotional balance, inner steadiness, and overall well-being in a way that integrates naturally into everyday life.",
  },
  {
    question: "Is online guidance as effective as in-person sessions?",
    answer:
      "Yes — participants often report experiences online that are just as deep, engaging, and impactful as in-person sessions.",
  },
  {
    question: "Who are these sessions suitable for?",
    answer:
      "The sessions are suitable for all age groups seeking emotional clarity, stress regulation, inner balance, healing support, deeper self-awareness, or a more mindful approach to life and well-being. Sessions are adapted according to the individual’s current needs and life context.",
  },
  {
    question: "What makes this approach different from a regular wellness or yoga session?",
    answer:
      "The approach goes beyond routine instruction and focuses on deeper inner work through guided awareness, emotional understanding, breathwork, movement, reflection, and intuitive processes. Each session is personalized and designed to support meaningful shifts rather than surface-level relaxation alone.",
  },
  {
    question: "Can these sessions support people dealing with long-term emotional or inner challenges?",
    answer:
      "The work is intended to support individuals navigating deeper emotional, energetic, or inner concerns through awareness-based and alternative healing approaches. However, it is not a substitute for licensed medical or mental-health care.",
  },
];

export default function FAQ({
  items = defaultFaqs,
  eyebrow = "FAQ",
  title = "Clear answers for planning your next program.",
  sectionClassName = "bg-white px-5 py-14 sm:px-8 lg:px-10",
  initialOpenIndex = 0,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);

  return (
    <section className={sectionClassName}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="rounded-3xl border border-[#e5d9c7] bg-[#fbf8f1]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-semibold text-[#332b24]">{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#3f5f46]">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-6 pb-6 text-justify text-sm leading-7 text-[#6f6256]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
