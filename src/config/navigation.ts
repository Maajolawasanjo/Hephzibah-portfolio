/**
 * Phase 04 preview navigation. Every href resolves to a real section on "/".
 * Replace with approved production routes when the corresponding pages exist.
 */
export type NavigationItem = {
  label: string;
  href: string;
};

export const previewNavigation: readonly NavigationItem[] = [
  { label: "Components", href: "/#buttons-preview" },
  { label: "Typography", href: "/#typography-preview" },
  { label: "Project cards", href: "/#projects-preview" },
];
