import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { experienceHighlights, professionalProfile } from "@/content/professional";

/** Separate main sections retain their original professional content. */
type IndustryIconType = "commerce" | "technology" | "fashion";

/* Neutral sector pictograms, not unapproved client-logo reproductions. */
function IndustryIcon({ type }: { type: IndustryIconType }) {
  const base = {
    "aria-hidden": true as const,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-9 w-9 sm:h-11 sm:w-11",
  };

  if (type === "commerce") {
    return (
      <svg {...base}>
        <path d="M6 9h6l4.5 23h22l4-17H14" />
        <circle cx="19" cy="39" r="2" />
        <circle cx="36" cy="39" r="2" />
      </svg>
    );
  }

  if (type === "technology") {
    return (
      <svg {...base}>
        <path d="m17 12-12 12 12 12M31 12l12 12-12 12M28 9l-8 30" />
      </svg>
    );
  }

  return (
    <svg {...base}>
      <path d="M24 16a5 5 0 1 0-5-5" />
      <path d="M24 16v5L6.5 33a4 4 0 0 0 2.3 7h30.4a4 4 0 0 0 2.3-7L24 21" />
    </svg>
  );
}

/** Screenshot-matched, date-free experience cards with original brand colours. */
export function ProfessionalExperience() {
  return (
    <Section
      id="experience"
      compact
      aria-labelledby="experience-heading"
      className="bg-brand-cream"
    >
      <Container>
        <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <Text variant="label" className="mb-4 flex items-center gap-4">
              <span aria-hidden="true" className="h-[2px] w-10 bg-brand-burgundy" />
              Experience
            </Text>
            <Heading
              id="experience-heading"
              level={2}
              size="lg"
              className="!font-semibold !tracking-[-0.055em]"
            >
              Creative Experience
            </Heading>
          </div>
          <Text variant="lead" className="max-w-[48ch] lg:pb-1">
            A selection of client projects and creative collaborations where
            I&apos;ve helped brands build distinct and memorable identities.
          </Text>
        </div>

        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-6">
          {experienceHighlights.map((experience) => (
            <article
              key={experience.number}
              className="grid min-w-0 overflow-hidden rounded-[20px] border border-l-[4px] border-brand-burgundy bg-brand-cream lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]"
            >
              <div className="flex min-w-0 items-center gap-4 border-b border-brand-burgundy/20 px-5 py-7 sm:gap-6 sm:px-8 sm:py-9 lg:border-b-0 lg:border-r lg:px-7">
                <div
                  className="flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-[16px] bg-brand-burgundy text-brand-cream sm:h-20 sm:w-20"
                  aria-hidden="true"
                >
                  <IndustryIcon type={experience.icon} />
                </div>
                <div className="min-w-0">
                  <Heading
                    level={3}
                    size="md"
                    className="!text-[clamp(1.55rem,2.8vw,2.65rem)] !font-bold !leading-[1.06] !tracking-[-0.055em]"
                  >
                    {experience.title}
                  </Heading>
                  <Text className="mt-1 !text-[clamp(0.95rem,1.5vw,1.175rem)] !leading-snug">
                    {experience.industry}
                  </Text>
                  <span className="mt-4 inline-flex max-w-full rounded-full bg-brand-burgundy/[0.07] px-3 py-1.5 text-xs font-medium text-brand-burgundy sm:text-sm">
                    {experience.role}
                  </span>
                </div>
              </div>

              <div className="flex min-w-0 flex-col px-5 py-7 sm:px-8 sm:py-8 lg:px-9">
                <Text className="max-w-[76ch] !text-base !leading-[1.5]">
                  {experience.summary}
                </Text>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.065em] text-brand-burgundy">
                  Key contributions
                </p>
                <ul
                  aria-label={experience.title + " key contributions"}
                  className="mt-3 list-disc space-y-1.5 pl-5 marker:text-brand-burgundy"
                >
                  {experience.contributions.map((contribution) => (
                    <li key={contribution} className="max-w-[75ch] text-sm leading-[1.5] sm:text-base">
                      {contribution}
                    </li>
                  ))}
                </ul>

                <ul
                  aria-label={experience.title + " creative tools and disciplines"}
                  className="mt-7 flex flex-wrap gap-2 lg:justify-end"
                >
                  {experience.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-brand-burgundy px-3.5 py-1.5 text-xs font-medium leading-none sm:text-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
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
