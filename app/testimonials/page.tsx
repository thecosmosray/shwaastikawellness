import type { Metadata } from "next";
import ImageCarousel, { type CarouselImage } from "@/components/ImageCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import VideoTestimonials from "@/components/VideoTestimonials";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read and watch testimonials, client stories, shared healing experiences, and Google reviews for Preeti Semwal's Healing Space.",
  alternates: {
    canonical: "/testimonials",
  },
};

const clientTestimonialImages: CarouselImage[] = [
  { title: "Shared Path", label: "Chat screenshot", tone: "from-[#ead7c8] via-[#fff8ef] to-[#dfe9d8]" },
  { title: "Mind Body Spirit", label: "Story screenshot", tone: "from-[#e9ddf1] via-[#fffdf8] to-[#dfe9d8]" },
  { title: "Healing Parent & Child", label: "Client screenshot", tone: "from-[#dce9ef] via-[#fff8ef] to-[#ead7c8]" },
  { title: "Session Reflection", label: "Review screenshot", tone: "from-[#f3eadb] via-[#fffdf8] to-[#c7d6bd]" },
  { title: "Clarity Shared", label: "Chat screenshot", tone: "from-[#e5eddf] via-[#fff8ef] to-[#ead7c8]" },
];

const googleReviewImages: CarouselImage[] = [
  { title: "Google Review 1", label: "Google screenshot", tone: "from-[#fff8ef] via-[#e5eddf] to-[#d7e4f0]" },
  { title: "Google Review 2", label: "Google screenshot", tone: "from-[#f3eadb] via-[#fffdf8] to-[#dfe9d8]" },
  { title: "Google Review 3", label: "Google screenshot", tone: "from-[#ead7c8] via-[#fff8ef] to-[#dfe9d8]" },
  { title: "Google Review 4", label: "Google screenshot", tone: "from-[#e9ddf1] via-[#fffdf8] to-[#f3eadb]" },
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
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#675b50]">
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

      <ReviewCarousel images={googleReviewImages} />
    </main>
  );
}
