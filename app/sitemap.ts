import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "ar"].flatMap((l) => ["", "/services", "/about", "/contact"].map((p) => ({ url: `${site.url}/${l}${p}`, lastModified: new Date() })));
}
