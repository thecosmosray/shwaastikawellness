"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello%0AWelcome+to+SHWAASTIKA+WELLNESS.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.&type=phone_number&app_absent=0";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
      setEmail("");
    }
  }, [pathname]);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !emailPattern.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), firstName: "Friend", consent: true }),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message || "Unable to subscribe. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(result.message || "Thank you for subscribing!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Unable to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-[#5d686f] text-[#f2f5f6]">
      {/* Super compact padding based on Stojo inspiration */}
      <div className="mx-auto max-w-[90rem] px-6 py-7 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          
          {/* Left Column: Newsletter Signup */}
          <div className="max-w-md w-full">
            {/* Brand Logo & Name (Moved to top left to avoid WhatsApp overlap) */}
            <div className="flex items-center gap-4 mb-5">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-[1.35rem] font-medium tracking-tight text-white leading-none">
                  Preeti Semwal
                </span>
                <span className="text-[11px] text-white/70 font-medium tracking-widest uppercase mt-1.5">
                  Shwaastika Wellness
                </span>
              </div>
            </div>

            <h3 className="font-serif text-[1.5rem] leading-[1.25] tracking-tight text-white mb-4 md:text-[1.75rem]">
              Stay connected with insights, reflections and offerings from Shwaastika.
            </h3>
            
            <form className="relative mt-2 max-w-sm" onSubmit={handleSubscribe} noValidate>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="footer-email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="Your email, please"
                // The style string below uses standard CSS hacks to prevent the browser autofill from turning the input background white and text black
                className="w-full bg-transparent border-b border-white/30 py-3 pr-10 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none focus:ring-0 transition-colors [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]"
                disabled={status === "submitting"}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                disabled={status === "submitting"}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <span className="text-[10px] uppercase tracking-widest text-white/80 pr-2">Wait</span>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                )}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-3 text-[13px] text-[#a7d3a6] font-medium tracking-wide">{message}</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-[13px] text-[#f4a298] font-medium tracking-wide">{message}</p>
            )}
          </div>

          {/* Right Columns: Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-12 lg:pt-2">
            {/* SUPPORT */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                Support
              </p>
              <ul className="flex flex-col gap-2 text-[13px] font-medium tracking-wide text-white/85">
                <li><Link href="/about" className="transition hover:text-white">About Preeti</Link></li>
                <li><Link href="/testimonials" className="transition hover:text-white">Client Stories</Link></li>
                <li><Link href="/book-a-session" className="transition hover:text-white">Book a Session</Link></li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                Services
              </p>
              <ul className="flex flex-col gap-2 text-[13px] font-medium tracking-wide text-white/85">
                <li><Link href="/inner-clarity-session" className="transition hover:text-white">Inner Clarity</Link></li>
                <li><Link href="/intuitive-healing" className="transition hover:text-white">Intuitive Healing</Link></li>
                <li><Link href="/womb-healing" className="transition hover:text-white">Womb Healing</Link></li>
                <li><Link href="/corporate-workshop" className="transition hover:text-white">Corporate</Link></li>
              </ul>
            </div>

            {/* CONNECT */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                Connect
              </p>
              <ul className="flex flex-col gap-2 text-[13px] font-medium tracking-wide text-white/85">
                <li>
                  <a href="https://www.instagram.com/preeti_semwal_bembi/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/preetisemwalbembi/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Left: Copyright and Address */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 text-[11px] text-white/60">
            <span className="font-medium tracking-wide">© 2026 Shwaastika Wellness</span>
            <span className="font-medium tracking-wide">Yapral, Secunderabad, Telangana</span>
          </div>

          {/* Right: Social Icons (Moved to right to fill empty space, with padding so whatsapp doesn't overlap) */}
          <div className="flex items-center gap-5 sm:pr-20">
            <a href="https://www.instagram.com/preeti_semwal_bembi/" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/preetisemwalbembi/" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
