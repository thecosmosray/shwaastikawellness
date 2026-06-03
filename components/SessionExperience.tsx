"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello%0AWelcome+to+SHWAASTIKA+WELLNESS.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A-+Your+concern+or+goal%0A-+Preferred+service%0A-+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly&type=phone_number&app_absent=0";

const services = [
  {
    title: "Intuitive Healing",
    label: "Intuitive Healing",
    intro: "Energy, yoga and awareness for whole-being support.",
    description: (
      <>
        A personalized session held with{" "}
        <span className="editorial-highlight">calm awareness</span>, intuitive energy work,
        supportive conversation, and practices guided by the individual&apos;s current
        physical, emotional, and mental state.
      </>
    ),
    image: "/images/Book%20a%20Session/Intutive%20healing%20book%20a%20seesion.png",
    imagePosition: "center center",
    duration: "60-65 mins",
    included: [
      "Intuitive energy work",
      "Guided awareness and grounding",
      "Supportive practices based on what emerges",
    ],
    pricing: [
      ["Single Session", "INR 3,000 | USD 60"],
      ["3-Session Journey", "INR 8,100 | USD 162", "Includes a 10% courtesy reduction"],
    ],
  },
  {
    title: "Inner Clarity Guidance",
    label: "Inner Clarity Guidance",
    intro: "Gentle intuitive guidance for clarity, direction and next steps.",
    description: (
      <>
        A reflective guidance session for{" "}
        <span className="editorial-highlight">emotional understanding</span>, relationship
        patterns, life transitions, decision-making, and a more grounded connection with
        yourself.
      </>
    ),
    image: "/images/Book%20a%20Session/inner%20clarity%20guidance%20book%20a%20session.png",
    imagePosition: "center center",
    duration: "40-45 mins",
    included: [
      "Space to ask questions openly",
      "Practical guidance and self-reflection",
      "Emotional grounding and clarity",
    ],
    pricing: [["Single Session", "INR 2,500 | USD 55"]],
  },
  {
    title: "Womb Healing & Prenatal Support",
    label: "Womb Healing & Prenatal Support",
    intro: "Nurturing support through pregnancy, birth and postpartum recovery.",
    description: (
      <>
        A gentle, responsive session for womb connection, pregnancy, birth preparation,
        postpartum recovery, <span className="editorial-highlight">emotional support</span>,
        and deeper feminine well-being.
      </>
    ),
    image: "/images/Book%20a%20Session/womb%20healing%20book%20a%20session.jpeg",
    imagePosition: "center top",
    duration: "60-65 mins",
    included: [
      "Personalized womb and prenatal support",
      "Emotional holding and grounding",
      "Gentle practices based on individual needs",
    ],
    pricing: [
      ["Single Session", "INR 3,500 | USD 45"],
      ["3-Session Support Journey", "INR 9,500 | USD 120", "Includes a courtesy reduction"],
      [
        "Monthly Deep Support Program - 8 Sessions",
        "INR 18,400 | USD 225",
        "Approximately 2 sessions per week across the month",
      ],
    ],
  },
  {
    title: "Corporate Workshop",
    label: "Corporate Workshops",
    intro: "Customized wellness and awareness work for groups.",
    description: (
      <>
        Mindfulness-based corporate wellness sessions shaped around the group&apos;s scope,
        needs, format, and <span className="editorial-highlight">desired outcomes</span>.
      </>
    ),
    image: "/images/Book%20a%20Session/corporate%20workshop%20book%20a%20session.jpg",
    imagePosition: "center center",
    duration: "Customized",
    included: [
      "Scope-based workshop planning",
      "Mindfulness, breath and awareness practices",
      "Format adapted for the group",
    ],
    pricing: [["Custom engagement", "Pricing shared upon discussion"]],
  },
];

type Service = (typeof services)[number];

