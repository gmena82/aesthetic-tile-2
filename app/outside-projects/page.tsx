import Image from "next/image"
import type { Metadata } from "next"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"
import { CTA_FEATURES } from "../page"

export const metadata: Metadata = {
  title: "Outdoor Tile Projects | Patios, Lanais & Pool Decks | Aesthetic Tile",
  description:
    "Explore outdoor tile services from Aesthetic Tile. We install patios, lanais, and specialty outdoor spaces across Groveland, Clermont, Minneola, and Central Florida.",
}

const OUTDOOR_FAQS = [
  {
    question: "Do you install porcelain tile patios in Clermont and Groveland?",
    answer:
      "Yes—porcelain tile is a popular choice for Clermont, Groveland, and Minneola patios because it resists fading, moisture, and Florida heat swings.",
  },
  {
    question: "How do you prep outdoor slabs so tile lasts through Florida storms?",
    answer:
      "We check for slope, drainage, and existing coatings, then use crack-isolation membranes, movement joints, and high-performance thinsets rated for exteriors.",
  },
  {
    question: "Can you tile covered lanais or screened porches without removing furniture?",
    answer:
      "We coordinate staging so your lanai or porch stays usable—moving sections at a time and keeping dust contained while the tile cures.",
  },
  {
    question: "Do you offer slip-resistant options for pool surrounds?",
    answer:
      "Absolutely. We specify textured porcelain and sealers designed for wet areas so pool decks stay comfortable and safe year-round.",
  },
  {
    question: "Will outdoor tile crack when temperatures shift?",
    answer:
      "We include expansion joints, install anti-fracture membranes, and follow TCNA EJ171 guidelines so tile handles thermal swings without cracking.",
  },
  {
    question: "Can you refresh old concrete patios with tile?",
    answer:
      "Yes—we clean, scarify if needed, repair cracks, and then install tile that gives dated concrete new life without a full demo.",
  },
]

const SHOWCASE_FEATURES = [
  {
    title: "Screened lanais",
    detail: "Humidity-ready installation with slope corrections and discreet drains at thresholds.",
  },
  {
    title: "Covered patios",
    detail: "Porcelain tiles that mirror indoor finishes so your living room flows outdoors.",
  },
  {
    title: "Pool decks",
    detail: "Slip-resistant tile with expansion joints to handle sun, splash zones, and cleaning routines.",
  },
]

const CHECKPOINTS = [
  "Porcelain, stone-look, and patterned pavers rated for exterior use",
  "Sheltered staging to protect landscaping and outdoor kitchens",
  "Owner-installed oversight on every pour, membrane, and grout joint",
]

export default function OutsideProjectsPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <IntroSection />
      <OutdoorHighlightsSection />
      <SeoSection />
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
          src="/images/services/outside-projects.webp"
          alt="Outdoor tiled patio with brick exterior in Central Florida"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto flex min-h-[55vh] max-w-5xl flex-col justify-center gap-6 px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-semibold sm:text-5xl">Outdoor Tile Projects Built for Florida Living</h1>
        <p className="text-lg text-white/80">
          Patios, lanais, and pool decks installed across Groveland, Clermont, Winter Garden, and surrounding Central Florida communities.
        </p>
        <p className="text-lg text-white/70">
          We handle drainage, waterproofing, and slip resistance so your outdoor space looks incredible and performs through rainstorms, humidity, and year-round entertaining.
        </p>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image
            src="/images/services/outside-projects.webp"
            alt="Large-format porcelain tile on an outdoor patio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
          />
        </div>
        <div className="space-y-5 text-base leading-7 text-slate-600">
          <h2 className="text-3xl font-semibold text-slate-900">Transform Your Outdoor Spaces into a Sanctuary</h2>
          <p>
            Outdoor tile brings the comfort of your interior rooms to lanais, covered patios, and porches. We install durable surfaces that resist fading, moisture, and everyday wear so you can relax outside year-round.
          </p>
          <p>
            Owner-installed oversight means the same professionals who walk your project in Groveland or Clermont will set every tile. We follow TCNA exterior guidelines, continuing education, and manufacturer-led waterproofing workshops to match the right membranes, mortars, and sealants to your space and budget.
          </p>
          <p>
            Our team delivers precise cuts around columns, outdoor kitchens, and screen enclosures, ensuring expansion joints stay hidden while protecting the installation from Central Florida heat and afternoon thunderstorms.
          </p>
        </div>
      </div>
    </section>
  )
}

function OutdoorHighlightsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-lg shadow-slate-900/5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Outdoor Expertise
          </div>
          <h3 className="text-3xl font-semibold text-slate-900">What We Build Outside</h3>
          <p className="text-base leading-7 text-slate-600">
            Outdoor tile projects demand careful planning for slope, drainage, and movement. We translate decades of interior craftsmanship to Florida exteriors, pairing durable porcelain and stone-look tile with proper expansion strategy.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SHOWCASE_FEATURES.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5">
                <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-teal-100 bg-white p-6 shadow-inner shadow-teal-500/10">
          <h3 className="text-2xl font-semibold text-slate-900">Florida-Ready Installation Checklist</h3>
          <p className="text-sm leading-6 text-slate-600">
            Every exterior project in Clermont, Minneola, and Groveland receives the same disciplined prep we use indoors—plus the details that let tile breathe outdoors.
          </p>
          <ul className="space-y-3">
            {CHECKPOINTS.map((checkpoint) => (
              <li key={checkpoint} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckIcon />
                <span>{checkpoint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function SeoSection() {
  return (
    <section className="mx-auto max-w-4xl space-y-6 px-6 text-center">
      <h3 className="text-3xl font-semibold text-slate-900">Outdoor Tile Pros Serving Lake & West Orange Counties</h3>
      <p className="text-base leading-7 text-slate-600">
        Aesthetic Tile installs patios, porches, pool decks, and outdoor kitchens throughout Groveland, Clermont, Winter Garden, Minneola, and the wider Lake County area. We coordinate with builders, screen companies, and designers so your outside projects stay on schedule and on budget. Whether you need porcelain tile that matches your interior floors or a textured surface for a breezy lanai, our owner-led crew delivers the waterproofing, drainage, and detailing Central Florida homes demand.
      </p>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Contact Aesthetic Tile for outdoor projects"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Refresh Your Outdoor Space?</h2>
            <p className="text-base leading-7 text-white/80">
              Schedule an estimate for your patio, lanai, or pool surround. We bring samples, discuss waterproofing strategies, and outline a step-by-step plan tailored to your property.
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

          <ContactForm subject="Aesthetic Tile — Outside Projects Inquiry" className="backdrop-blur-sm" />
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
          {OUTDOOR_FAQS.map((faq) => (
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
