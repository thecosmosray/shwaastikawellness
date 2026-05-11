import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from Preeti Semwal's Healing Space on healing, emotional balance, inner clarity, wellness, leadership, and workplace well-being.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <PagePlaceholder
      eyebrow="Insights"
      title="Blog"
      intro="Content will be added soon."
      ctaLabel="Book a Session"
    />
  );
}
