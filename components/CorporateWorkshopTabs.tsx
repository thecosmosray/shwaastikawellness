"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";

const tabs = [
  {
    label: "Training Domains",
    imageSrc: "/images/corporate%20workshop/training%20domains.webp",
    imageAlt: "Corporate workshop training domains visual",
    imageAspect: "aspect-[4/3]",
    imageFit: "object-cover",
    heading: "Training Domains",
    intro:
      "Our programs are designed to strengthen workplace resilience, leadership capability, emotional intelligence, and overall well-being through practical, experiential learning.",
    domains: [
      {
        title: "Safety & Awareness",
        text: "Workshops focused on personal safety, workplace safety, situational awareness, women's safety, and building calm, confident responses under pressure.",
      },
      {
        title: "Emotional Intelligence & Workplace Behaviour",
        text: "Programs that develop emotional regulation, communication under pressure, conflict management, professional boundaries, and effective workplace behaviour.",
      },
      {
        title: "Leadership & Decision-Making Under Pressure",
        text: "Sessions that help leaders and professionals build clarity, composure, confidence, and strong decision-making in high-pressure environments.",
      },
      {
        title: "Stress Regulation & Mental Well-being",
        text: "Mindfulness-based sessions integrating breathwork, grounding, and reflective practices to support emotional balance, resilience, and sustainable performance.",
      },
      {
        title: "Communication, Confidence & Assertiveness",
        text: "Learning experiences that strengthen self-trust, articulate communication, professional boundaries, and confident workplace interactions.",
      },
      {
        title: "Mindfulness, Yoga & Awareness-Based Practices",
        text: "Experiential sessions combining mindful movement, meditation, and breath awareness to improve focus, regulation, and overall well-being.",
      },
      {
        title: "Customized Programs",
        text: "Tailored workshops designed around organizational goals, team dynamics, workplace challenges, and audience needs.",
      },
    ],
  },
  {
    label: "Our Approach",
    imageSrc: "/images/corporate%20workshop/our%20approach.png",
    imageAlt: "Corporate team workshop and group learning visual",
    imageAspect: "aspect-[16/10]",
    imageFit: "object-cover",
    heading: "Our Approach",
    paragraphs: [
      "The program is designed as a capability-building experience, combining real-life scenarios, behavioural insights and experiential learning to strengthen awareness, decision-making, and response under pressure.",
      "Sessions are interactive and engagement-driven, using discussions, scenario-based exercises, group activities, and guided techniques to build focus, composure and clarity in real situations.",
      "Each workshop is customised based on the organisation's context, audience profile, and objectives, and can be delivered across the workforce or tailored for specific groups.",
    ],
  },
  {
    label: "Delivery Options",
    imageSrc: "/images/corporate%20workshop/Delivery%20option.webp",
    imageAlt: "Corporate workshop delivery options visual",
    imageAspect: "aspect-[3/4]",
    imageFit: "object-contain",
    heading: "Delivery Options",
    cards: [
      "On-site, off-site or online",
      "Full-day intensive programs",
      "Modular sessions across days",
    ],
  },
  {
    label: "Who Benefits",
    imageSrc: "/images/corporate%20workshop/Who%20benefits.png",
    imageAlt: "Corporate workshop participants and benefits visual",
    imageAspect: "aspect-[16/10]",
    imageFit: "object-cover",
    heading: "Who Benefits",
    bullets: [
      "Organizations addressing workplace stress",
      "High-performing teams",
      "Leaders aligning wellness with goals",
    ],
  },
];

const contentCardClass =
  "h-full rounded-[1.1rem] border border-[#e5d9c7] bg-[#fbf8f1] p-4 shadow-sm sm:rounded-[1.35rem] sm:p-5";

const contentTitleClass = "text-base font-semibold leading-7 text-[#2f2822] sm:text-lg";

const contentTextClass = "mt-2 text-left text-sm leading-7 text-[#66584d] sm:text-justify sm:text-base";

