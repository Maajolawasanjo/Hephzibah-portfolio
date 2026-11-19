import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { site } from "@/config/site";

/**
 * A short capability index supporting the hero, not the full services section.
 * Service details and conversion flow are scheduled for Phase 09.
 */
export function FocusStrip() {
  return (
    <Section
      id="focus"
      tone="inverse"
      compact
      aria-labelledby="focus-heading"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Text variant="label" muted className="mb-4">
              01 / What I create
            </Text>
            <Heading id="focus-heading" level={2} size="md">
              Good design starts with a clear story.
            </Heading>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid gap-x-12 sm:grid-cols-2">
              {site.services.map((service, index) => (
                <li
                  key={service}
                  className="flex min-h-20 items-center gap-4 border-t border-rule py-5"
                >
                  <span className="self-start pt-1 text-xs tabular-nums text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1rem,1.65vw,1.25rem)] font-medium leading-snug">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
