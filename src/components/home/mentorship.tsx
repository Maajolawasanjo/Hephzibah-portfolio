import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { mentorshipContent } from "@/content/supporting";

/** One expansive statement, balanced by concise teaching details. */
export function Mentorship() {
  return (
    <Section id="mentorship" aria-labelledby="mentorship-heading" className="bg-soft">
      <Container>
        <Text variant="label" muted className="mb-12">{mentorshipContent.eyebrow}</Text>
        <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="min-w-0 lg:col-span-8">
            <Heading
              id="mentorship-heading"
              level={2}
              size="xl"
              className="max-w-[13ch] !font-light"
            >
              {mentorshipContent.heading}
            </Heading>
          </div>
          <div className="min-w-0 lg:col-span-4">
            <Text variant="lead" className="max-w-[45ch]">
              {mentorshipContent.statement}
            </Text>
          </div>
        </div>
        <div className="mt-16 grid min-w-0 gap-8 border-t border-rule pt-8 lg:grid-cols-12 lg:gap-12">
          <Text className="max-w-[62ch] lg:col-start-6 lg:col-span-7">
            {mentorshipContent.detail}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
