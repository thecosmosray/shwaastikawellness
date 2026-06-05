"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello%0AWelcome+to+SHWAASTIKA+WELLNESS.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A-+Your+concern+or+goal%0A-+Preferred+service%0A-+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly&type=phone_number&app_absent=0";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="bg-transparent px-4 pb-12 pt-7 sm:px-6 lg:px-8 lg:pb-16 lg:pt-9">
      <div
        className="relative isolate mx-auto max-w-[92rem] overflow-hidden rounded-[1.75rem] border border-[#eadfce] bg-[#fffaf2] shadow-xl shadow-[#6b513b]/7"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(234,219,226,0.58),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(223,238,247,0.5),transparent_28%),linear-gradient(135deg,#ffffff_0%,#fff7ec_54%,#f8f1e8_100%)]" />
        <div className="home-hero-sea" aria-hidden="true">
          <svg
            className="home-hero-sea-wave home-hero-sea-wave-back"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
          >
            <path d="M0 118C118 88 214 86 332 113C470 145 548 154 690 120C842 84 934 79 1078 112C1226 145 1324 142 1440 106V220H0V118Z" />
          </svg>
          <svg
            className="home-hero-sea-wave home-hero-sea-wave-mid"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
          >
            <path d="M0 135C126 107 230 106 350 131C493 161 582 164 722 131C866 97 960 101 1108 136C1244 168 1340 157 1440 124V220H0V135Z" />
          </svg>
          <svg
            className="home-hero-sea-wave home-hero-sea-wave-front"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
          >
            <path d="M0 154C130 126 238 126 362 151C500 179 602 182 744 149C878 118 992 119 1126 151C1254 181 1348 176 1440 148V220H0V154Z" />
          </svg>
        </div>

        <div className="relative z-10 grid min-h-[520px] items-center gap-9 px-5 py-9 sm:px-9 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9a6f55]">
              Wellness sanctuary
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.02] text-[#17120f] sm:text-5xl lg:text-[3.45rem]">
              Preeti Semwal
            </h1>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#8f735f]">
              Shwaastika Wellness
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#3f372f] sm:text-[17px]">
              Wellness & Personal Development Practice | Guided sessions and intuitive healing
            </p>
            <p className="mt-3 text-base font-semibold italic text-[#7a6b5e]">
              Intuitive Energy Healer & Wellness Guide
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-16 lg:gap-30">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#5d686f] px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#5d686f]/20 transition hover:-translate-y-0.5 hover:bg-[#7b878f]"
              >
                Book a Consultation
              </a>
              <Link
                href="/book-a-session"
                className="rounded-full bg-[#5d686f] px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#5d686f]/20 transition hover:-translate-y-0.5 hover:bg-[#7b878f]"
              >
                Explore Sessions
              </Link>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO7gDBYyXmGLCCzgZUlWptEyUIo4VbTuBsrQD9ardaQi5e6w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 block cursor-pointer rounded-[1.15rem] border border-[#2b211a]/10 bg-[#5d686f] px-5 py-4 text-center text-sm font-bold leading-6 text-white shadow-xl shadow-[#5d686f]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7b878f] hover:shadow-2xl hover:shadow-[#5d686f]/18 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6f55]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf8] sm:rounded-full"
            >
              <span className="block text-base font-semibold sm:text-sm">
                Free | Weekly Inner Alignment Session | Movement, meditation & awareness for inner balance - Click to Join
              </span>
            </a>
          </div>

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-[#fffdf8] shadow-lg shadow-[#6b513b]/7 ring-1 ring-white/80 sm:min-h-[390px] lg:min-h-[450px]"
          >
            <div
              className="absolute -inset-x-4 -inset-y-6"
              style={{ position: "absolute", transform: "translateZ(30px)" }}
            >
              <Image
                src="/images/Home.jpg"
                alt="Preeti Semwal intuitive healing session at Shwaastika Wellness"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={true}
                fetchPriority="high"
                quality={95}
              />
            </div>
            <div className="home-hero-image-glow absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fffdf8]/55 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
