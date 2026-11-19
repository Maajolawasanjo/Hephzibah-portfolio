import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";

/**
 * Temporary honest destination for "Selected work".
 * Phase 06 will replace this with a gallery of verified real projects.
 */
export function WorkPlaceholder() {
  return (
    <Section id="selected-work" aria-labelledby="selected-work-heading">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Text variant="label" muted className="mb-6">
              02 / Selected work
            </Text>
            <Heading id="selected-work-heading" level={2} size="lg">
              Every project has a point of view.
            </Heading>
          </div>
          <div className="lg:col-span-4">
            <Text variant="lead">
              Curated brand identity projects and case studies are being
              prepared for this space.
            </Text>
            <Text variant="small" muted className="mt-4">
              Actual client work, imagery and project details will be
              introduced in the next phases.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
