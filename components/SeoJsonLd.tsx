import {
  founderName,
  practiceName,
  siteDescription,
  siteName,
  siteUrl,
} from "@/app/seo";

const services = [
  {
    name: "Intuitive Healing",
    url: `${siteUrl}/intuitive-healing`,
    description:
      "Intuitive healing sessions using energy awareness, breath, gentle practices, and inner guidance for whole-being support.",
  },
  {
    name: "Inner Clarity Session",
    url: `${siteUrl}/inner-clarity-session`,
    description:
      "Guided inner clarity sessions for emotional awareness, intuitive guidance, life transitions, and deeper self-connection.",
  },
  {
    name: "Womb Healing & Prenatal Support",
    url: `${siteUrl}/womb-healing`,
    description:
      "Nurturing womb healing and prenatal support for pregnancy, emotional transitions, mother-baby connection, and mindful well-being.",
  },
  {
    name: "Corporate Wellness Workshop",
    url: `${siteUrl}/corporate-workshop`,
    description:
      "Corporate wellness workshops supporting workplace resilience, leadership presence, emotional intelligence, safety awareness, and well-being.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: founderName,
    url: siteUrl,
    description:
      "Wellness and personal development practitioner offering intuitive healing, inner clarity, womb healing, and corporate wellness workshops.",
    image: `${siteUrl}/images/Home.jpg`,
    knowsAbout: [
      "Intuitive healing",
      "Inner clarity",
      "Womb healing",
      "Prenatal yoga",
      "Corporate wellness",
      "Energy awareness",
    ],
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
    areaServed: {
      "@type": "Country",
      name: "India",
    },
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
    priceRange: "INR 2500 - INR 18400",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Secunderabad",
      streetAddress: "Yapral",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.503536,
      longitude: 78.534729,
    },
    areaServed: ["Secunderabad", "Hyderabad", "India", "Online"],
    hasMap: "https://www.google.com/maps?q=17.503536,78.534729",
    parentOrganization: {
      "@id": `${siteUrl}/#organization`,
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: service.url,
        description: service.description,
        provider: {
          "@id": `${siteUrl}/#local-business`,
        },
      },
    })),
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
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/#services`,
    name: "Shwaastika Wellness Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: service.url,
      name: service.name,
      description: service.description,
    })),
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
