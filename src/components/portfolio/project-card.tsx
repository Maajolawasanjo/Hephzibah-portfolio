import Link from "next/link";
import { cn } from "@/lib/cn";
import { MediaFrame, type MediaRatio } from "@/components/ui/media-frame";
import { Text } from "@/components/ui/typography";

export type ProjectCardProps = {
  title: string;
  category: string;
  year?: string | number;
  image?: { src: string; alt: string };
  href?: string;
  ratio?: MediaRatio;
  priority?: boolean;
  className?: string;
};

/**
 * Use only real, verified projects in production.
 * A card without href is a static preview, not a broken link.
 */
export function ProjectCard({
  title,
  category,
  year,
  image,
  href,
  ratio = "landscape",
  priority = false,
  className,
}: ProjectCardProps) {
  const contents = (
    <>
      <MediaFrame image={image} ratio={ratio} priority={priority} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="type-heading-md break-words">{title}</h3>
          <Text variant="small" muted className="mt-2">
            {category}
            {year !== undefined && <> · {year}</>}
          </Text>
        </div>
        {href && (
          <span aria-hidden="true" className="pt-1 text-xl leading-none">
            ↗
          </span>
        )}
      </div>
    </>
  );

  return (
    <article className={cn("min-w-0", className)}>
      {href ? (
        <Link
          href={href}
          className="group block rounded-[var(--radius-control)] focus-visible:outline-offset-4"
          aria-label={"View " + title + " case study"}
        >
          {contents}
        </Link>
      ) : (
        <div className="block">{contents}</div>
      )}
    </article>
  );
}
