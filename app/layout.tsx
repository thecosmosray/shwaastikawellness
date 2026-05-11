import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const siteUrl = "https://www.preetisemwal.in";
const siteName = "Preeti Semwal's Healing Space";
const siteDescription =
  "Preeti Semwal's Healing Space brings deep transformative experiences to regain physical, mental and emotional balance through intuitive healing, womb healing, inner clarity sessions, and corporate wellness workshops.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Preeti Semwal's Healing Space | Healing",
    template: "%s | Preeti Semwal's Healing Space",
  },
  description: siteDescription,
  keywords: [
    "Preeti Semwal",
    "Preeti Sembwal",
    "Preeti Semwal Bembi",
    "Preeti Semwal's Healing Space",
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
  applicationName: siteName,
  category: "Wellness",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Preeti Semwal's Healing Space | Healing",
    description: siteDescription,
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName,
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 512,
        height: 512,
        alt: "Preeti Semwal's Healing Space logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Preeti Semwal's Healing Space | Healing",
    description: siteDescription,
    images: [`${siteUrl}/images/logo.png`],
  },
  icons: {
    icon: [
      { url: `${siteUrl}/favicon.ico` },
      { url: `${siteUrl}/images/logo.png`, type: "image/png" },
    ],
    shortcut: `${siteUrl}/favicon.ico`,
    apple: `${siteUrl}/images/logo.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${siteUrl}/#business`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/logo.png`,
  description: siteDescription,
  founder: {
    "@type": "Person",
    name: "Preeti Semwal",
  },
  areaServed: "India",
  serviceType: [
    "Intuitive Healing",
    "Womb Healing",
    "Inner Clarity Sessions",
    "Corporate Wellness Workshops",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Healing and Wellness Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Intuitive Healing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Womb Healing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inner Clarity Sessions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Wellness Workshops",
        },
      },
    ],
  },
  sameAs: [siteUrl],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
