import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Text } from "@/components/ui/typography";
import { siteNavigation } from "@/config/navigation";
import { site } from "@/config/site";

/** Single, compact footer rather than a second full-page directory. */
export function SiteFooter() {
  return (
    <footer className="bg-brand-cream text-brand-burgundy">
      <Container>
        <div className="flex flex-col gap-7 border-t border-rule py-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            <Link href="/" className="font-display text-2xl font-bold tracking-[-0.045em]">
              {site.brand}
            </Link>
            <Text variant="small" className="mt-1" muted>
              {site.name} · {site.location}
            </Text>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#process" className="text-sm font-medium hover:underline underline-offset-4">
                  Process
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
          <Text variant="small" muted>
            © {new Date().getFullYear()} {site.brand}
          </Text>
          <Text variant="small" muted>
            Brand identity · Graphic design · Visual storytelling
          </Text>
        </div>
      </Container>
    </footer>
  );
}
