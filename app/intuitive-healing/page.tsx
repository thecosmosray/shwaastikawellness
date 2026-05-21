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
  "Intuitive Healing is an awareness-based energy healing approach that works with deeper physical, emotional, and mental imbalances. Often, what we repeatedly experience in the body or mind is not limited to the surface symptom alone. Emotional stress, recurring thought patterns, anxiety, fatigue, physical discomfort, heaviness, or a persistent sense of imbalance may also carry deeper energetic and emotional imprints beneath the surface.",
  "The work focuses on understanding these deeper layers through the individual's energetic field. During the session, I intuitively work with the person's energy space to sense areas of emotional strain, energetic disturbances, internal blocks, stress patterns, and imbalances that may be contributing to the present concern. The process is deeply compassionate, aware, and individualized, allowing the person to feel supported while exploring the root of what they may be carrying physically, emotionally, or mentally.",
  "Over the years, I have personally witnessed individuals experience relief in long-standing physical concerns that had remained unresolved despite multiple approaches. At times, physical issues are deeply connected with the individual's emotional state, stress patterns, lifestyle, and overall energetic condition. As these deeper layers begin to shift and regulate, the body also starts responding differently.",
  "The work is not intended to replace medical treatment, but it may support the individual alongside existing medical or therapeutic care by helping improve emotional regulation, inner balance, stress reduction, and overall well-being.",
  "Rather than offering only temporary relief, Intuitive Healing is approached as a process of restoring greater balance, emotional ease, inner stability, and alignment from within.",
];

const processParagraphs = [
  "Each session is guided intuitively according to the individual's current physical, emotional, and mental state. While holding a calm and grounded space for the individual, I work with the person's energetic field to understand deeper imbalances, emotional patterns, stress responses, behavioural tendencies, or energetic disturbances that may be contributing to the present concern.",
  "At times, the process may help bring awareness to the connection between emotional experiences, mental patterns, lifestyle habits, and physical well-being. Based on what emerges during the session, supportive interventions may be suggested in the form of breathwork, grounding practices, meditation, gentle movement practices, emotional awareness work, lifestyle adjustments, dietary changes, routine-based changes, or other holistic supportive approaches.",
  "The process is highly personalized and evolves according to the individual's response and readiness. In some cases, individuals may experience noticeable shifts within a single session, while in others, the work may unfold more gradually over multiple sessions depending on the depth of the concern and the consistency with which the suggested practices are integrated into daily life.",
  "Intuitive Healing is not approached as passive healing, but as a collaborative process where awareness, participation, consistency, and openness from the individual play an important role in the overall journey toward healing, regulation, and balance.",
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
    question: "What exactly happens during an Intuitive Healing session?",
    answer:
      "Each session involves intuitive energy work, guided awareness, supportive conversation, and personalized practices designed according to the individual's physical, emotional, and mental state. Depending on the requirement, the session may also include breathwork, meditation, grounding practices, gentle movement, or lifestyle-based guidance.",
  },
  {
    question: "What kind of concerns can Intuitive Healing support?",
    answer:
      "The work may support individuals experiencing emotional overwhelm, stress, anxiety, recurring emotional patterns, fatigue, inner heaviness, chronic stress-related physical discomfort, or deeper mind-body imbalances. The focus is on understanding and working with the deeper patterns that may be contributing to the present concern.",
  },
  {
    question: "Is online as effective as in-person?",
    answer:
      "Yes, participants often report experiences online that are just as deep, engaging, and impactful as in-person sessions.",
  },
  {
    question: "Is this a substitute for medical treatment?",
    answer:
      "No. Intuitive Healing is an awareness-based and alternative healing approach intended to support physical, emotional, and mental well-being. It is not a substitute for licensed medical or mental-health care, though it may work supportively alongside existing treatments and healing processes.",
  },
];

export default function IntuitiveHealingPage() {
  return (
    <main className="bg-[#fbf8f1]">
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(199,214,189,0.55),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.72),transparent_30%),linear-gradient(135deg,#fbf8f1_0%,#f3eadb_58%,#eef4e9_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl lg:text-6xl">
              Intuitive Healing
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <article className="space-y-8 text-justify text-lg leading-9 text-[#3f372f]">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h2 className="pt-4 text-left text-2xl font-semibold leading-tight text-[#2f2822] sm:text-3xl">
                How the Process Works
              </h2>

              {processParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#cdbd9f]" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
                Mandatory Instructions
              </p>
              <div className="h-px flex-1 bg-[#cdbd9f]" />
            </div>

            <details className="group rounded-2xl border border-[#e5d9c7] bg-[#fbf8f1] shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left marker:hidden sm:px-7">
                <div>
                  <h2 className="text-xl font-semibold text-[#2f2822] sm:text-2xl">For Online Session</h2>
                  <p className="mt-1 text-sm leading-6 text-[#74675c]">
                    Tap to view the preparation checklist for online sessions.
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold uppercase tracking-[0.14em] text-[#3f5f46]">
                  <span className="group-open:hidden">View</span>
                  <span className="hidden group-open:inline">Hide</span>
                </span>
              </summary>
              <ul className="border-t border-[#e5d9c7] px-6 py-5 space-y-3 text-justify text-base leading-7 text-[#2f2822] sm:px-7 sm:py-6 sm:space-y-4">
                {instructions.map((instruction) => (
                  <li key={instruction} className="flex gap-4">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#3f5f46]" />
                    <span className="min-w-0 flex-1 text-justify">{instruction}</span>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </Reveal>
      </section>

      <FAQ
        items={intuitiveFaqs}
        title="Clarity about intuitive healing sessions"
        sectionClassName="bg-white px-5 py-14 sm:px-8 lg:px-10"
      />
    </main>
  );
}
