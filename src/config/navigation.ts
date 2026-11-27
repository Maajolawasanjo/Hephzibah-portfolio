export type NavigationItem = { label: string; href: string };

/** Navigation follows the page narrative with About as the first section. */
export const siteNavigation: readonly NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#selected-work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];
