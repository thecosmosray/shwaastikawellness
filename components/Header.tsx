"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Inner Clarity", href: "/inner-clarity-session" },
  { label: "Intuitive Healing", href: "/intuitive-healing" },
  { label: "Womb Healing", href: "/womb-healing" },
];

const moreLinks = [
  { label: "Book A Session", href: "/book-a-session" },
  { label: "Corporate Workshop", href: "/corporate-workshop" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
];

const allLinks = [...mainLinks, ...moreLinks];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBookingPage = pathname === "/book-a-session";

  useEffect(() => {
    if (!isMoreOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMoreOpen]);

  // The booking page previously had a separate header layout, which caused inconsistency.
  // We now use the main header layout across all pages.

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[#d8cab5]/60 bg-[#f4ebe1]/95 backdrop-blur-xl"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-10"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Preeti Semwal home"
        >
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#eadfce] bg-white shadow-sm sm:h-14 sm:w-14"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-full w-full object-contain"
            />
          </span>

          <div className="leading-tight">
            <p className="text-base font-semibold tracking-[0.04em] text-[#241d18] sm:text-lg">
              Preeti Semwal
            </p>
            <p className="text-xs italic text-[#8a7764] sm:text-[13px]">
              Shwaastika Wellness
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
                    ? "bg-white text-[#241d18] shadow-sm"
                    : "text-[#5f5349] hover:bg-[#eef3e8] hover:text-[#26382a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li ref={moreDropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={isMoreOpen}
              aria-haspopup="menu"
              onClick={() => setIsMoreOpen((value) => !value)}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-[#5f5349] transition hover:bg-[#eef3e8] hover:text-[#26382a]"
            >
              More
            </button>

            <div
              role="menu"
              className={`absolute left-1/2 top-11 w-56 -translate-x-1/2 rounded-2xl border border-[#d8cab5]/80 bg-[#f4ebe1] p-2 shadow-xl shadow-[#6b513b]/10 transition ${
                isMoreOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll
                  onClick={() => setIsMoreOpen(false)}
                  role="menuitem"
                  className={`block rounded-xl px-4 py-2.5 text-[13px] font-medium transition ${
                    pathname === link.href
                      ? "bg-white text-[#241d18] shadow-sm"
                      : "text-[#5f5349] hover:bg-[#eef3e8] hover:text-[#26382a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {!isHomePage ? (
            <div className="hidden shrink-0 xl:block">
              <Link
                href="/book-a-session"
                scroll
                className="rounded-full bg-[#5d686f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5d686f]/20 transition hover:-translate-y-0.5 hover:bg-[#7b878f]"
              >
                Book a Consultation
              </Link>
            </div>
          ) : null}

          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-full bg-white p-2.5 text-[#5f5349] shadow-sm transition hover:bg-[#eef3e8] hover:text-[#26382a] xl:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#d8cab5]/30 transition-all duration-300 xl:hidden ${
          isOpen ? "max-h-screen border-t" : "max-h-0 border-transparent"
        }`}
      >
        {isOpen ? (
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
                        ? "bg-white text-[#241d18] shadow-sm"
                        : "text-[#5f5349] hover:bg-[#eef3e8] hover:text-[#26382a]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {!isHomePage && !isBookingPage ? (
              <div className="mt-8 border-t border-[#d8cab5]/30 pt-6">
                <Link
                  href="/book-a-session"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-[#5d686f] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#7b878f]"
                >
                  Book a Consultation
                </Link>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.header>
  );
}
