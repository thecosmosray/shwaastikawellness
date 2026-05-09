import type { Metadata } from "next";
import SessionExperience from "@/components/SessionExperience";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book A Session | SHWAASTIKA WELLNESS",
  description:
    "Choose from Intuitive Healing, Inner Clarity Guidance, Corporate Workshop, and Womb Healing sessions with SHWAASTIKA WELLNESS.",
};

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello+%EF%BF%BD%0AWelcome+to+Shwaastika+Wellness.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A%E2%80%A2+Your+concern+or+goal%0A%E2%80%A2+Preferred+service%0A%E2%80%A2+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly+%EF%BF%BD&type=phone_number&app_absent=0";

export default function BookASessionPage() {
  return (
    <main className="bg-[#fbf8f1]">
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(199,214,189,0.55),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(190,123,84,0.2),transparent_24%),linear-gradient(135deg,#fbf8f1_0%,#f3eadb_58%,#eef4e9_100%)]" />
        <div className="absolute left-[18%] top-20 -z-10 h-20 w-20 rounded-full bg-white/50 blur-xl" />
        <div className="absolute bottom-16 right-[12%] -z-10 h-28 w-28 rounded-full bg-[#c7d6bd]/50 blur-2xl" />
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8b65]">
              Our Services
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl lg:text-6xl">
              Book A Session
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#675b50]">
              Choose the experience that aligns with your journey.
            </p>
          </div>
        </Reveal>
      </section>

      <SessionExperience />

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-8 text-center shadow-xl shadow-[#6b513b]/8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              For Bookings
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              For Bookings
            </h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#2f2822] px-10 py-4 text-lg font-semibold tracking-[0.18em] text-white shadow-xl shadow-[#2f2822]/15 transition hover:-translate-y-1 hover:bg-[#3f5f46] hover:shadow-[#3f5f46]/25"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
