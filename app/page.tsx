import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "./_components/CheckIcon"
import { ContactForm } from "./_components/ContactForm"
import { TestimonialsCarousel } from "./_components/TestimonialsCarousel"
import { serviceNav } from "./_components/navigation"
import { absoluteUrl, buildMetadata, createFaqJsonLd } from "./_lib/seo"

const HERO_FEATURES = [
  "Five-star service",
  "Detailed prep & clean finishes",
  "Clear communication",
]

const TESTIMONIALS = [
  {
    quote: "Absolutely great work by Brad. The attention to detail was amazing. Can't wait to have him come back and do our back splashes.",
    author: "Alexis Lasalmonie",
  },
  {
    quote: "This is an excellent tile company! Very knowledgeable and professional. Great people to work in your home.",
    author: "Colleen Underhill",
  },
  {
    quote: "Aesthetic Tile did my kitchen and laundry room floors and they are beautiful. I couldn't be any happier. Great work, communication and so professional. Thank you Brad and Aesthetic Tile.",
    author: "Holly Newman",
  },
  {
    quote: "We worked with Aesthetic Tile while transforming a bathroom that was out of date and no longer functioning into something that was a piece of art! Aesthetic Tile was careful in their install and were quick to come back to site for any touchups or adjustments that were needed. They definitely stand behind their work!",
    author: "Ben Fabish",
    title: "Owner, Project Manager - Authentic Carpentry",
  },
  {
    quote: "We hired Brad from Aesthetic Tile LLC to do the backsplash in our kitchen. We moved into this house EIGHT years ago and have been looking for the right tiles and contractor before committing - and was he ever worth the wait! Our backsplash looks incredible. His communication, professionalism and commitment to his work is incomparable and absolutely top notch. His work is absolutely the best we have ever seen, and the true icing on the cake is his hard work and communication. Trust us, we looked at tons of contractors before committing to Aesthetic Tile - we are happy to save others the search and share this incredible gem. Don't hesitate to book Aesthetic Tile LCC for any tile work!",
    author: "Rebecca Yorinks",
  },
  {
    quote: "Brad and his team do incredible tile work. I have been working with Brad now for some time as a general contractor. As someone who is always looking for high level professionals that are not only professional business men but experts in their field I am constantly evaluating subs to determine if they fit that criteria. Brad and his team are professionals. They work diligently to install tile to the highest standards and to insure a level of expertise that so many others not only fail to do but in truth should never be doing in the first place. If you're looking for a tile company to work with Aesthetic tile is the team to hire.",
    author: "Joel Stickler",
    title: "Stickler Construction LLC",
  },
  {
    quote: "I hired this company to install a ton of tile in two bathrooms. They showed up on time every day and got the job done. They cleaned up after themselves. They were professional and they built everything to my needs. The end result is beautiful. I get compliments on my bathrooms frequently.",
    author: "Tommy G",
  },
]

export const SERVICE_CARDS = [
  ...serviceNav.map((service) => {
    const imageMap: Record<string, string> = {
      "/kitchen-backsplashes": "/images/img/kitchen-backsplash.png",
      "/bathroom-shower": "/images/img/bathroom-shower.png",
      "/floor-tile-installation": "/images/img/floor-tile.png",
      "/fireplaces": "/images/img/fireplace.png",
      "/outside-projects": "/images/services/outside-projects.webp",
      "/special-projects": "/images/img/special-projects.png",
    }

    const ctaMap: Record<string, string> = {
      "/kitchen-backsplashes": "View Kitchen Backsplash Options",
      "/bathroom-shower": "Explore Bathroom Tile Solutions",
      "/floor-tile-installation": "See Flooring Installation Services",
      "/fireplaces": "See Custom Fireplace Tile Surrounds",
      "/outside-projects": "Explore Outdoor Tile Options",
      "/special-projects": "Discover Special Tile Projects in Central Florida",
    }

    return {
      ...service,
      image: imageMap[service.href] ?? "/images/img/kitchen-backsplash.png",
      cta: ctaMap[service.href] ?? "Learn more",
    }
  }),
]

