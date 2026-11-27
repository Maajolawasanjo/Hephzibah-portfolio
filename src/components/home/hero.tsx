import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { site } from "@/config/site";

/**
 * Clear editorial hero: the approved brand palette keeps the copy legible
 * while the illustrative artwork remains visible, at full opacity, in its
 * own composition. No gradient, blur, or text laid over busy imagery.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="theme-inverse hephie-hero relative isolate overflow-hidden"
    >
      <div
        className="hephie-hero-photo absolute inset-y-0 right-0 hidden w-[43%] lg:block"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="hephie-hero-inner flex min-w-0 flex-col justify-between gap-12 pb-8 pt-14 sm:pb-10 sm:pt-20 lg:w-[56%] lg:gap-14 lg:pb-12 lg:pt-24">
          <div className="min-w-0">
            <Text
              variant="label"
              className="motion-hero-intro mb-10 flex items-center gap-3 !text-brand-cream/85"
            >
              <span aria-hidden="true" className="h-px w-9 shrink-0 bg-brand-cream/75" />
              {site.name} · Brand identity designer
            </Text>

            <Heading
              id="hero-heading"
              level={1}
              size="display"
              className="motion-hero-heading max-w-[13ch] !text-[clamp(3.1rem,5.55vw,6.5rem)] !font-normal !leading-[0.99] !tracking-[-0.06em] sm:max-w-[13ch]"
            >
              Design with purpose.
              <span className="hephie-hero-highlight mt-2 block font-light">
                Create with character.
              </span>
            </Heading>

            <Text
              variant="lead"
              className="motion-hero-summary mt-9 max-w-[43ch] !text-brand-cream/90 sm:mt-10"
            >
              I&apos;m Hephzibah, a Lagos-based creative making identities,
              graphic design and visual stories that help people and businesses stand out.
            </Text>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
              <Button
                href="/#selected-work"
                size="lg"
                className="!min-h-14 !rounded-[2px] !px-7 !text-sm"
              >
                Explore my work <span aria-hidden="true" className="ml-4">↗</span>
              </Button>
              <Link
                href="/#about"
                className="inline-flex min-h-11 items-center gap-3 border-b border-brand-cream/75 pb-1 text-sm font-medium text-brand-cream transition-opacity hover:opacity-75 motion-reduce:transition-none"
              >
                Get to know me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-brand-cream/30 pt-5">
            <Text variant="small" className="!text-brand-cream/80">
              {site.location} · Visual identities &amp; storytelling
            </Text>
            <Link
              href="/#about"
              className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-brand-cream underline-offset-4 hover:underline"
            >
              Discover <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </Container>

      <div
        className="hephie-hero-photo relative aspect-[3/2] w-full lg:hidden"
        aria-hidden="true"
      />
    </section>
  );
}
