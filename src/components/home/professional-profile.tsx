import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { professionalProfile } from "@/content/professional";

/** Separate main sections retain their original professional content. */
export function ProfessionalExperience() {
  const work = professionalProfile.clientWork;
  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <Container>
        <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <Text variant="label" muted className="mb-7 flex items-center gap-4">
              <span>Professional practice</span>
              <span aria-hidden="true" className="h-px w-10 bg-rule" />
            </Text>
            <Heading id="experience-heading" level={2} size="lg" className="max-w-[12ch]">
              Experience.
            </Heading>
            <Text variant="lead" className="mt-6 max-w-[34ch]">
              Design work shaped by real clients, personal brands and direct collaboration.
            </Text>
          </div>
          <div className="min-w-0 lg:col-span-7 lg:pt-2">
            <article className="border-t border-rule pt-7 sm:pt-9">
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <Text variant="label" muted>Independent creative practice</Text>
                <Text variant="small" muted>{work.arrangement}</Text>
              </div>
              <Heading level={3} size="md" className="mt-8 max-w-[28ch]">
                {work.title}
              </Heading>
              <Text className="mt-6 max-w-[62ch]">
                {work.description}
              </Text>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ProfessionalSkills() {
  return (
    <Section id="skills" compact aria-labelledby="skills-heading" className="bg-soft">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-9">
          <Heading id="skills-heading" level={2} size="lg">
            My skills.
          </Heading>
          <Text className="max-w-[44ch]">
            A practical mix of identity design, visual communication and client collaboration.
          </Text>
        </div>
        <div className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {professionalProfile.competencies.map((skill) => (
            <article key={skill.name} className="min-w-0">
              <Heading level={3} size="md">
                {skill.name}
              </Heading>
              <Text className="mt-2 max-w-[40ch]">{skill.detail}</Text>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ProfessionalEducation() {
  return (
    <Section id="education" compact aria-labelledby="education-heading">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
          <Heading id="education-heading" level={2} size="lg">
            Education & training.
          </Heading>
          <Text className="max-w-[45ch]">
            Academic learning and design courses that continue to shape the practice.
          </Text>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {professionalProfile.learning.map((item) => (
            <article key={item.institution} className="rounded-xl bg-soft px-6 py-7">
              <Heading level={3} size="md">{item.institution}</Heading>
              <Text variant="small" className="mt-2 font-medium" muted>
                {item.status}
              </Text>
              <Text className="mt-4">{item.description}</Text>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
