import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "../../_components/ContactForm"
import { absoluteUrl, buildMetadata, createArticleJsonLd } from "../../_lib/seo"

const ARTICLE_PUBLISHED_DATE = "2025-12-04"

export const metadata = buildMetadata({
  title: "Featured Contractor for The Tile Shop | Aesthetic Tile Clermont FL",
  description:
    "Brad Fleitz of Aesthetic Tile shares his experience being named a Featured Contractor by The Tile Shop. Expert tile installation in Clermont, Groveland, Winter Garden & Central Florida.",
  path: "/blog/featured-contractor-for-the-tile-shop",
  image: "/images/tile-shop-feature-hero.webp",
  type: "article",
})

export default function FeaturedContractorForTheTileShopPage() {
  const articleJsonLd = createArticleJsonLd({
    url: absoluteUrl("/blog/featured-contractor-for-the-tile-shop"),
    headline: "Aesthetic Tile Named Featured Contractor by The Tile Shop - Clermont FL Tile Installer",
    description:
      "Brad Fleitz of Aesthetic Tile shares his experience being interviewed and named a Featured Contractor by The Tile Shop. Professional tile installation serving Clermont, Groveland, Winter Garden, Minneola, and Central Florida.",
    image: "/images/tile-shop-feature-hero.webp",
    datePublished: ARTICLE_PUBLISHED_DATE,
    authorName: "Brad Fleitz, Aesthetic Tile",
  })

  return (
    <>
      <div className="pb-24">
        <article className="mx-auto max-w-4xl px-6 pt-24">
          <header className="space-y-4">
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                From Job Site to Spotlight
              </h1>
              <h2 className="mt-2 text-2xl font-semibold text-slate-700 sm:text-3xl">
                My Incredible Interview with The Tile Shop
              </h2>
            </div>
            <div className="text-sm text-slate-600">Published on December 4, 2025 | By Brad Fleitz</div>
          </header>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-teal-600 hover:prose-a:text-teal-700">
            <p className="text-base font-semibold uppercase tracking-wide text-teal-600">
              Behind the Scenes: Lights, Camera, Tile!
            </p>

            <div className="my-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/tile-shop-feature-hero.webp"
                alt="Brad Fleitz Aesthetic Tile Featured Contractor interview with The Tile Shop Orlando Florida professional tile installer Clermont Groveland"
                width={800}
                height={533}
                className="w-full"
                priority
              />
              <p className="mt-2 text-center text-sm text-slate-500">
                The Tile Shop called. I answered with thinset on my hands and disbelief in my voice. It was real.
              </p>
            </div>

            <p>
              "Is this real? Are you sure you have the right number?" That was literally my first line when the
              marketing team from The Tile Shop rang me up. I am used to wet saws, thinset, and laser levels—not makeup
              chairs and lighting angles. Yet here we are: a national brand flew down to interview a local tile guy from
              Central Florida as a Featured Contractor.
            </p>

            <p>
              Looking back after wrapping the shoot, I am filled with gratitude. This wasn&apos;t about fifteen minutes
              of fame; it was about the dust, the prep, the obsession with detail that defines everything we do at
              Aesthetic Tile.
            </p>

            <h2>Never in a Million Years</h2>
            <p>
              We started Aesthetic Tile with a simple mission: bring old-world craftsmanship to Central Florida. We
              obsess over substrate prep. We measure three times before a single cut. On every backsplash, floor,
              shower, or fireplace, we imagine the family living with it daily—and that keeps our standards high.
            </p>

            <p>
              To see that dedication recognized on a national stage is validation we never expected but deeply
              appreciate. It proves that quality speaks for itself.
            </p>

            <h2>A Moment of Validation</h2>
            <p>
              Standing under lights, answering questions about technique and materials, I realized this wasn&apos;t just
              about me. It was validation for every late night estimating, every extra mile for clients, every time we
              insisted on doing things the right way when the easy way was faster.
            </p>

            <div className="mb-6 md:float-right md:ml-8 md:w-[280px]">
              <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                <video
                  controls
                  poster="/images/tile-shop-feature-hero.webp"
                  className="h-full w-full object-cover"
                  aria-label="Brad Fleitz Aesthetic Tile Featured Contractor video interview with The Tile Shop discussing professional tile installation techniques in Central Florida"
                >
                  <source src="/videos/tile-shop-feature.mov" type="video/quicktime" />
                  <source src="/videos/tile-shop-feature.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-2 text-center text-sm text-slate-500">
                Filming with The Tile Shop: walking through real prep, layout, and finish details Central Florida
                homeowners ask about.
              </p>
            </div>

            <p>
              The crew wanted the "nerdy" details: waterproofing systems (yes, Schluter-KERDI), how we handle humidity
              during cure times, and how we lay out non-square rooms. We talked lippage control on large-format
              porcelain, why 95% coverage matters, and why substrate prep is the difference between five-year installs
              and fifty-year installs.
            </p>

            <h2>The Technical Details: What Caught Their Eye</h2>
            <p>
              Off camera, they told me they look for installers who treat the trade like an art form. Not the "slap up a
              backsplash in two hours" type—the craftsmen who understand the science behind every install.
            </p>

            <p>
              Being featured proved that the meticulous stuff we obsess over—coverage, prep, layout, movement joints—is
              exactly what makes finished spaces look effortless.
            </p>

            <h2>My Family&apos;s Pride Means Everything</h2>
            <p>
              The best part wasn&apos;t the cameras. It was showing my family the behind-the-scenes photos. My wife
              knows all about time away from the kids, the weekend estimates, and the constant pressure of running a
              small business. My parents have been calling everyone to say, "Our son is going to be on The Tile
              Shop&apos;s Instagram!"
            </p>

            <p>
              Success isn&apos;t just the profit margin; it&apos;s making the people you love proud and building a
              legacy of quality.
            </p>

            {/* Kitchen Backsplash Callout */}
            <Link
              href="/kitchen-backsplashes"
              className="not-prose group my-6 block overflow-hidden rounded-2xl border-2 border-teal-500/30 bg-gradient-to-r from-teal-50 to-white p-5 shadow-lg shadow-teal-500/10 transition-all duration-300 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/20 md:float-left md:mr-6 md:w-[320px] animate-pulse-subtle"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/40 transition-transform duration-300 group-hover:scale-110">
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 3v18" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-slate-900">Dreaming of a new kitchen backsplash?</p>
                  <p className="text-sm text-slate-600">See how we bring Central Florida kitchens to life →</p>
                </div>
              </div>
            </Link>

            <h2>Why Being a Clermont Tile Installer Matters</h2>
            <p>
              They asked, "Why do you love working here?" Easy. We live here. We shop on Highway 50, grab coffee
              downtown, our kids go to school here. When we work in Minneola, Groveland, or Clermont, we are working for
              neighbors, and we are proud to be invited into their homes and to be trusted with their dream projects.
            </p>

            <h2>The Aesthetic Tile Difference</h2>
            <ul>
              <li>
                <strong>Consultation &amp; Design:</strong> We help you navigate overwhelming choices and match materials
                to your space.
              </li>
              <li>
                <strong>Preparation:</strong> We spend more time prepping than most crews spend installing—because
                longevity lives in the prep.
              </li>
              <li>
                <strong>Execution:</strong> Best-in-class thinset, grout, layout, and leveling—no shortcuts.
              </li>
              <li>
                <strong>Cleanliness:</strong> Dust control and respect for your home are built into the process.
              </li>
            </ul>

            {/* Bathroom & Shower Callout */}
            <div className="not-prose my-10 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-50 shadow-lg ring-1 ring-slate-200">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-600">Featured Service</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">Bathroom &amp; Shower Tile</p>
                  <p className="mt-2 text-sm text-slate-600">
                    From spa-worthy showers to complete bathroom transformations—waterproofed right and built to last.
                  </p>
                  <Link
                    href="/bathroom-shower"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                  >
                    Explore Bathrooms
                    <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-40 sm:h-auto sm:w-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 opacity-20" />
                  <div className="flex h-full items-center justify-center">
                    <svg className="size-20 text-teal-600/30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 10H7V7a5 5 0 0 1 10 0h2a7 7 0 0 0-14 0v3H3a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4h1v3h2v-3h6v3h2v-3h1a4 4 0 0 0 4-4v-2a1 1 0 0 0-1-1z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <h2>Looking Ahead: Recharged and Ready</h2>
            <p>
              This experience recharged me. It reminded me that we are creating art people live in. Every project we
              take on—whether it&apos;s a simple backsplash or a complete bathroom transformation—deserves that same
              level of care and attention. I&apos;m more motivated than ever to keep pushing our craft forward, to keep
              learning, and to keep delivering work that makes homeowners smile every time they walk into their space.
            </p>

            <h2>Thank You</h2>
            <p>
              Thank you to The Tile Shop for this honor, and to every client in Clermont, Groveland, Winter Garden, and
              beyond who trusts us with their homes. You let us do what we love every day.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/tile-shop-feature-secondary.webp"
                alt="Aesthetic Tile Brad Fleitz behind the scenes at The Tile Shop Orlando showroom Central Florida tile contractor Clermont Groveland Winter Garden"
                width={800}
                height={533}
                className="w-full"
              />
              <p className="mt-2 text-center text-sm text-slate-500">
                From the showroom to your home—pairing The Tile Shop materials with Aesthetic Tile craftsmanship.
              </p>
            </div>

            <p>
              Stay tuned on Facebook, Instagram, and YouTube—and on The Tile Shop&apos;s channels—to see the final
              video. We are excited to share it with you.
            </p>

            <p>
              <em>
                Are you looking for a Clermont tile installer who brings national-level recognition and old-world
                craftsmanship to your project? Whether it&apos;s a kitchen backsplash, bathroom remodel, or new flooring,
                Aesthetic Tile is here to help. <Link href="/contact">Contact us for a quote.</Link>
              </em>
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/blog/myth-breakers-episode-1" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700">
              <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
              Myth Breakers Ep. 1
            </Link>
            <Link href="/blog/groveland-location-announcement" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700">
              We&apos;re Coming to Groveland
              <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </article>

        <section className="mt-24">
          <CallToActionSection />
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
    </>
  )
}

function CallToActionSection() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Start Your Project?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your tile installation. Professional craftsmanship, competitive pricing, and
              exceptional service guaranteed.
            </p>
          </div>

          <ContactForm subject="Aesthetic Tile - Blog Inquiry" className="bg-white/10 backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}
