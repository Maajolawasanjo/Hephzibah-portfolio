import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { mentorshipContent } from "@/content/supporting";

export function Mentorship() {
  return (
    <Section compact id="mentorship" aria-labelledby="mentorship-heading">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>Teaching & mentorship</Text>
            <Text className="mt-5 max-w-[29ch]" muted>
              Learning is an ongoing part of creative practice.
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading level={2} size="lg" id="mentorship-heading">
              {mentorshipContent.heading}
            </Heading>
            <Text variant="lead" className="mt-5 max-w-[55ch]">
              {mentorshipContent.statement}
            </Text>
            <Text className="mt-5 max-w-[65ch]" muted>
              {mentorshipContent.detail}
            </Text>
            <Link href="/#about" className="mt-6 inline-flex min-h-11 items-center font-medium underline underline-offset-8">
              More about my approach <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
