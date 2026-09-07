import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Expand, X } from "lucide-react";
import type { Product } from "@/lib/site";

export type FeatureItem = {
  icon: ComponentType<{ className?: string }>;
  label: string;
};

/**
 * Premium infinite sliding feature ticker.
 * Renders the list twice internally for a seamless -50% loop (second copy is aria-hidden).
 */
export function FeatureMarquee({ items }: { items: readonly FeatureItem[] }) {
  const renderList = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={`${hidden ? "b" : "a"}-${item.label}`} className="flex items-center">
          <span className="flex items-center gap-2.5 px-7 sm:px-10">
            <item.icon className="size-4 shrink-0 text-accent" />
            <span className="whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.22em] sm:text-xs">
              {item.label}
            </span>
          </span>
          <span className="text-xs text-accent" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" role="marquee" aria-label={items.map((i) => i.label).join(", ")}>
      <div className="marquee-track items-center py-5 sm:py-6">
        {renderList(false)}
        {renderList(true)}
      </div>
    </div>
  );
}

/** Scroll-triggered entrance wrapper. SSR/no-JS safe: hidden class applies only after mount. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  from = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenClass =
    from === "left" ? "reveal-left" : from === "right" ? "reveal-right" : "reveal";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className}${mounted ? (visible ? ` ${hiddenClass} reveal-visible` : ` ${hiddenClass}`) : ""}`}
    >
      {children}
    </div>
  );
}

/** Section heading with thin premium top accent line. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  action?: ReactNode;
}) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className={`topline block ${light ? "topline-light" : ""}`} aria-hidden="true" />
          <p className={`eyebrow mt-4 ${light ? "!text-accent" : ""}`}>{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight display-balance sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p
              className={`mt-4 max-w-xl leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
            >
              {description}
            </p>
          )}
        </div>
        {action}
      </div>
    </Reveal>
  );
}

/** Alternating premium row backgrounds for visual rhythm. */
const PRODUCT_ROW_TINTS: Record<string, string> = {
  "grass-broom": "bg-[#f2f6ec]",
  "spice-garam-masala": "bg-[#fbf1de]",
  "coconut-broom": "bg-[#f4f0e7]",
  "dried-fruit": "bg-[#f9f2df]",
};

/**
 * Smart frame backgrounds — rich gradient washes that visually fill the frame
 * while the product itself stays fully visible via object-contain (zero cropping).
 */
const PRODUCT_FRAME_BG: Record<string, string> = {
  "grass-broom": "bg-gradient-to-br from-[#eef4e7] via-[#e4edda] to-[#d3e2c6]",
  "spice-garam-masala": "bg-gradient-to-br from-[#fbf0dc] via-[#f7e5c8] to-[#f0d5a8]",
  "coconut-broom": "bg-gradient-to-br from-[#f2ece0] via-[#e9dfcd] to-[#dccfb6]",
  "dried-fruit": "bg-gradient-to-br from-[#faf3dd] via-[#f5e8c6] to-[#eed9a6]",
};

const PRODUCT_FRAME_BLOB: Record<string, string> = {
  "grass-broom": "bg-[#5a7d4f]/25",
  "spice-garam-masala": "bg-[#c97b2d]/25",
  "coconut-broom": "bg-[#8a6f4d]/25",
  "dried-fruit": "bg-[#c9a227]/30",
};

/**
 * Orientation-matched frames so the product fills ~85-95% of its frame.
 * Portrait product (grass broom) gets a portrait frame; square-ish products
 * get a square frame. Combined with object-contain this removes blank margins
 * without cropping a single pixel of the product.
 */
const PRODUCT_FRAME_SHAPE: Record<string, string> = {
  "grass-broom": "mx-auto aspect-[3/4] h-[400px] sm:h-[460px] md:h-[540px] max-w-full",
  "spice-garam-masala": "w-full aspect-square",
  "coconut-broom": "w-full aspect-square",
  "dried-fruit": "w-full aspect-square",
};

function rowCategoryLabel(category: string) {
  return category === "Household" ? "Household Product" : "Food Product";
}

