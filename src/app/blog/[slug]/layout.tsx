import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { blogs } from "@/data/BlogData";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Desert In Alaska Corp",
    };
  }

  const siteUrl = "https://www.desertinalaska.com";
  const author = "Desert in Alaska";

  return {
    metadataBase: new URL(siteUrl),

    title: blog.metaTitle,

    description: blog.metaDescription,

    keywords: blog.metaKeywords.split(",").map((keyword) => keyword.trim()),

    authors: [
      {
        name: author,
      },
    ],

    alternates: {
      canonical: `${siteUrl}/blog/${blog.slug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    referrer: "strict-origin-when-cross-origin",

    openGraph: {
      type: "article",
      url: `${siteUrl}/blog/${blog.slug}`,
      title: blog.metaTitle,
      description: blog.metaDescription,
      siteName: author,

      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.alt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [`${siteUrl}${blog.image}`],
      creator: "@desertinalaska1",
    },

    applicationName: author,

    appleWebApp: {
      capable: true,
      title: author,
      statusBarStyle: "black",
    },

  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return <>{children}</>;

  const siteUrl = "https://www.desertinalaska.com";
  const articleUrl = `${siteUrl}/blog/${blog.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: blog.metaTitle,
    description: blog.metaDescription,
    url: articleUrl,
    author: {
      "@type": "Organization",
      name: "Desert In Alaska",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Desert In Alaska",
      url: siteUrl,
    },
    image: `${siteUrl}${blog.image}`,
    articleSection: blog.title,
    keywords: blog.metaKeywords,
  };

  return (
    <>
      <Script
        id={`blogposting-schema-${blog.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
