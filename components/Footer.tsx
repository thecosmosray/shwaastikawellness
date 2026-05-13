import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Inner Clarity Session", href: "/inner-clarity-session" },
  { label: "Intuitive Healing", href: "/intuitive-healing" },
  { label: "Womb Healing", href: "/womb-healing" },
  { label: "Book A Session", href: "/book-a-session" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Corporate Workshop", href: "/corporate-workshop" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d8cab5] bg-[#2f2822] px-5 py-6 text-white sm:px-8 sm:py-9 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:grid-cols-[1.05fr_1fr_0.9fr] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d7c8ad]/70 bg-[#fbf8f1] p-0.5 text-xs font-semibold text-[#f3eadb] sm:h-10 sm:w-10">
              <Image
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-full w-full rounded-full object-contain"
              />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight sm:text-base">Shwaastika Wellness</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#c7d6bd] sm:text-[11px] sm:tracking-[0.18em]">AKR WELLNESS</p>
              <p className="text-[11px] italic text-[#c7bda8] sm:text-xs">By Preeti Semwal</p>
            </div>
          </div>
          <p className="mt-3 max-w-sm text-sm font-semibold italic leading-6 text-[#f3eadb] sm:mt-4 sm:text-base sm:leading-7">
            Transformative Energy Work for Mind, Body & Spirit
          </p>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c7d6bd] sm:text-xs sm:tracking-[0.2em]">Quick Links</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1.5 text-[13px] text-[#e8decc] sm:mt-4 sm:gap-x-6 sm:gap-y-2 sm:text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c7d6bd] sm:text-xs sm:tracking-[0.2em]">Contact</h2>
          <div className="mt-3 space-y-1 text-[13px] leading-6 text-[#e8decc] sm:mt-4 sm:space-y-2 sm:text-sm sm:leading-7">
            <p>
              <span className="font-semibold text-white">Phone No.</span>{" "}
              +91-9310685448
            </p>
            <p>Yapral, Secunderabad-87 (Hyderabad)</p>
            <p>India</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-4 text-[11px] text-[#c7bda8] sm:mt-8 sm:pt-5 sm:text-xs">
        <p>Copyright 2026 Shwaastika Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
}