export const CTA_FEATURES = [
  "Free Estimates",
  "Licensed & Insured",
  "Quality Guarantee",
]

const HOME_FAQS = [
  {
    question: "What areas do you mainly serve?",
    answer: "Our team serves Clermont, Groveland, Minneola, Winter Garden, Orlando and nearby communities.",
  },
  {
    question: "What makes your tile installs last in Florida's climate?",
    answer: "We prioritize prep and waterproofing, then set tile with pro‑grade materials for durability in heat and humidity.",
  },
  {
    question: "How soon can you start my project?",
    answer: "After your estimate, we provide a realistic start date and timeline based on scope and materials. We aim to do the job right the first time and pride ourselves on quality work.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes; we carry the licensing and insurance homeowners expect for professional tile work.",
  },
  {
    question: "Can you give a virtual ballpark from photos and rough dimensions before a site visit?",
    answer: "Yes—send us photos and approximate measurements via our contact form or email, and we can provide a rough estimate range before scheduling an in-person visit.",
  },
  {
    question: "How long will my tile installation take?",
    answer: "The timeline depends on size and complexity. A standard kitchen backsplash might take 1-2 days, while a full bathroom or large outdoor patio could take several days.",
  },
]

export const metadata = buildMetadata({
  title: "Aesthetic Tile | Custom Tile Installers in Groveland & Clermont, FL",
  description:
    "Owner-led tile installers serving Groveland, Clermont, Minneola, and Central Florida. Bathrooms, backsplashes, flooring, and outdoor tile with meticulous prep and clean finishes.",
  path: "/",
  image: "/images/img/hero-backsplash.png",
})

export default function Home() {
  return (
    <div className="space-y-12 pb-16">
      <HeroSection />
      <VideoSection />
      <ExpertiseSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FaqSection />
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

        <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-8 px-6 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/50 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur shadow-lg shadow-teal-400/20">
          <span>Aesthetic Tile</span>
          <span className="text-white/60">•</span>
          <span>Claremont & nearby</span>
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

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/50 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur shadow-lg shadow-teal-400/20">
              {HERO_FEATURES.map((feature, index) => (
                <span key={feature} className="flex items-center gap-2">
                  {feature}
                  {index < HERO_FEATURES.length - 1 && <span className="text-white/50">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-8 py-3">
        <div className="mx-auto max-w-6xl px-6 text-center text-lg font-semibold text-white md:text-xl">
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
          <p className="mt-3 text-lg font-semibold text-slate-700">Watch our expert tile installation process and attention to detail.</p>
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
            We Are the Premier Tile Installation Company in Central Florida
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
          <Link
            key={service.href}
            href={service.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="relative h-full w-full transition duration-300 group-hover:scale-105">
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
                {service.label}
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-4 text-sm font-medium text-teal-600">
              <span className="inline-flex items-center gap-2">
                <span>{service.cta}</span>
                <svg className="size-4" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="animate-quote-pulse relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-400/70 bg-gradient-to-b from-white/95 via-white/85 to-white/65 px-10 py-4 text-lg font-semibold text-teal-600 shadow-xl shadow-teal-400/30 backdrop-blur-sm transition-transform duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-60 hover:scale-110 hover:border-teal-300"
        >
          <span className="relative z-10">Request a Quote</span>
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
        <div className="mt-10">
          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://share.google/kvqCGEBq4yFBZwTgz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-teal-600 transition hover:text-teal-700"
          >
            Read More Reviews on Google
            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
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

function FaqSection() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/"),
    name: "Aesthetic Tile Home Page FAQs",
    faqs: HOME_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {HOME_FAQS.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white bg-white p-6 shadow-md shadow-slate-900/5">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
    </>
  )
}

