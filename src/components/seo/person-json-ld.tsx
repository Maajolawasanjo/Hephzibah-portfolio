import { site } from "@/config/site";
import { getSeoPublicationState } from "@/lib/seo";

/** Only verified identity, profession, city and canonical site address. */
export function PersonJsonLd() {
  const { indexable, url } = getSeoPublicationState();
  if (!indexable || !url) return null;

  const payload = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.tagline,
    url: url.origin,
    homeLocation: {
      "@type": "Place",
      name: site.location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
