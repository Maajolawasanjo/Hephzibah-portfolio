import type { MetadataRoute } from "next";
import { getPublishedCaseStudies } from "@/content/projects";
import { getSeoPublicationState } from "@/lib/seo";

/** No placeholder pages or fabricated project URLs enter search results. */
export default function sitemap(): MetadataRoute.Sitemap {
  const { indexable, url } = getSeoPublicationState();

  if (!indexable || !url) return [];

  return [
    { url: url.origin + "/", changeFrequency: "monthly", priority: 1 },
    ...getPublishedCaseStudies().map((project) => ({
      url: url.origin + "/work/" + project.slug,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
