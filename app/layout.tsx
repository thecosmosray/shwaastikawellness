import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Preeti Semwal - Intuitive Energy Healer & Wellness Guide",
    template: "%s | Preeti Semwal",
  },
  description:
    "Preeti Semwal is an intuitive energy healer and wellness guide offering intuitive healing, inner clarity sessions, womb healing, prenatal support, and wellness programs.",
  keywords: [
    "Preeti Semwal",
    "Preeti Sembwal",
    "Preeti Semwal Bembi",
    "SHWAASTIKA WELLNESS",
    "Shwaastika Wellness",
    "intuitive energy healer",
    "intuitive healing",
    "inner clarity session",
    "womb healing",
    "workplace wellness",
    "leadership training",
    "emotional intelligence training",
    "corporate wellness programs",
    "workplace behaviour training",
    "soft skills training",
  ],
  authors: [{ name: "Preeti Semwal" }],
  creator: "Preeti Semwal",
  publisher: "Preeti Semwal",
  applicationName: "Preeti Semwal",
  category: "Wellness",
  openGraph: {
    title:
      "Preeti Semwal - Intuitive Energy Healer & Wellness Guide",
    description:
      "Intuitive healing, inner clarity sessions, womb healing, prenatal support, and wellness guidance by Preeti Semwal.",
    type: "website",
    locale: "en_IN",
    siteName: "Preeti Semwal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body
        className="relative min-h-full bg-[#fbf8f1] text-[#2f2822]"
        suppressHydrationWarning
      >
        <div className="relative min-h-screen">
          <ScrollToTop />
          <Header />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
