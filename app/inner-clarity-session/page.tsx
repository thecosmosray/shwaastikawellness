import type { Metadata } from "next";
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

const sessionOfferRows = [
  {
    rowClassName: "grid w-full max-w-[23rem] grid-cols-2",
    itemClassName: "w-full",
    items: ["Clarity on relationships", "Career choices"],
  },
  {
    rowClassName: "grid w-full max-w-[21rem] grid-cols-2",
    itemClassName: "w-full",
    items: ["Emotional patterns", "Life transitions"],
  },
  {
    rowClassName: "flex w-full max-w-[17rem]",
    itemClassName: "w-full",
    items: ["Understanding recurring cycles"],
  },
  {
    rowClassName: "flex w-full max-w-[19rem]",
    itemClassName: "w-full",
    items: ["Boundaries & emotional balance"],
  },
  {
    rowClassName: "flex w-full max-w-[21.5rem]",
    itemClassName: "w-full",
    items: ["Breath practices & journaling prompts"],
  },
  {
    rowClassName: "flex w-full max-w-[20.25rem]",
    itemClassName: "w-full",
    items: ["Practical guidance & self-reflection"],
  },
  {
    rowClassName: "flex w-full max-w-[18rem]",
    itemClassName: "w-full",
    items: ["Space to ask questions openly"],
  },
  {
    rowClassName: "flex w-full max-w-[18rem]",
    itemClassName: "w-full",
    items: ["Emotional grounding & clarity"],
  },
];

const sessionOffers = sessionOfferRows.flatMap((row) => row.items);

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
          <article className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
              What Inner Clarity Is
            </h2>
            <div className="mt-7 space-y-6 text-justify text-base leading-8 text-[#3f372f] sm:text-lg sm:leading-9">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-y border-[#e5d9c7] py-8">
              <h2 className="text-2xl font-semibold text-[#2f2822]">What This Session Offers</h2>
              <div className="mt-5 space-y-3 sm:hidden">
                {sessionOfferRows.map((row) => (
                  <ul key={row.items.join("-")} className={`mx-auto gap-2.5 ${row.rowClassName}`}>
                    {row.items.map((offer) => (
                      <li
                        key={offer}
                        className={`inline-flex min-h-12 items-center justify-center rounded-xl border border-[#e5d9c7] bg-white/72 px-4 py-2.5 text-center text-sm font-semibold leading-6 text-[#3f352d] shadow-sm sm:px-5 sm:text-base ${row.itemClassName}`}
                      >
                        {offer}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <ul className="mt-6 hidden grid-cols-5 gap-3 sm:grid">
                {sessionOffers.map((offer) => (
                  <li
                    key={offer}
                    className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#e5d9c7] bg-white/72 px-4 py-3 text-center text-base font-semibold leading-7 text-[#3f352d] shadow-sm"
                  >
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </section>

      <InnerClarityTabs />
    </main>
  );
}
