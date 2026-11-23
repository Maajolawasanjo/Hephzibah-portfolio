import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { professionalProfile } from "@/content/professional";

export function ProfessionalExperience() {
  const experience = professionalProfile.clientWork;
  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>Professional experience</Text>
            <Text className="mt-5 max-w-[29ch]" muted>
              Design work shaped through real conversations, online
              collaborations and in-person client projects.
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading id="experience-heading" level={2} size="lg" className="max-w-[19ch]">
              Design experience grounded in client work.
            </Heading>
            <Text variant="lead" className="mt-6 max-w-[59ch]">
              {experience.description}
            </Text>
            <article className="mt-9 grid gap-5 border-t border-rule py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
              <div>
                <Heading level={3} size="md" className="max-w-[21ch]">
                  {experience.title}
                </Heading>
                <Text variant="small" muted className="mt-3">
                  {experience.arrangement}
                </Text>
              </div>
              <div>
                <Text>
                  Work with clients on design for their individual and
                  business identities, with attention to clear communication,
                  personal expression and consistent visuals.
                </Text>
                <Text variant="small" muted className="mt-5">
                  {experience.note}
                </Text>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ProfessionalSkills() {
  return (
    <Section id="skills" compact aria-labelledby="skills-heading">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>Expertise & skills</Text>
            <Text className="mt-5 max-w-[30ch]" muted>
              A practical mix of visual problem-solving, design
              execution and direct client collaboration.
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading id="skills-heading" level={2} size="lg" className="max-w-[20ch]">
              The skills behind the creative decisions.
            </Heading>
            <div className="mt-9 grid gap-x-9 sm:grid-cols-2">
              {professionalProfile.competencies.map((skill) => (
                <article key={skill.name} className="border-t border-rule py-6">
                  <Heading level={3} size="md">
                    {skill.name}
                  </Heading>
                  <Text className="mt-3 max-w-[39ch]" muted>{skill.detail}</Text>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ProfessionalEducation() {
  return (
    <Section id="education" compact aria-labelledby="education-heading">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>Education & training</Text>
            <Text className="mt-5 max-w-[28ch]" muted>
              Formal study and independent professional development
              remain part of the creative practice.
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading id="education-heading" level={2} size="lg">
              Learning, applied to practice.
            </Heading>
            <div className="mt-8">
              {professionalProfile.learning.map((item) => (
                <article key={item.institution} className="grid gap-3 border-t border-rule py-6 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-8">
                  <div>
                    <Heading level={3} size="md">{item.institution}</Heading>
                    <Text variant="small" muted className="mt-1">{item.status}</Text>
                  </div>
                  <Text muted>{item.description}</Text>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
