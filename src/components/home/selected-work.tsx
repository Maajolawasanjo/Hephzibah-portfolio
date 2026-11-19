import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Heading, Text } from "@/components/ui/typography";
import {
  getPublishedCaseStudy,
  getSelectedProjects,
} from "@/content/projects";

function AwaitingWork() {
  return (
    <div className="mt-12 grid border-t border-rule lg:grid-cols-12 lg:gap-10">
      <div
        aria-hidden="true"
        className="flex min-h-[19rem] flex-col justify-between overflow-hidden bg-brand-burgundy p-6 text-brand-cream sm:min-h-[25rem] sm:p-10 lg:col-span-7"
      >
        <span className="type-label">Hephie Creatives / Work</span>
        <div className="decorative-type self-start block max-w-full font-display font-bold">
          Work<span className="align-top text-[0.32em]">.</span>
        </div>
        <span className="type-label max-w-[24ch]">
          A space reserved for real creative work.
        </span>
      </div>

      <div className="flex flex-col justify-between gap-12 border-b border-rule py-9 lg:col-span-5 lg:py-12">
        <div>
          <Text variant="label" muted className="mb-5">
            In curation
          </Text>
          <Heading level={3} size="md">
            The work deserves the space.
          </Heading>
          <Text variant="body" className="mt-5">
            A selection of actual brand identity projects is being prepared.
            Each feature will show the work, the creative thinking,
            and the story behind it.
          </Text>
        </div>
        <Text variant="small" muted className="border-t border-rule pt-5">
          No sample clients or fabricated case studies.
        </Text>
      </div>
    </div>
  );
}

/**
 * Published case studies get working links automatically. Approved projects
 * without an approved full case study remain static (not false navigation).
 */
export function SelectedWork() {
  const projects = getSelectedProjects();

  return (
    <Section id="selected-work" aria-labelledby="selected-work-heading">
      <Container>
        <div data-reveal="up" className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Text variant="label" muted className="mb-6">
              02 / Selected work
            </Text>
            <Heading id="selected-work-heading" level={2} size="lg">
              Work made to be remembered.
            </Heading>
          </div>
          <div className="lg:col-span-4">
            <Text variant="lead">
              Brand identities created with intention, shaped around
              real ideas and distinct perspectives.
            </Text>
          </div>
        </div>

        {projects.length === 0 ? (
          <AwaitingWork />
        ) : (
          <>
            <div className="mt-14 grid grid-cols-1 gap-x-[var(--layout-grid-gap)] gap-y-14 md:grid-cols-2 md:gap-y-20">
              {projects.map((project, index) => {
                const lead = index === 0;
                const hasCaseStudy = Boolean(
                  getPublishedCaseStudy(project.slug)
                );
                return (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    category={project.category}
                    year={project.year}
                    image={project.cover}
                    href={
                      hasCaseStudy ? "/work/" + project.slug : undefined
                    }
                    ratio={project.ratio ?? (lead ? "wide" : "landscape")}
                    sizes={
                      lead
                        ? "(max-width: 768px) 100vw, 90vw"
                        : "(max-width: 768px) 100vw, 45vw"
                    }
                    className={lead ? "md:col-span-2" : undefined}
                  />
                );
              })}
            </div>
            <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-rule pt-6">
              <Text variant="small" muted>
                A considered selection of identity work.
              </Text>
              <Text variant="label">
                {String(projects.length).padStart(2, "0")} features
              </Text>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
