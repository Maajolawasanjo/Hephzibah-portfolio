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
 * Editorial practice highlights. These are descriptive creative disciplines,
 * NOT claims of employment at named companies or dated appointments.
 * Replace with verified client/employer histories when supplied.
 */
export const experienceHighlights = [
  {
    number: "01",
    title: "Brand Identity & Graphic Design",
    arrangement: "Independent creative practice",
    summary:
      "Translating brand stories into logo directions, cohesive visual identities and practical design assets that give businesses a clear and recognizable presence.",
    focus: ["Identity concepts", "Logo & layout design", "Brand applications"],
  },
  {
    number: "02",
    title: "Digital & Social Content Design",
    arrangement: "Project-based client collaborations",
    summary:
      "Building consistent visual content across digital touchpoints, from promotional graphics and social media campaigns to branded communications for different audiences.",
    focus: ["Social media creative", "Digital campaign assets", "Visual consistency"],
  },
  {
    number: "03",
    title: "Visual Storytelling & Mentorship",
    arrangement: "Photography, video & one-on-one teaching",
    summary:
      "Connecting photography and video with the wider identity of a brand, while sharing practical design approaches with aspiring creatives through individual guidance.",
    focus: ["Image-led storytelling", "Creative thinking", "Design mentorship"],
  },
] as const;
