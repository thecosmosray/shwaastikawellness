"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello+%EF%BF%BD%0AWelcome+to+Shwaastika+Wellness.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A%E2%80%A2+Your+concern+or+goal%0A%E2%80%A2+Preferred+service%0A%E2%80%A2+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly+%EF%BF%BD&type=phone_number&app_absent=0";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], ["-2%", "4%"]);

  return (
    <section className="bg-[#fbf8f1] px-4 pb-12 pt-7 sm:px-6 lg:px-8 lg:pb-16 lg:pt-9">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative isolate mx-auto max-w-[92rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#dceef4] shadow-xl shadow-[#6b513b]/8"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.78),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(223,236,246,0.42),transparent_26%),linear-gradient(135deg,#eef8fb_0%,#f8f4ea_58%,#edf6fb_100%)]" />

        <div className="grid min-h-[520px] items-center gap-9 px-5 py-9 sm:px-9 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b7d55]">
              Wellness sanctuary
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl lg:text-[3.45rem]">
              SHWAASTIKA WELLNESS
            </h1>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a9272]">
              AKR WELLNESS
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5f5349] sm:text-[17px]">
              Wellness & Personal Development Practice | Guided sessions and intuitive healing
            </p>
            <p className="mt-3 text-base font-semibold italic text-[#7a6b5e]">
              By Preeti Semwal
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#2f2822] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#2f2822]/15 transition hover:-translate-y-0.5 hover:bg-[#4f6574]"
              >
                Book a Consultation
              </a>
              <Link
                href="/intuitive-healing"
                className="rounded-full border border-[#b8a486] bg-white/55 px-7 py-3.5 text-center text-sm font-semibold text-[#3f352d] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Healing Sessions
              </Link>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO7gDBYyXmGLCCzgZUlWptEyUIo4VbTuBsrQD9ardaQi5e6w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 block cursor-pointer rounded-full border border-white/75 bg-white/45 px-5 py-3 text-center text-sm font-semibold leading-6 text-[#3f352d] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md hover:shadow-[#6b513b]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a9272]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf8f1]"
            >
              <span className="underline decoration-[#b9a27e]/60 underline-offset-4 transition group-hover:decoration-[#4f6574]">
                Free | Weekly Inner Alignment Session | Movement, meditation & awareness for inner balance - Click to Join
              </span>
            </a>
          </div>

          <div ref={visualRef} className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-[#eef8fb] shadow-lg shadow-[#6b513b]/8 sm:min-h-[390px] lg:min-h-[450px]">
            <motion.div
              style={{ y: visualY }}
              className="absolute -inset-x-8 -inset-y-10 bg-[radial-gradient(ellipse_at_52%_18%,rgba(255,255,255,0.9),transparent_26%),radial-gradient(ellipse_at_48%_72%,rgba(63,95,70,0.13),transparent_18%),repeating-linear-gradient(178deg,rgba(101,148,164,0.24)_0px,rgba(101,148,164,0.24)_2px,transparent_7px,transparent_25px),linear-gradient(180deg,#d9eef7_0%,#eff9fb_42%,#f7efe3_78%,#e5d6bf_100%)]"
            />
            <div className="absolute inset-0 bg-white/15" />
            <div className="absolute bottom-10 left-1/2 h-28 w-16 -translate-x-1/2 rounded-t-full bg-[#6b513b]/22 blur-[1px]" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fbf8f1]/80 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
