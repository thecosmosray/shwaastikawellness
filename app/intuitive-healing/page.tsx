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
  "Intuitive Healing is an awareness-based energy healing approach that works with deeper physical, emotional, and mental imbalances. Often, what individuals repeatedly experience in the body or mind is not limited to the surface symptom alone. Emotional stress, anxiety, fatigue, physical discomfort, recurring patterns, or a persistent sense of imbalance may also carry deeper emotional and energetic layers beneath the surface.",
  "The process works intuitively through the individual's energetic field to understand emotional strain, stress patterns, inner blocks, energetic disturbances, or imbalances that may be contributing to the present concern. The work is compassionate, aware, and deeply individualized, creating a supportive space to explore what may be affecting the person physically, emotionally, or mentally.",
  "Over the years, individuals have shared experiencing relief in long-standing physical concerns such as chronic pain, severe back discomfort, stress-linked symptoms, emotional heaviness, fatigue, and nervous system overwhelm after working consistently with these practices.",
  "At times, physical discomfort may also carry emotional, mental, stress-related, or energetic components beneath the surface. As emotional regulation, stress reduction, inner balance, and overall energetic awareness improve, individuals may also experience supportive shifts in their physical well-being.",
];

const processParagraphs = [
  "Each session is guided intuitively according to the individual's current physical, emotional, and mental state. While holding a calm and grounded space for the individual, I work with the person's energetic field to understand deeper imbalances, emotional patterns, stress responses, behavioural tendencies, or energetic disturbances that may be contributing to the present concern.",
  "At times, the process may help bring awareness to the connection between emotional experiences, mental patterns, lifestyle habits, and physical well-being. Based on what emerges during the session, supportive interventions may be suggested in the form of breathwork, grounding practices, meditation, gentle movement practices, emotional awareness work, lifestyle adjustments, dietary changes, routine-based changes, or other holistic supportive approaches.",
  "The process is highly personalized and evolves according to the individual's response and readiness. In some cases, individuals may experience noticeable shifts within a single session, while in others, the work may unfold more gradually over multiple sessions depending on the depth of the concern and the consistency with which the suggested practices are integrated into daily life.",
  "Intuitive Healing is not approached as passive healing, but as a collaborative process where awareness, participation, consistency, and openness from the individual play an important role in the overall journey toward healing, regulation, and balance.",
];

const supportAreas = [
  "Emotional Stress",
  "Anxiety & Mental Overload",
  "Fatigue & Burnout",
  "Emotional Heaviness",
  "Stress-Linked Physical Discomfort",
  "Recurring Emotional Patterns",
  "Inner Imbalance",
  "Emotional Regulation",
  "Nervous System Grounding",
  "Mind-Body Awareness",
];

const supportAreaRows = [
  {
    rowClassName: "grid w-full max-w-[23rem] grid-cols-2",
    itemClassName: "w-full",
    items: ["Emotional Stress", "Anxiety & Mental Overload"],
  },
  {
    rowClassName: "grid w-full max-w-[21rem] grid-cols-2",
    itemClassName: "w-full",
    items: ["Fatigue & Burnout", "Emotional Heaviness"],
  },
  {
    rowClassName: "flex w-full max-w-[21.5rem]",
    itemClassName: "w-full",
    items: ["Stress-Linked Physical Discomfort"],
  },
  {
    rowClassName: "flex w-full max-w-[20rem]",
    itemClassName: "w-full",
    items: ["Recurring Emotional Patterns"],
  },
  {
    rowClassName: "grid w-full max-w-[22rem] grid-cols-2",
    itemClassName: "w-full",
    items: ["Inner Imbalance", "Emotional Regulation"],
  },
  {
    rowClassName: "grid w-full max-w-[23rem] grid-cols-2",
    itemClassName: "w-full",
    items: ["Nervous System Grounding", "Mind-Body Awareness"],
  },
];

const processSupports = [
  "Breathwork",
  "Meditation",
  "Grounding Practices",
  "Emotional Awareness",
  "Gentle Movement",
  "Lifestyle & Routine Adjustments",
  "Dietary Awareness",
  "Nervous System Regulation",
];

const medicalDisclaimer =
  "The work is not intended to replace medical treatment or licensed healthcare support. It is approached as a complementary and supportive healing practice that may work alongside existing medical or therapeutic care.";

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
    <main className="bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(234,223,206,0.58),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.78),transparent_30%),linear-gradient(135deg,#fffdf8_0%,#fff7ec_58%,#f8f1e8_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.08] text-[#241d18] sm:text-5xl lg:text-6xl">
              Intuitive Healing
            </h1>
            <p className="mx-auto mt-5 max-w-5xl text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-[#8d735f] sm:text-sm sm:leading-7 sm:tracking-[0.22em]">
              Emotional Healing &bull; Energy Balance &bull; Stress Regulation &bull; Inner Stability &bull; Mind-Body Awareness
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <article>
              <div className="space-y-6 text-justify text-base leading-8 text-[#3f372f] sm:text-lg sm:leading-9">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 border-y border-[#e5d9c7] py-8">
                <h2 className="text-2xl font-semibold text-[#2f2822]">
                  What Intuitive Healing May Support
                </h2>
                <div className="mt-5 space-y-3 sm:hidden">
                  {supportAreaRows.map((row) => (
                    <ul key={row.items.join("-")} className={`mx-auto gap-2.5 ${row.rowClassName}`}>
                      {row.items.map((area) => (
                        <li
                          key={area}
                          className={`inline-flex min-h-12 items-center justify-center rounded-xl border border-[#e5d9c7] bg-white/72 px-4 py-2.5 text-center text-sm font-semibold leading-6 text-[#3f352d] shadow-sm ${row.itemClassName}`}
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
                <ul className="mt-6 hidden grid-cols-5 gap-3 sm:grid">
                  {supportAreas.map((area) => (
                    <li
                      key={area}
                      className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#e5d9c7] bg-white/72 px-4 py-3 text-center text-base font-semibold leading-7 text-[#3f352d] shadow-sm"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold leading-tight text-[#2f2822] sm:text-3xl">
                  How the Process Works
                </h2>
                <div className="mt-6 space-y-6 text-justify text-base leading-8 text-[#3f372f] sm:text-lg sm:leading-9">
                  {processParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-[#e5d9c7] bg-[#fbf8f1] p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
                    Supportive Practices May Include
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                  {processSupports.map((support) => (
                    <span
                      key={support}
                      className="rounded-full border border-[#d7c8ad] bg-white/75 px-3.5 py-2 text-sm font-semibold leading-6 text-[#3f352d]"
                    >
                      {support}
                    </span>
                  ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-[#e5d9c7] bg-[#fbf8f1] p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-[#2f2822]">Medical Disclaimer</h2>
                <p className="mt-3 text-justify text-base leading-8 text-[#5d5045]">
                  {medicalDisclaimer}
                </p>
              </div>
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
