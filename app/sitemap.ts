import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const ROUTES = ["", "/smart-home", "/solutions", "/technology", "/projects", "/about", "/contact", "/consultation"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path ? 0.7 : 1 }));
}
