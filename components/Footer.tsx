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
    <footer className="border-t border-[#d8cab5] bg-[#2f2822] px-5 py-9 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_1fr_0.9fr] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d7c8ad]/70 bg-[#fbf8f1] p-0.5 text-xs font-semibold text-[#f3eadb]">
              <Image
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-full w-full rounded-full object-contain"
              />
            </span>
            <div>
              <p className="text-base font-semibold leading-tight">SHWAASTIKA WELLNESS</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#c7d6bd]">AKR WELLNESS</p>
              <p className="text-xs italic text-[#c7bda8]">By Preeti Semwal</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-base font-semibold italic leading-7 text-[#f3eadb]">
            Transformative Energy Work for Mind, Body & Spirit
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d6bd]">Quick Links</h2>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-[#e8decc] sm:grid-cols-2">
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
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d6bd]">Contact</h2>
          <div className="mt-4 space-y-2 text-sm leading-7 text-[#e8decc]">
            <p>
              <span className="font-semibold text-white">Phone No.</span>{" "}
              +91-9310685448
            </p>
            <p>Yapral, Secunderabad-87 (Hyderabad)</p>
            <p>India</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-[#c7bda8]">
        <p>Copyright 2026 SHWAASTIKA WELLNESS. All rights reserved.</p>
      </div>
    </footer>
  );
}
