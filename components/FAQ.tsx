"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    question: "What services does SHWAASTIKA WELLNESS provide?",
    answer:
      "SHWAASTIKA WELLNESS provides workplace wellness, resilience, leadership, soft skills, emotional intelligence, safety, sensitivity, and workplace behaviour training.",
  },
  {
    question: "Do you offer corporate training programs?",
    answer:
      "Yes. Programs can be planned for corporate teams, leadership groups, employee wellness initiatives, and capability-building calendars.",
  },
  {
    question: "Can sessions be customized?",
    answer:
      "Yes. Sessions can be tailored around audience size, industry context, experience level, learning goals, and preferred delivery format.",
  },
  {
    question: "How can we contact you?",
    answer:
      "You can use the consultation call-to-action on this page or connect through the contact details that will be added in the footer.",
  },
  {
    question: "Do you provide online and offline workshops?",
    answer:
      "Yes. Workshops can be structured for online, offline, or blended delivery depending on the team and program needs.",
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
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-7 text-[#6f6256]">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
