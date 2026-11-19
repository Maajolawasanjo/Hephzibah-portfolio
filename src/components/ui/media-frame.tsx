import Image from "next/image";
import { cn } from "@/lib/cn";

export type MediaRatio = "landscape" | "wide" | "portrait" | "square";

export type MediaFrameProps = {
  image?: { src: string; alt: string };
  ratio?: MediaRatio;
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
 * Purposeful image cropping and clear missing-artwork state.
 * Real imagery must always include meaningful alt text.
 */
export function MediaFrame({
  image,
  ratio = "landscape",
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
          priority={priority}
          className="object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--motion-ease)] motion-reduce:transition-none group-hover:scale-[1.025]"
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
