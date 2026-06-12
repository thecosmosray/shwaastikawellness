import type { Metadata } from "next";
import MobileTOC from "@/components/MobileTOC";
import NewsletterSignup from "@/components/NewsletterSignup";
import ReadingProgress from "@/components/ReadingProgress";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Rethinking Safety: A Holistic Approach to Personal Security",
  description:
    "Safety is not about men vs women. It is about staying aware, alert and keeping presence of mind whenever in a difficult situation — by Preeti Semwal.",
  path: "/blog",
});

/* ─────────────────────────────────────────────
   EDITORIAL BLOCK COMPONENTS
───────────────────────────────────────────── */

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="blog-pull-quote" role="note">
      <p>{children}</p>
    </blockquote>
  );
}

function ReflectionBlock({ children, label = "Reflection" }: { children: React.ReactNode; label?: string }) {
  return (
    <aside className="blog-reflection" aria-label={label}>
      <span className="blog-block-label">{label}</span>
      <div>{children}</div>
    </aside>
  );
}

function JournalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <aside className="blog-journal-prompt" aria-label="Journal Prompt">
      <span className="blog-block-label">Journal Prompt</span>
      <p className="blog-journal-text">{children}</p>
    </aside>
  );
}

function KeyInsight({ children }: { children: React.ReactNode }) {
  return (
    <aside className="blog-key-insight" aria-label="Key Insight">
      <p className="blog-insight-text">{children}</p>
    </aside>
  );
}

function PracticeCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="blog-practice-card" aria-label={`Practice ${num}: ${title}`}>
      <span className="blog-practice-num" aria-hidden="true">{num}</span>
      <h4 className="blog-practice-title">{title}</h4>
      <div className="blog-practice-body">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────── */

const tocItems = [
  { id: "toc-perception", label: "The Perception of Safety" },
  { id: "toc-answer", label: "What Is the Answer?" },
  { id: "toc-how-to-stay-safe", label: "How to Stay Safe" },
  { id: "toc-closing", label: "Integration & Capacity" },
];

