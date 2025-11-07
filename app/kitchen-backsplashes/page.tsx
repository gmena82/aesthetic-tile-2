import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"

export const metadata: Metadata = {
  title: "Kitchen Backsplash Installation | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "Upgrade your kitchen with professional backsplash installation by Aesthetic Tile. Serving Groveland, Clermont, and Orlando. Explore styles from subway tile to custom mosaics. Get a free quote.",
}

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const KITCHEN_FAQS = [
  {
    question: "Do you install kitchen backsplashes in Clermont/\"Claremont\"?",
    answer:
      "Yes—Clermont homeowners often schedule 1–2‑day backsplash projects with minimal disruption.",
  },
  {
    question: "What tile and grout combos are easiest to clean?",
    answer:
      "Porcelain/ceramic with stain‑resistant grout keeps maintenance simple for busy kitchens.",
  },
  {
    question: "Can you work around outlets, windows, and open shelves?",
    answer:
      "We template and cut precisely for outlets, returns, and shelves so finishes look seamless.",
  },
  {
    question: "Do I need to remove my range or hood?",
    answer:
      "Not always. We protect appliances and coordinate temporary removal only when necessary.",
  },
  {
    question: "How long does a backsplash installation typically take?",
    answer:
      "Most standard kitchen backsplash installations are completed within 1-2 days. This includes preparation, setting the tile, and grouting. We work efficiently to minimize disruption to your home.",
  },
  {
    question: "Will you help choose edge trims (e.g., profiles) and align tile with outlets/windows for a seamless look?",
    answer:
      "Yes—we recommend Schluter® profiles or other trim options that fit your style, and we lay out tile to center on focal areas and minimize awkward cuts around outlets, windows, and edges.",
  },
]

export default function KitchenBacksplashesPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <MainContentSection />
      <PopularAndTrendingSection />
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
          alt="White ceramic subway tile backsplash installation in Clermont, FL by Aesthetic Tile"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Expert Kitchen Backsplash Installation in Central Florida
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
          Aesthetic Tile specializes in custom kitchen backsplash installations across Groveland, Clermont, Winter
          Garden, Minneola, and the greater Orlando area. A well-planned backsplash ties together countertops,
          cabinetry, and flooring—delivering both protection and standout design.
        </p>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-white/90">
          We understand the demands of Florida homes, from ensuring robust waterproofing against humidity to selecting
          durable, stain-resistant materials that perform beautifully over time.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Plan Your Kitchen Backsplash
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
            src="/images/gallery/kitchen-backsplash-stone-lock.webp"
            alt="Natural stone mosaic kitchen backsplash installation in Groveland, FL by Aesthetic Tile"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">The Perfect Finish for Your Kitchen</h2>
          <p className="text-base leading-7 text-slate-600">
            A kitchen backsplash is more than just a protective surface; it's a design statement. It ties together
            your countertops, cabinets, and flooring to create a cohesive and beautiful space. At Aesthetic Tile, we
            specialize in creating stunning backsplashes that are both functional and a reflection of your personal
            style.
          </p>
          <p className="text-base leading-7 text-slate-600">
            With generations of experience, our meticulous installation process ensures flawless grout lines, stain
            resistance, and a durable finish that will last for years. We handle everything from classic subway tile to
            intricate custom tile design mosaics, delivering craftsmanship that elevates the heart of your home.
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

function PopularAndTrendingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Explore Backsplash Options</h2>
          <p className="mt-3 text-lg text-slate-600">Materials and styles that transform your kitchen</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Popular Materials */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-teal-400/20 to-teal-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Popular Materials
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Choose Your Style</h3>
              
              <div className="space-y-5">
                <div className="group/item flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 2v2H7v2H5v2H3v2H1v10h22V10h-2V8h-2V6h-2V4h-2V2H9zm0 2h6v2h2v2h2v2h2v8H3v-8h2V8h2V6h2V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Ceramic & Porcelain</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Durable, budget-friendly, and easy to maintain—great for busy kitchens with wide color and size options.
                    </p>
                  </div>
                </div>

                <div className="group/item flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.64l7 3.5v7.72l-7-3.5V9.64zm16 0v7.72l-7 3.5v-7.72l7-3.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Natural Stone</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Premium marble and travertine with unique variation. Requires sealing for stain resistance.
                    </p>
                  </div>
                </div>

                <div className="group/item flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M6 2h12v2H6V2zm0 4h12v2H6V6zm0 4h12v2H6v-2zm0 4h12v2H6v-2zm0 4h12v2H6v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Glass & Mosaics</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      High visual impact with light play. Perfect for feature walls and accent bands.
                    </p>
                  </div>
                </div>

                <div className="group/item flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Large-Format Tile</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Modern aesthetic with fewer grout joints. Demands precise layout for seamless results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Styles */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute left-0 top-0 h-32 w-32 -translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-slate-400/20 to-slate-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-500/10 px-4 py-2 text-sm font-semibold text-slate-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Trending Styles
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">What's Popular Now</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-4 transition-colors hover:from-teal-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Subway Tile</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Classic 3×6 or elongated formats in timeless layouts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-4 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Herringbone & Chevron</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Dynamic diagonal patterns that add movement and sophistication
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-transparent p-4 transition-colors hover:from-teal-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Custom Mosaics</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Mixed-material blends and artistic accent patterns
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-4 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Picture-Frame Accents</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Decorative borders and niche features for focal points
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-teal-500/10 to-slate-500/10 p-4">
                <p className="text-center text-sm font-medium text-slate-700">
                  💡 From timeless to statement-making, we install it all
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
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Our Kitchen Backsplash Installation Process
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            Backsplashes require precision. We plan layouts to avoid awkward cuts, protect countertops and cabinetry,
            and cut accurately around outlets and corners. We handle exposed edges with profiles (e.g., Schluter®) or
            bullnose finishes for a clean, professional look. We specify high-quality mortars and stain-resistant
            grout, then seal stone as needed.
          </p>
          <p>
            For kitchen remodeling projects, we coordinate with your schedule, other trades, and appliance timelines to
            keep everything on track.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Request a Kitchen Backsplash Estimate
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
          {KITCHEN_FAQS.map((faq) => (
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
          alt="Dark stone mosaic kitchen backsplash installation in Groveland, FL by Aesthetic Tile"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Transform Your Kitchen?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your kitchen backsplash project. Professional craftsmanship, competitive pricing,
              and exceptional service guaranteed.
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

