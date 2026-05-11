import type { Metadata } from "next";
import CorporateWorkshopTabs from "@/components/CorporateWorkshopTabs";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Corporate Wellness Workshops",
  description:
    "Corporate wellness workshops with Preeti Semwal support workplace resilience, leadership presence, emotional intelligence, safety awareness, and well-being.",
  alternates: {
    canonical: "/corporate-workshop",
  },
};

const introParagraphs = [
  "With over 25 years of experience across defence, security and corporate environments, I bring a strong foundation of operational expertise and real-world insight into every program I deliver. As a veteran from the Indian Air Force and a seasoned safety and security professional, my work is shaped by exposure to high-pressure environments, risk assessment and real-world decision-making.",
  "Alongside this, my personal journey has been equally rooted in building resilience through experiences as a mountaineer, expedition leader, endurance runner, motorcyclist and solo traveller across multiple countries. These experiences have shaped not just physical endurance but also mental clarity, emotional balance and the ability to stay composed in uncertain situations.",
  "My approach to training reflects this integration. Each session is designed to be practical, engaging and experience-driven while also helping participants develop awareness, presence and confidence from within. The focus is not only on understanding situations but on how individuals think, respond and carry themselves within those situations.",
  "I work extensively with organisations to design and deliver programs that support both professional capability and overall well-being. These include areas such as workplace behaviour, safety awareness, leadership presence and personal effectiveness - delivered in a way that is relatable, applicable and grounded in real-life contexts.",
  "In today’s evolving workplace, where automation and AI continue to transform roles and expectations, human capabilities such as awareness, resilience, communication, and clarity of thought are becoming increasingly critical. My programs are designed to strengthen these capabilities, enabling individuals to perform effectively while maintaining balance, confidence, and a strong sense of self.",
];

export default function CorporateWorkshopPage() {
  return (
    <main className="bg-[#fbf8f1]">
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h1 className="text-center text-4xl font-semibold leading-[1.08] text-[#120f0c] sm:text-5xl lg:text-6xl">
              Corporate Workshop
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="group mt-9 overflow-hidden rounded-[1.75rem] border border-[#e5d9c7] bg-[#fbf8f1] p-3 shadow-xl shadow-[#6b513b]/10">
              <div className="flex aspect-[16/5] min-h-[220px] items-center justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,#dfe9d8,#fff8ef_48%,#d8ded5)] text-center transition duration-700 group-hover:scale-[1.008]">
                <div className="rounded-2xl bg-white/75 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                    Wide workshop image
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#66584d]">
                    Add corporate workshop visual here.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <h2 className="mx-auto mt-10 max-w-6xl text-center text-3xl font-semibold leading-[1.1] text-[#120f0c] sm:text-4xl">
              Empowering People, Energizing Organizations
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 sm:px-8 lg:px-10">
        <article className="mx-auto max-w-6xl space-y-8 text-lg leading-9 text-[#3f372f]">
          {introParagraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.04}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </article>
      </section>

      <CorporateWorkshopTabs />
    </main>
  );
}
