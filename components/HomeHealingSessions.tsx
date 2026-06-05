"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const healingSessions = [
  {
    eyebrow: "Clarity",
    title: "Inner Clarity Sessions",
    description:
      "For emotional understanding, life transitions, decision-making, and deeper self-awareness.",
    button: "Explore Inner Clarity",
    href: "/inner-clarity-session",
  },
  {
    eyebrow: "Healing",
    title: "Intuitive Healing",
    description:
      "For deeper physical, emotional, and mental healing through energy work and guided practices.",
    button: "Explore Intuitive Healing",
    href: "/intuitive-healing",
  },
  {
    eyebrow: "Nurture",
    title: "Womb Healing & Prenatal Support",
    description:
      "For pregnancy, womb connection, emotional support, and deeper feminine well-being.",
    button: "Explore Womb Healing",
    href: "/womb-healing",
  },
];

function TiltCard({ session, index }: { session: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
    <Reveal delay={index * 0.06}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <article
          className="group relative h-full overflow-hidden rounded-[1.35rem] border border-[#eadfce] bg-white p-5 shadow-sm shadow-[#6b513b]/5 transition-colors hover:border-[#d8c7ad] hover:shadow-xl hover:shadow-[#6b513b]/8 sm:rounded-[1.75rem] sm:p-6"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,#9a6f55,#eadbe2,#dfeef7)]" />
          <div className="flex h-full flex-col">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a6f55]">
              {session.eyebrow}
            </p>
            <h3 className="text-2xl font-bold leading-tight text-[#17120f]">
              {session.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[#4f463e]">
              {session.description}
            </p>
            <Link
              href={session.href}
              className="mt-7 inline-flex w-full justify-center rounded-full border border-[#d8c7ad] bg-[#fffdf8] px-5 py-3 text-center text-sm font-semibold text-[#3f352d] transition hover:border-[#8d735f] hover:bg-white group-hover:border-[#8d735f] sm:mt-auto"
            >
              {session.button}
            </Link>
          </div>
        </article>
      </motion.div>
    </Reveal>
  );
}

export default function HomeHealingSessions() {
  return (
    <section id="choose-healing-session" className="relative isolate scroll-mt-24 overflow-hidden bg-[#fffdf8] px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(223,238,247,0.34),transparent_25%),linear-gradient(135deg,#ffffff_0%,#fff8ef_46%,#fffdf8_100%)]" />
      <div className="absolute left-[8%] top-12 -z-10 h-44 w-44 rounded-full bg-[#eadbe2]/46 blur-3xl" />
      <div className="absolute bottom-10 right-[8%] -z-10 h-52 w-52 rounded-full bg-[#f0e5d6]/48 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a6f55]">
            Healing Sessions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17120f] sm:text-4xl">
            Choose Your Healing Session
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {healingSessions.map((session, index) => (
            <TiltCard key={session.title} session={session} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
