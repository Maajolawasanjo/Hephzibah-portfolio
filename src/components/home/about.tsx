import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutContent } from "@/content/about";
import { site } from "@/config/site";

/**
 * Phase 08 About section. Real portrait content is optional: without a
 * permitted photo, use intentional typography rather than a false headshot.
 */
export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading" className="bg-brand-cream text-brand-burgundy">
      <Container>
        <div data-reveal="up" className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <Text variant="label" muted className="mb-5">
              {aboutContent.eyebrow}
            </Text>
            <Text variant="small" className="max-w-[30ch]">
              {site.name}
              <span className="block text-muted">{site.role}</span>
              <span className="block text-muted">{site.location}</span>
            </Text>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <Heading
              id="about-heading"
              level={2}
              size="xl"
              className="max-w-[14ch] break-words"
            >
              {aboutContent.heading}
            </Heading>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8 lg:mt-20">
          <div className="min-w-0 md:col-span-5 lg:col-span-5">
            {aboutContent.portrait ? (
              <div className="relative aspect-[4/5] overflow-hidden bg-soft">
                <Image
                  src={aboutContent.portrait.src}
                  alt={aboutContent.portrait.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="relative flex min-h-[19rem] flex-col justify-between overflow-hidden bg-brand-burgundy p-7 text-brand-cream sm:min-h-[26rem] sm:p-10 md:aspect-[4/5] md:min-h-0"
              >
                <span className="type-label">A creative perspective</span>
                <span className="font-display text-[clamp(4.5rem,10vw,9rem)] font-bold leading-[0.83] tracking-[-0.08em]">
                  Think.
                  <span className="block">Create.</span>
                </span>
                <span className="type-label">Hephie Creatives · Lagos</span>
              </div>
            )}
          </div>

          <div className="min-w-0 md:col-span-7 lg:col-span-6 lg:col-start-7">
            <Text variant="lead" className="max-w-[42ch] font-medium">
              {aboutContent.intro}
            </Text>
            <div className="mt-8 space-y-6 border-t border-rule pt-8">
              {aboutContent.body.map((paragraph) => (
                <Text key={paragraph} className="max-w-[60ch]">
                  {paragraph}
                </Text>
              ))}
            </div>
            <a
              href="#about-principles"
              className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-control)] text-sm font-medium underline underline-offset-8 hover:opacity-80"
            >
              My approach <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div id="about-principles" className="mt-16 border-t border-rule pt-8 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Heading level={3} size="md">
                How I approach the work.
              </Heading>
              <Text variant="small" muted className="mt-4">
                The thinking behind the creative choices.
              </Text>
            </div>
            <ol className="grid gap-0 sm:grid-cols-3 sm:gap-6 lg:col-span-8">
              {aboutContent.principles.map((principle) => (
                <li
                  key={principle.index}
                  className="border-t border-rule py-6 sm:pt-4"
                >
                  <Text variant="label" muted className="mb-7">
                    {principle.index}
                  </Text>
                  <h4 className="font-display text-[clamp(1.4rem,2vw,1.85rem)] font-semibold leading-tight tracking-[-0.035em]">
                    {principle.heading}
                  </h4>
                  <Text variant="small" className="mt-4 max-w-[36ch]">
                    {principle.copy}
                  </Text>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
