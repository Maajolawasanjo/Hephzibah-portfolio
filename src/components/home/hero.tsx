import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { EditorialImage } from "@/components/ui/editorial-image";
import { site } from "@/config/site";

/** Editorial introduction: one expressive headline and a balanced visual. */
export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="pb-10 pt-4 sm:pb-14 sm:pt-6 lg:pb-20 lg:pt-8">
      <Container>
        <div className="theme-inverse relative isolate overflow-hidden rounded-[1.25rem] px-6 pb-7 pt-10 sm:px-10 sm:pb-10 sm:pt-14 lg:px-16 lg:pb-14 lg:pt-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 -z-10 size-[28rem] rounded-full border-[1px] border-brand-cream/20" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-5 -top-28 -z-10 size-[22rem] rounded-full border-[1px] border-brand-cream/10" />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-14">
            <div className="min-w-0">
              <Text variant="label" className="motion-hero-intro mb-6 !tracking-[0.16em] !text-brand-cream/80">
                {site.name} · Brand identity designer
              </Text>
              <Heading id="hero-heading" level={1} size="display" className="motion-hero-heading max-w-[13ch] !leading-[0.99] !tracking-[-0.055em]">
                Design with purpose. Create with character.
              </Heading>
              <Text variant="lead" className="motion-hero-summary mt-7 max-w-[49ch] !text-brand-cream/85">
                I&apos;m Hephzibah, a Lagos-based creative making identities,
                graphic design and visual stories that help people and businesses stand out.
              </Text>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/#selected-work" size="lg" className="!rounded-full !px-7">
                  View my work <span aria-hidden="true">↗</span>
                </Button>
                <Button href="/#about" variant="secondary" size="lg" className="!rounded-full !border-brand-cream/50 !text-brand-cream hover:!bg-brand-cream/10">
                  Get to know me <span aria-hidden="true">↗</span>
                </Button>
              </div>
            </div>
            <div className="motion-hero-specimen min-w-0 lg:justify-self-end">
              <div className="overflow-hidden rounded-[1rem] border border-brand-cream/20 bg-brand-cream/5 p-2.5 sm:p-3">
                <EditorialImage
                  asset="branding"
                  showCaption={false}
                  sizes="(max-width: 1024px) 85vw, 30vw"
                  imageClassName="rounded-[0.65rem] border-0 bg-transparent"
                />
              </div>
              <Text variant="small" className="mt-3 !text-brand-cream/70">
                Illustrative brand identity reference
              </Text>
            </div>
          </div>
          <div className="relative z-10 mt-12 flex items-center justify-between gap-4 border-t border-brand-cream/20 pt-5 sm:mt-16">
            <Text variant="small" className="!text-brand-cream/70">{site.location}</Text>
            <a href="#selected-work" className="text-sm font-medium text-brand-cream underline-offset-4 hover:underline">
              Scroll to explore ↓
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
