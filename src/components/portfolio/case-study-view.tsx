import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MediaFrame } from "@/components/ui/media-frame";
import { Heading, Text } from "@/components/ui/typography";
import type { PublishedCaseStudy, ProjectImage } from "@/content/projects";

type CaseStudyViewProps = {
  project: PublishedCaseStudy;
  nextProject?: PublishedCaseStudy;
};

function ImageFeature({
  image,
}: {
  image: ProjectImage;
}) {
  return (
    <figure className="min-w-0">
      <MediaFrame
        image={image}
        ratio={image.ratio ?? "landscape"}
        fit="contain"
        sizes="(max-width: 768px) 100vw, 90vw"
        className="border border-rule bg-soft"
      />
      {image.caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseStudyView({
  project,
  nextProject,
}: CaseStudyViewProps) {
  const study = project.caseStudy;

  return (
    <>
      <Section compact aria-labelledby="case-study-title">
        <Container>
          <Link
            href="/#selected-work"
            className="mb-12 inline-flex min-h-11 items-center rounded-[var(--radius-control)] text-sm font-medium underline-offset-4 hover:underline"
          >
            <span aria-hidden="true" className="mr-3">←</span>
            Back to selected work
          </Link>

          <div className="grid gap-10 border-t border-rule pt-12 lg:grid-cols-12 lg:gap-16">
            <div className="min-w-0 lg:col-span-8">
              <Text variant="label" muted className="mb-7">
                Selected work / {project.category}
              </Text>
              <Heading
                id="case-study-title"
                level={1}
                size="display"
                className="max-w-[13ch] break-words"
              >
                {project.title}
              </Heading>
              <Text variant="lead" className="mt-8 max-w-[55ch]">
                {project.summary}
              </Text>
            </div>

            <dl className="grid content-end gap-6 self-end border-t border-rule pt-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <div>
                <dt className="type-label text-muted">Project type</dt>
                <dd className="mt-2 text-base">{project.category}</dd>
              </div>
              <div>
                <dt className="type-label text-muted">Creative role</dt>
                <dd className="mt-2 text-base">{study.role}</dd>
              </div>
              {project.year !== undefined && (
                <div>
                  <dt className="type-label text-muted">Year</dt>
                  <dd className="mt-2 text-base">{project.year}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mt-16 lg:mt-24">
            <MediaFrame
              image={project.cover}
              ratio={project.ratio ?? "wide"}
              fit="contain"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
              className="border border-rule"
            />
            {project.cover.caption && (
              <Text variant="small" muted className="mt-3">
                {project.cover.caption}
              </Text>
            )}
          </div>
        </Container>
      </Section>

      <Section compact aria-labelledby="story-heading">
        <Container>
          <div className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Text variant="label" muted className="mb-5">
                01 / Background
              </Text>
              <Heading id="story-heading" level={2} size="md">
                The starting point.
              </Heading>
            </div>
            <div className="max-w-[65ch] space-y-9 lg:col-span-8">
              <div>
                <Heading level={3} size="md" className="mb-3">
                  The brief
                </Heading>
                <Text>{study.background}</Text>
              </div>
              <div>
                <Heading level={3} size="md" className="mb-3">
                  The challenge
                </Heading>
                <Text>{study.challenge}</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="inverse" compact aria-labelledby="approach-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Text variant="label" muted className="mb-5">
                02 / Process
              </Text>
              <Heading id="approach-heading" level={2} size="md">
                Design with purpose.
              </Heading>
            </div>
            <div className="max-w-[65ch] space-y-9 lg:col-span-8">
              <div>
                <Heading level={3} size="md" className="mb-3">
                  Creative approach
                </Heading>
                <Text>{study.approach}</Text>
              </div>
              <div>
                <Heading level={3} size="md" className="mb-3">
                  Design solution
                </Heading>
                <Text>{study.solution}</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section compact aria-labelledby="gallery-heading">
        <Container>
          <div className="mb-12 grid gap-8 border-t border-rule pt-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Text variant="label" muted className="mb-5">
                03 / Visual story
              </Text>
              <Heading id="gallery-heading" level={2} size="lg">
                The identity in focus.
              </Heading>
            </div>
            <div className="lg:col-span-6 lg:pt-12">
              <Text variant="lead">
                Approved artwork from the project, presented without
                altering the brand’s original colors.
              </Text>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-12 lg:gap-14">
            {study.gallery.map((image, index) => (
              <div
                key={image.src + "-" + index}
                className={index % 3 === 0 ? "min-w-0 md:col-span-12" : "min-w-0 md:col-span-6"}
              >
                <ImageFeature image={image} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section compact aria-labelledby="deliverables-heading">
        <Container>
          <div className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Text variant="label" muted className="mb-5">
                04 / Deliverables
              </Text>
              <Heading id="deliverables-heading" level={2} size="md">
                What was created.
              </Heading>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {study.deliverables.map((deliverable, index) => (
                  <li
                    key={deliverable}
                    className="flex gap-4 border-t border-rule py-5"
                  >
                    <span className="type-label pt-1 text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg leading-snug">{deliverable}</span>
                  </li>
                ))}
              </ul>
              {study.outcome && (
                <div className="mt-12 max-w-[65ch] border-t border-rule pt-8">
                  <Heading level={3} size="md" className="mb-4">
                    Outcome
                  </Heading>
                  <Text>{study.outcome}</Text>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section compact tone="inverse" aria-labelledby="next-heading">
        <Container>
          <Text variant="label" muted className="mb-6">
            End of case study
          </Text>
          {nextProject ? (
            <div className="flex flex-wrap items-end justify-between gap-8">
              <Heading id="next-heading" level={2} size="lg">
                Another story.
              </Heading>
              <Link
                href={"/work/" + nextProject.slug}
                className="inline-flex min-h-12 items-center gap-4 text-lg font-medium underline-offset-4 hover:underline"
              >
                {nextProject.title} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-wrap items-end justify-between gap-8">
              <Heading id="next-heading" level={2} size="lg">
                Explore more work.
              </Heading>
              <Link
                href="/#selected-work"
                className="inline-flex min-h-12 items-center gap-4 text-lg font-medium underline-offset-4 hover:underline"
              >
                Back to selected work <span aria-hidden="true">↗</span>
              </Link>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
