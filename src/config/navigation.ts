/**
 * Each navigation destination exists on the homepage.
 * Unimplemented routes and future contact sections are not linked.
 */
export type NavigationItem = {
  label: string;
  href: string;
};

export const siteNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#selected-work" },
  { label: "About", href: "/#about" },
  { label: "What I do", href: "/#focus" },
];
