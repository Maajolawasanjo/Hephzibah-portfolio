import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Text } from "@/components/ui/typography";
import { siteNavigation } from "@/config/navigation";
import { site } from "@/config/site";
import { getPublicContactEmail } from "@/lib/contact";

/**
 * Quiet editorial footer: three balanced columns, a single expressive
 * invitation, and real contact destinations. Full-bleed burgundy and cream.
 */
export function SiteFooter() {
  const email = getPublicContactEmail();

  return (
    <footer className="theme-inverse bg-brand-burgundy text-brand-cream">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-b border-brand-cream/25 py-7 sm:py-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center font-display text-[clamp(1.4rem,2vw,1.9rem)] font-semibold leading-none tracking-[-0.05em]"
          >
            {site.brand}
          </Link>
          <Text variant="small" className="!text-brand-cream/75">
            {site.role} · {site.location}
          </Text>
        </div>

        <div className="grid min-w-0 gap-x-12 gap-y-14 py-14 sm:py-20 lg:grid-cols-12 lg:gap-x-10 lg:py-24">
          <div className="min-w-0 lg:col-span-6">
            <Text variant="label" className="!text-brand-cream/65">
              Have something in mind?
            </Text>
            <p className="mt-6 max-w-[14ch] font-display text-[clamp(2.5rem,4.2vw,4.65rem)] font-normal leading-[1.06] tracking-[-0.055em]">
              Good ideas deserve
              <span className="block font-light text-brand-cream/70">
                great design.
              </span>
            </p>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-12 items-center gap-5 border-b border-brand-cream/75 pb-1 text-sm font-medium transition-opacity hover:opacity-75 motion-reduce:transition-none"
            >
              Let&apos;s talk on WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>

          <nav aria-label="Footer navigation" className="min-w-0 lg:col-span-3">
            <Text variant="label" className="!text-brand-cream/65">Explore</Text>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-1 lg:grid-cols-1">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm font-medium text-brand-cream/90 underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-3">
            <Text variant="label" className="!text-brand-cream/65">
              Get in touch
            </Text>
            <div className="mt-5 grid gap-4">
              {email && (
                <a
                  href={"mailto:" + email}
                  className="inline-flex min-h-10 max-w-full items-center break-all text-sm font-medium text-brand-cream/90 underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              )}
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"WhatsApp: " + site.contact.whatsappNumber + " (opens in a new tab)"}
                className="inline-flex min-h-10 max-w-full flex-wrap items-center gap-x-2 text-sm font-medium text-brand-cream/90 underline-offset-4 hover:underline"
              >
                <span>WhatsApp</span>
                <span className="text-brand-cream/65">{site.contact.whatsappNumber}</span>
              </a>
            </div>

            <div className="mt-8 border-t border-brand-cream/25 pt-6">
              <Text variant="label" className="!text-brand-cream/65">
                Follow
              </Text>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hephzibah Uzorndu on LinkedIn (opens in a new tab)"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-brand-cream/90 underline-offset-4 hover:underline"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={site.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hephie Creatives on Instagram (opens in a new tab)"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-brand-cream/90 underline-offset-4 hover:underline"
                >
                  Instagram <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-brand-cream/25 py-6">
          <Text variant="small" className="!text-brand-cream/70">
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </Text>
          <Link
            href="/#home"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-brand-cream/90 underline-offset-4 hover:underline"
          >
            Back to top <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
