import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutContent } from "@/content/about";
import { site } from "@/config/site";

/**
 * V5 About — an open editorial introduction, not a collection of cards.
 * Keep all approved biography paragraphs. A real portrait can be added
 * when one is available; no unapproved likeness is implied here.
 */
export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading" className="bg-soft">
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <Text variant="label" muted className="mb-7 flex items-center gap-4">
              <span>{aboutContent.eyebrow}</span>
              <span aria-hidden="true" className="h-px w-10 bg-rule" />
            </Text>
            <Heading
              id="about-heading"
              level={2}
              size="xl"
              className="max-w-[17ch]"
            >
              {aboutContent.heading}
            </Heading>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:pb-2">
            <Text variant="lead" className="max-w-[42ch]">
              {aboutContent.intro}
            </Text>
          </div>
        </div>

        <div className="mt-12 grid min-w-0 gap-9 border-t border-rule pt-9 sm:mt-16 sm:pt-12 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-4">
            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.04em]">
              {site.brand}
            </p>
            <Text variant="small" muted className="mt-3">
              {site.role} · {site.location}
            </Text>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <div className="grid gap-5 lg:max-w-[65ch] sm:gap-6">
              {aboutContent.body.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </div>
            <Link
              href="/#process"
              className="mt-9 inline-flex min-h-11 items-center gap-3 border-b border-current pb-1 text-sm font-semibold transition-opacity hover:opacity-70 focus-visible:outline-offset-4 motion-reduce:transition-none"
            >
              Explore my design process <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
