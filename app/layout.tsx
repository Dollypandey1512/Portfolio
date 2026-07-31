import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";
import BackToTop from "@/components/BackToTop";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const siteUrl = "https://dollypandey.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dolly Pandey | Data Analyst Portfolio",
  description:
    "Data Analyst specializing in SQL, Python, Power BI, Business Intelligence, Data Visualization and AI Automation.",
  keywords: [
    "Dolly Pandey",
    "Data Analyst",
    "Business Intelligence Analyst",
    "Analytics Engineer",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "AI Automation",
    "Data Visualization",
    "Funnel Analytics",
    "KPI Tracking",
  ],
  authors: [{ name: "Dolly Pandey" }],
  openGraph: {
    title: "Dolly Pandey | Data Analyst Portfolio",
    description:
      "Data Analyst specializing in SQL, Python, Power BI, Business Intelligence, Data Visualization and AI Automation.",
    url: siteUrl,
    siteName: "Dolly Pandey Data Analyst Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolly Pandey | Data Analyst Portfolio",
    description:
      "Data Analyst specializing in SQL, Python, Power BI, Business Intelligence, Data Visualization and AI Automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Data Analyst",
  email: profile.email,
  url: siteUrl,
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.kaggle],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased selection:bg-accent">
        <ScrollProgress />
        <CursorSpotlight />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
