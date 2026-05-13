import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import { createPageMetadata } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: "Preeti Semwal | Shwaastika Wellness",
  description:
    "Explore intuitive healing, inner clarity sessions, womb healing, prenatal support, and corporate wellness guidance by Preeti Semwal.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeIntro />
      <Testimonials />
      <LocationMap />
      <FAQ />
    </main>
  );
}
