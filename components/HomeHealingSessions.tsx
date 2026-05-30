import Link from "next/link";
import Reveal from "@/components/Reveal";

const healingSessions = [
  {
    eyebrow: "Clarity",
    title: "Inner Clarity Sessions",
    description:
      "For emotional understanding, life transitions, decision-making, and deeper self-awareness.",
    button: "Explore Inner Clarity",
    href: "/inner-clarity-session",
  },
  {
    eyebrow: "Healing",
    title: "Intuitive Healing",
    description:
      "For deeper physical, emotional, and mental healing through energy work and guided practices.",
    button: "Explore Intuitive Healing",
    href: "/intuitive-healing",
  },
  {
    eyebrow: "Nurture",
    title: "Womb Healing & Prenatal Support",
    description:
      "For pregnancy, womb connection, emotional support, and deeper feminine well-being.",
    button: "Explore Womb Healing",
    href: "/womb-healing",
  },
];

export default function HomeHealingSessions() {
  return (
    <section id="choose-healing-session" className="relative isolate scroll-mt-24 overflow-hidden bg-[#fffdf8] px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(223,238,247,0.34),transparent_25%),linear-gradient(135deg,#ffffff_0%,#fff8ef_46%,#fffdf8_100%)]" />
      <div className="absolute left-[8%] top-12 -z-10 h-44 w-44 rounded-full bg-[#eadbe2]/46 blur-3xl" />
      <div className="absolute bottom-10 right-[8%] -z-10 h-52 w-52 rounded-full bg-[#f0e5d6]/48 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a6f55]">
            Healing Sessions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17120f] sm:text-4xl">
            Choose Your Healing Session
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {healingSessions.map((session, index) => (
            <Reveal key={session.title} delay={index * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-[1.35rem] border border-[#eadfce] bg-white p-5 shadow-sm shadow-[#6b513b]/5 transition hover:-translate-y-1 hover:border-[#d8c7ad] hover:shadow-xl hover:shadow-[#6b513b]/8 sm:rounded-[1.75rem] sm:p-6">
                <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,#9a6f55,#eadbe2,#dfeef7)]" />
                <div className="flex h-full flex-col">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a6f55]">
                    {session.eyebrow}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-[#17120f]">
                    {session.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4f463e]">
                    {session.description}
                  </p>
                  <Link
                    href={session.href}
                    className="mt-7 inline-flex w-full justify-center rounded-full border border-[#d8c7ad] bg-[#fffdf8] px-5 py-3 text-center text-sm font-semibold text-[#3f352d] transition hover:border-[#8d735f] hover:bg-white group-hover:border-[#8d735f] sm:mt-auto"
                  >
                    {session.button}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
