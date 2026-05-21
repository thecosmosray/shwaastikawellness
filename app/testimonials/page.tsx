import type { Metadata } from "next";
import ImageCarousel, { type CarouselImage } from "@/components/ImageCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Testimonials | Preeti Semwal",
  description:
    "Read shared experiences, client reflections, and public reviews for healing sessions and workshops by Preeti Semwal.",
  path: "/testimonials",
});

const clientTestimonialImages: CarouselImage[] = [
  {
    title: "Session Experience",
    label: "Client experience",
    tone: "from-[#ead7c8] via-[#fff8ef] to-[#dfe9d8]",
    src: "/images/testimonial/3DB10916-CAA9-4B76-84C1-433C79906C46.webp",
    alt: "Client experience testimonial for a session with Preeti Semwal",
  },
  {
    title: "Right Path",
    label: "Client experience",
    tone: "from-[#e9ddf1] via-[#fffdf8] to-[#dfe9d8]",
    src: "/images/testimonial/WhatsApp%20Image%202025-09-11%20at%2017.28.50.webp",
    alt: "Client message sharing clarity after guidance from Preeti Semwal",
  },
  {
    title: "Online Healing Session",
    label: "Client experience",
    tone: "from-[#dce9ef] via-[#fff8ef] to-[#ead7c8]",
    src: "/images/testimonial/WhatsApp%20Image%202025-09-11%20at%2017.33.06.webp",
    alt: "Online pritya healing session client experience",
  },
  {
    title: "Healing Reflection",
    label: "Client experience",
    tone: "from-[#f3eadb] via-[#fffdf8] to-[#c7d6bd]",
    src: "/images/testimonial/WhatsApp%20Image%202025-09-11%20at%2017.33.46.webp",
    alt: "Client healing reflection testimonial",
  },
  {
    title: "Yoga & Meditation",
    label: "Client experience",
    tone: "from-[#e5eddf] via-[#fff8ef] to-[#ead7c8]",
    src: "/images/testimonial/C9FC7271-F1DF-44BC-8B2D-2A4C997ADB46.webp",
    alt: "Yoga and meditation session with young leaders",
  },
  {
    title: "Practice Review",
    label: "Client experience",
    tone: "from-[#fff8ef] via-[#e5eddf] to-[#d7e4f0]",
    src: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.24%20(1).webp",
    alt: "Client review about feeling freshness after practice",
  },
  {
    title: "Guidance Review",
    label: "Client experience",
    tone: "from-[#f3eadb] via-[#fffdf8] to-[#dfe9d8]",
    src: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.24.webp",
    alt: "Client review for Preeti Semwal guidance session",
  },
  {
    title: "Healing Review",
    label: "Client experience",
    tone: "from-[#ead7c8] via-[#fff8ef] to-[#dfe9d8]",
    src: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.25.webp",
    alt: "Client review for craniosacral therapy and healing session",
  },
  {
    title: "Client Review",
    label: "Client experience",
    tone: "from-[#e9ddf1] via-[#fffdf8] to-[#f3eadb]",
    src: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.32.webp",
    alt: "Client review for Shwaastika Wellness",
  },
  {
    title: "Shared Review",
    label: "Client experience",
    tone: "from-[#e5eddf] via-[#fff8ef] to-[#ead7c8]",
    src: "/images/testimonial/WhatsApp%20Image%202026-05-12%20at%2013.10.35.webp",
    alt: "Client review shared for Preeti Semwal",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-[#fbf8f1]">
      <section className="relative isolate overflow-hidden bg-[#fbf8f1] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(199,214,189,0.45),transparent_28%),linear-gradient(135deg,#fffdf8_0%,#fbf8f1_58%,#f3eadb_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8b65]">
              Testimonials
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl lg:text-6xl">
              Testimonials
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-justify text-xl leading-9 text-[#675b50]">
              Real experiences from people who have found clarity, healing, and deeper alignment.
            </p>
          </div>
        </Reveal>
      </section>

      <VideoTestimonials />

      <ImageCarousel
        eyebrow="Client Stories"
        heading="Client Stories & Shared Experiences"
        images={clientTestimonialImages}
      />

      <ReviewsSection />
    </main>
  );
}
