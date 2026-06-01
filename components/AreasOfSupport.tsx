type AreasOfSupportProps = {
  eyebrow?: string;
  title: string;
  items: string[];
};

function SupportGlyph({ index }: { index: number }) {
  const commonProps = {
    className: "h-3 w-3 sm:h-3.5 sm:w-3.5",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  const glyphs = [
    <svg key="leaf" {...commonProps}>
      <path d="M5 19c6.5-.5 12-6 14-14-8 2-13.5 7.5-14 14Z" />
      <path d="M5 19c3.5-4.5 7.5-7.5 12-9" />
    </svg>,
    <svg key="spark" {...commonProps}>
      <path d="m12 4 1.35 4.65L18 10l-4.65 1.35L12 16l-1.35-4.65L6 10l4.65-1.35L12 4Z" />
      <path d="M18.5 15.5 20 17l-1.5 1.5L17 17l1.5-1.5Z" />
    </svg>,
    <svg key="circle" {...commonProps}>
      <circle cx="12" cy="12" r="6.5" />
      <path d="M12 8.5v7" />
      <path d="M8.5 12h7" />
    </svg>,
  ];

  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e0d2bc] bg-[#fffdf8] text-[#8a6a4f] sm:h-6 sm:w-6">
      {glyphs[index % glyphs.length]}
    </span>
  );
}

export default function AreasOfSupport({ eyebrow, title, items }: AreasOfSupportProps) {
  return (
    <section className="mt-8 border-y border-[#eadfce] py-6 sm:mt-12 sm:py-10">
      <div className="mx-auto max-w-[52rem] text-center">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a735f]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className={`${eyebrow ? "mt-2 sm:mt-3" : ""} text-2xl font-semibold leading-tight text-[#2f2822] sm:text-4xl`}>
          {title}
        </h2>
      </div>

      <ul className="mx-auto mt-5 grid max-w-[58rem] grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
        {items.map((item, index) => (
          <li key={item}>
            <span className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full border border-[#e5d9c7] bg-[#fffaf2] px-2.5 py-2 text-center text-[12px] font-semibold leading-4 text-[#3f352d] shadow-sm shadow-[#6b513b]/5 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#d7c4a7] hover:bg-white hover:shadow-md hover:shadow-[#6b513b]/8 sm:min-h-11 sm:w-auto sm:justify-start sm:gap-2 sm:px-5 sm:py-2.5 sm:text-base sm:leading-5">
              <SupportGlyph index={index} />
              <span>{item}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
