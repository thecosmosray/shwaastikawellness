import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeDeferredSections from "@/components/HomeDeferredSections";
import HomeHealingSessions from "@/components/HomeHealingSessions";
import HomeIntro from "@/components/HomeIntro";
import WhyWorkWithPreeti from "@/components/WhyWorkWithPreeti";
import { createPageMetadata } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: "Preeti Semwal | Intuitive Healer – Shwaastika Wellness",
  description:
    "Explore intuitive healing, inner clarity sessions, womb healing, prenatal support, and corporate wellness guidance by Preeti Semwal.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeIntro />
      <HomeHealingSessions />
      <WhyWorkWithPreeti />
      <HomeDeferredSections />
    </main>
  );
}
