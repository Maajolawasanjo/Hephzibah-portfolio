import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Hephie Creatives | Brand Identity Designer",
  description:
    "Hephzibah Uzorndu is a brand identity designer and visual storyteller based in Lagos, Nigeria. Purposeful identity, branding, and visual content through Hephie Creatives.",
  // Keep search indexing disabled while portfolio and approved project assets are incomplete.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={dmSans.variable + " font-sans antialiased"}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
