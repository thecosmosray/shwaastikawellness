"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
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

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello+%EF%BF%BD%0AWelcome+to+Shwaastika+Wellness.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A%E2%80%A2+Your+concern+or+goal%0A%E2%80%A2+Preferred+service%0A%E2%80%A2+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly+%EF%BF%BD&type=phone_number&app_absent=0";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f7f2e8]/88 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[92rem] items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="SHWAASTIKA WELLNESS home">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c8d9e5] bg-white/75 shadow-sm"
          >
            <span className="h-3 w-3 rounded-full bg-[#4f6574]" />
          </span>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold tracking-[0.04em] text-[#263542]">
              SHWAASTIKA WELLNESS
            </p>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#8b9a72]">
              AKR WELLNESS
            </p>
            <p className="text-[10px] italic text-[#8a7764]">
              By Preeti Semwal
            </p>
          </div>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-1.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll
                className={`block rounded-full px-2.5 py-2 text-[11px] font-semibold transition ${
                  pathname === link.href
                    ? "bg-white text-[#24394a] shadow-sm"
                    : "text-[#41515d] hover:bg-white/65 hover:text-[#24394a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2f3033] px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-md shadow-[#2f3033]/12 transition hover:-translate-y-0.5 hover:bg-[#4f6574]"
          >
            Book a Consultation
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce8ef] bg-white/80 text-[#263542] shadow-sm xl:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/70 bg-[#f7f2e8] xl:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
              <ul className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      scroll
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-full px-4 py-3 text-sm font-semibold ${
                        pathname === link.href
                          ? "bg-white text-[#24394a] shadow-sm"
                          : "text-[#41515d] hover:bg-white/65"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 block rounded-full bg-[#2f3033] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