/**
 * ONE complete full-width horizontal product row.
 * Desktop: 50% large image + 50% content, alternating sides via `flip`.
 * Mobile: large image first, then category / name / description / Enquire Now.
 */
export function ProductRow({ product, flip = false }: { product: Product; flip?: boolean }) {
  const tint = PRODUCT_ROW_TINTS[product.slug] ?? "bg-card";
  const frameBg = PRODUCT_FRAME_BG[product.slug] ?? "bg-gradient-to-br from-[#f7f2e7] to-[#efe4cf]";
  const frameBlob = PRODUCT_FRAME_BLOB[product.slug] ?? "bg-saffron/25";
  const frameShape = PRODUCT_FRAME_SHAPE[product.slug] ?? "w-full aspect-square";

  return (
    <article
      className={`overflow-hidden rounded-3xl border hairline ${tint} shadow-[0_2px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]`}
    >
      <div className="grid md:grid-cols-2 md:items-stretch">
        <Reveal
          from={flip ? "right" : "left"}
          className={`${flip ? "md:order-2" : "md:order-1"} order-1`}
        >
          <div className="group flex h-full items-center justify-center p-4 sm:p-6 md:p-8">
            <div
              className={`relative overflow-hidden rounded-2xl border hairline shadow-[inset_0_2px_18px_rgba(255,255,255,0.55)] ${frameShape} ${frameBg}`}
            >
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage: "radial-gradient(rgba(60,50,30,0.10) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
                aria-hidden="true"
              />
              <div
                className={`absolute -right-12 -top-12 size-52 rounded-full blur-3xl ${frameBlob}`}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-14 -left-14 size-60 rounded-full bg-white/50 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-white/30"
                aria-hidden="true"
              />
              <img
                src={product.image}
                alt={product.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain p-1 transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:p-2"
              />
            </div>
          </div>
        </Reveal>
        <div className={`${flip ? "md:order-1" : "md:order-2"} order-2 flex items-center`}>
          <div className="w-full p-6 sm:p-10 md:p-12">
            <Reveal from={flip ? "left" : "right"}>
              <span className="topline block" aria-hidden="true" />
              <p className="eyebrow mt-4">
                {product.number} · {rowCategoryLabel(product.category)}
              </p>
            </Reveal>
            <Reveal from={flip ? "left" : "right"} delay={90}>
              <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                {product.name}
              </h3>
            </Reveal>
            <Reveal from={flip ? "left" : "right"} delay={180}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                {product.description}
              </p>
            </Reveal>
            <Reveal from={flip ? "left" : "right"} delay={260}>
              <Link
                to="/contact"
                search={{ product: product.name }}
                className="group/btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep hover:shadow-lg"
              >
                Enquire Now
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProductImage({
  src,
  alt,
  fit = "contain",
  className = "",
  eager = false,
  wellClass = "bg-[#f7f2e7]",
}: {
  src: string;
  alt: string;
  fit?: "contain" | "cover";
  className?: string;
  eager?: boolean;
  wellClass?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border hairline shadow-[0_2px_18px_rgba(0,0,0,0.05)] bg-card ${className}`}
    >
      {fit === "contain" && (
        <>
          <div className={`absolute inset-0 ${wellClass}`} aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.04]"
            aria-hidden="true"
          />
        </>
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`relative h-full w-full transition-transform duration-500 hover:scale-[1.02] ${
          fit === "contain" ? "object-contain" : "object-cover"
        }`}
      />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="section-shell pb-10 pt-14 md:pb-14 md:pt-20">
      <span className="topline reveal-up block" aria-hidden="true" />
      <p className="eyebrow reveal-up mt-4">{eyebrow}</p>
      <h1 className="reveal-up delay-1 mt-5 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight display-balance sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="reveal-up delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </section>
  );
}

export function GalleryGrid({ items }: { items: { src: string; alt: string }[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative overflow-hidden rounded-xl border hairline bg-card text-left"
            aria-label={`View image: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <span className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition group-hover:bg-ink/25 group-hover:opacity-100">
              <Expand className="size-5 text-white" />
            </span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${items[active].alt}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background text-foreground"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground"
          >
            ‹
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {items[active].alt} · {active + 1} / {items.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
