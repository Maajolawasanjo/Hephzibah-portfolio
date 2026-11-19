/**
 * Phase 08 editorial biography based on the project-approved About draft.
 * Avoid numerical achievement claims until they are independently confirmed.
 * No portrait has been supplied or licensed for publication.
 */
export const aboutContent = {
  eyebrow: "04 / Behind the work",
  heading: "A designer who listens before she creates.",
  intro:
    "I’m Hephzibah Uzorndu, a brand identity designer and visual storyteller based in Lagos, Nigeria, and the founder of Hephie Creatives.",
  body: [
    "I help businesses express who they are through thoughtful logos, visual identities and imagery that connects with the people they want to reach.",
    "My work starts with understanding the business and the people behind it. From the first conversation to the final detail, I aim for design that feels clear, considered and distinctly theirs.",
    "I also bring brand stories into photography and video, and share what I know with aspiring designers through one-on-one teaching.",
  ],
  principles: [
    {
      index: "01",
      heading: "Listen first.",
      copy: "Understand the business, its audience and what the identity needs to communicate.",
    },
    {
      index: "02",
      heading: "Design with purpose.",
      copy: "Make deliberate choices that give every visual element a reason to exist.",
    },
    {
      index: "03",
      heading: "Make it memorable.",
      copy: "Build a cohesive visual story that people can recognize and connect with.",
    },
  ],
  portrait: null as null | { src: string; alt: string },
} as const;
