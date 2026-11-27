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
 * Real client logo projects supplied by the portfolio owner.
 * These are client commissions, not claims of salaried employment.
 * No project dates, outcomes, additional deliverables or images are inferred.
 */
export const experienceHighlights = [
  {
    number: "01",
    title: "PROMIXRS",
    industry: "E-commerce",
    role: "Logo design",
    summary: "I designed the logo for PROMIXRS, an e-commerce business. The logo serves as a central visual identifier for the brand. In online retail, a recognisable mark helps connect a business’s storefront, promotional materials and customer-facing communications, making this a meaningful project within my digital brand identity experience.",
  },
  {
    number: "02",
    title: "SYNERGY",
    industry: "Technology",
    role: "Logo design",
    summary: "I created the logo for SYNERGY, a technology company. This project brought my logo design work into the technology sector, where a clear visual signature can help a business present itself across websites, presentations and other professional touchpoints. My contribution was specifically the company’s logo.",
  },
  {
    number: "03",
    title: "SHELLY",
    industry: "Clothing & fashion",
    role: "Logo design",
    summary: "I designed the logo for SHELLY, a clothing brand. Fashion and clothing businesses use their visual identity to express personality and build recognition, from online promotion to labels and packaging. The project represents my logo design experience in a fashion-focused brand context; no additional deliverables are implied.",
  },
] as const;
