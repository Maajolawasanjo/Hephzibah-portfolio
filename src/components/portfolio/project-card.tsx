import Link from "next/link";
import { cn } from "@/lib/cn";
import { MediaFrame, type MediaRatio } from "@/components/ui/media-frame";
import { Text } from "@/components/ui/typography";

export type ProjectCardProps = {
  title: string;
  category: string;
  summary?: string;
  year?: string | number;
  image?: { src: string; alt: string };
  href?: string;
  ratio?: MediaRatio;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Grid is retained for the smaller More Work section. */
  layout?: "grid" | "feature" | "editorial";
  reversed?: boolean;
  index?: number;
};

/**
 * V5: an editorial story rather than a stack of generic cards.
 * A project without an approved case-study route remains non-interactive.
 */
export function ProjectCard({
  title,
  category,
  summary,
  year,
  image,
  href,
  ratio = "landscape",
  sizes,
  priority = false,
  className,
  layout = "grid",
  reversed = false,
  index,
}: ProjectCardProps) {
  const isEditorial = layout !== "grid";
  const contents = (
    <div
      className={cn(
        isEditorial && "grid items-center gap-8 md:gap-10 lg:gap-16",
        layout === "feature" && "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]",
        layout === "editorial" && "lg:grid-cols-2"
      )}
    >
      <div className={cn("min-w-0 overflow-hidden", isEditorial && reversed && "lg:order-2")}>
        <MediaFrame
          image={image}
          ratio={ratio}
          sizes={sizes}
          priority={priority}
          className={cn(isEditorial && "!rounded-[var(--radius-media)]")}
        />
      </div>
      <div className={cn("min-w-0", isEditorial ? "flex flex-col justify-center" : "mt-5")}>
        {isEditorial && (
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            <span>{index !== undefined ? String(index).padStart(2, "0") : "Project"}</span>
            <span aria-hidden="true" className="h-px w-8 bg-rule" />
            <span>{category}</span>
          </div>
        )}
        <div className="flex items-start justify-between gap-4">
          <h3 className={cn(
            "break-words font-display tracking-[-0.045em]",
            isEditorial
              ? "text-[clamp(2rem,4vw,4.75rem)] font-medium leading-[1.06]"
              : "type-heading-md"
          )}>
            {title}
          </h3>
          {!isEditorial && href && (
            <span aria-hidden="true" className="pt-1 text-xl leading-none">↗</span>
          )}
        </div>
        {!isEditorial && (
          <Text variant="small" muted className="mt-2">
            {category}{year !== undefined && <> · {year}</>}
          </Text>
        )}
        {summary && (
          <Text
            className={cn(
              isEditorial ? "mt-6 max-w-[48ch]" : "mt-3 max-w-[55ch]"
            )}
          >
            {summary}
          </Text>
        )}
        {isEditorial && (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-5 text-sm">
            {year !== undefined && <span className="text-muted">{year}</span>}
            {href && (
              <span className="inline-flex items-center gap-3 font-semibold underline-offset-4 group-hover:underline">
                Explore the case study <span aria-hidden="true">↗</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <article className={cn("min-w-0", className)}>
      {href ? (
        <Link
          href={href}
          aria-label={"View " + title + " case study"}
          className="motion-project-card group block rounded-[var(--radius-control)] focus-visible:outline-offset-4"
        >
          {contents}
        </Link>
      ) : (
        <div className="block">{contents}</div>
      )}
    </article>
  );
}
