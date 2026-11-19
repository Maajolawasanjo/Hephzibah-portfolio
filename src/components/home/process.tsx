import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { processSteps } from "@/content/supporting";

/** An editorial account of creative practice, not a fixed project contract. */
export function Process() {
  return (
    <Section tone="inverse" id="process" aria-labelledby="process-heading">
      <Container>
        <div data-reveal="up" className="grid gap-9 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Text variant="label" muted className="mb-7">
              05 / My process
            </Text>
            <Heading
              id="process-heading"
              level={2}
              size="xl"
              className="max-w-[14ch]"
            >
              Built on understanding.
            </Heading>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <Text variant="lead" className="max-w-[45ch]">
              From the first conversation to the finishing touches, every
              creative decision should have a purpose.
            </Text>
            <Text variant="small" muted className="mt-4">
              The details of each collaboration depend on its brief.
            </Text>
          </div>
        </div>

        <ol className="mt-14 grid border-t border-rule sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col justify-between gap-12 border-b border-rule py-7 sm:pr-8 lg:min-h-72 lg:pr-10 lg:py-10"
            >
              <Text variant="label" muted>{step.number}</Text>
              <div>
                <Heading level={3} size="md">{step.title}</Heading>
                <Text variant="small" className="mt-5 max-w-[36ch]">
                  {step.summary}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
