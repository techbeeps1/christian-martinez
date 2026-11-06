export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
}

