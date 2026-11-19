import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean;
};

/** Fluid page gutters and a shared editorial content width. */
export function Container({
  narrow = false,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "layout-container",
        narrow && "max-w-[var(--layout-reading-max)]",
        className
      )}
      {...props}
    />
  );
}
