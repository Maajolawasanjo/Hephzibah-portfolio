import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { site } from "@/config/site";

/**
 * Phase 05 homepage hero. Authored as text-first editorial art direction:
 * no stock portraits, unapproved logo, fabricated client work, or fake metrics.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-brand-cream text-brand-burgundy"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-rule py-5">
          <Text variant="label" className="text-[0.6875rem]">
            Independent creative practice
          </Text>
          <Text variant="small" muted>
            Based in {site.location}
          </Text>
        </div>

        <div className="grid min-h-[min(46rem,88svh)] items-center gap-12 py-[clamp(4rem,7vw,8rem)] lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8 xl:col-span-9">
            <Text variant="label" muted className="mb-6 sm:mb-9">
              Hello, I’m {site.name}
            </Text>

            <Heading
              level={1}
              size="display"
              id="hero-heading"
              className="max-w-[10.5ch] [overflow-wrap:normal] text-[clamp(2.9rem,7.6vw,8.5rem)] leading-[0.98] tracking-[-0.062em]"
            >
              Design to
              <span className="block">stand out.</span>
              <span className="block">Stay seen.</span>
            </Heading>

            <div className="mt-9 grid max-w-[48rem] gap-7 border-t border-rule pt-7 sm:mt-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-10 sm:pt-9">
              <div>
                <Text variant="lead" className="max-w-[36ch]">
                  {site.tagline}
                </Text>
                <Text variant="small" muted className="mt-4">
                  {site.role}
                </Text>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-stretch">
                <Button href="/#services" size="lg" className="whitespace-nowrap">
                  What I create <span aria-hidden="true">↗</span>
                </Button>
                <Button
                  href="/#selected-work"
                  size="sm"
                  variant="text"
                  className="whitespace-nowrap"
                >
                  Selected work <span aria-hidden="true">↓</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 lg:col-span-4 xl:col-span-3">
            <div
              aria-hidden="true"
              className="relative flex min-h-[18rem] flex-col justify-between overflow-hidden bg-brand-burgundy p-6 text-brand-cream sm:min-h-[22rem] sm:p-8 lg:aspect-[3/5] lg:min-h-0"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                  Design / 001
                </span>
                <span className="text-sm">✳</span>
              </div>
              <div className="relative -ml-2 select-none">
                <span className="block font-display text-[clamp(6.5rem,13vw,13rem)] font-bold leading-[0.8] tracking-[-0.12em]">
                  Aa.
                </span>
              </div>
              <span className="max-w-[17ch] text-[0.65rem] font-semibold uppercase leading-relaxed tracking-[0.17em]">
                Distinctive identities. Thoughtful stories.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-rule py-5">
          <Text variant="label" muted>
            Independent designer · Lagos
          </Text>
          <a
            href="#selected-work"
            className="inline-flex min-h-10 items-center gap-3 rounded-[var(--radius-control)] text-sm font-medium underline-offset-4 hover:underline"
          >
            Explore below <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
