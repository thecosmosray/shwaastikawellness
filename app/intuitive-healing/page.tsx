import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Intuitive Healing | Preeti Semwal",
  description:
    "Discover intuitive healing sessions by Preeti Semwal using energy awareness, breath, gentle practices, and inner guidance for whole-being support.",
  path: "/intuitive-healing",
});

const introParagraphs = [
  "Healing is for those who seek to reach the root of their physical, emotional and spiritual concerns. It is also for those who wish to explore the deeper reasons behind their issues through the language of energy. When energy within the body and mind is disturbed, it shows up as an imbalance, sometimes felt in the body, sometimes in emotions or thoughts and at times as a sense of spiritual disconnection. These imbalances hold people back from living a healthy, joyful and fulfilling life.",
  "We are more than flesh and bone we are converging fields of energy, emotion, thought, and spirit. When these fields fall out of balance, disconnection and disease arise as chronic pain, anxiety, fatigue, or a deep sense of emptiness.",
  "Intuitive Healing works where the surface cannot reach. Rooted in my Himalayan lineage and guided by divine grace, each session weaves together:",
  "Healing flows not just to your body but into your mind, emotions and soul - awakening your innate strength and restoring your natural state of wholeness.",
];

const features = [
  "Intuitive energy work that scans and clears blockages",
  "Gentle yoga and breath practices that unlock stuck patterns",
  "Mindful activities that ground insights into real-life shifts",
  "Lifestyle changes to break the existing patterns",
];

const instructions = [
  "Join 10 minutes early on a laptop, iPad, or tablet; strong internet required for online sessions",
  "Keep your video ON and visible head-to-waist; device must remain stationary",
  "Sit on a clean mat/floor if possible; if using a chair, support your feet (no revolving chairs)",
  "Have a cushion/back support, glass of water, pen, and notepad within reach",
  "Turn off phones, remove smartwatches and disable device notifications",
  "Eat 3-4 hours before the session; avoid non-veg/eggs, alcohol, coffee and smoking on the day",
  "Ensure a quiet, clutter-free space with no interruptions; lock the door if possible",
];

const intuitiveFaqs = [
  {
    question: "How long is a session?",
    answer:
      "Typically lasting 60-65 minutes, each session is designed to feel immersive, engaging, and thoughtfully paced from beginning to end.",
  },
  {
    question: "Is online as effective as in-person?",
    answer:
      "Yes - many participants describe online experiences as equally deep, engaging, and impactful as sessions held in person.",
  },
  {
    question: "Is this a medical treatment?",
    answer:
      "This is an intuitive healing session for deeper support. It is not a substitute for licensed medical or mental-health care.",
  },
  {
    question: "Can I seek guidance about someone else?",
    answer:
      "Yes, if the guidance is intended for the well-being of a loved one",
  },
];

export default function IntuitiveHealingPage() {
  return (
    <main className="bg-[#fbf8f1]">
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(199,214,189,0.55),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.72),transparent_30%),linear-gradient(135deg,#fbf8f1_0%,#f3eadb_58%,#eef4e9_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8b65]">
              Healing
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl lg:text-6xl">
              Intuitive Healing
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <article className="space-y-8 text-lg leading-9 text-[#3f372f]">
              <p>{introParagraphs[0]}</p>

              <div className="rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-6 shadow-sm sm:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
                  Where Energy, Yoga & Awareness Transform Your Entire Being
                </h2>
              </div>

              <p>{introParagraphs[1]}</p>

              <div className="rounded-[2rem] border border-[#e5d9c7] bg-[#f7f1e4] p-6 sm:p-8">
                <p className="text-lg font-semibold leading-8 text-[#2f2822]">
                  {introParagraphs[2]}
                </p>
                <ul className="mt-6 grid gap-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-base leading-7 text-[#51473f]">
                      <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3f5f46]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>{introParagraphs[3]}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-5 py-16 text-center sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <p className="text-xl leading-9 text-[#2f2822] sm:text-3xl sm:leading-[1.55] lg:text-4xl">
              The work also holds space for deeper aspects of feminine well-being,
              including support during phases such as{" "}
              <strong>pregnancy, emotional transitions and inner nurturing</strong>{" "}
              allowing the body and mind to remain supported, balanced and connected
              through these experiences.
            </p>
          </div>
        </Reveal>
      </section>

      <FAQ
        items={intuitiveFaqs}
        title="Clear answers about intuitive healing sessions."
        sectionClassName="bg-white px-5 py-14 sm:px-8 lg:px-10"
      />

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#cdbd9f]" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
                Mandatory Instructions
              </p>
              <div className="h-px flex-1 bg-[#cdbd9f]" />
            </div>

            <div className="rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-[#2f2822] sm:text-3xl">For Online Session</h2>
              <ul className="mt-6 space-y-3 text-base leading-7 text-[#2f2822] sm:mt-7 sm:space-y-4 sm:text-xl sm:leading-9">
                {instructions.map((instruction) => (
                  <li key={instruction} className="flex gap-4">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#3f5f46] sm:mt-4 sm:h-2.5 sm:w-2.5" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
