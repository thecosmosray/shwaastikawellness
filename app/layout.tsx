import type { Metadata } from "next";
import type { Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import SeoJsonLd from "@/components/SeoJsonLd";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  founderName,
  practiceName,
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
  socialDescription,
} from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Preeti Semwal | Shwaastika Wellness",
    template: "%s | Preeti Semwal",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: founderName }],
  creator: founderName,
  publisher: practiceName,
  applicationName: founderName,
  category: "Wellness",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Preeti Semwal | Shwaastika Wellness",
    description: socialDescription,
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName,
    images: [
      {
        url: `${siteUrl}/images/Home.jpg`,
        width: 1600,
        height: 1071,
        alt: "Preeti Semwal at Shwaastika Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preeti Semwal | Shwaastika Wellness",
    description: socialDescription,
    images: [`${siteUrl}/images/Home.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f1",
  colorScheme: "light",
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
        <SeoJsonLd />
        <div className="relative min-h-screen">
          <ScrollToTop />
          <Header />
          <div className="relative">{children}</div>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
