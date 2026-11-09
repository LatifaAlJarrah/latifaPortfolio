import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";


const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description:
      "Responsive, accessible web experiences built with React, Next.js and TypeScript.",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.title },
  verification: { google: "Y5PJXS4ancZB2cMJmwLqooCyyxPX01ENEBItDTx7Tuo" },
};

export const viewport: Viewport = { themeColor: "#3F4932" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Front-End Developer",
  url: site.url,
  email: `mailto:${site.email}`,
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI Design"],
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-warm"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
