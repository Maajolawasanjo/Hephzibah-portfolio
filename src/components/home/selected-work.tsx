import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Heading, Text } from "@/components/ui/typography";
import { getPublishedCaseStudy, getSelectedProjects } from "@/content/projects";
import { experienceHighlights } from "@/content/professional";

/**
 * Phase V5.03 — project-led editorial showcase.
 *
 * Verified client logo commissions may be listed as text before artwork is
 * available. Full case studies still require approved images and details.
 */
export function SelectedWork() {
  const projects = getSelectedProjects();

  return (
    <Section id="selected-work" aria-labelledby="selected-work-heading">
      <Container>
        <div className="grid gap-7 border-t border-rule pt-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <Text variant="label" muted className="mb-7 flex items-center gap-4">
              <span>01 / Portfolio</span>
              <span aria-hidden="true" className="h-px w-10 bg-rule" />
            </Text>
            <Heading
              id="selected-work-heading"
              level={2}
              size="lg"
              className="max-w-[13ch]"
            >
              Selected work.
            </Heading>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <Text variant="lead" className="max-w-[44ch]">
              Thoughtful identities, purposeful visuals, and the creative thinking
              that brings each idea to life.
            </Text>
          </div>
        </div>

        {projects.length ? (
          <div className="mt-12 space-y-14 sm:mt-16 lg:mt-20 lg:space-y-24">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                summary={project.summary}
                year={project.year}
                image={project.cover}
                href={getPublishedCaseStudy(project.slug) ? "/work/" + project.slug : undefined}
                ratio={project.ratio ?? (index === 0 ? "wide" : "landscape")}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
                index={index + 1}
                layout={index === 0 ? "feature" : "editorial"}
                reversed={index > 0 && index % 2 === 0}
                className="border-t border-rule pt-9 sm:pt-12"
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 border-t border-rule sm:mt-16">
            <ol>
              {experienceHighlights.map((project) => (
                <li
                  key={project.title}
                  className="grid min-w-0 gap-4 border-b border-rule py-8 sm:py-10 lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center lg:gap-12"
                >
                  <Text variant="label" muted>{project.number}</Text>
                  <div className="min-w-0">
                    <h3 className="font-display text-[clamp(2rem,4vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.05em]">
                      {project.title}
                    </h3>
                    <Text variant="small" muted className="mt-2">
                      {project.industry}
                    </Text>
                  </div>
                  <div className="min-w-0">
                    <Text variant="lead">{project.role}</Text>
                    <Text variant="small" muted className="mt-3">
                      Original logo artwork and detailed case studies will be added when available.
                    </Text>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </Container>
    </Section>
  );
}
