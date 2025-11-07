import Image from "next/image"
import type { Metadata } from "next"

import { ContactForm } from "../_components/ContactForm"
import { CTA_FEATURES } from "../page"

const STORY_PARAGRAPHS = [
  "For years, we honed our craft in Kentucky, focusing on high-end residential projects and complex installations. We saw an opportunity to bring that commitment to excellence to the vibrant communities of Florida and are thrilled to call Groveland home.",
  "As proud new residents of Lake County, we bring traditional craftsmanship together with Central Florida design sensibilities. Our move allows us to combine meticulous preparation, laser-straight layout, and durable finishes with the region’s unique architectural style.",
]

const DIFFERENCE_POINTS = [
  {
    title: "Meticulous Preparation",
    description:
      "A lasting installation starts beneath the surface. We ensure every substrate is sound, waterproof, and perfectly prepared before tiling begins.",
  },
  {
    title: "Technical Precision",
    description:
      "Laser-straight lines, consistent grout joints, and truly flat surfaces are the hallmarks of our work—no shortcuts, no excuses.",
  },
  {
    title: "Lasting Results",
    description:
      "We protect your investment with high-performance materials and clean execution so your tilework continues to impress for years.",
  },
]

const WHAT_WE_DO = [
  "Bathroom tile installation—from classic layouts to spa-level showers and statement features.",
  "Kitchen backsplashes designed for everyday durability and elevated style.",
  "Tile repairs & rework—crack fixes, grout issues, and water damage remediation.",
  "Demolition & surface prep—tidy removal and prep that protect your home and set the stage for a flawless install.",
]

const FAQS = [
  {
    question: "Do you have a team that regularly works in Clermont, FL?",
    answer:
      "We're in Clermont weekly and our shop borders Clermont and Groveland. Use the About page form or Contact page to schedule an estimate.",
  },
  {
    question: "What does three generations of experience change for my project?",
    answer:
      "Better prep, tighter layouts, cleaner grout lines, and fewer callbacks—craftsmanship passed down and refined.",
  },
  {
    question: "Do you handle demolition and clean job sites?",
    answer:
      "Yes—tidy demo, dust control, and daily cleanup are part of our process.",
  },
  {
    question: "Can you help with design guidance (patterns, grout color, trims)?",
    answer:
      "Absolutely—bring inspo photos; we'll recommend layouts, trims, and grout that fit your space and traffic.",
  },
  {
    question: "How long will my tile installation take from start to finish?",
    answer:
      "The timeline depends on the size and complexity of the job. A standard kitchen backsplash might take 1-2 days, while a full bathroom or large outdoor patio could take several days. We always include surface preparation, layout planning, tile setting, grouting and sealing in the schedule to ensure lasting quality.",
  },
  {
    question: "Where are you located, and which areas do you serve?",
    answer:
      "We're based at 1195 Greenley Ave in Groveland, FL and proudly serve Central Florida communities including Clermont, Minneola, Winter Garden, and Orlando.",
  },
]

export const metadata: Metadata = {
  title: "About Aesthetic Tile: Family-Owned Tile Contractors in Groveland, FL",
  description:
    "Family-owned tile experts serving Central Florida. Discover our three-generation legacy of bathroom remodels, kitchen backsplashes, and precision tile installations.",
  alternates: {
    canonical: "https://www.aesthetictile-florida.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24">
      <AboutHero />
      <AboutStory />
      <DifferenceSection />
      <WhatWeDoSection />
      <AboutCta />
      <FaqSection />
    </div>
  )
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/AboutUs-NoText.png"
          alt="Aesthetic Tile team installing a backsplash"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center gap-6 px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-semibold sm:text-5xl">About Aesthetic Tile</h1>
        <p className="text-lg text-white/80">Family owned. Florida based. Three generations strong.</p>
      </div>
    </section>
  )
}

function AboutStory() {
  return (
    <section className="mx-auto max-w-5xl space-y-16 px-6">
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Our Story: A Legacy of Craftsmanship Moves to Groveland</h2>
        <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
          The foundation of Aesthetic Tile rests on three generations of specialized knowledge. What began as a dedicated family trade has evolved into a professional tile company trusted by discerning homeowners, interior designers, and custom builders who demand superior quality.
        </p>
      </div>

      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 md:grid-cols-2 md:items-center">
        <div className="space-y-4 text-base leading-7 text-slate-600">
          <h3 className="text-2xl font-semibold text-slate-900">A New Chapter in the Sunshine State</h3>
          {STORY_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/Brad.webp"
            alt="Brad from Aesthetic Tile installing tile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function DifferenceSection() {
  return (
    <section className="mx-auto max-w-5xl space-y-8 px-6">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">The Aesthetic Tile Difference</h2>
        <p className="text-base leading-7 text-slate-600">
          We combine generational expertise with disciplined process so every project feels elevated from the first consultation to the final clean up.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {DIFFERENCE_POINTS.map((point) => (
          <article key={point.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-900/5">
            <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{point.description}</p>
          </article>
        ))}
      </div>

      <figure className="overflow-hidden rounded-3xl">
        <Image
          src="/images/tile-installer-2.webp"
          alt="Tile installer carefully working on a project"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
      </figure>
    </section>
  )
}

function WhatWeDoSection() {
  return (
    <section className="mx-auto max-w-5xl space-y-6 px-6">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">What We Do</h2>
        <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
          We deliver custom tile installation with clean execution and lasting results. Every project receives uncompromising attention to detail—because great tile work is never an accident.
        </p>
      </div>

      <ul className="grid gap-4 text-left text-sm text-slate-600 sm:grid-cols-2">
        {WHAT_WE_DO.map((item) => (
          <li key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl space-y-10 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-white bg-white p-6 shadow-md shadow-slate-900/5">
              <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Modern kitchen backsplash in Groveland, Florida"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Transform Your Space?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing, and exceptional service guaranteed.
            </p>
            <div className="space-y-3">
              {CTA_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 animate-pulse-3s">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm subject="Aesthetic Tile — About Page Inquiry" showPhone className="backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}

