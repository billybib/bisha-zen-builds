import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-extension.jpg";
import craftImage from "@/assets/craft-detail.jpg";
import kitchenBathroomAsset from "@/assets/kitchen-bathroom.jpg.asset.json";
import kb125548 from "@/assets/kb-125548.jpg.asset.json";
import kb125600 from "@/assets/kb-125600.jpg.asset.json";
import kb125658 from "@/assets/kb-125658.jpg.asset.json";
import kb125742 from "@/assets/kb-125742.jpg.asset.json";
import kb125821 from "@/assets/kb-125821.jpg.asset.json";
import kb125915 from "@/assets/kb-125915.jpg.asset.json";
import kb135809 from "@/assets/kb-135809.jpg.asset.json";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Bisha Contractors — Building Better Homes Across London";
const description =
  "Extensions, renovations and construction projects across London, delivered with care from first conversation to final finish. Established 2010.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const projects = [
  { type: "Rear extension · Full renovation", note: "Project details to follow", images: [] },
  { type: "Loft conversion", note: "Project details to follow", images: [] },
  {
    type: "Kitchen & bathroom renovations",
    note: "Project details to follow",
    images: [
      { url: kitchenBathroomAsset.url, alt: "Bright white kitchen opening into a glazed garden room" },
      { url: kb125915.url, alt: "Kitchen and glazed garden room, seen from the dining end" },
      { url: kb125821.url, alt: "Grey shaker kitchen with tiled splashback and integrated cooker" },
      { url: kb135809.url, alt: "Large black kitchen with central island, mid-installation" },
      { url: kb125658.url, alt: "Compact bathroom with grey tiling, glass shower and dark vanity" },
      { url: kb125600.url, alt: "Bathroom with freestanding bath and curved glass shower enclosure" },
      { url: kb125548.url, alt: "Bathroom with textured grey tiling, bath and shower enclosure" },
      { url: kb125742.url, alt: "Bathroom with freestanding bath, wood-effect cladding and pebble floor" },
    ],
  },
  { type: "Whole-house renovation", note: "Project details to follow", images: [] },
];

const services = [
  {
    name: "Extensions",
    copy: "Rear, side and wrap-around extensions that add proper, usable space to a home — planned and built to last.",
  },
  {
    name: "Renovations",
    copy: "Full and partial refurbishments, from structural work through to the final coat of paint.",
  },
  {
    name: "Loft conversions",
    copy: "Turning unused roof space into a bedroom, bathroom or study, with the daylight and headroom it needs.",
  },
  {
    name: "Kitchens & bathrooms",
    copy: "The rooms used most every day, fitted carefully and finished to a standard that holds up.",
  },
  {
    name: "General construction",
    copy: "Brickwork, groundwork, structural alterations and the trades that sit behind every good build.",
  },
];

const reasons = [
  { title: "Quality workmanship", copy: "Work done properly the first time, by trades we know." },
  { title: "Experience", copy: "Building across London homes since 2010." },
  { title: "Communication", copy: "You always know what is happening this week, and who to call." },
  { title: "Reliability", copy: "We turn up, we keep to the programme, we finish." },
  { title: "Attention to detail", copy: "The last five per cent is where a build is judged." },
];

