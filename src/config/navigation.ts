/**
 * Every navigation target currently exists on the homepage.
 * Future contact and testimonial destinations are withheld until implemented.
 */
export type NavigationItem = {
  label: string;
  href: string;
};

export const siteNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#selected-work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];
