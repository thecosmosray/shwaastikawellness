"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Intuitive Healing",
    intro: "Energy, yoga and awareness for whole-being support.",
    image: "/images/Intutive%20healing%20book%20a%20seesion.png",
    imagePosition: "center center",
    tone: "from-[#ead1bd] via-[#fff8ef] to-[#dfe9d8]",
    details: "Session Investment",
    pricing: [
      ["Single Session (60–65 mins)", "INR 3,000 | USD 60"],
      ["3-Session Journey", "INR 8,100 | USD 162", "(includes a 10% courtesy reduction)"],
    ],
  },
  {
    title: "Inner Clarity Guidance",
    intro: "Gentle intuitive guidance for clarity, direction and next steps.",
    image: "/images/inner%20clarity%20guidance%20book%20a%20session.png",
    imagePosition: "center center",
    tone: "from-[#dfe9d8] via-[#fffdf8] to-[#ead7c8]",
    details: "Session Investment",
    pricing: [["Single Session (40-45 mins)", "INR 2,500 | USD 55"]],
  },
  {
    title: "Corporate Workshop",
    intro: "Customized wellness and awareness work for groups.",
    image: "/images/corporate workshop book a session.png",
    imagePosition: "center center",
    tone: "from-[#d7dfd1] via-[#f8f2e7] to-[#cdd5cf]",
    details:
      "Corporate workshop engagements are customized based on scope and requirements, with pricing shared upon discussion.",
    pricing: [],
  },
  {
    title: "Womb Healing & Prenatal Support",
    intro: "Nurturing support through pregnancy, birth and postpartum recovery.",
    image: "/images/womb%20healing%20book%20a%20session.jpg",
    imagePosition: "center top",
    tone: "from-[#f1d8cf] via-[#fff8ef] to-[#e7eadf]",
    details: "Session Investment",
    pricing: [
      ["Single Session (60–65 mins)", "INR 3,500 | USD 45"],
      ["3-Session Support Journey", "INR 9,500 | USD 120", "(includes a courtesy reduction)"],
      [
        "Monthly Deep Support Program – 8 Sessions",
        "INR 18,400 | USD 225",
        "(approximately 2 sessions per week across the month)",
      ],
    ],
  },
];

const positions = [
  { x: 0, y: 0, scale: 1, rotate: 0, zIndex: 30, opacity: 1, blur: 0 },
  { x: 245, y: 34, scale: 0.78, rotate: 4, zIndex: 20, opacity: 0.76, blur: 0.6 },
  { x: 0, y: 84, scale: 0.66, rotate: 0, zIndex: 10, opacity: 0.42, blur: 1.2 },
  { x: -245, y: 34, scale: 0.78, rotate: -4, zIndex: 20, opacity: 0.76, blur: 0.6 },
];

export default function SessionExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPricing, setShowPricing] = useState(false);
  const activeService = services[activeIndex];

  const selectService = (index: number) => {
    setActiveIndex(index);
    setShowPricing(false);
  };

  const renderServiceDetails = (service: typeof services[number]) => (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
        Selected Experience
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f2822]">
        {service.title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[#66584d]">{service.intro}</p>

      <button
        type="button"
        onClick={() => setShowPricing((value) => !value)}
        className="mt-8 rounded-full border border-[#cdbd9f] bg-[#fbf8f1] px-6 py-3 text-sm font-semibold text-[#3f352d] transition hover:border-[#8a9b72] hover:bg-white"
        aria-expanded={showPricing}
      >
        {showPricing ? "Hide Session Investment" : "View Session Investment"}
      </button>

      <AnimatePresence initial={false}>
        {showPricing ? (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: "blur(8px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-7 rounded-[1.5rem] border border-white/60 bg-white/60 p-5 shadow-inner">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
                {service.details}
              </p>
              {service.pricing.length > 0 ? (
                <div className="space-y-5">
                  {service.pricing.map(([name, price, note]) => (
                    <div key={name} className="border-b border-[#e5d9c7] pb-4 last:border-b-0 last:pb-0">
                      <p className="font-semibold text-[#2f2822]">{name}</p>
                      <p className="mt-1 text-lg text-[#3f5f46]">{price}</p>
                      {note ? <p className="mt-1 text-sm text-[#786b5f]">{note}</p> : null}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-base leading-8 text-[#4b423b]">{service.details}</p>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );

  return (
    <section className="overflow-hidden bg-[#fbf8f1] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative hidden h-[510px] items-center justify-center lg:flex">
            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#d7c8ad]/70" />
            <div className="absolute h-[260px] w-[260px] rounded-full bg-[#e5eddf]/45 blur-2xl" />
            {services.map((service, index) => {
              const relative = (index - activeIndex + services.length) % services.length;
              const position = positions[relative];

              return (
                <motion.button
                  key={service.title}
                  type="button"
                  onClick={() => selectService(index)}
                  className="absolute w-[285px] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-3 text-left shadow-xl shadow-[#6b513b]/12"
                  animate={{
                    x: position.x,
                    y: position.y,
                    scale: position.scale,
                    rotate: position.rotate,
                    opacity: position.opacity,
                    filter: `blur(${position.blur}px)`,
                    zIndex: position.zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 22 }}
                  aria-pressed={activeIndex === index}
                >
                  <div className={`relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${service.tone} p-4`}>
                    <Image
                      src={service.image}
                      alt={`${service.title} booking option`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: service.imagePosition }}
                      sizes="285px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/18 via-transparent to-white/5" />
                    <div className="relative ml-auto max-w-[88%] rounded-full border border-white/75 bg-white/52 px-4 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl">
                      <h3 className="text-base font-semibold leading-tight text-[#2f2822]">{service.title}</h3>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:hidden">
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={service.title} className="space-y-4">
                    <button
                      type="button"
                      onClick={() => selectService(index)}
                      className={`w-full rounded-[1.75rem] border p-3 text-left shadow-lg transition ${
                        isActive ? "border-[#3f5f46] bg-white" : "border-[#e5d9c7] bg-white/70"
                      }`}
                      aria-pressed={isActive}
                    >
                      <div className={`relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.35rem] bg-gradient-to-br ${service.tone} p-4`}>
                        <Image
                          src={service.image}
                          alt={`${service.title} booking option`}
                          fill
                          className="object-cover"
                          style={{ objectPosition: service.imagePosition }}
                          sizes="(max-width: 640px) calc(100vw - 64px), 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/18 via-transparent to-white/5" />
                        <div className="relative ml-auto max-w-[88%] rounded-[1.35rem] border border-white/75 bg-white/68 px-4 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl">
                          <h3 className="text-sm font-semibold leading-tight text-[#2f2822] sm:text-base">{service.title}</h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#3f5f46]">
                            {isActive ? "Details shown" : "Tap for details"}
                          </p>
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.22 }}
                          className="rounded-[2rem] border border-[#e5d9c7] bg-white/85 p-7 shadow-xl shadow-[#6b513b]/8 backdrop-blur"
                        >
                          {renderServiceDetails(service)}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
                    </div>
          </div>

          <motion.div
            layout
            className="hidden rounded-[2rem] border border-[#e5d9c7] bg-white/85 p-7 shadow-xl shadow-[#6b513b]/8 backdrop-blur sm:p-9 lg:block"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.28 }}
              >
                {renderServiceDetails(activeService)}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
