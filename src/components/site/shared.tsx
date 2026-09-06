import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site";

export function ProductImage({
  src,
  alt,
  fit = "contain",
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  fit?: "contain" | "cover";
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl border hairline bg-card ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full transition-transform duration-500 hover:scale-[1.03] ${
          fit === "contain" ? "object-contain bg-[#f7f2e7]" : "object-cover"
        }`}
      />
    </div>
  );
}

export function ProductCard({
  product,
  layout = "standard",
}: {
  product: Product;
  layout?: "feature" | "standard";
}) {
  const isFeature = layout === "feature";
  return (
    <article
      className={`group grid gap-6 rounded-xl border hairline bg-card p-4 transition-transform hover:-translate-y-1 md:items-center ${
        isFeature ? "md:grid-cols-12 md:p-5" : "md:grid-cols-2"
      }`}
    >
      <ProductImage
        src={product.image}
        alt={product.imageAlt}
        fit={product.fit}
        className={`${isFeature ? "md:col-span-5" : ""} aspect-[4/3]`}
      />
      <div
        className={`${isFeature ? "md:col-span-7" : ""} flex h-full flex-col justify-center p-2 md:p-5`}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
            {product.number} / {product.category}
          </span>
          <ArrowUpRight className="size-4 text-saffron-deep transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className={`${isFeature ? "text-3xl" : "text-2xl"} mt-3 font-display`}>
          {product.name}
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <Link
          to="/contact"
          search={{ product: product.name }}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-saffron-deep"
        >
          Enquire Now <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
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
      <p className="eyebrow reveal-up">{eyebrow}</p>
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
