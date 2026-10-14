import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title:
    "Commercial Fire Suppression & HVAC Services in Detroit | Desert In Alaska",

  description:
    "Explore commercial fire suppression, HVAC, kitchen exhaust, gas piping and mechanical services for Metro Detroit businesses from Desert In Alaska.",

  authors: [{ name: "Desert In Alaska" }],

  keywords: [
    "commercial fire suppression Detroit",
    "commercial HVAC Detroit",
    "kitchen exhaust systems Detroit",
    "commercial gas piping Detroit",
    "industrial fire suppression",
    "mechanical services Detroit",
  ],

  alternates: {
    canonical: "https://www.desertinalaska.com/services",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title:
      "Commercial Fire Suppression & HVAC Services in Detroit | Desert In Alaska",
    description:
      "Commercial fire suppression, HVAC, kitchen exhaust, gas piping and mechanical services for Metro Detroit businesses.",
    url: "https://www.desertinalaska.com/services",
    siteName: "Desert In Alaska",
    images: [
      {
        url: "https://www.desertinalaska.com/about.webp",
        alt: "Commercial fire suppression and HVAC services in Detroit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Commercial Fire Suppression & HVAC Services in Detroit | Desert In Alaska",
    description:
      "Commercial fire suppression, HVAC, kitchen exhaust, gas piping and mechanical services for Metro Detroit businesses.",
    images: [
      "https://www.desertinalaska.com/about.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Desert In Alaska",
            description:
              "Commercial fire suppression, HVAC, kitchen exhaust, gas piping and mechanical services for Metro Detroit businesses.",
            url: "https://www.desertinalaska.com",
          }),
        }}
      />

      {children}
    </>
  );
}