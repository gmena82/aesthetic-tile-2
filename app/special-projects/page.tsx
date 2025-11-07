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
      <ProjectsAndMaterialsSection />
      <ProcessSection />
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

function ProjectsAndMaterialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Custom & Specialty Work</h2>
          <p className="mt-3 text-lg text-slate-600">Unique projects and exterior applications</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* What We Build */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-teal-400/20 to-teal-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Custom Projects
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">What We Build</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <span className="text-teal-500 text-lg">✓</span>
                  <p className="text-sm text-slate-700">Custom mosaics and floor medallions</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-500 text-lg">✓</span>
                  <p className="text-sm text-slate-700">Accent and feature walls</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-500 text-lg">✓</span>
                  <p className="text-sm text-slate-700">Outdoor patios, porches, and walkways</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-500 text-lg">✓</span>
                  <p className="text-sm text-slate-700">Entryways, stair risers, and niche details</p>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-4 mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">Materials & Design</h4>
                <p className="text-sm text-slate-700">
                  We work with ceramic, porcelain, natural stone, glass, and large-format panels. Patterns include subway, herringbone, chevron, geometric mosaics, and medallion inlays.
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <p>• Mockups and samples for color confirmation</p>
                <p>• Schluter profiles and heated floor integration</p>
                <p>• Custom niches and signature details</p>
              </div>
            </div>
          </div>

          {/* Florida Exterior */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute left-0 top-0 h-32 w-32 -translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-slate-400/20 to-slate-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-500/10 px-4 py-2 text-sm font-semibold text-slate-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Exterior Applications
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Florida-Specific Solutions</h3>
              
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                For outdoor and specialty applications, we consider drainage, movement joints, slip resistance, and exposure to heat and humidity. Proper materials help installations perform season after season.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-sm font-bold">1</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Drainage & Surface Prep</h5>
                    <p className="mt-1 text-xs text-slate-600">Proper slope and substrate preparation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-3 transition-colors hover:from-teal-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">2</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Movement Joints</h5>
                    <p className="mt-1 text-xs text-slate-600">Expansion joints for weather shifts</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-sm font-bold">3</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Waterproofing</h5>
                    <p className="mt-1 text-xs text-slate-600">Substrate conditions and moisture barriers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-3 transition-colors hover:from-teal-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">4</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Heat & Humidity Resistance</h5>
                    <p className="mt-1 text-xs text-slate-600">Setting materials for Florida climate</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-teal-500/10 to-slate-500/10 p-4">
                <p className="text-center text-sm font-medium text-slate-700">
                  🌴 From lanais in Clermont to poolside kitchens in Winter Garden
                </p>
              </div>
            </div>
          </div>
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

