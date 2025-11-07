import type { Metadata } from "next"

export const BASE_URL = "https://www.aesthetictile-florida.com"
export const SITE_NAME = "Aesthetic Tile"
const DEFAULT_OG_IMAGE = "/images/img/hero-backsplash.png"

export function absoluteUrl(path = "/") {
  return new URL(path, BASE_URL).toString()
}

interface BuildMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const resolvedImage = image.startsWith("http") ? image : absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  }
}

export interface FaqItem {
  question: string
  answer: string
}

interface FaqJsonLdOptions {
  url: string
  faqs: FaqItem[]
  name?: string
}

export function createFaqJsonLd({ url, faqs, name }: FaqJsonLdOptions) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name,
      url,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    null,
    2,
  )
}

interface ArticleJsonLdOptions {
  url: string
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName: string
}

export function createArticleJsonLd({
  url,
  headline,
  description,
  image = DEFAULT_OG_IMAGE,
  datePublished,
  dateModified,
  authorName,
}: ArticleJsonLdOptions) {
  const resolvedImage = image.startsWith("http") ? image : absoluteUrl(image)

  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: url,
      headline,
      description,
      image: resolvedImage,
      author: {
        "@type": "Person",
        name: authorName,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/aesthetic-tile-logo.png"),
        },
      },
      datePublished,
      dateModified: dateModified ?? datePublished,
    },
    null,
    2,
  )
}

