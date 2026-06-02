import Image from "next/image";
import type { ReactNode } from "react";

type ServiceContentSectionProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  imageFit?: "object-cover" | "object-contain";
  imagePosition?: string;
  imageSizes?: string;
  imagePriority?: boolean;
  panelClassName?: string;
  contentClassName?: string;
  imageAspectRatio?: string;
};

export const serviceEyebrowClass =
  "text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8b65]";

export const serviceTitleClass =
  "text-2xl font-semibold leading-tight text-[#2f2822] sm:text-3xl";

export const serviceBodyClass =
  "text-base leading-8 text-[#4b423b] sm:text-[1.0625rem] sm:leading-8";

export const serviceSubheadingClass =
  "text-base font-semibold leading-7 text-[#2f2822] sm:text-lg";

export const serviceInsetGroupClass =
  "mt-5 grid gap-x-7 gap-y-4 sm:mt-6 lg:grid-cols-2";

export const serviceListClass =
  "mt-5 space-y-2.5 text-base leading-8 text-[#3f372f] sm:mt-6 sm:space-y-3 sm:text-[1.0625rem]";

export function ServiceBulletList({ items }: { items: string[] }) {
  return (
    <ul className={serviceListClass}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a9f78] sm:mt-4 sm:h-2 sm:w-2" />
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceContentSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  children,
  imageFit = "object-cover",
  imagePosition = "object-center",
  imageSizes = "(max-width: 640px) 100vw, 24rem",
  imagePriority = false,
  panelClassName = "",
  contentClassName = "",
  imageAspectRatio = "aspect-[4/3]",
}: ServiceContentSectionProps) {
  return (
    <div
      className={`grid items-start gap-7 border-y border-[#eadfce] py-8 sm:gap-8 sm:py-10 lg:grid-cols-[minmax(0,0.66fr)_minmax(15rem,0.34fr)] lg:gap-12 ${panelClassName}`}
    >
      <div className={`max-w-[52rem] ${contentClassName}`}>
        {eyebrow ? <p className={serviceEyebrowClass}>{eyebrow}</p> : null}
        {title ? (
          <h2 className={`${eyebrow ? "mt-3" : ""} ${serviceTitleClass}`}>
            {title}
          </h2>
        ) : null}
        <div className={title || eyebrow ? "mt-5 sm:mt-6" : ""}>{children}</div>
      </div>

      <div className="group w-full max-w-[24rem] overflow-hidden rounded-[1rem] border border-[#eadfce] bg-[#fffaf2] lg:justify-self-end order-first lg:order-none">
        <div className={`relative ${imageAspectRatio} overflow-hidden bg-[#dfe9d8] transition duration-500 group-hover:scale-[1.01]`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`${imageFit} ${imagePosition}`}
            sizes={imageSizes}
            priority={imagePriority}
            loading={imagePriority ? "eager" : "lazy"}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/12 via-transparent to-white/5" />
        </div>
      </div>
    </div>
  );
}
