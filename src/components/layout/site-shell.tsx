import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/**
 * Shared landmarks and navigation. The page must render content, not
 * another <main> or duplicate <header>/<footer>.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-[var(--radius-control)] bg-brand-burgundy px-4 py-3 text-brand-cream focus:not-sr-only"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-w-0 flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
