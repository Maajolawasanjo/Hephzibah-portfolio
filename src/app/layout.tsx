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
  title: "Hephie Creatives — Global Layout Preview",
  description:
    "Shared layout preview for Hephzibah Uzorndu, Brand Identity Designer and Visual Storyteller.",
  // Development preview only. Enable indexing when the real portfolio launches.
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
