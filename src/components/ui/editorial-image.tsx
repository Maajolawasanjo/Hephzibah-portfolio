import Image from "next/image";
import { editorialMedia, type EditorialMediaKey } from "@/content/editorial-media";
import { cn } from "@/lib/cn";

export type EditorialImageProps = {
  asset: EditorialMediaKey;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  showCaption?: boolean;
  fit?: "cover" | "contain";
};

/**
 * Displays supplied illustrative images without representing the sample
 * mockups as real, approved client work. Nothing here creates case studies.
 */
export function EditorialImage({
  asset,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 35vw",
  showCaption = true,
  fit = "cover",
}: EditorialImageProps) {
  const media = editorialMedia[asset];
  return (
    <figure
      data-editorial-asset={asset}
      className={cn("min-w-0", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden border border-rule bg-soft",
          fit === "contain" ? "p-5 sm:p-7" : "",
        imageClassName
        )}
      >
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={sizes}
          className={cn(
            "block h-auto w-full",
            fit === "contain" ? "object-contain" : "object-cover"
          )}
        />
      </div>
      {showCaption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted">
          {media.note}
        </figcaption>
      )}
    </figure>
  );
}
