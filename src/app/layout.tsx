import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { PersonJsonLd } from "@/components/seo/person-json-ld";
import { getSeoPublicationState } from "@/lib/seo";
import { site } from "@/config/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

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
      <body className={dmSans.variable + " font-sans antialiased"}>
        <PersonJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
