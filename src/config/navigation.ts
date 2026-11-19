/**
 * Navigation only targets sections that exist. The brand wordmark is also
 * the homepage link, so it does not need a duplicate Home menu item.
 */
export type NavigationItem = {
  label: string;
  href: string;
};

export const siteNavigation: readonly NavigationItem[] = [
  { label: "Work", href: "/#selected-work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
