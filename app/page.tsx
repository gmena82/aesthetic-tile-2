import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "./_components/CheckIcon"
import { ContactForm } from "./_components/ContactForm"
import { serviceNav } from "./_components/navigation"

const HERO_FEATURES = [
  "Five-star service",
  "Detailed prep & clean finishes",
  "Clear communication",
]

const TESTIMONIALS = [
  {
    quote: "Aesthetic Tile transformed our kitchen. The precision was incredible.",
    author: "Jane D., Winter Garden, FL",
  },
  {
    quote: "Flawless shower work and immaculate floors. True professionals.",
    author: "Mike T., Clermont, FL",
  },
  {
    quote: "On time, communicative, and the craftsmanship shows.",
    author: "Sarah K., Groveland, FL",
  },
]

export const SERVICE_CARDS = serviceNav.map((service) => {
  const imageMap: Record<string, string> = {
    "/kitchen-backsplashes": "/images/img/kitchen-backsplash.png",
    "/bathroom-shower": "/images/img/bathroom-shower.png",
    "/floor-tile-installation": "/images/img/floor-tile.png",
    "/fireplaces": "/images/img/fireplace.png",
    "/special-projects": "/images/img/special-projects.png",
  }

  const ctaMap: Record<string, string> = {
    "/kitchen-backsplashes": "View Kitchen Backsplash Options",
    "/bathroom-shower": "Explore Bathroom Tile Solutions",
    "/floor-tile-installation": "See Flooring Installation Services",
    "/fireplaces": "See Custom Fireplace Tile Surrounds",
    "/special-projects": "Discover Special Tile Projects in Central Florida",
  }

  return {
    ...service,
    image: imageMap[service.href] ?? "/images/img/kitchen-backsplash.png",
    cta: ctaMap[service.href] ?? "Learn more",
  }
})

export const CTA_FEATURES = [
  "Free Estimates",
  "Licensed & Insured",
  "Quality Guarantee",
]

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <VideoSection />
      <ExpertiseSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img/hero-backsplash.png"
          alt="Completed custom kitchen backsplash tile installation in Groveland FL by Aesthetic Tile"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-32 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          <span>Aesthetic Tile</span>
          <span className="text-white/60">•</span>
          <span>Groveland & nearby</span>
        </div>

        <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Professional Tile Installation in Groveland and Central Florida
          </h1>
          <p className="text-lg leading-7 text-white/90">
            Serving homeowners across Central Florida, including Groveland, Clermont, Minneola, Winter Garden, and the greater Orlando
            area. As a local <strong className="font-semibold">tile contractor</strong> and <strong className="font-semibold">tile setter</strong>, we deliver expert
            <strong className="font-semibold"> bathroom remodeling</strong> and <strong className="font-semibold">flooring installation</strong> using premium
            <strong className="font-semibold"> ceramic</strong>, <strong className="font-semibold">porcelain</strong>, and <strong className="font-semibold">natural stone</strong>.
          </p>
          <p className="text-lg leading-7 text-white/80">
            Detail-driven craftsmanship for kitchens, bathrooms, and whole-home flooring. Our team keeps job sites clean and delivers finishes that last, from robust waterproofing against humidity to durable flooring options tailored for Florida living.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
            >
              Request a Quote
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              View Gallery
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/80">
            {HERO_FEATURES.map((feature, index) => (
              <span key={feature} className="flex items-center gap-2">
                {feature}
                {index < HERO_FEATURES.length - 1 && <span className="text-white/50">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-white/10 py-4">
        <div className="mx-auto max-w-6xl px-6 text-sm font-semibold text-white/90 md:text-base">
          Serving Groveland, Clermont, Minneola, Winter Garden, Orlando & nearby communities
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">See Our Craftsmanship in Action</h2>
          <p className="mt-3 text-base text-slate-600">Watch our expert tile installation process and attention to detail.</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/ac9uGE7bIVg"
              title="Aesthetic Tile Installation Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6">
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/Tile-Collage.webp"
            alt="Tile flooring installation details in Groveland FL by Aesthetic Tile"
            width={720}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Award-winning master craftsmen
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">
            We are the premier tile installation company in Central Florida.
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Aesthetic Tile specializes in professional tile installation for residential and commercial projects. With over three
            generations of experience, we lead the Groveland area in craftsmanship and precision. From kitchen backsplashes to bathroom
            renovations, we set the standard in skill, preparation, and finishes that last.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-teal-500 px-5 py-2 text-sm font-semibold text-teal-600 transition hover:bg-teal-50"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Our Tile Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
          Backsplashes, showers, flooring, fireplaces, and specialty installations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICE_CARDS.map((service) => (
          <article
            key={service.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64">
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
                {service.label}
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-4 text-sm font-medium text-teal-600">
              <Link href={service.href} className="inline-flex items-center gap-2">
                <span>{service.cta}</span>
                <svg className="size-4" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-slate-900">What Homeowners Are Saying</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.quote}
              className="flex h-full flex-col rounded-3xl border border-white bg-white p-6 shadow-lg shadow-slate-900/5"
            >
              <div className="text-lg" aria-label="5 out of 5 stars">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="mt-4 grow text-base text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-slate-500">— {testimonial.author}</p>
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
          alt="Luxury kitchen tile backsplash installation in Clermont FL by Aesthetic Tile"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Transform Your Space?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing, and exceptional service guaranteed.
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

