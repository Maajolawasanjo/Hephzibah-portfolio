import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import {
  getApprovedTools,
  toolkitDisciplines,
} from "@/content/supporting";

/**
 * Creative disciplines follow actual service categories. Individual
 * software products are not listed until confirmed by the owner.
 */
export function Toolkit() {
  const tools = getApprovedTools();

  return (
    <Section id="toolkit" aria-labelledby="toolkit-heading">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Text variant="label" muted>06 / Creative toolkit</Text>
          </div>
          <div className="lg:col-span-8">
            <Heading
              id="toolkit-heading"
              level={2}
              size="lg"
              className="max-w-[17ch]"
            >
              The idea leads. The medium follows.
            </Heading>
            <Text variant="lead" className="mt-7 max-w-[55ch]">
              The right creative choices bring a brand into focus, from
              the identity to the imagery and content that carry its story.
            </Text>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {toolkitDisciplines.map((discipline) => (
            <div key={discipline.number} className="border-t border-rule py-6">
              <Text variant="label" muted>{discipline.number}</Text>
              <Heading level={3} size="md" className="mt-7">
                {discipline.name}
              </Heading>
              <Text variant="small" className="mt-5 max-w-[35ch]">
                {discipline.detail}
              </Text>
            </div>
          ))}
        </div>

        {tools.length > 0 && (
          <div className="mt-12 border-t border-rule pt-8">
            <Heading level={3} size="md">
              Tools I work with
            </Heading>
            <ul className="mt-6 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="border border-rule px-4 py-3"
                >
                  <span className="font-medium">{tool.name}</span>
                  <span className="ml-2 text-sm text-muted">
                    {tool.category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
