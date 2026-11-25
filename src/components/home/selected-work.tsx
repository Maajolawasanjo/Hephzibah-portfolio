import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { getPublishedCaseStudy, getSelectedProjects } from "@/content/projects";

/**
 * Phase V5.03 — project-led editorial showcase.
 *
 * The layout is ready for approved projects, but an empty list must NEVER
 * become a fake portfolio. Reference imagery is labelled as illustrative.
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
          <div className="mt-12 grid min-w-0 border-y border-rule sm:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="flex min-w-0 flex-col justify-between bg-brand-burgundy px-6 py-10 text-brand-cream sm:px-10 sm:py-14 lg:min-h-[34rem] lg:px-14 lg:py-16">
              <Text variant="label" className="!text-brand-cream/75">
                Portfolio archive / In preparation
              </Text>
              <div className="my-12">
                <p className="max-w-[14ch] font-display text-[clamp(2.5rem,4.4vw,5.4rem)] font-light leading-[1.02] tracking-[-0.055em]">
                  The work deserves to be seen at its best.
                </p>
                <Text className="mt-7 max-w-[48ch] !text-brand-cream/85">
                  Original client projects are being prepared for publication.
                  Only approved work and artwork will appear in this portfolio.
                </Text>
              </div>
              <div className="flex flex-wrap items-center gap-6 border-t border-brand-cream/25 pt-6">
                <Button
                  href="/#experience"
                  variant="secondary"
                  className="!border-brand-cream/70 !text-brand-cream hover:!bg-brand-cream/10"
                >
                  Explore my experience <span aria-hidden="true">↗</span>
                </Button>
                <a
                  href="/#process"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-cream underline-offset-4 hover:underline"
                >
                  My design process <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="flex min-w-0 flex-col justify-center bg-soft px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
              <div className="mb-6 flex items-center justify-between gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                <span>Creative reference</span>
                <span>01 / Visual studies</span>
              </div>
              <EditorialImage
                asset="branding"
                showCaption={false}
                sizes="(max-width: 1024px) 86vw, 32vw"
                imageClassName="!rounded-[var(--radius-media)] !border-0"
              />
              <div className="mt-6 border-t border-rule pt-4">
                <Text variant="small" className="font-medium">
                  Illustrative brand identity reference — not a Hephie Creatives client project.
                </Text>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
