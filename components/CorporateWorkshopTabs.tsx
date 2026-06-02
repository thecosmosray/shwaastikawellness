"use client";

import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useState } from "react";
import ServiceContentSection, {
  serviceBodyClass,
  serviceInsetGroupClass,
  serviceSubheadingClass,
} from "./ServiceContentSection";

const tabs = [
  {
    label: "Training Domains",
    imageSrc: "/images/corporate%20workshop/training%20domains.webp",
    imageAlt: "Corporate workshop training domains visual",
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
    imageSrc: "/images/corporate%20workshop/Delivery%20option%20v2.webp",
    imageAlt: "Corporate workshop delivery options visual",
    imageFit: "object-cover",
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
    imageFit: "object-cover",
    heading: "Who Benefits",
    bullets: [
      "Organizations addressing workplace stress",
      "High-performing teams",
      "Leaders aligning wellness with goals",
    ],
  },
];

const contentCardClass = "h-full border-l border-[#d7c6a9] pl-4 sm:pl-5";

const contentTextClass = "mt-2 text-left text-sm leading-7 text-[#66584d] sm:text-base";

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
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div
          role="tablist"
          aria-label="Corporate workshop information"
          className="sticky top-[72px] z-30 rounded-[1rem] border border-[#e2d4bd] bg-white lg:bg-white/90 p-1.5 shadow-sm shadow-[#6b513b]/5 lg:backdrop-blur lg:rounded-full lg:p-1"
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
                  className={`relative min-h-11 rounded-full px-2.5 py-2.5 text-center text-xs font-medium leading-snug transition-colors sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm lg:flex-1 lg:whitespace-nowrap lg:px-6 ${
                    isActive
                      ? "bg-[#a8bc98] text-[#26382a] shadow-sm shadow-[#6b513b]/5"
                      : "text-[#5f5349] hover:bg-white hover:text-[#3f5f46]"
                  }`}
                >
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
            className="mt-6 sm:mt-8"
          >
            <ServiceContentSection
              imageSrc={activeTab.imageSrc}
              imageAlt={activeTab.imageAlt}
              imageFit={activeTab.imageFit as "object-cover" | "object-contain"}
            >
              {"intro" in activeTab ? (
                <p className={serviceBodyClass}>{activeTab.intro}</p>
              ) : null}

              {activeTab.domains ? (
                <div className={serviceInsetGroupClass}>
                  {activeTab.domains.map((domain) => (
                    <div key={domain.title} className={contentCardClass}>
                      <h3 className={serviceSubheadingClass}>{domain.title}</h3>
                      <p className={contentTextClass}>{domain.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab.paragraphs ? (
                <div className="mt-6 grid gap-4 sm:mt-8">
                  {activeTab.paragraphs.map((paragraph) => (
                    <div key={paragraph} className={contentCardClass}>
                      <p className={serviceBodyClass}>
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab.cards ? (
                <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3">
                  {activeTab.cards.map((card) => (
                    <div key={card} className={contentCardClass}>
                      <p className={serviceSubheadingClass}>{card}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab.bullets ? (
                <ul className="mt-6 grid gap-4 text-base leading-8 text-[#2f2822] sm:mt-8 sm:grid-cols-3 sm:text-lg">
                  {activeTab.bullets.map((bullet) => (
                    <li key={bullet} className={contentCardClass}>
                      <span className={`block min-w-0 text-left ${serviceSubheadingClass}`}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </ServiceContentSection>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
