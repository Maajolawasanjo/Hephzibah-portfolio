import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PersonJsonLd } from "@/components/seo/person-json-ld";
import { getSeoPublicationState } from "@/lib/seo";
import { site } from "@/config/site";
import "./globals.css";

const seo = getSeoPublicationState();

export const metadata: Metadata = {
  applicationName: site.brand,
  title: {
    default: site.brand + " | Brand Identity & Visual Storytelling",
    template: "%s | " + site.brand,
  },
  description:
    "Hephie Creatives is the design practice of Hephzibah Uzorndu, a brand identity designer and visual storyteller in Lagos, Nigeria.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.brand,
    title: site.brand + " | Brand Identity & Visual Storytelling",
    description: site.tagline,
  },
  twitter: {
    card: "summary",
    title: site.brand + " | Brand Identity & Visual Storytelling",
    description: site.tagline,
  },
  robots: seo.indexable
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  ...(seo.url
    ? {
        metadataBase: seo.url,
        alternates: { canonical: "/" },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        <PersonJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
