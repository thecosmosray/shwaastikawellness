"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfce]/70 bg-[#fffdf8]/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-10"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Shwaastika Wellness home"
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
              Shwaastika Wellness
            </p>
            <p className="text-xs italic text-[#8a7764] sm:text-[13px]">
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
                    ? "bg-white text-[#241d18] shadow-sm"
                    : "text-[#5f5349] hover:bg-white/75 hover:text-[#241d18]"
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
              className="rounded-full px-4 py-2 text-[13px] font-medium text-[#5f5349] transition hover:bg-white/75 hover:text-[#241d18]"
            >
              More
            </button>

            <div
              role="menu"
              className={`absolute left-1/2 top-11 w-56 -translate-x-1/2 rounded-2xl border border-[#eadfce]/80 bg-[#fffdf8] p-2 shadow-xl shadow-[#6b513b]/10 transition ${
                isMoreOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll
                  role="menuitem"
                  onClick={() => setIsMoreOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    pathname === link.href
                      ? "bg-white text-[#241d18] shadow-sm"
                      : "text-[#5f5349] hover:bg-white/80 hover:text-[#241d18]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>

        {!isHomePage ? (
          <div className="hidden shrink-0 items-center xl:flex">
            <Link
              href="/book-a-session"
              scroll
              className="rounded-full bg-[#2b211a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2b211a]/12 transition hover:-translate-y-0.5 hover:bg-[#5f4a38]"
            >
              Book a Consultation
            </Link>
          </div>
        ) : null}

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfce] bg-white text-[#241d18] shadow-sm xl:hidden"
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

      <div
        className={`overflow-hidden border-t border-[#eadfce]/70 bg-[#fffdf8] transition-[max-height,opacity] duration-300 xl:hidden ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
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
                          : "text-[#5f5349] hover:bg-white/75"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {!isHomePage ? (
                <Link
                  href="/book-a-session"
                  scroll
                  onClick={() => setIsOpen(false)}
                  className="mt-3 block rounded-full bg-[#2b211a] px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Book a Consultation
                </Link>
              ) : null}
            </div>
        ) : null}
      </div>
    </header>
  );
}
