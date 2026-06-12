import type { Metadata } from "next";
import Image from "next/image";
import CorporateWorkshopTabs from "@/components/CorporateWorkshopTabs";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Corporate Wellness Workshops | Shwaastika Wellness",
  description:
    "Corporate wellness workshops by Preeti Semwal support workplace resilience, leadership presence, emotional intelligence, safety awareness, and well-being.",
  path: "/corporate-workshop",
});

const foundations = [
  {
    title: "Real-World Experience",
    text: "25+ years of experience across defence, security, and corporate environments, including leadership, risk management, crisis response, workplace safety, and decision-making under pressure.",
  },
  {
    title: "Human Performance & Resilience",
    text: "Insights shaped through mountaineering, endurance sports, expedition leadership, solo travel, and years of working in demanding environments where resilience, adaptability, and composure are essential.",
  },
  {
    title: "Practical Workplace Application",
    text: "Programs designed to strengthen awareness, communication, emotional intelligence, leadership presence, confidence, and workplace effectiveness through practical, experience-driven learning.",
  },
  {
    title: "Human Skills for the Future Workplace",
    text: "As automation and AI continue to transform workplaces, human capabilities such as awareness, resilience, communication, adaptability, emotional intelligence, and clarity of thought are becoming increasingly important. These programs are designed to strengthen those capabilities in practical and meaningful ways.",
  },
];

export default function CorporateWorkshopPage() {
  return (
    <main className="bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(234,223,206,0.58),transparent_28%),linear-gradient(135deg,#fffdf8_0%,#fff7ec_58%,#f8f1e8_100%)]" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl font-semibold leading-[1.08] text-[#241d18] sm:text-5xl lg:text-6xl">
                Corporate Workshops
              </h1>
              <p className="mx-auto mt-5 max-w-[20rem] text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-[#8d735f] sm:max-w-4xl sm:text-sm sm:leading-7 sm:tracking-[0.22em]">
                Safety &bull; Leadership &bull; Emotional Intelligence &bull; Workplace Resilience &bull; Well-being
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="group mt-8 overflow-hidden rounded-[1.25rem] border border-[#e5d9c7] bg-[#fbf8f1] p-2 shadow-lg shadow-[#6b513b]/8 sm:mt-9 sm:rounded-[1.75rem] sm:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#dfe9d8] transition duration-700 group-hover:scale-[1.008] sm:aspect-[16/5] sm:min-h-[220px] sm:rounded-[1.35rem]">
                <Image
                  src="/images/corporate%20workshop/Hero.JPG"
                  alt="Corporate workshop setting and group learning visual"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/18 via-transparent to-white/5" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <h2 className="mx-auto mt-9 max-w-6xl text-center text-2xl font-semibold leading-[1.15] text-[#120f0c] sm:mt-10 sm:text-4xl">
              The Foundation Behind the Programs
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <article className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.36fr_0.64fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                Corporate Capability
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
                Practical workshops for resilient, aware, and confident teams.
              </h2>
              <div className="mt-6 h-px w-24 bg-[#d7c6a9] sm:mt-7" />
            </div>
          </Reveal>

          <div className="editorial-prose space-y-6 sm:space-y-8">
            {foundations.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <section className="border-l border-[#d7c6a9] pl-4 sm:pl-6">
                  <h3 className="text-left text-xl font-semibold leading-tight text-[#2f2822] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-left">
                    {item.text}
                  </p>
                </section>
              </Reveal>
            ))}
          </div>
        </article>
      </section>

      <CorporateWorkshopTabs />
    </main>
  );
}
