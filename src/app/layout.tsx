import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const viewport: Viewport = {
  themeColor: "#314543",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Christian Martinez Mairena Insurance Agency, Inc.",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Insurance built around your life, right here in San Jose. Auto, Home, and Life Insurance from your local Farmers® Insurance Agent.",
  keywords: [
    "Christian Martinez Mairena",
    "Insurance Agency San Jose",
    "Farmers Insurance San Jose",
    "Auto Insurance San Jose",
    "Home Insurance",
    "Life Insurance",
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Christian Martinez Mairena Insurance Agency, Inc.",
    description: "Insurance built around your life, right here in San Jose.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Insurance built around your life, right here in San Jose.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full bg-background text-primary">
        {children}
      </body>
    </html>
  );
}
