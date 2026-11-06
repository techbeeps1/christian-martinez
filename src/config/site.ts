export const siteConfig = {
  name: "Christian Martinez Mairena",
  shortName: "Christian Martinez",
  description:
    "Official website and portfolio of Christian Martinez Mairena. Showcasing projects, expertise, and creative solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://christianmartinezmairena.com",
  ogImage: "/og-image.png",
  locale: "en_US",
  author: {
    name: "Christian Martinez Mairena",
    url: "https://christianmartinezmairena.com",
  },
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

