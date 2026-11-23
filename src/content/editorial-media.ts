/**
 * Supplied temporary visual resources for the V2 portfolio.
 *
 * These images are illustrative references, not original verified case
 * studies by Hephzibah. Only src/content/projects.ts can publish approved
 * project cards and full case studies.
 */
export const editorialMedia = {
  branding: {
    src: "/editorial/brand-identity.webp",
    alt: "Dark stationery, branded materials and a laptop shown in a sample brand identity mockup.",
    width: 340,
    height: 227,
    note: "Illustrative brand identity reference",
  },
  logo: {
    src: "/editorial/logo-design.webp",
    alt: "Illustrative logo presentation mockup featuring a colourful bird-shaped mark and 3D lettering.",
    width: 245,
    height: 245,
    note: "Illustrative logo design reference",
  },
  photography: {
    src: "/editorial/photography.webp",
    alt: "Camera, lens cap and printed landscape photographs on a wooden tabletop.",
    width: 240,
    height: 161,
    note: "Photography reference image",
  },
  photoshop: {
    src: "/editorial/photoshop.webp",
    alt: "Adobe Photoshop application icon.",
    width: 220,
    height: 220,
    note: "Adobe Photoshop",
  },
  illustrator: {
    src: "/editorial/illustrator.webp",
    alt: "Adobe Illustrator application icon.",
    width: 220,
    height: 220,
    note: "Adobe Illustrator",
  },
  pixellab: {
    src: "/editorial/pixellab.webp",
    alt: "PixelLab design application icon.",
    width: 220,
    height: 220,
    note: "PixelLab",
  },
} as const;

export type EditorialMediaKey = keyof typeof editorialMedia;
