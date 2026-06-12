import type { Metadata } from "next";
import SessionExperience from "@/components/SessionExperience";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Healing Session | Preeti Semwal – Shwaastika Wellness",
  description:
    "Book an intuitive healing, inner clarity, womb healing, prenatal support, or corporate wellness session with Preeti Semwal.",
  path: "/book-a-session",
});

export default function BookASessionPage() {
  return (
    <main className="bg-[#f8f4ec]">
      <SessionExperience />
    </main>
  );
}
