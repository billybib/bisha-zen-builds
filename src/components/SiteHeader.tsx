import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link to="/" className="flex items-center gap-3 leading-none">
          <img
            src="/bisha-logo.png"
            alt="Bisha Contractors"
            className="h-10 w-auto md:h-14"
          />
          <span className="hidden sm:block">
            <span className="block font-display text-xl tracking-[0.02em] text-background md:text-2xl">
              Bisha
            </span>
            <span className="block text-[10px] uppercase tracking-[0.34em] text-background/70">
              Contractors
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-background/85 md:gap-10">
          <a href="#work" className="hidden transition-opacity hover:opacity-60 sm:inline">
            Work
          </a>
          <a href="#services" className="hidden transition-opacity hover:opacity-60 sm:inline">
            What we do
          </a>
          <a
            href="tel:07879900262"
            className="border-b border-background/40 pb-0.5 transition-colors hover:border-background"
          >
            07879 900262
          </a>
        </nav>
      </div>
    </header>
  );
}