function TableOfContents() {
  return (
    <nav aria-label="Table of contents" className="blog-toc">
      <p className="blog-toc-label">In This Article</p>
      <ol className="blog-toc-list">
        {tocItems.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="blog-toc-link">
              <span className="blog-toc-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   CONTINUE READING
───────────────────────────────────────────── */

const upcomingArticles = [
  {
    num: "01",
    category: "Inner Clarity",
    title: "The Gentle Practice of Returning to Yourself",
    excerpt: "A reflection on inner awareness, emotional steadiness, and the small practices that help us come back into balance.",
  },
  {
    num: "02",
    category: "Intuitive Healing",
    title: "Healing as a Conversation with the Body",
    excerpt: "Notes on listening to subtle signals, working with stress patterns, and creating space for deeper well-being.",
  },
  {
    num: "03",
    category: "Womb Healing",
    title: "Nurturing the Inner Atmosphere",
    excerpt: "A soft exploration of emotional support, conscious motherhood, and the sacred pace of womb-centred healing.",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function BlogPage() {
  return (
    <>
      <ReadingProgress />

      <main className="bg-[#fffdf8]">

        {/* ── HERO HEADER ───────────────────────── */}
        <header className="blog-header">
          <div className="blog-header-inner">
            <p className="blog-eyebrow">
              <span>Holistic Safety</span>
              <span className="blog-eyebrow-dot" aria-hidden="true">·</span>
              <time dateTime="2026-06-04">June 4, 2026</time>
            </p>

            <h1 className="blog-title">
              Rethinking Safety
            </h1>
            <p className="blog-title-sub">A Holistic Approach to Personal Security</p>

            <div className="blog-header-rule" aria-hidden="true" />

            <p className="blog-subtitle">
              Safety is not about men vs women. It is about staying aware, alert,
              and keeping presence of mind — and more importantly, feeling safe within.
            </p>

            <div className="blog-author">
              <span className="blog-author-byline">
                By <em>Preeti Semwal</em>
              </span>
            </div>
          </div>
        </header>

        {/* ── ARTICLE LAYOUT ────────────────────── */}
        <div className="blog-layout">

          <aside className="blog-toc-sidebar" aria-label="Article navigation">
            <TableOfContents />
          </aside>

          <article className="blog-article" id="article-content">

            <MobileTOC />

            {/* ── Opening ── */}
            <p className="blog-lede" id="toc-perception">
              It&apos;s been a while since I wrote about something. Let me share the reason
              why I write today. Well, I was almost swept away into the confluence of the
              Arabian Sea, the Bay of Bengal and the Indian Ocean a few days ago.
            </p>

            <p>
              It&apos;s not the first time my tryst with adventure was to take me to the
              better side of life, tenth to be precise. But like every other time, I had an
              amazing realisation about a lot of things.
            </p>

            <p>
              Those few seconds of my life can be described and dissected into many lessons.
              Today, however, I want to talk only about one — safety and how we perceive it!
            </p>

            <p>
              Have you thought about why we talk about &ldquo;women&apos;s&rdquo; safety and
              celebrate a whole month around it? I am not an advocate of the &ldquo;unsafe
              world&rdquo; and &ldquo;men are the predators&rdquo; theory. Before we get into
              a heated debate here, pause. Yes, bad things have happened to women where men
              were responsible, and they are still happening as we talk. But to me, if we
              focus only on this as the reason, we lose sight of what is relevant to
              &ldquo;women&apos;s&rdquo; safety. We can surely agree to disagree.
            </p>

            <p>
              Over many years of working with people irrespective of gender, my learning is
              that we perceive everything in a magnified way. Our view of the world is a
              reflection — a reflection that comes from our own experiences or from something
              that we consume in our minds consciously or subconsciously, directly or
              indirectly.
            </p>

            <ReflectionBlock label="A Personal Story">
              <p>
                As a kid, I had an Atlas silver bicycle to ride to school. I was so
                embarrassed being seen riding it because, to me, it was a very plain-looking
                cycle. My sister and friends all had better-looking ones. I had started
                disliking riding a bicycle for that reason, something which I otherwise
                loved so much.
              </p>
              <p>
                I was struggling all alone with this trauma and in one of those most difficult
                phases of my life Salman Khan came to rescue me riding his bicycle in{" "}
                <em>Maine Pyaar Kiya</em>. Suddenly, I was not riding on the road; I was on
                cloud nine. I became the charismatic Salman impressing the whole world on her
                cool bike. Thanks to <em>Maine Pyaar Kiya</em>, today I live with one less
                PTSD.
              </p>
            </ReflectionBlock>

            <p>
              But that was also my first first-hand learning — that we see things the way we
              feel. Suddenly, I was confident about the same bicycle which was pulling me down
              every time I looked at it.
            </p>

            <PullQuote>
              To teach someone the importance of staying safe, why should we make them feel
              paranoid first?
            </PullQuote>

            <p>
              Now let me bring this back to safety and women. What is safety? When we do not
              feel threatened and can continue being in that space comfortably. To me, in this
              era of hard selling, we have done the same thing with safety, and to me it is
              irresponsible.
            </p>

            <p>
              Yes, as a woman I know what it means to feel unsafe. But thanks to my wide and
              vivid experiences of life, I learnt that safety is not about men vs women.
              Safety is about staying aware, alert and keeping presence of mind whenever in a
              difficult situation. Safety is about being capable of keeping not only yourself
              but others also safe, even if the others are men. Sadly, somewhere
              &lsquo;women&apos;s safety&rsquo; thus got reduced to fighting men with a few
              martial arts techniques or pepper spray.
            </p>

            <p>
              If only we understand how we perceive things and how our minds react to those,
              we can be equipped to keep ourselves safe. In one of the workshops that I was
              conducting, a woman shared her experience of how she feels unsafe bringing a
              child into this world. To her, the fears were all real. There was nothing
              untrue about it, but the question here is how many of you would agree to that?
              I see so many excited expectant parents and so many distraught ones who are
              unable to conceive. It is the same world we are talking about. Where that woman
              comes from is a space of acute fear. To some of you it may be exaggerated, but
              to her it is real — as real as me transforming into Salman Khan on the bicycle.
            </p>

            {/* ── Layers of the Answer ── */}
            <section className="blog-section-block" aria-labelledby="toc-answer">
              <h2 className="blog-section-heading" id="toc-answer">
                The real question — what is the answer?
              </h2>
              <p className="blog-section-intro">
                There are multiple layers to the answer. I would like to take you one at a time.
              </p>

              <div className="blog-layers">
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">01</span>
                  <p>
                    Let&apos;s start talking about safety as a <strong>gender-neutral
                    concept</strong>. Only then would we be able to take a holistic approach
                    in our learning and not limit it to &lsquo;saving ourselves when attacked
                    by the other half of the society&rsquo;.
                  </p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">02</span>
                  <p>
                    Why women? Not because women are weak but because <strong>men are
                    physically stronger</strong>. Anyone who is weak be it a man or a woman
                    would struggle to save themselves if attacked by a stronger person. Also,
                    historically men have been the hunters and largely the warriors. Women,
                    biologically being the nurturer, are generally contrary to aggression in
                    their core nature.
                  </p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">03</span>
                  <p>
                    We need to <strong>understand the reasons behind our actions and
                    reactions</strong>. To someone, travelling alone in a compartment full of
                    men may not be a challenge, but someone else may choose to wait an extra
                    30 minutes for a women&apos;s compartment. If our actions and reactions
                    pull us down with fear, stress, unhappiness, depression — taking the best
                    of us — can we do something about it?
                  </p>
                </div>
              </div>

              <JournalPrompt>
                Think of one moment when you felt genuinely unsafe. Was the threat outside
                you, or did it live within your own perception? What would it look like to
                meet that same situation from a place of inner calm?
              </JournalPrompt>
            </section>

            {/* ── How to Stay Safe ── */}
            <section className="blog-section-block blog-section-cream" aria-labelledby="toc-how-to-stay-safe">
              <h2 className="blog-section-heading" id="toc-how-to-stay-safe">
                How to stay safe
              </h2>

              <div className="blog-practices-scroll">
              <div className="blog-practices-grid">
                <PracticeCard num="01" title="First, feel safe within">
                  <p>
                    Till the time we feel unsafe within, there is no way we can react in an
                    unsafe situation. When we already feel unsafe within, everything happening
                    outside gets magnified and takes control over us. Work on emotional and
                    mental wellbeing. Past trauma triggers lead a person to freeze instead of
                    taking action. Staying calm is what we need in a crisis — take help of an
                    expert to become a strong person.
                  </p>
                </PracticeCard>

                <PracticeCard num="02" title="Trust your gut">
                  <p>
                    We feel a danger before it approaches us. Most of the times we hear people
                    sharing how they were already uncomfortable about a place, person or
                    situation before it happened. That is our gut, instinct or sixth sense.
                    Trust it when it warns you.
                  </p>
                </PracticeCard>

                <PracticeCard num="03" title="Devote time to physical fitness">
                  <p>
                    Start a routine — run, walk, exercise, swim, or do yoga. Become confident
                    that if a time comes, you can disengage, run, or even fight for life if
                    the need arises. Threat activates our sympathetic nervous system — fight
                    or flight. A fit person can survive longer in that mode.
                  </p>
                </PracticeCard>

                <PracticeCard num="04" title="Train yourselves through exposure">
                  <p>
                    Travel, be outdoors, come out of your comfort zones. The best way to build
                    muscle memory is the kinesthetics way. When the giant wave pulled me in and
                    threw me upside down, before I knew it, I was already reaching out for the
                    perfect holds on the rock. All the experience of climbing mountains came
                    back in a flash.
                  </p>
                </PracticeCard>

                <PracticeCard num="05" title="Knowledge is power">
                  <p>
                    Knowledge brings control. Control brings confidence. Read relevant books,
                    talk to experts, attend workshops or conferences. Stay updated with new
                    techniques and relevant information like legal provisions and cybersecurity.
                  </p>
                </PracticeCard>

                <PracticeCard num="06" title="Do not approach safety with fear">
                  <p>
                    &ldquo;I have to learn to be safe because I am in an unsafe
                    environment&rdquo; will always keep you in an alert mode. To perceive a
                    situation and threat as it is, without magnifying it, we must be calm
                    within even when fighting for our lives.
                  </p>
                </PracticeCard>
              </div>
              </div>
            </section>

            {/* ── Closing ── */}
            <section className="blog-section-block" aria-labelledby="toc-closing">
              <h2 className="blog-section-heading" id="toc-closing">
                Integration and Capacity
              </h2>

              <KeyInsight>
                Receiving help in distress is all we can ask for — but being dependent on
                others for our safety is always a hindrance in becoming capable. Safety comes
                from integration of a fit body, capable mind and a calm state under pressure.
              </KeyInsight>

              <p>
                That can be achieved only by working on ourselves regularly in that direction.
              </p>

              <ReflectionBlock label="From the Ocean">
                <p>
                  While I was fighting for my life, I was able to calculate all the required
                  elements in that situation. I was aware of the sudden depth under my feet,
                  I knew the limited window before the next wave pulled me in, I could look
                  for the right holds under the rock, I was taking help of the wave to throw
                  me towards the beach — and I was already prepared to kill my husband, who I
                  could see merely standing there looking at me (possibly happy).
                </p>
              </ReflectionBlock>

              <PullQuote>
                Like we say, the more you sweat in training, the less you bleed in war.
                Safety is not fashion or a topic in vogue. It is the basis of our existence.
              </PullQuote>

              <p>
                Let us build our capabilities towards safe individuals and a safe society.
              </p>
            </section>

          </article>
        </div>

        {/* ── CONTINUE READING ──────────────────── */}
        <section className="blog-continue" aria-label="Continue reading">
          <div className="blog-continue-inner">
            <p className="blog-block-label" style={{ marginBottom: "2rem" }}>Continue Reading</p>
            <p className="blog-continue-headline">More reflections from Shwaastika Wellness</p>
            <ol className="blog-continue-list">
              {upcomingArticles.map((a) => (
                <li key={a.num} className="blog-continue-item">
                  <span className="blog-continue-num" aria-hidden="true">{a.num}</span>
                  <div>
                    <p className="blog-continue-cat">{a.category}</p>
                    <p className="blog-continue-title">{a.title}</p>
                    <p className="blog-continue-excerpt">{a.excerpt}</p>
                    <p className="blog-continue-soon">Coming soon</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <NewsletterSignup />

      </main>
    </>
  );
}