function InvestmentDetails({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="w-full text-left bg-transparent pt-6 pb-2 px-1 mt-6 border-t border-[#efe6d8]/70 lg:pt-10 lg:pb-10 lg:px-9 lg:mt-0 lg:border-t-0 lg:rounded-[2.25rem] lg:bg-[#fffefa] lg:shadow-[0_24px_70px_rgba(77,75,55,0.06)] lg:border lg:border-[#f2ede4]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: Details & Pricing */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Only show "Session Details" heading on desktop since it is redundant inside the card on mobile */}
              <p className="hidden lg:block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d7158] opacity-80">
                Session Details
              </p>
              <h3 className="hidden lg:block mt-1 lg:mt-3 text-xl font-serif text-[#171412] leading-tight font-normal lg:text-2xl">
                {service.title}
              </h3>
              
              {/* Show description and duration on all screen sizes */}
              <p className="text-sm sm:text-[0.95rem] leading-7 text-[#5c5249] lg:mt-3">
                {service.description}
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-xs text-[#7c6e62]">
                <span className="font-semibold text-[#171412] uppercase tracking-[0.1em] text-[9px]">Duration:</span>
                <span className="bg-[#eeede5]/80 text-[#4f463e] px-2.5 py-0.5 rounded-full font-medium text-xs">{service.duration}</span>
              </div>
            </div>

            {/* Pricing Section inside the Left Column */}
            <div className="mt-6 border-t border-[#efe6d8]/60 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d7158] opacity-80 mb-3.5">
                Investment
              </p>
              <div className="space-y-3">
                {service.pricing.map(([name, price, note]) => (
                  <div key={name} className="flex flex-col gap-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                      <span className="text-sm font-medium text-[#241d18]">{name}</span>
                      <span className="text-sm font-semibold text-[#565c43]">{price}</span>
                    </div>
                    {note ? <p className="text-xs text-[#7c7062] leading-relaxed">{note}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inclusions & CTA */}
          <div className="md:h-full flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d7158] opacity-80">
                What Is Included
              </p>
              <ul className="mt-3.5 space-y-2.5 text-[0.92rem] leading-relaxed text-[#4f463e]">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bda98b]/80" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 md:mt-0 pt-4 md:pt-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-[#565c43] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-[0_8px_20px_rgba(86,92,67,0.15)] transition-all duration-300 hover:bg-[#4b513a] hover:shadow-[0_12px_24px_rgba(86,92,67,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                WhatsApp / Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({
  service,
  index,
  isActive,
  isExpanded,
  onSelect,
}: {
  service: Service;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onSelect: (expand?: boolean) => void;
}) {
  return (
    <article
      className={`mx-auto w-full max-w-[29rem] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_68px_rgba(77,75,55,0.10)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_32px_80px_rgba(77,75,55,0.13)] sm:rounded-[2.25rem] ${
        isActive ? "ring-1 ring-[#565c43]/40" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect(false)}
        className="block w-full text-left"
        aria-pressed={isActive}
      >
        <div className="relative aspect-[16/9] max-h-[17.5rem] overflow-hidden bg-[#d8d2c0]">
          <Image
            src={service.image}
            alt={`${service.title} booking option`}
            fill
            className="object-cover"
            style={{ objectPosition: service.imagePosition }}
            sizes="(max-width: 768px) 92vw, (max-width: 1180px) 46vw, 460px"
            priority={index === 0}
            quality={90}
          />
        </div>

        <div className="px-6 pb-6 pt-5 text-center sm:px-7 sm:pb-7">
          <h2 className="text-[1.55rem] leading-tight text-[#171412] sm:text-[1.65rem]">
            {service.title}
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#5f5349]">
            {service.intro}
          </p>
        </div>
      </button>

      <div className="px-6 pb-7 text-center sm:px-7">
        <button
          type="button"
          onClick={() => onSelect(true)}
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#cdbd9f] bg-[#fffdf8] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#3f352d] shadow-sm transition-all duration-300 hover:border-[#8a9b72] hover:bg-[#fbf8f1] hover:-translate-y-0.5"
          aria-expanded={isActive && isExpanded}
        >
          {isActive && isExpanded ? "Hide Details" : "View Details"}
          <span
            aria-hidden="true"
            className={`text-lg leading-none transition-transform duration-300 inline-block ${
              isActive && isExpanded ? "rotate-90" : ""
            }`}
          >
            &rarr;
          </span>
        </button>

        <div className="lg:hidden">
          <AnimatePresence initial={false}>
            {isActive && isExpanded ? (
              <div className="mt-6">
                <InvestmentDetails service={service} />
              </div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default function SessionExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const selectService = (index: number, expand = false) => {
    const isCurrent = index === activeIndex;
    setActiveIndex(index);
    setIsExpanded(expand ? (isCurrent ? (value) => !value : true) : false);
  };

  return (
    <section className="overflow-hidden bg-[#fffefa] px-0 pb-10 pt-0 sm:pb-14">
      <div className="mx-auto max-w-[118rem] rounded-b-[2.75rem] bg-[#eeede5] px-5 pb-14 pt-12 sm:rounded-b-[4rem] sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
        <div className="mx-auto mb-11 max-w-3xl text-center lg:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8d7158]">
            Ways We Can Work Together
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] text-[#2f312d] sm:text-5xl lg:text-[3.35rem]">
            Choose the experience that supports this season of your life.
          </h1>
        </div>

        <div className="mx-auto max-w-[78rem] space-y-11 sm:space-y-14 lg:space-y-16">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isReversed = index % 2 === 1;

            return (
              <section
                key={service.title}
                className={`grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-10 ${
                  isReversed ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
                }`}
              >
                {isReversed ? (
                  <div className="hidden lg:block">
                    <AnimatePresence initial={false}>
                      {isActive && isExpanded ? (
                        <InvestmentDetails service={service} />
                      ) : (
                        <div />
                      )}
                    </AnimatePresence>
                  </div>
                ) : null}

                <ServiceCard
                  service={service}
                  index={index}
                  isActive={isActive}
                  isExpanded={isExpanded}
                  onSelect={(expand = false) => selectService(index, expand)}
                />

                {!isReversed ? (
                  <div className="hidden lg:block">
                    <AnimatePresence initial={false}>
                      {isActive && isExpanded ? (
                        <InvestmentDetails service={service} />
                      ) : (
                        <div />
                      )}
                    </AnimatePresence>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>

        <p className="mx-auto mt-14 max-w-[88rem] border-t border-[#d8d2c0] pt-5 text-center text-[11px] uppercase tracking-[0.18em] text-[#7c7667]">
          Shwaastika Wellness by Preeti Semwal
        </p>
      </div>
    </section>
  );
}
