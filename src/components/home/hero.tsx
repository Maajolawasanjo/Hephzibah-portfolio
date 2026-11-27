import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { site } from "@/config/site";

/**
 * Screenshot-led V5 hero: one continuous, image-led editorial composition.
 * The atmospheric sample image is illustrative, not Hephizbah's client work.
 * The actual published project gallery remains approval-gated separately.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="theme-inverse hephie-hero relative isolate overflow-hidden"
    >
      <div className="hephie-hero-photo pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="hephie-hero-inner flex min-w-0 flex-col justify-between pb-8 pt-14 sm:pb-10 sm:pt-24 lg:pt-28">
          <div className="min-w-0">
            <Text
              variant="label"
              className="motion-hero-intro mb-9 flex items-center gap-3 !text-brand-cream/85"
            >
              <span aria-hidden="true" className="h-px w-9 shrink-0 bg-brand-cream/70" />
              {site.name} · Brand identity designer
            </Text>

            <Heading
              id="hero-heading"
              level={1}
              size="display"
              className="motion-hero-heading max-w-[17ch] !text-[clamp(3.25rem,7.05vw,7.25rem)] !font-normal lg:max-w-none"
            >
              <span className="block lg:whitespace-nowrap">Design with purpose.</span>
              <span className="hephie-hero-highlight block font-light lg:whitespace-nowrap">
                Create with character.
              </span>
            </Heading>

            <Text
              variant="lead"
              className="motion-hero-summary mt-9 max-w-[49ch] !text-brand-cream/90 sm:mt-11"
            >
              I&apos;m Hephzibah, a Lagos-based creative making identities,
              graphic design and visual stories that help people and businesses stand out.
            </Text>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 sm:mt-12">
              <Button
                href="/#selected-work"
                size="lg"
                className="!min-h-14 !rounded-[2px] !px-7 !text-sm"
              >
                Explore my work <span aria-hidden="true" className="ml-5">↗</span>
              </Button>
              <Link
                href="/#about"
                className="inline-flex min-h-11 items-center gap-3 border-b border-brand-cream/75 pb-1 text-sm font-medium text-brand-cream transition-opacity hover:opacity-75 motion-reduce:transition-none"
              >
                Get to know me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-5 border-t border-brand-cream/30 pt-5 sm:mt-24">
            <Text variant="small" className="!text-brand-cream/80">
              {site.location} · Visual identities &amp; storytelling
            </Text>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
              <Text variant="small" className="!text-brand-cream/70">
                Illustrative visual reference
              </Text>
              <a
                href="#selected-work"
                className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-brand-cream hover:underline underline-offset-4"
              >
                Discover <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
