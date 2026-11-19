import Image from "next/image";
import { cn } from "@/lib/cn";

export type MediaRatio = "landscape" | "wide" | "portrait" | "square";
export type MediaFit = "cover" | "contain";

export type MediaFrameProps = {
  image?: { src: string; alt: string };
  ratio?: MediaRatio;
  fit?: MediaFit;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

const ratios: Record<MediaRatio, string> = {
  landscape: "aspect-[4/3]",
  wide: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

/**
 * A card can crop with cover; case studies use contain to preserve artwork.
 * Preload is reserved for a true above-the-fold image, not every gallery card.
 * Next.js 16 favors preload over the deprecated Image priority prop.
 */
export function MediaFrame({
  image,
  ratio = "landscape",
  fit = "cover",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[var(--radius-media)] bg-soft",
        ratios[ratio],
        className
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={priority}
          className={cn(
            "transition-transform duration-[var(--motion-slow)] ease-[var(--motion-ease)] motion-reduce:transition-none",
            fit === "contain"
              ? "object-contain"
              : "object-cover group-hover:scale-[1.025]"
          )}
        />
      ) : (
        <div
          role="img"
          aria-label="Approved project artwork has not been added"
          className="flex h-full items-center justify-center border border-rule p-5 text-center"
        >
          <span className="type-label text-muted">Artwork pending</span>
        </div>
      )}
    </div>
  );
}
