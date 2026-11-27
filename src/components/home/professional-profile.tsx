import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { experienceHighlights, professionalProfile } from "@/content/professional";

/** Separate main sections retain their original professional content. */
export function ProfessionalExperience() {
  return (
    <Section id="experience" compact aria-labelledby="experience-heading">
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <Text variant="label" muted className="mb-7">Creative experience</Text>
            <Heading id="experience-heading" level={2} size="lg">
              Experience.
            </Heading>
          </div>
          <div className="min-w-0 lg:col-span-5">
            <Text variant="lead" className="max-w-[42ch]">
              Selected logo design commissions for clients in commerce,
              technology and fashion.
            </Text>
          </div>
        </div>

        <div className="mt-12 border-t border-rule sm:mt-16">
          {experienceHighlights.map((experience) => (
            <article
              key={experience.number}
              className="grid min-w-0 gap-4 border-b border-rule py-8 sm:py-10 lg:grid-cols-[3.5rem_minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12"
            >
              <Text variant="label" muted className="pt-1">
                {experience.number}
              </Text>
              <div className="min-w-0">
                <Heading level={3} size="md" className="max-w-[22ch] !font-normal">
                  {experience.title}
                </Heading>
                <Text variant="small" muted className="mt-3">
                  {experience.industry}
                </Text>
              </div>
              <div className="min-w-0">
                <Text className="max-w-[54ch]">{experience.summary}</Text>
                <Text variant="small" muted className="mt-4">
                  Project type · {experience.role}
                </Text>
              </div>
            </article>
          ))}
        </div>

        <Text variant="small" muted className="mt-7 max-w-[72ch]">
          Client project details are shown as provided. Finished logo artwork and
          case studies can be added when the original files are available.
        </Text>
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
