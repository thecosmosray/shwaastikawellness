import Image from "next/image";
import Link from "next/link";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello%0AWelcome+to+SHWAASTIKA+WELLNESS.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A-+Your+concern+or+goal%0A-+Preferred+service%0A-+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="bg-transparent px-4 pb-12 pt-7 sm:px-6 lg:px-8 lg:pb-16 lg:pt-9">
      <div
        className="relative isolate mx-auto max-w-[92rem] overflow-hidden rounded-[1.75rem] border border-[#eadfce] bg-[#fffaf2] shadow-xl shadow-[#6b513b]/7"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(234,219,226,0.58),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(223,238,247,0.5),transparent_28%),linear-gradient(135deg,#ffffff_0%,#fff7ec_54%,#f8f1e8_100%)]" />

        <div className="grid min-h-[520px] items-center gap-9 px-5 py-9 sm:px-9 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9a6f55]">
              Wellness sanctuary
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.02] text-[#17120f] sm:text-5xl lg:text-[3.45rem]">
              Preeti Semwal
            </h1>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#8f735f]">
              Shwaastika Wellness
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#3f372f] sm:text-[17px]">
              Wellness & Personal Development Practice | Guided sessions and intuitive healing
            </p>
            <p className="mt-3 text-base font-semibold italic text-[#7a6b5e]">
              Intuitive Energy Healer & Wellness Guide
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              className="rounded-full bg-[#17120f] px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#2b211a]/16 transition hover:-translate-y-0.5 hover:bg-[#5f4a38]"
              >
                Book a Consultation
              </a>
              <Link
                href="#choose-healing-session"
                className="rounded-full border border-[#d8c7ad] bg-white/82 px-7 py-3.5 text-center text-sm font-bold text-[#3f352d] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Healing Sessions
              </Link>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO7gDBYyXmGLCCzgZUlWptEyUIo4VbTuBsrQD9ardaQi5e6w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 block cursor-pointer rounded-[1.15rem] border border-[#2b211a]/10 bg-[#5f4a38] px-5 py-4 text-center text-sm font-bold leading-6 text-white shadow-xl shadow-[#5f4a38]/16 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17120f] hover:shadow-2xl hover:shadow-[#5f4a38]/18 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6f55]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf8] sm:rounded-full"
            >
              <span className="block text-base font-semibold sm:text-sm">
                Free | Weekly Inner Alignment Session | Movement, meditation & awareness for inner balance - Click to Join
              </span>
            </a>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-[#fffdf8] shadow-lg shadow-[#6b513b]/7 ring-1 ring-white/80 sm:min-h-[390px] lg:min-h-[450px]">
            <div className="absolute -inset-x-4 -inset-y-6" style={{ position: "absolute" }}>
              <Image
                src="/images/Home.jpg"
                alt="Preeti Semwal intuitive healing session at Shwaastika Wellness"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={true}
                fetchPriority="high"
                quality={95}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fffdf8]/55 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
