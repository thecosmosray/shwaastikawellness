import type { Metadata } from "next";
import ImageCarousel, { type CarouselImage } from "@/components/ImageCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import YouTubeTestimonial from "@/components/YouTubeTestimonial";
import WorkshopTestimonial from "@/components/WorkshopTestimonial";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Testimonials & Reviews | Preeti Semwal Wellness",
  description:
    "Read shared experiences, client reflections, and public reviews for healing sessions and workshops by Preeti Semwal.",
  path: "/testimonials",
});

const clientTestimonialImages: CarouselImage[] = [
  {
    title: "Inner Clarity",
    tone: "from-[#ead7c8] via-[#fff8ef] to-[#dfe9d8]",
    src: "/images/testimonial/Neetu%20Mukhija%20Inner%20Clarity.jpg",
    alt: "Neetu Mukhija Inner Clarity testimonial",
  },
  {
    title: "Inner Clarity",
    tone: "from-[#e9ddf1] via-[#fffdf8] to-[#dfe9d8]",
    src: "/images/testimonial/Choosing%20the%20Right%20Path%20inner%20clarity.jpg",
    alt: "Choosing the right path Inner Clarity testimonial",
  },
  {
    title: "Inner Clarity",
    tone: "from-[#f3eadb] via-[#fffdf8] to-[#c7d6bd]",
    src: "/images/testimonial/Poonam%20Ji%20testimonial%20Inner%20Clarity-clean.png",
    alt: "Poonam Ji Inner Clarity testimonial",
  },
  {
    title: "Inner Clarity",
    tone: "from-[#e5eddf] via-[#fff8ef] to-[#ead7c8]",
    src: "/images/testimonial/Inner%20Clarity.jpg",
    alt: "Inner Clarity testimonial",
  },
  {
    title: "Inner Clarity",
    tone: "from-[#f3eadb] via-[#fffdf8] to-[#dfe9d8]",
    src: "/images/testimonial/innerclarity.jpeg",
    alt: "Inner Clarity client testimonial",
  },
  {
    title: "Womb Healing",
    tone: "from-[#e5eddf] via-[#fff8ef] to-[#ead7c8]",
    src: "/images/testimonial/Practice%20ReviewWomb%20Healing.png",
    alt: "Womb Healing practice review testimonial",
  },
  {
    title: "Womb Healing",
    tone: "from-[#fff8ef] via-[#e5eddf] to-[#d7e4f0]",
    src: "/images/testimonial/Womb%20Healing.jpg",
    alt: "Womb Healing testimonial",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden bg-[#fffdf8] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(234,223,206,0.5),transparent_28%),linear-gradient(135deg,#fffdf8_0%,#fffaf2_58%,#f8f1e8_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.08] text-[#241d18] sm:text-5xl lg:text-6xl">
              Testimonials
            </h1>
            <p className="editorial-prose editorial-prose-center mt-6 max-w-3xl">
              Real experiences from people who have found{" "}
              <span className="editorial-highlight">clarity, healing, and deeper alignment</span>.
            </p>
          </div>
        </Reveal>
      </section>
      <VideoTestimonials />
      <WorkshopTestimonial />
      <YouTubeTestimonial />

      <ImageCarousel
        eyebrow="Client Experience"
        heading="Client Experiences by Service"
        images={clientTestimonialImages}
      />

      <ReviewsSection />
    </main>
  );
}
