"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";

const tabs = [
  {
    label: "Training Domains",
    imageSrc: "/images/corporate%20workshop/training%20domains.png",
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
    imageSrc: "/images/corporate%20workshop/our%20approach.jpg",
    imageAlt: "Corporate workshop approach visual",
    imageAspect: "aspect-[4/3]",
    imageFit: "object-cover",
    heading: "One of a kind designs",
    paragraphs: [
      "The program is designed as a capability-building experience, combining real-life scenarios, behavioural insights and experiential learning to strengthen awareness, decision-making, and response under pressure.",
      "Sessions are interactive and engagement-driven, using discussions, scenario-based exercises, group activities, and guided techniques to build focus, composure and clarity in real situations.",
      "Each workshop is customised based on the organisation's context, audience profile, and objectives, and can be delivered across the workforce or tailored for specific groups.",
    ],
  },
  {
    label: "Delivery Options",
    imageSrc: "/images/corporate%20workshop/Delivery%20option.JPG",
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
    imageSrc: "/images/corporate%20workshop/Hero.JPG",
    imageAlt: "Corporate workshop participants and benefits visual",
    imageAspect: "aspect-[4/3]",
    imageFit: "object-cover",
    heading: "Who Benefits",
    bullets: [
      "Organizations addressing workplace stress",
      "High-performing teams",
      "Leaders aligning wellness with goals",
    ],
  },
];

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
    <section className="bg-[#f4f1eb] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div
          role="tablist"
          aria-label="Corporate workshop information"
          className="sticky top-[76px] z-30 mb-10 rounded-[1.25rem] border border-[#d7c8ad] bg-white/85 p-1.5 shadow-sm backdrop-blur lg:rounded-full lg:p-1"
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
                  className={`relative min-h-12 rounded-full px-3 py-3 text-center text-[13px] font-medium leading-snug transition sm:px-5 sm:text-sm lg:flex-1 lg:whitespace-nowrap lg:px-6 ${
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
            className="grid items-start gap-8 rounded-[2rem] border border-[#e1d4bf] bg-white p-5 shadow-xl shadow-[#6b513b]/8 sm:p-8 lg:grid-cols-[0.68fr_1.32fr] lg:gap-10 lg:p-10"
          >
            <div className="group mx-auto w-full self-start overflow-hidden rounded-[1.5rem] border border-[#e5d9c7] bg-[#fbf8f1] p-3 shadow-lg shadow-[#6b513b]/8 lg:max-w-[430px]">
              <div className={`relative ${activeTab.imageAspect} overflow-hidden rounded-[1.15rem] bg-[#dfe9d8] transition duration-500 group-hover:scale-[1.01]`}>
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
              <h2 className="text-3xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
                {activeTab.heading}
              </h2>

              {"intro" in activeTab ? (
                <p className="mt-6 text-lg leading-8 text-[#5d5045]">{activeTab.intro}</p>
              ) : null}

              {activeTab.domains ? (
                <div className="mt-8 grid gap-5">
                  {activeTab.domains.map((domain) => (
                    <div key={domain.title}>
                      <h3 className="font-semibold text-[#2f2822]">{domain.title}</h3>
                      <p className="mt-1 text-base leading-7 text-[#66584d]">{domain.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab.paragraphs ? (
                <div className="mt-7 space-y-0">
                  {activeTab.paragraphs.map((paragraph, index) => (
                    <div key={paragraph}>
                      <p className="py-5 text-lg leading-9 text-[#4b423b]">{paragraph}</p>
                      {index < activeTab.paragraphs.length - 1 ? (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          className="h-px origin-left bg-[#d7c8ad]"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab.cards ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {activeTab.cards.map((card) => (
                    <motion.div
                      key={card}
                      whileHover={{ y: -6 }}
                      className="rounded-[1.5rem] border border-[#e5d9c7] bg-[#fbf8f1] p-5 shadow-sm"
                    >
                      <div className="mb-4 h-10 w-10 rounded-2xl bg-[#dfe9d8]" />
                      <p className="text-base font-semibold leading-7 text-[#2f2822]">{card}</p>
                    </motion.div>
                  ))}
                </div>
              ) : null}

              {activeTab.bullets ? (
                <ul className="mt-8 space-y-5 text-2xl leading-9 text-[#2f2822]">
                  {activeTab.bullets.map((bullet) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <span className="mt-4 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3f5f46]" />
                      <span>{bullet}</span>
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
