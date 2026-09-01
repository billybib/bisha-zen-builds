export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 text-sm md:grid-cols-3 md:px-12 md:py-20">
        <div>
          <p className="font-display text-xl">Bisha Contractors Ltd</p>
          <p className="mt-2 text-muted-foreground">
            Director: Ledion Bisha · Established 2010
          </p>
        </div>
        <address className="not-italic text-muted-foreground">
          Hale House, Unit 5, 296A Green Lanes
          <br />
          Palmers Green, London N13 5TP
        </address>
        <div className="flex flex-col gap-2">
          <a href="tel:07879900262" className="transition-opacity hover:opacity-60">
            07879 900262
          </a>
          <a
            href="mailto:bishacontractorsltd@gmail.com"
            className="break-all transition-opacity hover:opacity-60"
          >
            bishacontractorsltd@gmail.com
          </a>
          <a
            href="https://instagram.com/bishacontractors"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            @bishacontractors
          </a>
        </div>
      </div>
    </footer>
  );
}
