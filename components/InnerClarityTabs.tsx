"use client";

import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useState } from "react";
import ServiceContentSection from "./ServiceContentSection";

const tabs = [
  {
    label: "How a Session Works",
    imageAlt: "Illustration explaining how an Inner Clarity Guidance session works",
    imageSrc: "/images/inner%20clarity/How%20a%20session%20work.jpg",
    items: [
      "Modes: in-person, live online (video), or voice call all equally transformative",
      "We begin with simple breathwork to settle your energy and quiet mental noise",
      "I intuitively scan your field, share insights, and translate messages into clear next steps",
      "You only need to be honest and open. Do not hold back your energy carries the information",
      "The session is collaborative: ask questions anytime and we'll co-create practical solutions",
    ],
  },
  {
    label: "How You'll Know It's Time",
    imageAlt: "Illustration describing signs that it is time for Inner Clarity Guidance",
    imageSrc: "/images/inner%20clarity/how%20you%27ll%20know%20it%27s%20time.jpg",
    items: [
      "Decision fatigue has you second-guessing every option",
      "You've tried strategy and logic but still feel confused",
      "Emotional triggers derail you at key moments",
      "You long for guidance that feels both compassionate and actionable",
    ],
    note: "If any of these resonate, Inner Clarity will help you access the insights already inside you and turn them into clear, confident next steps.",
  },
  {
    label: "Is Inner Clarity Right for You?",
    imageAlt: "Calm reflective visual for Inner Clarity suitability",
    imageSrc: "/images/inner%20clarity/is%20Inner%20Clarity%20right%20for%20you.png",
    items: [
      "Inner Clarity isn't about mystifying the process, it's for anyone who senses there's more beneath the surface of their life and wants to translate subtle signals into real-world clarity. Book a session when you:",
      "Feel stuck or overwhelmed by a decision",
      "Sense recurring relationship or work patterns you can't shake",
      "Face a major transition (career pivot, breakup, loss) and need grounded support",
      "Carry past wounds that keep replaying and crave a gentle path to healing",
      "Hear an inner whisper you can't quite interpret",
      "Experience creative blocks or energetic \"fog\"",
      "Seek deeper alignment with your purpose or next chapter",
    ],
  },
  {
    label: "Who Benefits",
    imageAlt: "Illustration showing who benefits from Inner Clarity Guidance",
    imageSrc: "/images/inner%20clarity/who%20benifits.jpg",
    note: "Anyone seeking clarity, closure or direction regardless of age or background gains from this work. It's best if you come present, honest with yourself and ready to engage with the guidance offered.",
  },
];

export default function InnerClarityTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((index + 1) % tabs.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((index - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div
          role="tablist"
          aria-label="Inner clarity information"
          className="sticky top-[72px] z-30 rounded-[1rem] border border-[#e2d4bd] bg-white lg:bg-white/90 p-1.5 shadow-sm shadow-[#6b513b]/5 lg:backdrop-blur lg:rounded-full lg:p-1"
        >
          <div className="grid grid-cols-2 gap-1.5 lg:flex lg:min-w-0 lg:gap-1">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={tab.label}
                  id={`inner-clarity-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`inner-clarity-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`relative min-h-11 rounded-full px-2.5 py-2.5 text-center text-xs font-medium leading-snug transition-colors sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm lg:flex-1 lg:whitespace-nowrap lg:px-6 ${
                    isActive
                      ? "bg-[#a8bc98] text-[#26382a] shadow-sm shadow-[#6b513b]/5"
                      : "text-[#5f5349] hover:bg-white hover:text-[#3f5f46]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeTab.label}
            id={`inner-clarity-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`inner-clarity-tab-${activeIndex}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mt-6 sm:mt-8"
          >
            <ServiceContentSection
              imageSrc={activeTab.imageSrc}
              imageAlt={activeTab.imageAlt}
              title={activeTab.label}
            >
              <div className="editorial-prose">
                {activeTab.items ? (
                  <ul className="space-y-2.5 sm:space-y-3">
                    {activeTab.items.map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a9f78] sm:mt-4 sm:h-2 sm:w-2" />
                        <span className={`min-w-0 flex-1 ${index === 0 && activeTab.label === "Is Inner Clarity Right for You?" ? "text-[#2f2822]" : ""}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {activeTab.note ? (
                  <p className={`${activeTab.items ? "mt-8" : ""}`}>{activeTab.note}</p>
                ) : null}
              </div>
            </ServiceContentSection>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
