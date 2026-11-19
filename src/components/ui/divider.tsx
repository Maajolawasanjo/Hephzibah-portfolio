import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  decorative?: boolean;
};

/** Use a decorative rule by default; set decorative={false} when meaningful. */
export function Divider({
  decorative = true,
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-hidden={decorative ? true : undefined}
      className={cn("h-px border-0 bg-rule", className)}
      {...props}
    />
  );
}
