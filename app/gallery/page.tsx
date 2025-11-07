import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { ContactForm } from "../_components/ContactForm"
import { CTA_FEATURES } from "../page"

const GALLERY_FAQS = [
  {
    question: "Are these projects from Clermont and nearby?",
    answer:
      "Many are from Clermont, Groveland, Minneola, Winter Garden, and greater Orlando.",
  },
  {
    question: "Can you recreate a look I saw here?",
    answer:
      "Yes—share the photo; we'll spec tile, grout, trims, and layout to match.",
  },
  {
    question: "How do I get pricing for a style I like?",
    answer:
      "Send a photo with rough dimensions; we'll give a ballpark before a formal estimate.",
  },
  {
    question: "Do you photograph completed projects?",
    answer:
      "With permission—photos help future clients visualize results and set expectations.",
  },
  {
    question: "Can I visit your showroom or see samples?",
    answer:
      "We work on-site and can bring samples to your home during the estimate. Contact us to schedule.",
  },
  {
    question: "How long does a project like these typically take?",
    answer:
      "It depends on scope and complexity. A backsplash might take 1-2 days, while a full bathroom could take a week or more.",
  },
]

const GALLERY_ITEMS = [
  {
    src: "/images/gallery/bathroom-floor-tile-checkered.webp",
    alt: "Black and white marble checkered bathroom floor tile installation in Groveland, FL by Aesthetic Tile",
    caption: "Classic checkered marble bathroom floor — Groveland, FL.",
  },
  {
    src: "/images/gallery/bathroom-remodel-stone-tile.webp",
    alt: "Gray porcelain large-format bathroom shower tile renovation in Clermont, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/bathroom-remodel-tan-tile.webp",
    alt: "Tan stone-look porcelain bathroom remodel installation in Winter Garden, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/bathroom-remodel-tile.webp",
    alt: "Polished marble shower wall tile renovation in Minneola, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/bathroom-tile-floor-mosaic.webp",
    alt: "Colorful mosaic ceramic bathroom floor tile installation in Orlando, FL by Aesthetic Tile",
    caption: "Mosaic bathroom floor refresh — Orlando, FL.",
  },
  {
    src: "/images/gallery/fireplace-project-square-tile.webp",
    alt: "Textured ceramic square tile fireplace surround installation in Groveland, FL by Aesthetic Tile",
    caption: "Square ceramic fireplace surround — Groveland, FL.",
  },
  {
    src: "/images/gallery/fireplace-project.webp",
    alt: "Stacked stone veneer fireplace refacing installation in Clermont, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/fireplace-stone.webp",
    alt: "Natural stone ledgestone fireplace surround installation in Winter Garden, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/fireplace-tile-stone.webp",
    alt: "Chevron marble tile fireplace feature installation in Minneola, FL by Aesthetic Tile",
    caption: "Chevron marble fireplace detail — Minneola, FL.",
  },
  {
    src: "/images/gallery/kitchen-backsplash-black-tile.webp",
    alt: "Matte black ceramic hexagon kitchen backsplash installation in Groveland, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/kitchen-backsplash-star-wars.webp",
    alt: "Glossy glass mosaic kitchen backsplash installation in Clermont, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/kitchen-backsplash-stone-lock.webp",
    alt: "Gray stone ledger kitchen backsplash installation in Winter Garden, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/kitchen-backsplash-stone-wedge.webp",
    alt: "Multitone stone wedge kitchen backsplash installation in Minneola, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/kitchen-backsplash-tile.webp",
    alt: "Classic white ceramic square tile kitchen backsplash installation in Orlando, FL by Aesthetic Tile",
  },
  {
    src: "/images/gallery/patio-tile-black.webp",
    alt: "Charcoal porcelain outdoor patio tile installation in Groveland, FL by Aesthetic Tile",
  },
]

export const metadata: Metadata = {
  title: "Tile Installation Gallery | Aesthetic Tile Central Florida Projects",
  description:
    "Browse recent Aesthetic Tile projects across Central Florida—kitchen backsplashes, bathroom remodels, fireplace surrounds, and specialty tile installations.",
  alternates: {
    canonical: "https://www.aesthetictile-florida.com/gallery",
  },
}

export default function GalleryPage() {
  return (
    <div className="space-y-24 pb-24">
      <GalleryHero />
      <GalleryIntro />
      <GalleryGrid />
      <GalleryFormCta />
      <FaqSection />
    </div>
  )
}

function GalleryHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/AboutUs-NoText.png"
          alt="Gallery of beautiful tile projects by Aesthetic Tile"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-semibold sm:text-5xl">Our Work: Central Florida Tile Installation Showcase</h1>
        <p className="text-lg text-white/80">See the quality and craftsmanship in every tile we lay.</p>
      </div>
    </section>
  )
}

function GalleryIntro() {
  return (
    <section className="mx-auto max-w-4xl space-y-6 px-6 text-center">
      <p className="text-base leading-7 text-slate-600">
        Welcome to the Aesthetic Tile project gallery. Below you’ll find a selection of recent installations completed across Groveland, Clermont, Winter Garden, Minneola, and the greater Orlando area. Explore kitchen backsplashes, bathroom remodels, large-format flooring, and custom fireplace surrounds—all crafted with the same precision we bring to every job.
      </p>
      <p className="text-base leading-7 text-slate-600">
        Every project is built for longevity. We prioritize clean layouts, tight grout lines, flat surfaces, and proper waterproofing to perform in Florida’s climate. When something catches your eye, let’s talk about bringing that same level of quality to your home.
      </p>
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
        >
          See something you love? Request a Quote
        </Link>
      </div>
    </section>
  )
}

function GalleryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_ITEMS.map((item) => (
          <figure
            key={item.src}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
          >
            <div className="relative overflow-hidden">
              <Image src={item.src} alt={item.alt} width={640} height={640} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 grid place-items-center bg-slate-950/30 opacity-0 transition group-hover:opacity-100">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-slate-900">
                  +
                </span>
              </div>
            </div>
            {item.caption ? (
              <figcaption className="px-5 py-4 text-sm text-slate-600">{item.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  )
}

function GalleryFormCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Dark wood kitchen backsplash"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Inspired by What You See?</h2>
            <p className="text-base leading-7 text-white/80">
              Let's bring this level of quality and craftsmanship to your home. Share your project ideas and we'll build a tailored estimate.
            </p>
            <div className="space-y-3">
              {CTA_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                    <svg className="size-4" viewBox="0 0 24 24" aria-hidden>
                      <path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm subject="Aesthetic Tile — Gallery Page Inquiry" className="backdrop-blur-sm" />
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
          {GALLERY_FAQS.map((faq) => (
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

