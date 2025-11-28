import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "../../_components/ContactForm"
import { absoluteUrl, buildMetadata, createArticleJsonLd } from "../../_lib/seo"

const ARTICLE_PUBLISHED_DATE = "2025-11-27"

export const metadata = buildMetadata({
  title: "A Thanksgiving I Never Saw Coming | Aesthetic Tile Blog",
  description:
    "From three generations of tile craftsmanship to being featured by The Tile Shop—this Thanksgiving, we're reflecting on trust, growth, and what it means to do right by our clients.",
  path: "/blog/thanksgiving-never-saw-coming",
  image: "/images/brad-aesthetic-tile-tile-shop-featured-contractor.jpg",
  type: "article",
})

export default function ThanksgivingNeverSawComingPage() {
  const articleJsonLd = createArticleJsonLd({
    url: absoluteUrl("/blog/thanksgiving-never-saw-coming"),
    headline: "A Thanksgiving I Never Saw Coming",
    description:
      "This Thanksgiving, we're reflecting on the trust our clients have placed in us, the growth we've experienced, and the incredible honor of being featured by The Tile Shop as a partner contractor.",
    image: "/images/brad-aesthetic-tile-tile-shop-featured-contractor.jpg",
    datePublished: ARTICLE_PUBLISHED_DATE,
    authorName: "Brad, Aesthetic Tile",
  })

  return (
    <>
      <div className="pb-24">
        <article className="mx-auto max-w-4xl px-6 pt-24">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              A Thanksgiving I Never Saw Coming
            </h1>
            <div className="text-sm text-slate-600">Published on November 27, 2025 | By Brad</div>
          </header>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-teal-600 hover:prose-a:text-teal-700">
            <p>
              I've spent most of my life on my knees over concrete, plywood, and backer board.
            </p>

            <p>
              That might sound funny to some people, but if you grew up in a tile family, you get it. The job starts
              long before the pretty photos. It's dust, demo, prep, and a hundred little decisions that nobody ever
              sees—but that you feel every time you walk across a floor or step into a shower.
            </p>

            <p>This Thanksgiving, more than any other, I'm feeling that in my chest.</p>

            <p>
              Because when you invite Aesthetic Tile into your home, you're not just hiring "a tile guy" in Central
              Florida. You're trusting me and my family's name with the kitchens, bathrooms, fireplaces, and floors
              where your life actually happens. And that trust has turned this past year into something I never could've
              imagined.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/brad-aesthetic-tile-tile-shop-featured-contractor.jpg"
                alt="Brad from Aesthetic Tile professional photo at The Tile Shop Orlando showroom as featured contractor Central Florida tile expert"
                width={800}
                height={533}
                className="w-full"
              />
              <p className="mt-2 text-center text-sm text-slate-500">
                Honored to be a featured contractor with The Tile Shop—a partnership built on shared values of quality and education.
              </p>
            </div>

            <h2>A Year Built on Trust (and a Lot of Thinset)</h2>

            <p>Looking back on this year, the word that keeps coming up is grateful.</p>

            <p>
              Grateful for the homeowners in Groveland, Clermont, Minneola, Winter Garden, Orlando, and all over
              Central Florida who said, "Brad, we've got a big dream project—can you help us bring it to life?"
            </p>

            <p>
              Grateful for the families who let us tear apart their kitchens and bathrooms because they believed in the
              vision—even when it was just tape lines and sketches on a wall.
            </p>

            <p>
              Grateful for the builders and designers who picked up the phone and said, "We want your level of prep,
              your waterproofing, your attention to detail on this one."
            </p>

            <p>
              And honestly? Grateful for the long days and late nights too. Because that's what it takes to honor three
              generations of craftsmanship—what my grandfather started, what my family kept alive, and{" "}
              <a href="https://aesthetictile-florida.com/about" target="_blank" rel="noopener noreferrer">what we're still building on today</a>.
            </p>

            <h3>This year we:</h3>

            <ul>
              <li>
                <strong>Took on bigger, more ambitious projects</strong>—those "dream bathroom" and{" "}
                <a href="https://aesthetictile-florida.com/fireplaces" target="_blank" rel="noopener noreferrer">"showpiece fireplace"</a>{" "}
                installs that push us creatively and technically.
              </li>
              <li>
                <strong>Invested in real marketing and video content</strong> so we could teach and not just
                install—sharing Tile Tips, Myth Breakers, and behind-the-scenes looks at how pro-level tile work
                actually gets done.
              </li>
              <li>
                <strong>Settled deeper into our Groveland and Clermont home base</strong>, growing with this community
                while still serving the wider Central Florida area.
              </li>
            </ul>

            <p>
              If you've watched one of our videos, read one of our blog posts, or let us tile even a single backsplash
              in your home—<strong>thank you</strong>. You're the reason we get to do what we love at this level.
            </p>

            <p>And speaking of things I never expected…</p>

            <h2>The Big Surprise: A Call from The Tile Shop</h2>

            <p>
              A few months back, we filmed Episode 1 of our Myth Breakers series on location at{" "}
              <a href="https://www.tileshop.com/" target="_blank" rel="noopener noreferrer">The Tile Shop</a> in
              Orlando. Walking those aisles felt like being a kid in a candy store—wall after wall of displays, endless
              combinations of materials, and a team that truly understands tile.
            </p>

            <p>
              I remember thinking at the time, <em>If this is all that comes out of our content push—getting to film here
              and help more homeowners understand tile—it's already a dream come true.</em>
            </p>

            <p>Then the phone rang.</p>

            <p>The Tile Shop reached out and said, essentially:</p>

            <blockquote>
              <p>
                "We've seen what you're doing. We love the way you educate homeowners and break down the real costs, the
                real prep, the real craft behind tile installations. We want to do more together."
              </p>
            </blockquote>

            <p>And here's the part I still can't quite believe:</p>

            <p>
              <strong>They're interviewing me and making me a featured contractor.</strong>
            </p>

            <div className="my-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/thanksgiving-2025-aesthetic-tile-turkey.png"
                alt="Thanksgiving turkey contractor with Aesthetic Tile hardhat and tool belt in beautiful tiled kitchen Central Florida"
                width={800}
                height={533}
                className="w-full"
              />
              <p className="mt-2 text-center text-sm text-slate-500">
                This Thanksgiving, we're celebrating with gratitude for our clients and the work we love.
              </p>
            </div>

            <h3>This means:</h3>

            <ol>
              <li>
                <strong>More in-depth knowledge drops</strong> filmed in their showroom
              </li>
              <li>
                <strong>On-camera segments</strong> where I get to walk homeowners through design choices, prep, and
                installation tips
              </li>
              <li>
                <strong>Social media interviews</strong> that dive into what it really means to do tile the right way
              </li>
              <li>
                <strong>Collaborative content</strong> that helps both DIYers and folks who want to hire a pro make
                smarter decisions
              </li>
            </ol>

            <p>
              For a kid who grew up mixing mud for his grandfather and cleaning buckets before he was tall enough to see
              over the countertop, this is beyond anything I ever dreamed.
            </p>

            <p>
              I never set out to "be on camera." I set out to do excellent work, every time, and to protect people from
              bad installs and shortcuts. The fact that a national name like The Tile Shop wants to help amplify that
              mission—it's humbling and unbelievable in all the best ways.
            </p>

            <h2>What This Really Means to Me</h2>

            <p>On the surface, yes, it's exciting: cameras, lights, and being called a "featured contractor."</p>

            <p>But under all of that, this feels like a full-circle moment.</p>

            <p>
              It feels like validation for every late night spent fixing someone else's failed shower so their home wouldn't get ruined. For every carefully aligned layout, every level line, every re-done section nobody but me would have noticed. For every time I chose the harder, slower, "right" way over the easier, faster, "good enough" way.
            </p>

            <p>
              My grandfather didn't talk about "brands" or "content." He talked about doing right by people and letting
              your work speak for you. The standards and values he instilled in us—honesty, integrity,
              craftsmanship—are the backbone of Aesthetic Tile today.
            </p>

            <p>
              So when a partner like The Tile Shop says, "We see that. We want to highlight that," it feels less like a
              personal win and more like a win for that old-school way of doing things.
            </p>

            <h2>Looking Ahead: Our Thanksgiving Promise</h2>

            <p>As we head into Thanksgiving, here's what I want every client, past and future, to know:</p>

            <p>
              <strong>This year has been incredible.</strong>
            </p>

            <p>
              From wonderful clients with big, beautiful dream projects who trusted us with their homes, to being embraced by The Tile Shop, filming at their Orlando location, and now stepping into this role as a featured contractor and educator, to having the chance to share what we know through our blog, our Myth Breakers series, and all the content we've rolled out—I don't take a single bit of it for granted.
            </p>

            <h3>Our plan from here is simple:</h3>

            <ul>
              <li>
                <strong>Keep growing</strong>—taking on projects that challenge us and elevate the homes we're invited
                into.
              </li>
              <li>
                <strong>Keep educating</strong>—through videos, blog posts, and our partnership with The Tile Shop, so
                homeowners everywhere can make confident decisions.
              </li>
              <li>
                <strong>Keep upholding the incredibly high standards and values</strong> my grandfather instilled in us
                when he first started this business—standards built on respect, honesty, and doing the job right, even
                when nobody's watching.
              </li>
            </ul>

            <p>
              <strong>From my family and the entire Aesthetic Tile team:</strong>
            </p>

            <p>
              <strong>Thank you.</strong>
            </p>

            <p>
              Thank you for every project, every referral, every comment, every "Hey Brad, we've got a crazy idea—can
              you pull it off?" You're the reason this Thanksgiving feels different. Bigger. Deeper. With lots more
              love.
            </p>

            <p>
              <strong>Happy Thanksgiving from Aesthetic Tile.</strong>
            </p>

            <p>— Brad</p>
          </div>

          <div className="mt-16">
            <Link href="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700">
              <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Blog
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

          <ContactForm subject="Aesthetic Tile — Blog Inquiry" className="bg-white/10 backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}

