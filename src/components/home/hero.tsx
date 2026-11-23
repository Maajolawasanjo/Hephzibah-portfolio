import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { EditorialImage } from "@/components/ui/editorial-image";
import { site } from "@/config/site";

/** V3: one clear introduction, one image, and two meaningful actions. */
export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="pt-5 pb-12 md:pt-9 md:pb-18">
      <Container>
        <div className="theme-inverse relative isolate overflow-hidden rounded-[1.25rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-18">
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-32 -z-10 h-96 w-96 rounded-full border-[66px] border-brand-cream/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-1/3 -z-10 h-80 w-80 rounded-full border-[44px] border-brand-cream/7" />
          <div className="relative z-10 grid gap-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-center lg:gap-12">
            <div>
              <Text variant="label" className="motion-hero-intro mb-5 !tracking-[0.13em]">
                {site.name} · Brand identity designer
              </Text>
              <Heading id="hero-heading" level={1} size="display" className="motion-hero-heading max-w-[12ch]">
                Design with purpose. Create with character.
              </Heading>
              <Text variant="lead" className="motion-hero-summary mt-6 max-w-[54ch]">
                I&apos;m Hephzibah, a Lagos-based creative making identities,
                graphic design and visual stories that help people and businesses stand out.
              </Text>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#experience" size="lg">
                  Explore my experience <span aria-hidden="true">↗</span>
                </Button>
                <Button href="/#selected-work" variant="secondary" size="lg" className="!border-brand-cream !text-brand-cream hover:!bg-brand-cream/10">
                  View my work <span aria-hidden="true">↗</span>
                </Button>
              </div>
            </div>
            <div className="motion-hero-specimen lg:justify-self-end">
              <EditorialImage
                asset="branding"
                showCaption={false}
                sizes="(max-width: 1024px) 85vw, 31vw"
                imageClassName="rounded-xl border-0 bg-transparent"
              />
              <Text variant="small" className="mt-3 !text-brand-cream/80">
                Illustrative brand identity reference
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
