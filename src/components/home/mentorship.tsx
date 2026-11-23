import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { mentorshipContent } from "@/content/supporting";

/** Teaching remains a standalone main section, without repetitive labels. */
export function Mentorship() {
  return (
    <Section id="mentorship" compact aria-labelledby="mentorship-heading" className="bg-soft">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <Heading id="mentorship-heading" level={2} size="lg">
            {mentorshipContent.heading}
          </Heading>
          <div>
            <Text variant="lead">{mentorshipContent.statement}</Text>
            <Text className="mt-4 max-w-[62ch]">{mentorshipContent.detail}</Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
