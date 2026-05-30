export default function HomeIntro() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(234,219,226,0.28),transparent_24%),linear-gradient(180deg,#ffffff_0%,#fffaf2_48%,#ffffff_100%)]" />
      <div className="absolute left-1/2 top-8 -z-10 h-64 w-64 -translate-x-1/2 rounded-full border border-[#d7c8ad]/20" />
      <div className="absolute bottom-10 right-[12%] -z-10 h-40 w-40 rounded-full bg-[#eadfce]/36 blur-3xl" />

      <article className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a6f55]">
          Founder Message
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#17120f] sm:text-4xl">
          A Space to Return Home to Yourself
        </h2>
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-base leading-8 text-[#332b24] sm:space-y-6 sm:text-xl sm:leading-10">
          <p>
            Wellness comes with a choice. A choice to look within, to listen deeply, and to
            surrender to the wisdom beyond the mind.
          </p>
          <p>
            True transformation doesn&apos;t come from curiosity alone it comes from the
            strong desire to live fully, with hope and belief that something greater is
            guiding us.
          </p>
          <p>
            This is the space I hold: a space where you are invited to reconnect with
            yourself, release what weighs you down and step into balance, joy and clarity.
          </p>
          <p>
            Whether through intuitive healing or inner clarity, the journey begins when
            you are ready to surrender - ready to return home to yourself.
          </p>
          <p className="pt-2 text-right font-semibold italic text-[#7a6b5e]">
            -Preeti Semwal Bembi
          </p>
        </div>
      </article>
    </section>
  );
}
