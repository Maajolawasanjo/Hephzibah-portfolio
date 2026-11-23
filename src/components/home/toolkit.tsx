import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { getApprovedTools, toolkitDisciplines } from "@/content/supporting";

export function Toolkit() {
  const tools = getApprovedTools();

  return (
    <Section id="toolkit" compact aria-labelledby="toolkit-heading">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>Software & creative toolkit</Text>
            <Text className="mt-5 max-w-[29ch]" muted>
              The tools support the thinking; the work is defined
              by the brief, the audience and the execution.
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading id="toolkit-heading" level={2} size="lg">
              From idea to execution.
            </Heading>
            <Text variant="lead" className="mt-5 max-w-[52ch]">
              I work with familiar graphic design software and
              creative techniques to develop identities, imagery and
              everyday visual communication.
            </Text>

            {tools.length > 0 && (
              <div className="mt-9">
                <Heading level={3} size="md">Design software I use</Heading>
                <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                  {tools.map((tool) => (
                    <li key={tool.name} className="border-t border-rule pt-4">
                      <Text className="font-semibold">{tool.name}</Text>
                      <Text variant="small" muted className="mt-2">{tool.category}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-9 border-t border-rule pt-6">
              <Heading level={3} size="md">Creative disciplines</Heading>
              <ul className="mt-4 grid gap-5 sm:grid-cols-3">
                {toolkitDisciplines.map((discipline) => (
                  <li key={discipline.number} className="border-t border-rule pt-4">
                    <Text variant="label" muted>{discipline.number}</Text>
                    <Text className="mt-3 font-semibold">{discipline.name}</Text>
                    <Text variant="small" className="mt-2">{discipline.detail}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