export default function CorporateWorkshopTabs() {
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
    <section className="bg-[#f4f1eb] px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div
          role="tablist"
          aria-label="Corporate workshop information"
          className="sticky top-[72px] z-30 mb-8 rounded-[1rem] border border-[#d7c8ad] bg-white/90 p-1.5 shadow-sm backdrop-blur sm:mb-10 lg:rounded-full lg:p-1"
        >
          <div className="grid grid-cols-2 gap-1.5 lg:flex lg:min-w-0 lg:gap-1">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={tab.label}
                  id={`corporate-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`corporate-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`relative min-h-11 rounded-full px-2 py-2.5 text-center text-xs font-medium leading-snug transition sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm lg:flex-1 lg:whitespace-nowrap lg:px-6 ${
                    isActive ? "text-[#26382a]" : "text-[#5f5349] hover:text-[#3f5f46]"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="corporate-active-tab"
                      className="absolute inset-0 rounded-full bg-[#a8bc98]"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.label}
            id={`corporate-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`corporate-tab-${activeIndex}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="grid items-start gap-6 rounded-[1.35rem] border border-[#e1d4bf] bg-white p-4 shadow-xl shadow-[#6b513b]/8 sm:gap-8 sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.68fr_1.32fr] lg:gap-10 lg:p-10"
          >
            <div className="group mx-auto w-full self-start overflow-hidden rounded-[1.1rem] border border-[#e5d9c7] bg-[#fbf8f1] p-2 shadow-lg shadow-[#6b513b]/8 sm:rounded-[1.5rem] sm:p-3 lg:max-w-[430px]">
              <div className={`relative ${activeTab.imageAspect} max-sm:aspect-[4/3] overflow-hidden rounded-[0.9rem] bg-[#dfe9d8] transition duration-500 group-hover:scale-[1.01] sm:rounded-[1.15rem]`}>
                <Image
                  src={activeTab.imageSrc}
                  alt={activeTab.imageAlt}
                  fill
                  className={`${activeTab.imageFit} object-center`}
                  sizes="(max-width: 1024px) 100vw, 430px"
                  loading="lazy"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/18 via-transparent to-white/5" />
              </div>
            </div>

            <div className="self-center">
              <h2 className="text-2xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
                {activeTab.heading}
              </h2>

              {"intro" in activeTab ? (
                <p className="mt-5 text-left text-base leading-8 text-[#5d5045] sm:mt-6 sm:text-justify sm:text-lg">{activeTab.intro}</p>
              ) : null}

              {activeTab.domains ? (
                <div className="mt-7 grid gap-x-7 gap-y-5 sm:mt-8 lg:grid-cols-2">
                  {activeTab.domains.map((domain) => (
                    <div key={domain.title} className={contentCardClass}>
                      <h3 className={contentTitleClass}>{domain.title}</h3>
                      <p className={contentTextClass}>{domain.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab.paragraphs ? (
                <div className="mt-7 grid gap-4 sm:mt-8">
                  {activeTab.paragraphs.map((paragraph) => (
                    <div key={paragraph} className={contentCardClass}>
                      <p className="text-left text-base leading-8 text-[#4b423b] sm:text-justify sm:text-lg">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab.cards ? (
                <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-3">
                  {activeTab.cards.map((card) => (
                    <motion.div
                      key={card}
                      whileHover={{ y: -6 }}
                      className={contentCardClass}
                    >
                      <p className={contentTitleClass}>{card}</p>
                    </motion.div>
                  ))}
                </div>
              ) : null}

              {activeTab.bullets ? (
                <ul className="mt-7 grid gap-4 text-base leading-8 text-[#2f2822] sm:mt-8 sm:grid-cols-3 sm:text-lg">
                  {activeTab.bullets.map((bullet) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={contentCardClass}
                    >
                      <span className={`block min-w-0 text-left ${contentTitleClass}`}>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
