import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"

export const metadata: Metadata = {
  title: "Bathroom & Shower Tile Installation | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "Expert bathroom remodeling and shower tile installation in Groveland, Clermont, and Orlando. Specializing in robust waterproofing, custom designs, and lasting quality. Get a free estimate.",
}

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

export default function BathroomShowerPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <MainContentSection />
      <WaterproofingSection />
      <ServicesSection />
      <FeaturesSection />
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
          alt="Custom walk-in shower installation with built-in niche in Clermont, FL"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom Bathroom and Shower Installation in Central Florida
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
          Aesthetic Tile provides expert bathroom remodeling and shower installation services across Lake County and the
          greater Orlando area, including Groveland, Clermont, Minneola, and Winter Garden. We transform master baths,
          guest baths, and showers with precision installations built to last.
        </p>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-white/90">
          We understand the challenges of Florida humidity. Our installation and waterproofing methods ensure your
          bathroom remains durable, beautiful, and mold-free.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Schedule Your Bathroom Consultation
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
            src="/images/gallery/bathroom-remodel-tile.webp"
            alt="Waterproofing membrane system installed before tiling a shower in Groveland, FL"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Transform Your Bathroom into a Sanctuary</h2>
          <p className="text-base leading-7 text-slate-600">
            Your bathroom should be a personal retreat, and the right tile is essential for creating that atmosphere.
            We specialize in transforming bathrooms with beautiful, durable tile work, from elegant floors and walls to
            stunning, fully-waterproofed walk-in showers.
          </p>
          <p className="text-base leading-7 text-slate-600">
            Our expert craftsmanship ensures every detail is perfect, especially the critical waterproofing needed for
            wet areas. We combine precision installation with high-quality materials to deliver a luxurious and
            long-lasting finish that adds significant value and comfort to your home.
          </p>
          <p className="text-base leading-7 text-slate-600">
            Owner-installed oversight means the same trusted professionals who estimate your project will handle the
            installation. Our team stays current with TCNA updates, continuing education, and manufacturer-led
            waterproofing workshops so we can recommend the best approach for your budget and lifestyle.
          </p>
        </div>
      </div>
    </section>
  )
}

function WaterproofingSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          The Foundation: Leak-Proof Installation
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base text-slate-600">
          <p>
            Waterproofing is the most critical step in any shower. We follow applicable TCNA guidelines and specify
            proven systems such as Schluter® or Wedi® when required. Our process includes substrate preparation,
            waterproofing membrane installation, and careful detailing at corners and penetrations.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="font-semibold text-slate-900">Proper Slope:</strong> Shower pans are pitched correctly
              to the drain to prevent standing water.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Flood Test:</strong> We perform a timed flood test of
              the pan before tile is set.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Membrane Detailing:</strong> Seams, niches, and benches
              are waterproofed and reinforced.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Materials:</strong> High-quality mortars and
              mold-resistant or stain-resistant grouts; stone is sealed as needed.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Comprehensive Bathroom Tiling Services
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            From complete bathroom renovation to targeted upgrades, we handle tub surrounds, shower stalls, bathroom
            flooring, wainscoting, and accent walls with large format tile or mosaics.
          </p>
          <p>
            Whether you are planning a tub-to-shower conversion for a rental property in Minneola or a master bath
            remodel in Winter Garden, we coordinate demolition, substrate repair, and tile setting with minimal
            disruption. Our crew maintains a tidy jobsite, protects adjacent rooms, and keeps you informed at every
            stage.
          </p>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Custom Shower Features and Designs</h2>
        <ul className="mx-auto mt-6 max-w-3xl list-disc space-y-2 pl-6 text-base text-slate-700">
          <li>Built-in niches and shelving</li>
          <li>Built-in benches and seats</li>
          <li>Curbless (zero-entry) showers</li>
          <li>Linear drains and low-profile pans</li>
        </ul>
        <p className="mx-auto mt-6 max-w-3xl text-base text-slate-600">
          Our design support covers layout, trims (e.g., Schluter profiles or bullnose), large format tile handling,
          and custom tile design details.
        </p>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Our Bathroom Installation Process</h2>
        <ol className="mx-auto mt-6 max-w-3xl list-decimal space-y-2 pl-6 text-base text-slate-700">
          <li>
            <strong className="font-semibold text-slate-900">Consultation:</strong> Scope, materials, and scheduling
            for your bathroom renovation or master bath remodel.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Preparation:</strong> Surface evaluation, protection of
            adjacent finishes, and dust control.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Waterproofing:</strong> Membrane application and
            inspections; documentation as requested.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Tile Setting:</strong> Layout planning to avoid awkward
            cuts; precise cuts around valves and outlets.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Grouting & Sealing:</strong> Mold resistant grout and
            sealers where appropriate.
          </li>
        </ol>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Request a Detailed Remodeling Estimate
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
              "We trusted Aesthetic Tile with our master bath remodel. The waterproofing process was thorough and gave
              us total peace of mind. The best contractors in Groveland!"
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-500">— Danielle P., Groveland, FL</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: "How long does a complete shower retile take?",
      answer:
        "A standard walk-in shower retile usually takes 3-5 days. This includes demolition, proper waterproofing, tile setting, and grouting to ensure a long-lasting, high-quality finish.",
    },
    {
      question: "What is the best tile for shower floors?",
      answer:
        "For shower floors, we recommend smaller, textured porcelain or ceramic tiles. They provide better slip resistance and allow for the proper slope to the drain. Mosaics are a popular and safe choice.",
    },
    {
      question: "Is professional waterproofing really necessary?",
      answer:
        "Yes, it's critical. Proper waterproofing is the most important step in a shower installation. It prevents leaks, water damage, and mold growth behind the tiles, protecting the structure of your home.",
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
          alt="Bathroom and shower tile installation consultation backdrop in Groveland, FL"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready for Your Dream Bathroom?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your bathroom or shower tile project. Professional craftsmanship, competitive
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

