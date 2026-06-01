import type { Metadata } from "next";
import AreasOfSupport from "@/components/AreasOfSupport";
import InnerClarityTabs from "@/components/InnerClarityTabs";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Inner Clarity | Preeti Semwal",
  description:
    "Explore inner clarity sessions by Preeti Semwal for emotional awareness, intuitive guidance, life transitions, and deeper self-connection.",
  path: "/inner-clarity-session",
});

const introParagraphs = [
  "There are phases in life when people seek guidance, clarity, and a deeper understanding of what they are experiencing emotionally, mentally, or personally. Much like people seek insight through tarot, astrology, numerology, or other guidance systems during confusing or emotionally difficult situations, Inner Clarity is also designed to help individuals understand themselves and their situations more deeply.",
  "The difference however is that these sessions do not work through any external tools or fixed systems. Instead the process works intuitively through the individual's own emotional and energetic field.",
  "The intention is not to provide dependency-based answers but to support greater self-awareness, emotional understanding, practical clarity, and a more grounded connection with oneself.",
  "Many individuals leave the sessions feeling emotionally lighter, mentally clearer, more balanced, and better able to move forward with awareness and confidence.",
];

const sessionOffers = [
  "Clarity on relationships",
  "Career choices",
  "Emotional patterns",
  "Life transitions",
  "Understanding recurring cycles",
  "Boundaries & emotional balance",
  "Breath practices & journaling prompts",
  "Practical guidance & self-reflection",
  "Space to ask questions openly",
  "Emotional grounding & clarity",
];

export default function InnerClaritySessionPage() {
  return (
    <main className="bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(234,223,206,0.58),transparent_28%),linear-gradient(135deg,#fffdf8_0%,#fff7ec_58%,#f8f1e8_100%)]" />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] text-[#241d18] sm:text-5xl lg:text-6xl">
              Inner Clarity
            </h1>
            <p className="mx-auto mt-5 max-w-5xl text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-[#8d735f] sm:text-sm sm:leading-7 sm:tracking-[0.22em]">
              Emotional Understanding &bull; Life Transitions &bull; Decision-Making &bull; Relationship Patterns &bull; Deeper Self-Awareness
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <Reveal>
          <article className="mx-auto max-w-[75rem]">
            <div className="mx-auto max-w-[52rem]">
              <h2 className="text-3xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
                What Inner Clarity Is
              </h2>
              <div className="editorial-prose mt-8">
                <p>{introParagraphs[0]}</p>
                <p>
                  The difference however is that these sessions do not work through any
                  external tools or fixed systems. Instead the process works intuitively
                  through the individual&apos;s own{" "}
                  <span className="editorial-highlight">emotional and energetic field</span>.
                </p>
                <p>
                  The intention is not to provide dependency-based answers but to support{" "}
                  <span className="editorial-highlight">greater self-awareness</span>,
                  emotional understanding, practical clarity, and a more grounded connection
                  with oneself.
                </p>
                <p>
                  Many individuals leave the sessions feeling emotionally lighter, mentally
                  clearer, more balanced, and better able to move forward with{" "}
                  <span className="editorial-highlight">awareness and confidence</span>.
                </p>
              </div>
            </div>

            <AreasOfSupport
              eyebrow="Areas of support"
              title="What This Session Offers"
              items={sessionOffers}
            />
          </article>
        </Reveal>
      </section>

      <InnerClarityTabs />
    </main>
  );
}
