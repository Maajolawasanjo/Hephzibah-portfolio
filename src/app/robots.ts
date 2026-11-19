import type { MetadataRoute } from "next";
import { getSeoPublicationState } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const { indexable, url } = getSeoPublicationState();

  if (!indexable || !url) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", url).toString(),
    host: url.origin,
  };
}
