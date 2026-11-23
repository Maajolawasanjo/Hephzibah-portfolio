import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { processSteps } from "@/content/supporting";

/** Keep the designer's creative process, but without nested micro-sections. */
export function Process() {
  return (
    <Section tone="inverse" id="process" aria-labelledby="process-heading">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <Heading id="process-heading" level={2} size="lg">
            My design process.
          </Heading>
          <Text variant="lead" className="max-w-[48ch]">
            Good design begins with listening and becomes stronger through
            thoughtful exploration, feedback and refinement.
          </Text>
        </div>
        <ol className="mt-11 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="min-w-0">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-sm font-bold text-brand-burgundy">
                {step.number}
              </span>
              <Heading level={3} size="md" className="mt-5">
                {step.title}
              </Heading>
              <Text className="mt-3">{step.summary}</Text>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
