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
  const projectShowcase = [
    {
      name: "Mosaic medallions",
      detail: "Hand-cut stone or glass mosaics framed with Schluter trims for grand foyers and wine rooms.",
    },
    {
      name: "Feature walls",
      detail: "Textured porcelain, Venetian plaster tile, or stone slabs with hidden lighting and niches.",
    },
    {
      name: "Outdoor living",
      detail: "Screened lanais, pool surrounds, and summer kitchens engineered for sun and storms.",
    },
    {
      name: "Specialty steps & risers",
      detail: "Inlaid patterns, contrasting nosings, and curved profiles that meet code and design goals.",
    },
  ]

  const collaborationSteps = [
    {
      label: "Design charrette",
      text: "We review inspiration, surface transitions, and how the space will be used day-to-day.",
    },
    {
      label: "Digital mockups",
      text: "You receive scaled elevations with grout, trim, lighting, and slope notes before we order tile.",
    },
    {
      label: "Crafted install",
      text: "Owner-led crews keep the jobsite immaculate and deliver museum-level detailing.",
    },
  ]

  const exteriorSystems = [
    "Drainage plane mapped before slab or deck installs",
    "Movement joints hidden within grout patterning",
    "Slip-resistant tile with UV-stable grout and sealers",
    "Heated floor or snow-melt prep for northern transplants",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900/5 via-teal-50/25 to-slate-100 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(15,23,42,0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Custom & Specialty Work</h2>
          <p className="mt-3 text-lg text-slate-600">Signature installations, collaboration rituals, and weather-ready systems</p>
        </div>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <article className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-10 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="absolute -right-20 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-teal-400/30 to-emerald-500/10 blur-3xl" aria-hidden />
            <div className="absolute -left-14 bottom-0 h-44 w-44 rounded-full bg-gradient-to-tr from-slate-400/25 to-transparent blur-3xl" aria-hidden />

            <div className="relative flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-teal-600">
              <span className="rounded-full bg-teal-500/10 px-4 py-1 text-[0.7rem] text-teal-700">Signature Installations</span>
              <span className="rounded-full border border-teal-500/20 px-4 py-1 text-[0.7rem] text-slate-600">Designers welcome on-site</span>
            </div>

            <div className="relative mt-6 space-y-4">
              <h3 className="text-3xl font-semibold text-slate-900">Built like commissioned artwork</h3>
              <p className="text-sm leading-6 text-slate-600">
                Specialty tile moments start with intricate layout math, mockups you can touch, and field adjustments guided by natural light. We obsess over reveals, edge profiles, and how your project will patina over time.
              </p>
            </div>

            <div className="relative mt-8 grid gap-6 md:grid-cols-2">
              {projectShowcase.map((project) => (
                <div key={project.name} className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm shadow-slate-900/5">
                  <p className="text-sm font-semibold text-slate-900">{project.name}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{project.detail}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-10 space-y-6">
              {collaborationSteps.map((step, index) => (
                <div key={step.label} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15 text-xs font-semibold text-teal-600">{index + 1}</span>
                    {index < collaborationSteps.length - 1 ? <span className="mt-1 h-full w-px bg-gradient-to-b from-teal-400/40 to-transparent" aria-hidden /> : null}
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4 shadow-inner shadow-slate-900/5">
                    <h4 className="text-sm font-semibold text-slate-900">{step.label}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="relative grid gap-6">
            <div className="absolute -right-10 top-12 hidden h-28 w-28 rounded-full bg-gradient-to-br from-teal-300/25 to-transparent blur-2xl xl:block" aria-hidden />

            <article className="relative overflow-hidden rounded-[28px] border border-teal-200/60 bg-gradient-to-br from-white via-white/80 to-teal-100/30 p-8 shadow-xl shadow-teal-500/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">
                Material Lab
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Palette explorations & tactile samples</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We stage sample boards that blend tile, grout, trim, lighting, and hardware finishes so you can approve every detail before fabrication.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 text-xs font-medium text-slate-600 shadow-sm shadow-teal-500/5">
                  <p className="text-sm font-semibold text-slate-900">Mockup lending</p>
                  <p className="mt-2">
                    Borrow panels for 48 hours to review against cabinetry, stone slabs, and natural light.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 text-xs font-medium text-slate-600 shadow-sm shadow-teal-500/5">
                  <p className="text-sm font-semibold text-slate-900">Trim decisions</p>
                  <p className="mt-2">
                    Compare mitered corners vs. Schluter\u00ae, radius profiles, or custom metalwork without guesswork.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {["#0f766e", "#155e75", "#f59e0b", "#1e293b"].map((hex) => (
                  <div key={hex} className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                    <span className="inline-flex size-6 rounded-full border border-white/60 shadow" style={{ backgroundColor: hex }} aria-hidden />
                    {hex}
                  </div>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[28px] border border-teal-300/40 bg-white/80 p-8 shadow-xl shadow-slate-900/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">
                Outdoor Systems
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Engineered for Florida humidity & sun</h3>
              <ul className="mt-6 space-y-4">
                {exteriorSystems.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-white/70 p-4 text-sm text-slate-700 shadow-sm shadow-slate-900/5">
                    <span className="mt-1 inline-flex size-2 rounded-full bg-teal-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-teal-600/90">
                Groveland \u2022 Clermont \u2022 Orlando
              </div>
            </article>
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

