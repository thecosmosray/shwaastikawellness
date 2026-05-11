import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Womb Healing & Prenatal Support",
  description:
    "Womb Healing and prenatal support with Preeti Semwal offers a nurturing space for pregnancy, emotional transitions, mother-baby connection, and mindful well-being.",
  alternates: {
    canonical: "/womb-healing",
  },
};

const approachParagraphs = [
  "Pregnancy is a deeply significant and transformative phase. It is not only about giving birth to a child but about nurturing the beginning of a new life.",
  "During this time, the mother becomes a primary space of support physically, emotionally and internally. The quality of this space shaped by her awareness, thoughts and daily practices, plays an important role in her own well-being and in the early environment surrounding the baby.",
  "The experience of the baby in the womb is its earliest connection to the world. While it does not define everything that follows, it forms a meaningful foundation. The mother’s inner state her calm, balance and awareness can help create a more nurturing and supportive environment during this phase.",
  "It is natural for many thoughts, emotions and impressions to arise during pregnancy. With the right guidance and conscious practices, this phase can become one of greater steadiness, clarity and inner ease. This work is designed to support you in moving through this phase with greater awareness and inner steadiness holding both the physical and subtle aspects of your experience with care.",
];

const wombDescription = [
  "Womb Healing is a deeply nurturing and intuitive practice designed to support women through the emotional, physical, and spiritual journey of conception, pregnancy, birth, and postpartum recovery. Rather than following a fixed structure or routine, each session unfolds as a personalized and responsive experience, carefully attuned to the unique needs, emotions, and stage of life of the individual.",
  "Rooted in compassion, presence, and energetic awareness, this work creates a safe and sacred space where women can reconnect with their bodies, release emotional tension, restore inner balance, and cultivate a deeper bond with themselves and their child. The process is gentle, supportive, and deeply grounding, allowing mothers to feel seen, heard, and emotionally supported throughout their journey.",
  "As a certified pre and postnatal yoga practitioner, I bring a grounded understanding of the physiological and emotional changes that occur during pregnancy and recovery. Through gentle movement, breath awareness, relaxation techniques, and intuitive guidance, I support holistic well-being for both mother and child.",
  "Beyond physical support, Womb Healing also works on subtle energetic levels, helping mothers feel emotionally held, spiritually aligned, and deeply connected to their inner wisdom. Whether preparing for birth, navigating postpartum transitions, healing emotional wounds connected to the womb space, or simply seeking peace and reconnection, this practice offers a compassionate pathway toward harmony, resilience, empowerment, and inner calm.",
];

const sessionIncludes = [
  "Safe and guided yoga asanas adapted to your stage",
  "Pranayama (breathwork) to support calm, stability and energy balance",
  "Meditation and awareness practices for emotional grounding and inner connection",
];

const forYouItems = [
  "Pregnant and seeking a calm, supported space",
  "Navigating emotional or physical changes",
  "Looking to connect more deeply with your body and inner state",
  "Seeking a more mindful and aware approach to this phase",
];

export default function WombHealingPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#fbf8f1] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(199,214,189,0.45),transparent_26%),linear-gradient(135deg,#fffdf8_0%,#fbf8f1_58%,#f3eadb_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8b65]">
              Prenatal Support
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-[#120f0c] sm:text-5xl lg:text-6xl">
              Womb Healing & Prenatal Support
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-4 shadow-xl shadow-[#6b513b]/8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#f3eadb]">
                <Image
                  src="/images/womb%20healing.jpg"
                  alt="Womb Healing and prenatal support session"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/30 via-transparent to-white/10" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                Womb Healing
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f2822]">Womb Healing</h2>
              <div className="mt-7 space-y-6 text-lg leading-8 text-[#4b423b]">
                {wombDescription.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 sm:px-8 lg:px-10">
        <Reveal>
          <article className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              The Approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822]">The Approach</h2>
            <div className="mt-7 space-y-7 text-lg leading-9 text-[#4b423b]">
              {approachParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden bg-[#b8b7bf] px-5 py-16 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(199,214,189,0.55),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(190,123,84,0.24),transparent_24%),radial-gradient(circle_at_32%_74%,rgba(238,215,246,0.7),transparent_34%),linear-gradient(135deg,#bcbac4_0%,#e7e1da_54%,#c5c7c0_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/40 bg-white/68 p-6 shadow-xl shadow-[#6b513b]/10 backdrop-blur-md sm:p-8 lg:p-10">
            <h2 className="text-center text-4xl font-semibold text-[#1d63ff]">
              What the session includes
            </h2>
            <ul className="mx-auto mt-8 max-w-4xl space-y-4 text-lg leading-8 text-[#2f2822]">
              {sessionIncludes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#3f5f46]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-[#2f2822]">
              These elements are woven together to support not just the physical body but
              also the deeper emotional and energetic experience of this phase.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-7 shadow-sm sm:p-9">
              <h2 className="text-3xl font-semibold text-[#2f2822]">
                Womb & Baby Connection
              </h2>
              <div className="mt-7 space-y-6 text-lg leading-8 text-[#4b423b]">
                <p>
                  The work is held with a deep sensitivity to the womb space, creating a
                  sense of calm, connection and support that can be experienced by both
                  the mother and the baby.
                </p>
                <p>
                  It offers a space where the mother can consciously slow down, reconnect
                  and cultivate a more balanced and nurturing internal environment through
                  her pregnancy journey.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="h-full rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-7 shadow-sm sm:p-9">
              <h2 className="text-3xl font-semibold text-[#2f2822]">
                This is for you if you are:
              </h2>
              <ul className="mt-7 space-y-4 text-lg leading-8 text-[#4b423b]">
                {forYouItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#3f5f46]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
