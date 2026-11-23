import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { professionalProfile } from "@/content/professional";

/** All three are main sections. Their content is deliberately concise. */
export function ProfessionalExperience() {
  const work = professionalProfile.clientWork;
  return (
    <Section id="experience" compact aria-labelledby="experience-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-14">
          <div>
            <Heading id="experience-heading" level={2} size="lg">
              Experience.
            </Heading>
            <Text variant="lead" className="mt-4 max-w-[45ch]">
              Design work shaped by real clients, personal brands and direct collaboration.
            </Text>
          </div>
          <article className="rounded-xl bg-soft px-6 py-7 sm:px-8 sm:py-9">
            <Heading level={3} size="md">
              {work.title}
            </Heading>
            <Text variant="small" className="mt-2 font-medium" muted>
              {work.arrangement}
            </Text>
            <Text className="mt-5 max-w-[65ch]">
              {work.description}
            </Text>
          </article>
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
