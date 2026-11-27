import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutContent } from "@/content/about";
import { site } from "@/config/site";

/**
 * Screenshot-led manifesto composition: dominant statement, offset biography,
 * then the three approved creative principles as open ruled rows.
 */
export function About() {
  const emphasis = "she creates.";
  const hasEmphasis = aboutContent.heading.endsWith(emphasis);
  const headingLead = hasEmphasis
    ? aboutContent.heading.slice(0, -emphasis.length)
    : aboutContent.heading;

  return (
    <Section id="about" aria-labelledby="about-heading" className="bg-brand-cream">
      <Container>
        <Text variant="label" muted className="mb-14 flex items-center gap-4">
          <span>{aboutContent.eyebrow}</span>
          <span aria-hidden="true" className="h-px w-12 bg-rule" />
        </Text>

        <Heading
          id="about-heading"
          level={2}
          size="xl"
          className="max-w-[20ch] !font-normal !leading-[0.98] !tracking-[-0.065em]"
        >
          {headingLead}
          {hasEmphasis && (
            <span className="font-light opacity-70">{emphasis}</span>
          )}
        </Heading>

        <div className="mt-16 grid min-w-0 gap-14 lg:ml-[15%] lg:mt-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-[10%]">
          <div className="min-w-0">
            <Text variant="lead" className="max-w-[42ch]">
              {aboutContent.intro}
            </Text>
            <div className="mt-8 grid gap-5">
              {aboutContent.body.map((paragraph) => (
                <Text key={paragraph} className="max-w-[53ch]">{paragraph}</Text>
              ))}
            </div>
            <Link
              href="/#process"
              className="mt-9 inline-flex min-h-11 items-center gap-3 border-b border-current pb-1 text-sm font-medium transition-opacity hover:opacity-70 focus-visible:outline-offset-4 motion-reduce:transition-none"
            >
              Explore my design process <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="min-w-0">
            <ol className="border-t border-rule">
              {aboutContent.principles.map((principle) => (
                <li
                  key={principle.index}
                  className="grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-6 sm:py-7"
                >
                  <span className="pt-1 text-xs font-medium text-muted">{principle.index}</span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[clamp(1.25rem,1.7vw,1.7rem)] font-medium leading-tight tracking-[-0.03em]">
                      {principle.heading}
                    </h3>
                    <Text variant="small" className="mt-3 max-w-[39ch]">{principle.copy}</Text>
                  </div>
                </li>
              ))}
            </ol>
            <Text variant="small" muted className="mt-8">
              {site.brand} · {site.location}
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
