import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "default" | "inverse";
  compact?: boolean;
};

/** Semantic section with shared responsive vertical rhythm. */
export function Section({
  tone = "default",
  compact = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "layout-section",
        compact && "!py-[clamp(2.5rem,5vw,5rem)]",
        tone === "inverse" && "theme-inverse",
        className
      )}
      {...props}
    />
  );
}
