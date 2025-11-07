import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"
import { PopularAndTrendingSection } from "./PopularAndTrendingSection"

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
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Expert Kitchen Backsplash Installation in Central Florida
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/90">
          Aesthetic Tile specializes in custom kitchen backsplash installations across Groveland, Clermont, Winter Garden, Minneola, and the greater Orlando area. A well-planned backsplash ties together countertops, cabinetry, and flooring—delivering both protection and standout design.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-white/90">
          We understand the demands of Florida homes, from ensuring robust waterproofing against humidity to selecting durable, stain-resistant materials that perform beautifully.
        </p>
        <div className="mt-6 flex justify-center">
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

