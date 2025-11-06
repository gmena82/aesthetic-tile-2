import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"

export const metadata: Metadata = {
  title: "Fireplace Tile Installation & Surrounds | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "Transform your living space with custom fireplace tile installation by Aesthetic Tile. Serving Groveland, Clermont, and Orlando. Experts in surrounds, hearths, and feature walls. Get a quote.",
}

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

export default function FireplacesPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <MainContentSection />
      <SafetySection />
      <FocalPointSection />
      <MaterialsSection />
      <CustomizationSection />
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
          alt="Contemporary tile fireplace feature wall installation in Clermont, FL"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom Fireplace Tile Installation in Central Florida
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
          Aesthetic Tile designs and installs stunning tiled fireplaces for homeowners across Central Florida,
          including Groveland, Clermont, Winter Garden, Minneola, and the greater Orlando area. From clean modern
          surrounds to statement feature walls, we build focal points that elevate your space.
        </p>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-white/90">
          While Florida winters are mild, a beautifully tiled fireplace provides year-round ambiance and a dramatic
          centerpiece for your Lake County home.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Design Your Dream Fireplace
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
            src="/images/gallery/fireplace-project-square-tile.webp"
            alt="Custom porcelain fireplace surround installation in Groveland, FL living room"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Create a Breathtaking Focal Point</h2>
          <p className="text-base leading-7 text-slate-600">
            A fireplace is the natural heart of a living room, and a custom tile surround can transform it from a
            simple feature into a work of art. We specialize in designing and installing beautiful, heat-resistant tile
            for fireplace surrounds, hearth installation, and feature wall upgrades that enhance your home's style and
            warmth.
          </p>
          <p className="text-base leading-7 text-slate-600">
            From rustic stacked stone to sleek, modern fireplace design elements or intricate mosaics, we work with you
            to select the perfect materials. Our expert installation ensures every tile is perfectly placed for a safe,
            stunning, and durable finish that you'll gather around for years to come.
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

function SafetySection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Expertise You Can Trust: Safety and Precision
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            Fireplace installations balance design with technical requirements. We specify heat-appropriate setting
            materials and tile, follow local clearance codes around the firebox, and plan layouts for symmetry and
            clean transitions. Edges and corners are detailed for a seamless finish, including mitered corners where
            suitable.
          </p>
          <p>
            Every project begins with a thorough assessment of your existing structure. Our team verifies framing,
            substrate, and firebox conditions before setting the first tile. This preparation allows us to deliver
            installations that perform safely for the long term, even when exposed to the radiant heat of regular fires
            or electric inserts.
          </p>
          <p>
            We also coordinate with electricians, carpenters, and designers when needed to ensure your renovation moves
            smoothly. With Aesthetic Tile, you gain a licensed and insured partner focused on craftsmanship, safety,
            and communication from the first consultation to the final walkthrough.
          </p>
        </div>
      </div>
    </section>
  )
}

function FocalPointSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Creating a Stunning Focal Point</h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            Your fireplace anchors the room. We help you choose formats, proportions, and textures that complement your
            cabinetry, flooring, and overall style—whether modern minimal or warm and rustic.
          </p>
          <p>
            Our designers map out tile layouts that align with mantels, built-ins, and TV niches so every grout joint
            lines up cleanly. Large format panels stretch the eye vertically for dramatic height, while horizontal
            ledger stone can widen the room and add natural texture.
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
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Popular Materials for Fireplace Surrounds
        </h2>
        <ul className="mx-auto mt-6 max-w-3xl list-disc space-y-2 pl-6 text-base text-slate-700">
          <li>Large format tile (LFT) for sleek, modern panels with minimal joints</li>
          <li>Natural stone such as marble or granite for a premium finish</li>
          <li>Ledger/stacked stone for rich texture and depth</li>
          <li>Mosaics and patterned tile for custom statement details</li>
        </ul>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-slate-600">
          During our consultation, we bring samples and discuss maintenance, heat performance, and color palettes that
          coordinate with your furnishings.
        </p>
      </div>
    </section>
  )
}

function CustomizationSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Our Customization Options</h2>
        <ul className="mx-auto mt-6 max-w-3xl list-disc space-y-2 pl-6 text-base text-slate-700">
          <li>Simple surrounds sized to your firebox</li>
          <li>Floor-to-ceiling feature walls</li>
          <li>Hearths (flush or raised)</li>
          <li>Mantel integration and trim details</li>
        </ul>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-slate-600">
          Beyond tile selection, we help you determine the right profile and finishing touches for your project. Add a
          raised hearth for extra seating, wrap tile around corners for a seamless look, or frame the firebox with a
          custom mantel.
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
          >
            Request a Custom Fireplace Estimate
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
              Our new floor-to-ceiling tile fireplace is the highlight of our home. The attention to detail was superb.
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-500">— Renee L., Winter Garden, FL</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: "What kind of tile can be used on a fireplace?",
      answer:
        "Most porcelain, ceramic, natural stone, and glass tiles are suitable for fireplace surrounds as they are heat-resistant. We will help you select a tile that is not only beautiful but also rated for the heat your fireplace will generate.",
    },
    {
      question: "How long does it take to tile a fireplace?",
      answer:
        "A typical fireplace tile project takes about 1-3 days to complete. This includes surface preparation, tile installation, and grouting, ensuring a meticulous and professional finish.",
    },
    {
      question: "Do I need to do any prep work before you arrive?",
      answer:
        "We recommend clearing furniture and decorations from the area around the fireplace before we begin. Our team will handle all necessary surface preparation, including cleaning and creating a proper bonding surface for the new tile.",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="text-center text-3xl font-semibold text-slate-900">Your Fireplace Questions Answered</h2>
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
          alt="Beautiful dark wood kitchen with tile backsplash"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready for a Stunning Fireplace?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your fireplace tile project. Professional craftsmanship, competitive pricing, and
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

