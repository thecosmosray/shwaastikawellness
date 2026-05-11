import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Preeti Semwal - Intuitive Energy Healer & Wellness Guide",
  description:
    "Preeti Semwal is an intuitive energy healer and wellness guide offering intuitive healing, inner clarity sessions, womb healing, prenatal support, and personal development.",
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
    title: "Preeti Semwal - Intuitive Energy Healer & Wellness Guide",
    description:
      "Intuitive healing, inner clarity sessions, womb healing, and wellness guidance by Preeti Semwal.",
    type: "website",
    locale: "en_IN",
    siteName: "Preeti Semwal",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "#preeti-semwal",
        name: "Preeti Semwal",
        alternateName: ["Preeti Sembwal", "Preeti Semwal Bembi"],
        jobTitle: "Intuitive Energy Healer and Wellness Guide",
        description:
          "Preeti Semwal is an intuitive energy healer and wellness guide offering intuitive healing, inner clarity sessions, womb healing, prenatal support, and personal development.",
        knowsAbout: [
          "Intuitive Healing",
          "Inner Clarity Session",
          "Womb Healing",
          "Prenatal Support",
          "Energy Healing",
          "Wellness Guidance",
        ],
        worksFor: {
          "@id": "#shwaastika-wellness",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "#shwaastika-wellness",
        name: "SHWAASTIKA WELLNESS",
        alternateName: ["Shwaastika Wellness", "AKR Wellness"],
        founder: {
          "@id": "#preeti-semwal",
        },
        areaServed: "India",
        serviceType: [
          "Intuitive Healing",
          "Inner Clarity Session",
          "Womb Healing",
          "Prenatal Support",
          "Workplace Wellness Training",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "#website",
        name: "Preeti Semwal",
        alternateName: "SHWAASTIKA WELLNESS",
        publisher: {
          "@id": "#preeti-semwal",
        },
      },
      {
        "@type": "WebPage",
        "@id": "#homepage",
        name: "Preeti Semwal - Intuitive Energy Healer & Wellness Guide",
        description:
          "Official homepage of Preeti Semwal, intuitive energy healer and wellness guide.",
        isPartOf: {
          "@id": "#website",
        },
        mainEntity: {
          "@id": "#preeti-semwal",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <HomeIntro />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}