function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative min-h-[92svh] w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Completed rear extension to a London home, lit at dusk"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="relative mx-auto flex min-h-[92svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-40 md:px-12 md:pb-24">
            <h1 className="max-w-3xl text-[2.75rem] leading-[1.03] text-background sm:text-6xl md:text-7xl">
              Building Better Homes Across North London.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 md:text-lg">
              Extensions, renovations and construction projects, delivered with care from first
              conversation to final finish.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-background px-8 py-4 text-sm tracking-wide text-foreground transition-colors hover:bg-sand"
              >
                Start your project
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center border border-background/50 px-8 py-4 text-sm tracking-wide text-background transition-colors hover:border-background"
              >
                View our work
              </a>
            </div>
            <p className="mt-8 text-xs tracking-[0.2em] text-background/60">
              Family-run in Palmers Green · Building across London since 2010
            </p>
          </div>
        </section>

        {/* Selected projects */}
        <section id="work" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl md:text-5xl">Selected projects</h2>
            <p className="eyebrow">London · Est. 2010</p>
          </div>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
            {projects.map((p, i) => (
              <article key={p.type} className="group">
                <ProjectCarousel
                  images={p.images}
                  placeholderLabel={`Project photographs ${String(i + 1).padStart(2, "0")} — to be supplied`}
                />
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <h3 className="text-xl md:text-2xl">{p.type}</h3>
                  <span className="text-xs text-muted-foreground">{p.note}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* What we do */}
        <section id="services" className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
            <h2 className="max-w-xl text-3xl md:text-5xl">What we do</h2>
            <div className="mt-14 grid gap-px md:mt-20 md:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="border-t border-border py-8 pr-0 md:py-10 md:pr-16 md:last:border-b-0"
                >
                  <h3 className="text-2xl">{s.name}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Bisha */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
            <img
              src={craftImage}
              alt="Plastering a wall in a London home renovation"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div>
              <h2 className="text-3xl md:text-5xl">Why Bisha</h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                A small, hands-on team. The person who quotes your project is the person you speak
                to while it is being built.
              </p>
              <dl className="mt-12 space-y-8">
                {reasons.map((r) => (
                  <div key={r.title} className="border-t border-border pt-5">
                    <dt className="text-lg">{r.title}</dt>
                    <dd className="mt-1 text-muted-foreground">{r.copy}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
            <p className="eyebrow">In our clients' words</p>
            <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-3">
              <figure className="flex flex-col border-t border-border pt-6">
                <blockquote className="flex-1 text-lg leading-relaxed">
                  <p>
                    Ledion was fantastic, I would highly recommend Bisha Construction. It was
                    everything you would want from a positive experience with a builder. He took
                    down a damaged ceiling, reinstalled plaster boards, made repairs and replastered
                    the room — everything done efficiently and thoroughly, no corners cut. The
                    initial quote was reasonable and accurate, the team were on time, polite and
                    very respectful of the house.
                  </p>
                </blockquote>
                <figcaption <strong className="font-semibold text-foreground">Chris</strong> — Ceiling & Plastering>
                  Chris — Ceiling & Plastering
                </figcaption>
              </figure>

              <figure className="flex flex-col border-t border-border pt-6">
                <blockquote className="flex-1 text-lg leading-relaxed">
                  <p>
                    Found Ledion on MyBuilder, and the moment I met him I could instantly tell he
                    was very experienced. He and the team did a fantastic job removing my two
                    chimneys, full electrics, painting and some carpentry — I cannot stress how fast
                    and efficient it was, and to such top quality. You can trust him with the keys.
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm tracking-wide text-muted-foreground">
                  Anmol — Restoration & Refurbishment
                </figcaption>
              </figure>

              <figure className="flex flex-col border-t border-border pt-6">
                <blockquote className="flex-1 text-lg leading-relaxed">
                  <p>
                    I would recommend this company. They were punctual and hard working. The repairs
                    to the render around my windows looks great, and they did a good clean up too. A
                    really professional job, carried out efficiently, to a high standard, and such
                    friendly, polite guys.
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm tracking-wide text-muted-foreground">
                  Linda — Render Repairs
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-24">
              <h2 className="text-3xl md:text-5xl">About Bisha</h2>
              <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
                <p>
                  Bisha Contractors has been building and renovating homes across North London since
                  2010. What started as a small painting and decorating outfit has grown into a
                  full-service team covering new builds, loft conversions, rendering, roofing and
                  full refurbishments — without losing the close, hands-on way we work with every
                  client.
                </p>
                <p className="text-muted-foreground">
                  We're based in Palmers Green, and most of our work still comes from word of mouth.
                  We'd like to keep it that way.
                </p>
                <p className="pt-2 font-display text-2xl italic text-foreground">
                  L Bisha
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-ink">
          <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
            <h2 className="max-w-2xl text-4xl leading-[1.05] text-background md:text-6xl">
              Planning your next project?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/70 md:text-lg">
              Tell us what you're thinking about and let's see how we can help.
            </p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="mailto:bishacontractorsltd@gmail.com"
                className="inline-flex items-center justify-center bg-background px-8 py-4 text-sm tracking-wide text-foreground transition-colors hover:bg-sand"
              >
                Discuss your project
              </a>
              <a
                href="tel:07879900262"
                className="inline-flex items-center justify-center border border-background/40 px-8 py-4 text-sm tracking-wide text-background transition-colors hover:border-background"
              >
                Call 07879 900262
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
