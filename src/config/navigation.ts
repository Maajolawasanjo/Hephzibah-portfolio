export type NavigationItem = { label: string; href: string };

/** Navigation follows the page narrative with About as the first section. */
export const siteNavigation: readonly NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#selected-work" },
  { label: "Experience", href: "/#experience" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];
