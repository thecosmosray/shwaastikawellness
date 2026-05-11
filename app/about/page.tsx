import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Preeti Semwal",
  description:
    "Meet Preeti Semwal, the intuitive healer behind Preeti Semwal's Healing Space, offering transformative energy work rooted in balance, resilience, and ancestral wisdom.",
  alternates: {
    canonical: "/about",
  },
};

const featureBlocks = [
  {
    title: "Specialized Gift",
    text: "I hold a unique ability to connect with babies in the womb, support mothers through pregnancy, and guide infants toward joyful, spiritually attuned lives. As a certified Pre & Post Natal Yoga teacher, I blend intuitive depth with gentle expertise to nurture both mother and child.",
  },
  {
    title: "Beyond Healing",
    text: "My calling is enriched by a life of service, adventure, and disciplined training. A retired Squadron Leader from the Indian Air Force, I hold degrees in Law and Management, yet chose to follow my soul's path of healing.\n\nI am trained in advanced yoga and meditation, and I am also an advanced mountaineer, endurance runner, swimmer, horse rider, and motorcyclist. These experiences have shaped my resilience, adaptability, and zest for life.",
  },
  {
    title: "A Life of Service & Balance",
    text: "A devoted mother of two and wife of a retired Army officer, I live by the values of discipline, compassion, and grace. Fluent in English and Hindi, I work across cultures and age groups with one purpose: to help people awaken their inner healing potential and live vibrant, fulfilling lives.",
  },
];

const aboutImages = [
  {
    src: "/images/About1.JPG",
    alt: "Preeti Semwal at SHWAASTIKA WELLNESS",
  },
  {
    src: "/images/About2.JPG",
    alt: "SHWAASTIKA WELLNESS healing and wellness practice",
  },
  {
    src: "/images/About3.jpeg",
    alt: "Preeti Semwal guiding wellness work",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#f3eadb] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(199,214,189,0.65),transparent_26%),radial-gradient(circle_at_85%_8%,rgba(255,255,255,0.75),transparent_30%),linear-gradient(135deg,#f6eddd_0%,#fbf8f1_54%,#e8f0e2_100%)]" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8b65]">
                SHWAASTIKA WELLNESS
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl lg:text-6xl">
                About Preeti Semwal
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-[#675b50]">
                Guided healing rooted in intuition, ancestral wisdom, and holistic well-being.
              </p>
              <div className="mt-9 h-px w-28 bg-[#b9a27e]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <article className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                Introduction
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
                A sacred space for balance, resilience and well-being.
              </h2>
              <div className="mt-7 h-px w-24 bg-[#d7c6a9]" />
              <div className="mt-8 space-y-7 text-lg leading-9 text-[#554b43]">
                <p>
                  I am an intuitive energy healer devoted to helping individuals restore
                  balance, resilience and well-being. Born into a sacred lineage of
                  Himalayan healers, astrologers, and temple priests, I was raised in an
                  environment where intuitive gifts, spiritual rituals, and energetic
                  wisdom were part of daily life. From childhood, I was naturally sensitive
                  to subtle energy fields and received intuitive insights through dreams
                  and spontaneous knowing. These ancestral gifts, nurtured through
                  generations of practice, allow me to perceive imbalances even from afar
                  and guide people toward deep healing and transformation. Every session I
                  hold is guided by these ancestral threads, enabling me to sense the
                  unseen and channel healing with clarity, compassion and grace. My healing
                  sessions are integrative and multidimensional, addressing the physical,
                  emotional, mental and spiritual layers of being.
                </p>
                <p>
                  While I am trained in modalities like Craniosacral Therapy, Bach Flower
                  Remedies and few others, my work is guided entirely by intuition and
                  energy channeled through ancestral wisdom rather than learned technique.
                  Each session is a sacred space where clients feel safe, seen and
                  supported. I empower individuals to become active participants in their
                  healing journey, making choices that align with joy, vitality and inner
                  peace.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {aboutImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.08}>
              <div className="rounded-[2rem] border border-[#e4d8c4] bg-white/75 p-4 shadow-xl shadow-[#6b513b]/8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#f3eadb]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              Healing Philosophy
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              A practice shaped by intuition, service and lived experience.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featureBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.08}>
                <article className="h-full rounded-[2rem] border border-[#e5d9c7] bg-white p-7 shadow-sm shadow-[#6b513b]/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5eddf]">
                    <span className="h-5 w-5 rounded-full border-2 border-[#6b7d55]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#2f2822]">{block.title}</h3>
                  <div className="mt-5 space-y-4 text-base leading-8 text-[#675b50]">
                    {block.text.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
