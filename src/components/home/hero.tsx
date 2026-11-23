import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { site } from "@/config/site";

/** A professional introduction rather than a decorative typography sample. */
export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="bg-brand-cream text-brand-burgundy">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule py-5">
          <Text variant="label">Brand identity & visual storytelling</Text>
          <Text variant="small" muted>{site.location}</Text>
        </div>

        <div className="grid gap-10 py-[clamp(3.5rem,7vw,6.5rem)] lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-8">
            <Text variant="label" muted className="motion-hero-intro mb-6">
              Hephzibah Uzorndu · Designer
            </Text>
            <Heading
              id="hero-heading"
              level={1}
              size="display"
              className="motion-hero-heading max-w-[15ch] !leading-[1.03] !tracking-[-0.047em]"
            >
              Identities with purpose. Design with character.
            </Heading>
            <Text variant="lead" className="motion-hero-summary mt-7 max-w-[55ch]">
              {site.tagline} I bring branding, graphic design and visual
              storytelling together through remote and in-person client work.
            </Text>
          </div>

          <aside className="motion-hero-specimen border-t border-rule pt-6 lg:col-span-4 lg:ml-auto lg:max-w-sm" aria-label="Creative practice overview">
            <Text variant="label" muted className="mb-4">What I bring to the table</Text>
            <Text className="max-w-[39ch]">
              Identity design, personal branding, considered layouts and
              visual content for people and businesses looking to
              communicate with clarity.
            </Text>
            <div className="mt-7 grid grid-cols-2 gap-6 border-t border-rule pt-5">
              <div>
                <Text variant="label" muted>Practice</Text>
                <Text variant="small" className="mt-2">Online and on-site</Text>
              </div>
              <div>
                <Text variant="label" muted>Based in</Text>
                <Text variant="small" className="mt-2">{site.location}</Text>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex flex-wrap gap-4 border-t border-rule py-6">
          <Button href="/#experience" size="lg">
            Explore my experience <span aria-hidden="true">↗</span>
          </Button>
          <Button href="/#services" variant="text" size="lg">
            What I create <span aria-hidden="true">↗</span>
          </Button>
          <Button href="/#selected-work" variant="text" size="lg">
            Selected work <span aria-hidden="true">↓</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
