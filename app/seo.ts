import type { Metadata } from "next";

export const siteUrl = "https://www.preetisemwal.in";
export const founderName = "Preeti Semwal";
export const practiceName = "Shwaastika Wellness";
export const siteName = "Preeti Semwal | Shwaastika Wellness";
export const siteDescription =
  "Preeti Semwal offers intuitive healing, inner clarity sessions, womb healing, prenatal support, and corporate wellness workshops through Shwaastika Wellness.";
export const socialDescription =
  "Wellness and personal development guidance through intuitive healing, inner clarity, womb healing, and corporate wellness workshops.";
export const siteKeywords = [
  "Preeti Semwal",
  "Shwaastika Wellness",
  "intuitive healing",
  "inner clarity session",
  "womb healing",
  "prenatal yoga",
  "corporate wellness workshop",
  "energy healing",
  "wellness guide",
  "Secunderabad wellness",
];

const defaultImage = {
  url: "/images/Home.jpg",
  width: 1600,
  height: 1071,
  alt: "Preeti Semwal at Shwaastika Wellness",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: typeof defaultImage;
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image.url);

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: siteKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: "en_IN",
      siteName,
      images: [
        {
          ...image,
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
  };
}
