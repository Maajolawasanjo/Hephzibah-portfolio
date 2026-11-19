import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/typography";
import { previewNavigation } from "@/config/navigation";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-cream text-brand-burgundy">
      <Container>
        <Divider />
        <div className="grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="min-w-0 md:col-span-7">
            <Link href="/" className="inline-block rounded-[var(--radius-control)]">
              <span className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-none tracking-[-0.05em]">
                {site.brand}
              </span>
            </Link>
            <Text variant="small" className="mt-4 max-w-md">
              {site.name} · {site.role}
            </Text>
            <Text variant="small" muted className="mt-2">
              {site.location}
            </Text>
          </div>
          <nav aria-label="Footer preview navigation" className="md:col-span-5">
            <Text variant="label" muted className="mb-5">
              Explore the foundation
            </Text>
            <ul className="flex flex-col gap-4">
              {previewNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block rounded-[var(--radius-control)] text-sm font-medium underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Divider />
        <div className="flex flex-wrap justify-between gap-3 py-6">
          <Text variant="small">
            © {new Date().getFullYear()} {site.brand}
          </Text>
          <Text variant="small" muted>
            Foundation preview · Portfolio content coming in later phases
          </Text>
        </div>
      </Container>
    </footer>
  );
}
