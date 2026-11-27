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
        <div className="grid min-w-0 gap-7 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <Text variant="label" muted className="mb-7">Core disciplines</Text>
            <Heading id="skills-heading" level={2} size="lg" className="max-w-[12ch]">
              My skills.
            </Heading>
          </div>
          <div className="min-w-0 lg:col-span-5">
            <Text variant="lead" className="max-w-[42ch]">
              A practical mix of identity design, visual communication and client collaboration.
            </Text>
          </div>
        </div>

        <div className="mt-12 grid min-w-0 gap-x-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {professionalProfile.competencies.map((skill, index) => (
            <article key={skill.name} className="min-w-0 border-t border-rule py-7 sm:py-8">
              <Text variant="label" muted className="mb-5">
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Heading level={3} size="md" className="max-w-[18ch] !font-normal">
                {skill.name}
              </Heading>
              <Text className="mt-4 max-w-[42ch]">{skill.detail}</Text>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ProfessionalEducation() {
  return (
    <Section id="education" compact aria-labelledby="education-heading" className="bg-brand-cream">
      <Container>
        <div className="grid min-w-0 gap-7 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <Text variant="label" muted className="mb-7">Learning & growth</Text>
            <Heading id="education-heading" level={2} size="lg">
              Education &amp; training.
            </Heading>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:pb-2">
            <Text variant="lead" className="max-w-[40ch]">
              Academic learning and design courses that continue to shape the practice.
            </Text>
          </div>
        </div>

        <div className="mt-12 border-t border-rule sm:mt-16">
          {professionalProfile.learning.map((item, index) => (
            <article
              key={item.institution}
              className="grid min-w-0 gap-4 border-b border-rule py-7 sm:py-9 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10"
            >
              <Text variant="label" muted className="pt-1">
                {String(index + 1).padStart(2, "0")}
              </Text>
              <div className="min-w-0">
                <Heading level={3} size="md" className="!font-normal">{item.institution}</Heading>
                <Text variant="small" muted className="mt-2">{item.status}</Text>
              </div>
              <Text className="max-w-[50ch]">{item.description}</Text>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
