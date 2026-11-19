import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/portfolio/case-study-view";
import {
  getPublishedCaseStudies,
  getPublishedCaseStudy,
} from "@/content/projects";
import { getSeoPublicationState } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Disallow dynamic fallback. Only owner-approved entries are generated.
 * With an empty collection, no individual case study is made public.
 */
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return getPublishedCaseStudies().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedCaseStudy(slug);

  if (!project) {
    return {
      title: "Case study unavailable",
      robots: { index: false, follow: false },
    };
  }

  const publication = getSeoPublicationState();

  return {
    title: project.title + " — Case Study",
    description: project.summary,
    robots: publication.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    ...(publication.url
      ? { alternates: { canonical: "/work/" + project.slug } }
      : {}),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPublishedCaseStudy(slug);

  if (!project) notFound();

  const published = getPublishedCaseStudies();
  const index = published.findIndex((item) => item.slug === project.slug);
  const next = index >= 0 ? published[index + 1] : undefined;

  return <CaseStudyView project={project} nextProject={next} />;
}
