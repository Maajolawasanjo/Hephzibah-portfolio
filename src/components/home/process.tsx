import { EditorialImage } from "@/components/ui/editorial-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { processSteps } from "@/content/supporting";

export function Process() {
  return (
    <Section tone="inverse" compact id="process" aria-labelledby="process-heading">
      <Container>
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-7">
            <Text variant="label" muted className="mb-5">Creative process</Text>
            <Heading id="process-heading" level={2} size="lg">
              Built on understanding.
            </Heading>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage asset="photography" sizes="(max-width: 1024px) 90vw, 31vw" className="mb-6" />
            <Text variant="lead">
              Every project begins with listening, grows through
              thoughtful design and improves through review.
            </Text>
          </div>
        </div>
        <ol className="mt-9 grid gap-x-8 border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="border-b border-rule py-6">
              <Text variant="label" muted>{step.number}</Text>
              <Heading level={3} size="md" className="mt-6">
                {step.title}
              </Heading>
              <Text className="mt-3 max-w-[38ch]">{step.summary}</Text>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
