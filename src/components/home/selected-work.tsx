import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Heading, Text } from "@/components/ui/typography";
import { getPublishedCaseStudy, getSelectedProjects } from "@/content/projects";

function AwaitingWork() {
  return (
    <div className="mt-9 flex flex-col gap-7 border-y border-rule py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Heading level={3} size="md">The portfolio is taking shape.</Heading>
        <Text className="mt-3 max-w-[62ch]" muted>
          Real case studies will be introduced as project descriptions and
          client artwork are cleared for publication. Until then, explore
          the experience, design capabilities and process behind the work.
        </Text>
      </div>
      <a
        href="#experience"
        className="inline-flex min-h-11 shrink-0 items-center font-medium underline underline-offset-8"
      >
        Explore experience <span aria-hidden="true" className="ml-2">↗</span>
      </a>
    </div>
  );
}

export function SelectedWork() {
  const projects = getSelectedProjects();

  return (
    <Section id="selected-work" compact aria-labelledby="selected-work-heading">
      <Container>
        <div data-reveal="up" className="grid gap-6 border-t border-rule pt-9 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Text variant="label" muted className="mb-5">Selected work</Text>
            <Heading id="selected-work-heading" level={2} size="lg" className="max-w-[22ch]">
              A closer look at the thinking behind the work.
            </Heading>
          </div>
          <div className="lg:col-span-4">
            <Text variant="body" className="max-w-[40ch]">
              Identity and visual storytelling, with room for the
              challenge, decisions and finished execution behind every project.
            </Text>
          </div>
        </div>

        {projects.length === 0 ? (
          <AwaitingWork />
        ) : (
          <>
            <div className="mt-10 grid grid-cols-1 gap-x-[var(--layout-grid-gap)] gap-y-12 md:grid-cols-2">
              {projects.map((project, index) => {
                const lead = index === 0;
                const hasCaseStudy = Boolean(getPublishedCaseStudy(project.slug));
                return (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    category={project.category}
                    year={project.year}
                    image={project.cover}
                    href={hasCaseStudy ? "/work/" + project.slug : undefined}
                    ratio={project.ratio ?? (lead ? "wide" : "landscape")}
                    sizes={lead ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 45vw"}
                    className={lead ? "md:col-span-2" : undefined}
                  />
                );
              })}
            </div>
            <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-rule pt-5">
              <Text variant="small" muted>Verified project work, thoughtfully presented.</Text>
              <Text variant="label">{String(projects.length).padStart(2, "0")} projects</Text>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
