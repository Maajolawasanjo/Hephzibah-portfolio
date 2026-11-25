import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { EditorialImage } from "@/components/ui/editorial-image";
import { site } from "@/config/site";

/**
 * V5 full-width editorial hero inspired by Nova Grove's breathing room and
 * visual hierarchy, without pretending that reference imagery is client work.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="theme-inverse relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_28%,rgba(254,252,239,0.085),transparent_48%)]"
      />
      <Container className="relative">
        <div className="grid min-h-[calc(100svh-6rem)] items-center gap-12 pb-12 pt-14 sm:gap-16 sm:pb-14 sm:pt-20 lg:grid-cols-[minmax(0,1.17fr)_minmax(0,0.83fr)] lg:gap-16 lg:pb-16 lg:pt-24">
          <div className="min-w-0">
            <Text
              variant="label"
              className="motion-hero-intro mb-7 flex items-center gap-3 !text-brand-cream/80 sm:mb-10"
            >
              <span aria-hidden="true" className="h-px w-9 shrink-0 bg-brand-cream/70" />
              {site.name} · Brand identity designer
            </Text>
            <Heading
              id="hero-heading"
              level={1}
              size="display"
              className="motion-hero-heading max-w-[14ch] !text-[clamp(3rem,6.6vw,7rem)]"
            >
              Design with
              <span className="block font-light italic"> purpose.</span>
              Create with
              <span className="block font-light italic"> character.</span>
            </Heading>
            <Text
              variant="lead"
              className="motion-hero-summary mt-7 max-w-[46ch] !text-brand-cream/85 sm:mt-9"
            >
              I&apos;m Hephzibah, a Lagos-based creative making identities,
              graphic design and visual stories that help people and businesses stand out.
            </Text>
            <div className="mt-9 flex flex-wrap items-center gap-4 sm:mt-11">
              <Button href="/#selected-work" size="lg" className="!px-7">
                View my work <span aria-hidden="true">↗</span>
              </Button>
              <Button
                href="/#about"
                variant="secondary"
                size="lg"
                className="!border-brand-cream/60 !text-brand-cream hover:!bg-brand-cream/10"
              >
                Get to know me <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          <div className="motion-hero-specimen min-w-0">
            <div className="relative bg-brand-cream px-5 pb-6 pt-5 text-brand-burgundy sm:px-8 sm:pb-8 sm:pt-7 lg:px-9">
              <div className="flex items-center justify-between gap-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                <span>Visual identity</span>
                <span>01 / Studio</span>
              </div>
              <EditorialImage
                asset="branding"
                showCaption={false}
                sizes="(max-width: 1024px) 90vw, 39vw"
                className="mt-8"
                imageClassName="!border-0 !bg-transparent"
              />
              <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-brand-burgundy/25 pt-4">
                <Text variant="small" className="max-w-[19ch] !text-brand-burgundy">
                  Illustrative brand identity reference
                </Text>
                <span aria-hidden="true" className="font-display text-[2.75rem] font-light leading-none tracking-[-0.08em]">
                  H.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-cream/25 pt-5 lg:col-span-2">
            <Text variant="small" className="!text-brand-cream/75">
              {site.location} · Brand identity &amp; visual storytelling
            </Text>
            <a
              href="#selected-work"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-cream underline-offset-4 hover:underline"
            >
              Scroll to explore <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
