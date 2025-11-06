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

export default function FloorTileInstallationPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <MainContentSection />
      <PrepSection />
      <WhyTileSection />
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

function PrepSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Built to Last: Preparation and Prevention
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            A floor installation is only as good as the substrate beneath it. We evaluate flatness, level, and
            cleanliness before any tile is set, correcting uneven areas as needed with proper floor leveling methods.
          </p>
          <p>
            To prevent cracks from telegraphing into the tile or grout, we specify uncoupling membranes when
            appropriate (for example, Schluter DITRA). This accommodates normal movement—especially on Florida concrete
            slabs—and adds a critical layer of protection.
          </p>
          <p>
            We control lippage with careful layout, correct trowel techniques, and professional lippage tuning systems
            so large-format tile finishes flat and even.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Request Your Flooring Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyTileSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Why Choose Tile Flooring for Your Florida Home?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
          Central Florida's climate demands materials that can handle swings in humidity and frequent cleaning. Tile
          flooring performs in kitchens, great rooms, and pool-side cabanas alike, making it the preferred upgrade for
          busy households.
        </p>
        <ul className="mx-auto mt-6 max-w-3xl list-disc space-y-2 pl-6 text-base text-slate-700">
          <li>Durability for high-traffic spaces</li>
          <li>Resistance to humidity and water</li>
          <li>Cooling underfoot and easy maintenance</li>
          <li>Design flexibility for every room</li>
        </ul>
      </div>
    </section>
  )
}

function StylesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Popular Flooring Styles and Materials</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
          We collaborate with trusted distributors across Groveland and Clermont to source high-performing tile that
          matches your aesthetic goals.
        </p>
        <ul className="mx-auto mt-6 max-w-3xl list-disc space-y-2 pl-6 text-base text-slate-700">
          <li>Wood-look plank tile for a warm, low-maintenance look</li>
          <li>Large Format Tile (LFT) for fewer grout joints and a modern feel</li>
          <li>Porcelain and ceramic for everyday performance</li>
          <li>Natural stone such as travertine and marble for premium spaces</li>
        </ul>
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
              We replaced all our carpet with wood-look tile. The team ensured the floors were perfectly leveled and
              the results are stunning.
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-500">— Carlos M., Lake County, FL</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: "What type of tile is best for high-traffic areas?",
      answer:
        "Porcelain tile is an excellent choice for high-traffic areas like kitchens and entryways. It's incredibly dense, durable, and resistant to scratches, stains, and moisture.",
    },
    {
      question: "How long does it take to install new tile flooring?",
      answer:
        "The timeline depends on the size and complexity of the area. An average-sized room (e.g., a kitchen or bathroom) typically takes 2-4 days, which includes demolition of old flooring, surface preparation, and installation.",
    },
    {
      question: "Can you install tile over my existing floor?",
      answer:
        "It depends on the existing flooring. Tile can sometimes be installed over a single, well-adhered layer of vinyl or linoleum. However, for the most durable and long-lasting result, we almost always recommend removing the old flooring to prepare a proper, stable subfloor.",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="text-center text-3xl font-semibold text-slate-900">Your Flooring Questions Answered</h2>
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

