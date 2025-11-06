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

export default function KitchenBacksplashesPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <MainContentSection />
      <MaterialsSection />
      <StylesSection />
      <ProcessSection />
      <TestimonialSection />
      <FaqSection />
      <CallToActionSection />
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

function MaterialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Popular Backsplash Materials</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Ceramic & Porcelain</h3>
            <p className="mt-2 text-base text-slate-600">
              Durable, budget-friendly, and easy to maintain—great for busy kitchens. Wide color and size options,
              including classic 3×6 subway tile.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Natural Stone (Marble, Travertine)</h3>
            <p className="mt-2 text-base text-slate-600">
              Premium look with unique variation. Requires sealing and thoughtful grout selection for stain resistance
              and long-term performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Glass & Mosaics</h3>
            <p className="mt-2 text-base text-slate-600">
              High visual impact and light play. Excellent for feature walls and accent bands; pairs well with under
              cabinet lighting.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Large-Format & Specialty</h3>
            <p className="mt-2 text-base text-slate-600">
              Fewer grout joints and a modern aesthetic. Demands precise layout and surface prep for flat, seamless
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StylesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Trending Backsplash Styles in Central Florida
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
          From timeless to statement-making, we install:
        </p>
        <ul className="mx-auto mt-6 max-w-3xl space-y-2 text-base text-slate-700">
          <li>
            <strong className="font-semibold text-slate-900">Subway Tile</strong> in classic or elongated formats
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Herringbone</strong> and{" "}
            <strong className="font-semibold text-slate-900">Chevron</strong> patterns
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Custom mosaics</strong> and mixed-material blends
          </li>
          <li>Picture-frame accents and niche features</li>
        </ul>
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
              "Aesthetic Tile handled our complex mosaic backsplash perfectly. Best kitchen installers in Clermont!"
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-500">— Melissa R., Clermont, FL</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: "How long does a backsplash installation typically take?",
      answer:
        "Most standard kitchen backsplash installations are completed within 1-2 days. This includes preparation, setting the tile, and grouting. We work efficiently to minimize disruption to your home.",
    },
    {
      question: "What are the most popular materials for kitchen backsplashes?",
      answer:
        "Ceramic and porcelain tiles are classic, durable, and versatile choices. Natural stone like marble or travertine offers a luxurious look, while glass and mosaic tiles can create a unique, modern statement.",
    },
    {
      question: "Can you help me choose a design that matches my kitchen?",
      answer:
        "Absolutely. With our extensive experience, we can provide recommendations on tile materials, colors, patterns, and layouts that will best complement your existing countertops, cabinets, and overall kitchen style.",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="text-center text-3xl font-semibold text-slate-900">Your Questions Answered</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-1">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5"
          >
            <h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3>
            <p className="mt-3 text-base text-slate-600">{faq.answer}</p>
          </div>
        ))}
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

