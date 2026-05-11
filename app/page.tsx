import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Preeti Semwal's Healing Space | Healing",
  description:
    "Preeti Semwal's Healing Space offers intuitive healing, womb healing, inner clarity sessions, and corporate wellness workshops for physical, mental and emotional balance.",
  keywords: [
    "Preeti Semwal",
    "Preeti Sembwal",
    "Preeti Semwal Bembi",
    "SHWAASTIKA WELLNESS",
    "Shwaastika Wellness",
    "intuitive healing",
    "inner clarity session",
    "womb healing",
    "energy healer in India",
    "wellness guide",
  ],
  authors: [{ name: "Preeti Semwal" }],
  creator: "Preeti Semwal",
  publisher: "Preeti Semwal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Preeti Semwal's Healing Space | Healing",
    description:
      "Intuitive healing, womb healing, inner clarity sessions, and corporate wellness workshops by Preeti Semwal.",
    type: "website",
    locale: "en_IN",
    siteName: "Preeti Semwal's Healing Space",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeIntro />
      <Testimonials />
      <FAQ />
    </main>
  );
}
