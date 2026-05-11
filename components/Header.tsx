"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Healing Sessions", href: "/inner-clarity-session" },
  { label: "Book A Session", href: "/book-a-session" },
  { label: "Corporate Workshop", href: "/corporate-workshop" },
];

const moreLinks = [
  { label: "Intuitive Healing", href: "/intuitive-healing" },
  { label: "Womb Healing", href: "/womb-healing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
];

const allLinks = [...mainLinks, ...moreLinks];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f7f2e8]/88 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-10"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="SHWAASTIKA WELLNESS home"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8d9e5] bg-white/75 shadow-sm"
          >
            <span className="h-3.5 w-3.5 rounded-full bg-[#4f6574]" />
          </span>

          <div className="leading-tight">
            <p className="text-[14px] font-semibold tracking-[0.04em] text-[#263542]">
              SHWAASTIKA WELLNESS
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8b9a72]">
              AKR WELLNESS
            </p>
            <p className="text-[10px] italic text-[#8a7764]">
              By Preeti Semwal
            </p>
          </div>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-3 xl:flex">
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll
                className={`block rounded-full px-4 py-2 text-[13px] font-medium transition ${
                  pathname === link.href
                    ? "bg-white text-[#24394a] shadow-sm"
                    : "text-[#41515d] hover:bg-white/65 hover:text-[#24394a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="group relative">
            <button
              type="button"
              className="rounded-full px-4 py-2 text-[13px] font-medium text-[#41515d] transition hover:bg-white/65 hover:text-[#24394a]"
            >
              More
            </button>

            <div className="invisible absolute left-1/2 top-11 w-56 -translate-x-1/2 rounded-2xl border border-white/70 bg-[#f7f2e8] p-2 opacity-0 shadow-xl shadow-black/10 transition group-hover:visible group-hover:opacity-100">
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    pathname === link.href
                      ? "bg-white text-[#24394a] shadow-sm"
                      : "text-[#41515d] hover:bg-white/70 hover:text-[#24394a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>

        <div className="hidden shrink-0 items-center xl:flex">
          <Link
            href="/book-a-session"
            scroll
            className="rounded-full bg-[#2f3033] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f3033]/12 transition hover:-translate-y-0.5 hover:bg-[#4f6574]"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce8ef] bg-white/80 text-[#263542] shadow-sm xl:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
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
                {allLinks.map((link) => (
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

              <Link
                href="/book-a-session"
                scroll
                onClick={() => setIsOpen(false)}
                className="mt-3 block rounded-full bg-[#2f3033] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}