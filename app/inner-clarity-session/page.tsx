import type { Metadata } from "next";
import InnerClarityTabs from "@/components/InnerClarityTabs";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Inner Clarity Session",
  description:
    "Inner Clarity Sessions with Preeti Semwal offer intuitive insight for emotional patterns, relationships, life transitions, and grounded next steps.",
  alternates: {
    canonical: "/inner-clarity-session",
  },
};

export default function InnerClaritySessionPage() {
  return (
    <main className="bg-[#fbf8f1]">
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(199,214,189,0.55),transparent_28%),linear-gradient(135deg,#fbf8f1_0%,#f3eadb_58%,#eef4e9_100%)]" />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8b65]">
              Guided Session
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl lg:text-6xl">
              Inner Clarity Session
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <Reveal>
          <article className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-[#3f372f]">
            <p>
              Every moment, you live inside a vast field of energy that holds every
              thought, feeling and possibility this is your higher-consciousness energy
              field. Psychic Guidance is the blend of these unseen energies with your
              strong intention, creating a safe place where old wisdom and fresh insight
              come together to light your path. Think of your energy field as an invisible
              library where memories, dreams, and intuitive sparks are quietly stored.
              When you get that sudden &quot;gut feeling,&quot; that flash of clarity or the sense
              that someone just called your name before you looked at your phone, you&apos;ve
              tapped into this field. Those moments show that messages about your path,
              your purpose and your next steps are already swirling around you, waiting to
              be noticed.
            </p>
            <p>
              Remember the last time you felt drawn to take a different route home or
              knew exactly what to say in a tough conversation before you spoke? That&apos;s
              your intuition pulsing up from the energy field. Inner Clarity Session
              simply brings this process into the light. In each session, I tune into the
              gentle flow of your energy, revealing hidden patterns and inner truths. With
              clear vision and kind support, we lift away doubts, face what&apos;s been buried
              and spark your highest potential. You&apos;ll leave with simple, practical steps
              and a deeper sense of connection to the wiser, more powerful part of yourself
              and the universe co-creating the next bold chapter of your journey.
            </p>

            <div className="rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-[#2f2822]">What This Session Offers</h2>
              <ul className="mt-6 space-y-3 text-base leading-8">
                <li>Clarity on relationships, career choices, emotional patterns and life transitions</li>
                <li>Gentle exploration of past wounds or recurring cycles with healing suggestions</li>
                <li>Practical, actionable guidance: rituals, boundaries, breath practices, journaling prompts</li>
                <li>A held, non-judgmental space to ask any question for yourself or a loved one</li>
              </ul>
            </div>
          </article>
        </Reveal>
      </section>

      <InnerClarityTabs />
    </main>
  );
}
