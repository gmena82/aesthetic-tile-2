import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"

export const metadata: Metadata = {
  title: "Custom & Special Tile Projects | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "From custom mosaics and floor medallions to outdoor patios and feature walls, Aesthetic Tile delivers special projects across Groveland, Clermont, Winter Garden, and Orlando. Get a custom quote.",
}

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const SPECIAL_PROJECTS_FAQS = [
  {
    question: "Can you take on unique designs in Clermont (mosaics, medallions, patio inlays)?",
    answer:
      "Yes—Clermont specialty work is common; we template and dry‑fit complex layouts first.",
  },
  {
    question: "Can you install exterior tile in Florida?",
    answer:
      "With the right tile, mortar, and movement joints—yes; we account for sun and thermal swing.",
  },
  {
    question: "Can you integrate mixed materials (metal, wood, glass)?",
    answer:
      "We choose compatible adhesives/grouts and plan joints to manage movement.",
  },
  {
    question: "Will you sign off on slope/drainage for outdoor spaces?",
    answer:
      "We check slope and recommend drainage details to protect the assembly.",
  },
  {
    question: "How do you price custom or complex projects?",
    answer:
      "We assess scope, materials, and labor during the estimate. Custom work requires extra planning, and we provide transparent pricing upfront.",
  },
  {
    question: "Can you replicate a design I saw online or in a magazine?",
    answer:
      "Absolutely. Bring photos or links, and we'll help source materials and recreate the look with our craftsmanship.",
  },
]

export default function SpecialProjectsPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <MainContentSection />
      <WhatWeBuildSection />
      <MaterialsSection />
      <FloridaSection />
      <ProcessSection />
      <TestimonialSection />
      <CallToActionSection />
      <FaqSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/AboutUs-NoText.png"
          alt="Custom tile feature project in Groveland, Florida"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom Special Projects in Central Florida
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
          Aesthetic Tile brings unique tile ideas to life across Central Florida, including Groveland, Clermont, Winter
          Garden, Minneola, and the greater Orlando area. From one-of-a-kind mosaics and floor medallions to exterior
          patios and signature feature walls, we turn concepts into precise, lasting installations.
        </p>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-white/90">
          Complex layouts, mixed materials, and specialty environments are handled with care so your creative vision
          performs beautifully indoors or outdoors.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Request a Custom Project Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}

function MainContentSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/gallery/fireplace-tile-stone.webp"
            alt="Custom fireplace tile installation in Clermont, Florida"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Your Vision, Our Craftsmanship</h2>
          <p className="text-base leading-7 text-slate-600">
            Have a unique idea that goes beyond a standard installation? At Aesthetic Tile, we thrive on creative
            challenges and special projects. From custom mosaic entryways and intricate floor medallions to outdoor
            patios and feature walls, our team has the skill and artistry to bring your most ambitious ideas to life.
          </p>
          <p className="text-base leading-7 text-slate-600">
            We combine generations of craftsmanship with modern techniques to tackle complex designs and unconventional
            applications. Our detailed planning accounts for framing, transitions, lighting impacts, and how the tile
            will perform in Florida's humid climate so the finished work looks seamless from every angle.
          </p>
          <p className="text-base leading-7 text-slate-600">
            We proudly serve homeowners throughout Central Florida, including Groveland, Clermont, Minneola, Winter
            Garden, and Orlando, bringing our family's tradition of excellence to every project.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatWeBuildSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">What We Build</h2>
        <ul className="mx-auto mt-6 max-w-3xl list-disc space-y-2 pl-6 text-base text-slate-700">
          <li>Custom mosaics and floor medallions</li>
          <li>Accent and feature walls</li>
          <li>Outdoor patios, porches, and walkways</li>
          <li>Entryways, stair risers, fireplaces, and niche details</li>
        </ul>
      </div>
    </section>
  )
}

function MaterialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Materials & Design Options</h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            We work with ceramic, porcelain, natural stone, glass, and large-format panels. Patterns and layouts are
            planned to suit the space—subway, herringbone, chevron, geometric mosaics, and medallion inlays. We help
            match materials to performance needs and the overall design intent.
          </p>
          <p>
            Mockups and samples confirm color variation, grout contrast, and lighting effects before the first tile is
            placed. By integrating Schluter profiles, heated floor systems, or custom niches, we ensure your
            installation blends function with a signature look that reflects your property.
          </p>
        </div>
      </div>
    </section>
  )
}

function FloridaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Exterior & Florida-Specific Considerations
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            For outdoor and specialty applications, we consider drainage, surface preparation, movement joints, slip
            resistance, and exposure to heat and humidity. Proper setting materials and grout/seal selections help the
            installation look great and perform season after season.
          </p>
          <p>
            From screened lanais overlooking Clermont's lakes to poolside kitchens in Winter Garden, we evaluate
            substrate conditions, waterproofing requirements, and expansion joints so the tile remains stable despite
            rapid weather shifts.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Our Process</h2>
        <ol className="mx-auto mt-6 max-w-3xl list-decimal space-y-2 pl-6 text-base text-slate-700">
          <li>Consultation and design review</li>
          <li>Material guidance and layout planning</li>
          <li>Surface preparation and installation</li>
          <li>Grouting, finishing, and care guidance</li>
        </ol>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-slate-600">
          Each stage is managed by licensed installers who maintain a clean jobsite, provide proactive updates, and
          deliver the craftsmanship Groveland and Clermont homeowners expect from a family-owned company.
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Request a Custom Project Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-1">
          <article className="mx-auto flex h-full max-w-2xl flex-col rounded-3xl border border-white bg-white p-6 shadow-lg shadow-slate-900/5">
            <div className="text-lg" aria-label="5 out of 5 stars">
              <span className="text-amber-400">★★★★★</span>
            </div>
            <p className="mt-4 grow text-base text-slate-700">
              Our custom mosaic entryway turned out better than we imagined. Clean lines, perfect layout—flawless work.
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-500">— Natalie S., Clermont, FL</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {SPECIAL_PROJECTS_FAQS.map((faq) => (
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

function CallToActionSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Luxury kitchen tile backsplash installation in Orlando, Florida"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Have a Unique Idea?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your special tile project. Professional craftsmanship, competitive pricing, and
              exceptional service guaranteed.
            </p>
            <div className="space-y-3">
              {CTA_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm font-semibold text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm subject="Aesthetic Tile — New CTA Form Submission" className="backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}

