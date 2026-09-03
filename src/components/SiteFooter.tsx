import { Instagram } from "lucide-react";
import bishaLogoAsset from "@/assets/bisha-logo.png.asset.json";
import mybuilderLogoAsset from "@/assets/mybuilder-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 text-sm md:grid-cols-3 md:px-12 md:py-20">
        <div>
          <img
            src={bishaLogoAsset.url}
            alt="Bisha Contractors logo"
            width={64}
            height={64}
            className="h-16 w-16 rounded-sm object-cover"
          />
          <p className="mt-4 font-display text-xl">Bisha Contractors Ltd</p>
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
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/bishacontractors/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center text-foreground transition-opacity hover:opacity-60"
            >
              <Instagram className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </a>
            <a
              href="https://www.instagram.com/bishacontractors/"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              @bishacontractors
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
