import {
  founderName,
  practiceName,
  siteDescription,
  siteName,
  siteUrl,
} from "@/app/seo";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: founderName,
    url: siteUrl,
    description:
      "Wellness and personal development practitioner offering intuitive healing, inner clarity, womb healing, and corporate wellness workshops.",
    worksFor: {
      "@id": `${siteUrl}/#organization`,
      "@type": "Organization",
      name: practiceName,
    },
    affiliation: {
      "@id": `${siteUrl}/#organization`,
      "@type": "Organization",
      name: practiceName,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: practiceName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: siteDescription,
    founder: {
      "@id": `${siteUrl}/#person`,
      "@type": "Person",
      name: founderName,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#local-business`,
    name: practiceName,
    url: siteUrl,
    image: `${siteUrl}/images/Home.jpg`,
    logo: `${siteUrl}/images/logo.png`,
    description: siteDescription,
    telephone: "+91-9310685448",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Secunderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.503536,
      longitude: 78.534729,
    },
    hasMap: "https://www.google.com/maps?q=17.503536,78.534729",
    parentOrganization: {
      "@id": `${siteUrl}/#organization`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  },
];

export default function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
