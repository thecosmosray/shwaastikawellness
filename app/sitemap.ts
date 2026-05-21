import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";
const lastModified = new Date();

const routes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/intuitive-healing",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/inner-clarity-session",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/womb-healing",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/book-a-session",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/corporate-workshop",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/testimonials",
    changeFrequency: "monthly",
    priority: 0.7,
  },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
