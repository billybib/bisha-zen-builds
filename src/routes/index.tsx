import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-extension.jpg";
import craftImage from "@/assets/craft-detail.jpg";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
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
  { type: "Rear extension · Full renovation", note: "Project details to follow" },
  { type: "Loft conversion", note: "Project details to follow" },
  { type: "Kitchen & bathroom refurbishment", note: "Project details to follow" },
  { type: "Whole-house renovation", note: "Project details to follow" },
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
                <PhotoPlaceholder
                  label={`Project photograph ${String(i + 1).padStart(2, "0")} — to be supplied`}
                  className="aspect-4/3 w-full"
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
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <PhotoPlaceholder
                label="Customer testimonial — real quote and client name to be added"
                className="min-h-52 p-8"
              />
              <PhotoPlaceholder
                label="Customer testimonial — real quote and client name to be added"
                className="min-h-52 p-8"
              />
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
                  Bisha Contractors is a London construction company, run by Ledion Bisha and
                  working on homes here since 2010. We are based in Palmers Green and most of our
                  work comes from streets nearby and from clients who pass our name on.
                </p>
                <p className="text-muted-foreground">
                  We take on a small number of projects at a time so each one gets the attention it
                  needs — a clear plan, a tidy site, and a finish we are happy to put our name to.
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
