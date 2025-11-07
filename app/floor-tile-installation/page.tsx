import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"

export const metadata: Metadata = {
  title: "Floor Tile Installation Services | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "Transform your home with durable and beautiful floor tile installation by Aesthetic Tile. Serving Groveland, Clermont, and Orlando. Experts in large format and wood-look tile. Get a free quote.",
}

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const FLOOR_FAQS = [
  {
    question: "Do you handle whole‑home flooring in Clermont?",
    answer:
      "Yes—Clermont homes get large‑format floors with attention to lippage control and clean transitions.",
  },
  {
    question: "How do you prep slabs or subfloors in Florida?",
    answer:
      "Moisture testing, leveling, crack isolation, and movement joints where needed.",
  },
  {
    question: "What's the best grout for high‑traffic areas?",
    answer:
      "We recommend premium grout with stain resistance for easier upkeep.",
  },
  {
    question: "Can you tie new tile into existing flooring?",
    answer:
      "Yes—we plan transitions so rooms flow and heights match at thresholds.",
  },
  {
    question: "How long does floor tile installation take?",
    answer:
      "It depends on square footage and complexity. A standard room might take 2-3 days, while whole-home installations can take a week or more.",
  },
  {
    question: "What types of floor tile do you recommend for Florida homes?",
    answer:
      "Porcelain and ceramic are popular for durability and moisture resistance. Large-format and wood-look planks are trending for modern aesthetics.",
  },
]

export default function FloorTileInstallationPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <MainContentSection />
      <PrepAndBenefitsSection />
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
          alt="Floor tile installation project for a Central Florida home renovation"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Professional Tile Flooring Installation in Central Florida
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
          Aesthetic Tile provides comprehensive floor tile installation services across Central Florida, serving
          homeowners in Groveland, Clermont, Winter Garden, Minneola, and the greater Orlando area.
        </p>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-white/90">
          We deliver durable, long-lasting floors with precise layouts, clean grout joints, and careful transitions
          from one room to the next.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Schedule Your Flooring Consultation
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
            src="/images/gallery/bathroom-floor-tile-checkered.webp"
            alt="Checkered porcelain floor tile installation in Clermont, FL"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Expert Flooring Installation for a Lasting Impression</h2>
          <p className="text-base leading-7 text-slate-600">
            Floor tile is a fantastic investment in your home, offering an unmatched combination of durability and
            elegance. Whether you prefer the timeless look of natural stone, the versatility of ceramic, or the
            strength of porcelain, the right tile floor can elevate any space from the kitchen to the entryway.
          </p>
          <p className="text-base leading-7 text-slate-600">
            Our installation process is built on a foundation of precision. We ensure a perfectly level subfloor,
            flawless grout lines, and a meticulous layout, guaranteeing a beautiful and durable surface that stands up
            to daily life for decades to come.
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

function PrepAndBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Floor Tile Excellence</h2>
          <p className="mt-3 text-lg text-slate-600">Precision preparation and proven performance</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Preparation & Foundation */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-teal-400/20 to-teal-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2v20M2 12h20" />
                </svg>
                Professional Prep
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Built to Last</h3>
              
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                A floor installation is only as good as the substrate beneath it. We evaluate flatness, level, and cleanliness before any tile is set, correcting uneven areas with proper leveling methods.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Substrate Evaluation</h4>
                    <p className="mt-1 text-sm text-slate-600">Flatness, level, and cleanliness checked before setting tile</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Uncoupling Membranes</h4>
                    <p className="mt-1 text-sm text-slate-600">Schluter DITRA for crack prevention on Florida slabs</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Lippage Control</h4>
                    <p className="mt-1 text-sm text-slate-600">Professional tuning systems for flat large-format finishes</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Movement Accommodation</h4>
                    <p className="mt-1 text-sm text-slate-600">Critical layer of protection for normal substrate shifts</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
                >
                  Request Your Flooring Estimate
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits & Styles */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute left-0 top-0 h-32 w-32 -translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-slate-400/20 to-slate-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-500/10 px-4 py-2 text-sm font-semibold text-slate-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
                Florida-Ready Materials
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Why Tile for Florida Homes?</h3>
              
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Central Florida's climate demands materials that handle humidity swings and frequent cleaning. Tile flooring performs in kitchens, great rooms, and pool-side areas alike.
              </p>

              <div className="mb-6 space-y-3 rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-4">
                <h4 className="font-semibold text-slate-900">Key Benefits</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-500">✓</span>
                    Durability for high-traffic spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-500">✓</span>
                    Resistance to humidity and water
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-500">✓</span>
                    Cooling underfoot and easy maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-500">✓</span>
                    Design flexibility for every room
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-sm font-bold">1</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Wood-Look Plank Tile</h5>
                    <p className="mt-1 text-xs text-slate-600">Warm aesthetic, low maintenance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-3 transition-colors hover:from-teal-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">2</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Large Format Tile (LFT)</h5>
                    <p className="mt-1 text-xs text-slate-600">Fewer grout joints, modern feel</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-sm font-bold">3</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Porcelain & Ceramic</h5>
                    <p className="mt-1 text-xs text-slate-600">Everyday performance and durability</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-3 transition-colors hover:from-teal-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">4</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Natural Stone</h5>
                    <p className="mt-1 text-xs text-slate-600">Travertine and marble for premium spaces</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-teal-500/10 to-slate-500/10 p-4">
                <p className="text-center text-sm font-medium text-slate-700">
                  🏡 Trusted distributors across Groveland and Clermont
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
        <h2 className="text-center text-3xl font-semibold text-slate-900">Our Installation Process</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
          Every project begins with a site visit to measure, inspect existing conditions, and discuss design
          preferences.
        </p>
        <ol className="mx-auto mt-6 max-w-3xl list-decimal space-y-2 pl-6 text-base text-slate-700">
          <li>Consultation and materials planning for your home renovation</li>
          <li>Substrate preparation and surface corrections</li>
          <li>Membrane installation where required for crack prevention</li>
          <li>Layout planning to minimize awkward cuts and transitions</li>
          <li>Setting and alignment with lippage control methods</li>
          <li>Grout sealing and final detailing</li>
        </ol>
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
          {FLOOR_FAQS.map((faq) => (
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
          alt="Floor tile installation enhancing a dark wood kitchen in Orlando, FL"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Upgrade Your Floors?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your floor tile installation project. Professional craftsmanship, competitive
              pricing, and exceptional service guaranteed.
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

