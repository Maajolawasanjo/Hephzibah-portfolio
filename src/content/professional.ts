/**
 * Portfolio V2: only user-provided factual professional information.
 * Do not add employers, degrees, dates, certifications, tools,
 * numerical achievements or proficiency ratings without verification.
 */
export const professionalProfile = {
  introduction:
    "I’m Hephzibah Uzorndu, a Lagos-based brand identity designer and visual storyteller. My work brings together identity design, personal branding and visual content for clients I collaborate with both remotely and in person.",
  clientWork: {
    title: "Independent branding & client projects",
    arrangement: "Remote and in-person collaborations",
    description:
      "I have worked with clients online and face to face, creating visual design and personal branding work around their individual needs. My practice covers identity direction, graphic design and content that helps clients communicate more clearly.",
    note:
      "Projects have involved direct communication with clients and delivery of personal-branding design work.",
  },
  competencies: [
    { name: "Brand identity", detail: "Creating coherent visual directions, from logos to supporting identity elements." },
    { name: "Personal branding", detail: "Visual communication tailored to individuals and the stories they want to express." },
    { name: "Graphic design", detail: "Layout, typography, composition and image-led communication across formats." },
    { name: "Social media branding", detail: "Consistent visual content and campaign assets for digital channels." },
    { name: "Photography & video", detail: "Visual storytelling that complements a brand’s identity and message." },
    { name: "Client collaboration", detail: "Working directly with people, both online and in person, to shape creative briefs." },
  ],
  learning: [
    {
      institution: "NUTM",
      status: "Current studies",
      description:
        "Currently studying at the Nigerian University of Technology and Management.",
    },
    {
      institution: "TS Academy",
      status: "Previous coursework",
      description:
        "Attended courses at TS Academy.",
    },
    {
      institution: "Apex Academy",
      status: "Previous coursework",
      description:
        "Attended courses at Apex Academy.",
    },
  ],
} as const;


/**
 * Experience cards adapted from the user-selected visual mockup.
 * Client identities and initial logo commissions were confirmed previously.
 * Additional contribution wording follows the approved mockup and can be
 * refined by the portfolio owner; no employment dates or company logos added.
 */
export const experienceHighlights = [
  {
    number: "01",
    title: "PROMIXRS",
    industry: "E-commerce Brand",
    role: "Brand Identity Design",
    icon: "commerce",
    summary:
      "Created a distinctive visual identity direction for PROMIXRS, an e-commerce brand, with an emphasis on recognition, consistency and customer-facing communication.",
    contributions: [
      "Developed the primary logo and brand mark.",
      "Explored a cohesive visual identity through colours and typography.",
      "Designed supporting brand assets for digital and print applications.",
      "Considered how the identity translates across e-commerce touchpoints.",
      "Prepared logo and identity files for flexible brand use.",
    ],
    tags: ["Illustrator", "Photoshop", "Branding"],
  },
  {
    number: "02",
    title: "SYNERGY",
    industry: "Technology Company",
    role: "Brand Identity Design",
    icon: "technology",
    summary:
      "Developed a modern visual identity direction for SYNERGY, a technology company, with a focus on clarity, professionalism and a recognisable brand presence.",
    contributions: [
      "Designed the company's logo and primary visual mark.",
      "Explored a clean, modern identity suited to a technology brand.",
      "Developed logo variations for use across digital platforms.",
      "Considered consistent presentation across web and brand materials.",
      "Prepared adaptable identity assets for ongoing brand communication.",
    ],
    tags: ["Illustrator", "Digital Identity", "Branding"],
  },
  {
    number: "03",
    title: "SHELLY",
    industry: "Clothing Brand",
    role: "Brand Identity Design",
    icon: "fashion",
    summary:
      "Created a fashion-focused visual identity direction for SHELLY, a clothing brand, bringing together a memorable brand mark and a consistent visual character.",
    contributions: [
      "Designed the brand's logo and core visual mark.",
      "Explored the brand's visual direction through colours and typography.",
      "Developed branded applications for clothing tags and packaging concepts.",
      "Considered how the identity appears across fashion and social channels.",
      "Prepared brand assets to support consistent visual presentation.",
    ],
    tags: ["Illustrator", "Photoshop", "Mockups"],
  },
] as const;
