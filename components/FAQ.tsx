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
  question: "Do I need any preparation before attending a session?",
  answer:
    "No special preparation is required. Participants are simply encouraged to come with openness, comfort, and a willingness to engage with the experience in a relaxed and natural way.",
},
{
  question: "How long does it usually take to notice changes or benefits?",
  answer:
    "Each individual’s experience is different. Some people notice shifts in clarity, calmness, or awareness after a single session, while for others the process unfolds gradually over time.",
},
{
  question: "Are these sessions focused only on relaxation?",
  answer:
    "While relaxation can naturally occur during the process, the sessions are intended to support deeper emotional awareness, self-understanding, inner balance, and meaningful personal growth.",
},
{
  question: "Can sessions help improve focus and mental clarity?",
  answer:
    "Many participants report improved mental clarity, emotional steadiness, and a greater ability to remain present and focused in everyday situations after engaging consistently with the practices.",
},
{
  question: "Are the practices gentle and suitable for beginners?",
  answer:
    "Yes. The practices are approached gently and mindfully, making them suitable for beginners as well as individuals with prior experience in wellness or awareness-based work.",
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
