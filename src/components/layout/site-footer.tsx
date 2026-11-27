import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Text } from "@/components/ui/typography";
import { siteNavigation } from "@/config/navigation";
import { site } from "@/config/site";

/** A full-width editorial close, with a concise, usable site index. */
export function SiteFooter() {
  return (
    <footer className="theme-inverse bg-brand-burgundy text-brand-cream">
      <Container>
        <div className="grid min-w-0 gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.45fr)] lg:gap-20 lg:py-28">
          <div className="min-w-0">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-display text-2xl font-semibold tracking-[-0.05em]"
            >
              {site.brand}
            </Link>
            <p className="mt-12 max-w-[15ch] font-display text-[clamp(2.75rem,5.2vw,5.5rem)] font-normal leading-[1.04] tracking-[-0.06em]">
              Ideas made meaningful. <span className="font-light text-brand-cream/70">Design made memorable.</span>
            </p>
          </div>
          <nav aria-label="Footer navigation" className="lg:pt-3">
            <Text variant="label" className="mb-6 !text-brand-cream/70">Explore</Text>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-10 items-center text-sm font-medium text-brand-cream/90 hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-brand-cream/25 py-6">
          <Text variant="small" className="!text-brand-cream/75">
            © {new Date().getFullYear()} {site.brand}
          </Text>
          <Text variant="small" className="!text-brand-cream/75">
            {site.name} · {site.location}
          </Text>
        </div>
      </Container>
    </footer>
  );
}
