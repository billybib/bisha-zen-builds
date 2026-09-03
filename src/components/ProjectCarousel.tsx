import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

export type CarouselImage = { url: string; alt: string };

export function ProjectCarousel({
  images,
  placeholderLabel,
}: {
  images: CarouselImage[];
  placeholderLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(Math.max(0, Math.min(images.length - 1, i)));
  }, [images.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const next = Math.max(0, Math.min(images.length - 1, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setIndex(next);
  };

  if (images.length === 0) {
    return <PhotoPlaceholder label={placeholderLabel} className="aspect-4/3 w-full" />;
  }

  const multiple = images.length > 1;

  return (
    <div className="group/carousel relative">
      <div
        ref={trackRef}
        className="flex aspect-4/3 w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <img
            key={img.url}
            src={img.url}
            alt={img.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className="h-full w-full flex-none snap-center object-cover"
          />
        ))}
      </div>

      {multiple && (
        <>
          <button
            type="button"
            aria-label="Previous photograph"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center bg-background/85 p-2 text-foreground opacity-0 transition-opacity hover:bg-background disabled:pointer-events-none disabled:opacity-0 group-hover/carousel:opacity-100 md:flex"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next photograph"
            onClick={() => goTo(index + 1)}
            disabled={index === images.length - 1}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center bg-background/85 p-2 text-foreground opacity-0 transition-opacity hover:bg-background disabled:pointer-events-none disabled:opacity-0 group-hover/carousel:opacity-100 md:flex"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.url}
                type="button"
                aria-label={`Go to photograph ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-background" : "w-1.5 bg-background/55"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
