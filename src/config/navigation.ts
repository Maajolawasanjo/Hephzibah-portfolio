/**
 * Every navigation target currently exists on the homepage.
 * Add new routes only after their corresponding sections are implemented.
 */
export type NavigationItem = {
  label: string;
  href: string;
};

export const siteNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/#home" },
  { label: "What I do", href: "/#focus" },
  { label: "Selected work", href: "/#selected-work" },
];
