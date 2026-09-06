import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { BUSINESS, PRODUCTS } from "@/lib/site";
import { ProductCard, ProductImage } from "@/components/site/shared";

const reasons = [
  ["01", "Quality Focused", "A quality-conscious approach across the product range."],
  ["02", "Everyday Utility", "Practical products shaped around everyday routines."],
  ["03", "Natural Product Range", "A natural-inspired range across home and food."],
  ["04", "Customer First", "A reliable business approach centered on satisfaction."],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sun Savera Wellness | Natural Products. Trusted Quality. Everyday Wellness." },
      {
        name: "description",
        content:
          "Explore Grass Broom, Spice Garam Masala, Coconut Broom and Dried Fruit from Sun Savera Wellness Pvt Ltd.",
      },
      { property: "og:title", content: "Sun Savera Wellness | Natural Products" },
      {
        property: "og:description",
        content: "Natural, household and food products for quality-conscious everyday living.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-background p-4">
      <p className="font-display text-3xl">{value}</p>
      <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.13em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function BusinessDatum({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary-foreground/45">
        {label}
      </p>
      {href ? (
        <a href={href} className="mt-1 inline-block font-semibold hover:text-accent">
          {value}
        </a>
      ) : (
        <p className="mt-1 font-semibold">{value}</p>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <main>
      {/* HERO — preserved premium concept, now with real imagery */}
      <section className="section-shell grid gap-12 pb-20 pt-14 md:grid-cols-12 md:items-center md:pb-28 md:pt-20">
        <div className="md:col-span-7">
          <p className="eyebrow reveal-up">Natural · Household · Food</p>
          <h1 className="reveal-up delay-1 mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-foreground display-balance sm:text-7xl lg:text-8xl">
            Natural Products. <span className="text-saffron-deep">Trusted Quality.</span> Everyday
            Wellness.
          </h1>
          <p className="reveal-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sun Savera Wellness Pvt Ltd brings thoughtfully selected natural, household and food
            products designed for quality-conscious everyday living.
          </p>
          <div className="reveal-up delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-saffron-deep"
            >
              <span>Explore Products</span>
              <ArrowDownRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-saffron-deep"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Check className="size-3 text-saffron-deep" /> Udyam Registered
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="size-3 text-saffron-deep" /> GST Registered
            </span>
          </div>
        </div>
        <div className="relative md:col-span-5">
          <div
            className="absolute -inset-3 -rotate-2 rounded-2xl border hairline"
            aria-hidden="true"
          />
          <ProductImage
            src="/images/grass-broom-green-handles.jpeg"
            alt="Grass Broom with green handles — Sun Savera Wellness hero product"
            fit="contain"
            eager
            className="relative aspect-[4/5]"
          />
          <div className="absolute -bottom-4 -left-3 rounded-md bg-primary px-4 py-3 text-primary-foreground shadow-lg">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-primary-foreground/60">
              Product categories
            </p>
            <p className="mt-1 font-display text-xl">Home + Food</p>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="border-y hairline bg-secondary/45">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24">
          <div className="md:col-span-5">
            <ProductImage
              src="/images/grass-broom-heads-tied.jpeg"
              alt="Hand-tied grass broom heads ready for finishing"
              fit="cover"
              className="aspect-[4/3]"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">01 — About</p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-tight display-balance">
              About Sun Savera Wellness
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Sun Savera Wellness Pvt Ltd focuses on quality-oriented natural, household and food
              products. Our natural-inspired product range is built for everyday usability, with a
              reliable, customer-first approach behind every product.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border hairline bg-border sm:grid-cols-4">
              <Stat value="04" label="Product lines" />
              <Stat value="02" label="Everyday categories" />
              <Stat value="01" label="Quality focus" />
              <Stat value="01" label="Customer first" />
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-saffron-deep"
            >
              More About Us <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="section-shell py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 border-b hairline pb-5">
          <div>
            <p className="eyebrow">02 — Products</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">The Range</h2>
          </div>
          <p className="hidden font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground sm:block">
            Four products · One standard
          </p>
        </div>
        <div className="mt-10 grid gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              layout={i % 3 === 0 ? "feature" : "standard"}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-saffron-deep"
          >
            View All Products <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* VISUAL STORY STRIP — real sourcing & range imagery */}
      <section className="border-y hairline bg-secondary/45" aria-label="Product gallery">
        <div className="section-shell py-16 md:py-20">
          <p className="eyebrow">From sourcing to shelf</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl">
            Real products, real material.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <ProductImage
              src="/images/coconut-broom-stacks-outdoor.jpeg"
              alt="Coconut broom raw material stacks"
              fit="cover"
              className="aspect-square"
            />
            <ProductImage
              src="/images/spice-green-cardamom.jpeg"
              alt="Green cardamom — garam masala ingredient"
              fit="cover"
              className="aspect-square"
            />
            <ProductImage
              src="/images/dried-fruit-bowls-grid.jpeg"
              alt="Assorted dried fruits and nuts in wooden bowls"
              fit="cover"
              className="aspect-square"
            />
            <ProductImage
              src="/images/grass-broom-finished-bands.jpeg"
              alt="Finished grass brooms bundled with colour bands"
              fit="cover"
              className="aspect-square"
            />
          </div>
        </div>
      </section>

      {/* WHY PREVIEW */}
      <section className="section-shell py-16 md:py-24">
        <p className="eyebrow">03 — Why Choose Us</p>
        <div className="mt-4 grid gap-10 md:grid-cols-12">
          <h2 className="font-display text-4xl md:col-span-5">
            Reliable, quality-focused, customer-first.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-lg border hairline bg-border sm:grid-cols-2 md:col-span-7">
            {reasons.map(([number, title, description]) => (
              <div key={number} className="bg-background p-6">
                <span className="font-mono text-xs text-saffron-deep">{number}</span>
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <Link
          to="/why-choose-us"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-saffron-deep"
        >
          Why Choose Us <ArrowUpRight className="size-4" />
        </Link>
      </section>

      {/* VERIFIED BUSINESS */}
      <section className="bg-primary text-primary-foreground">
        <div className="section-shell grid gap-8 py-14 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/55">
              04 — Verified Business
            </p>
            <h2 className="mt-3 font-display text-3xl">Sun Savera Wellness Pvt Ltd</h2>
            <p className="mt-3 text-sm text-primary-foreground/65">Udyam Registered Enterprise</p>
            <Link
              to="/mission-vision"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary-foreground"
            >
              Our Mission & Vision <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:col-span-8">
            <BusinessDatum label="GSTIN" value={BUSINESS.gstin} />
            <BusinessDatum label="Udyam Number" value={BUSINESS.udyam} />
            <BusinessDatum label="Phone" value={BUSINESS.phoneDisplay} href={BUSINESS.phoneHref} />
            <BusinessDatum label="Email" value={BUSINESS.email} href={BUSINESS.emailHref} />
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="section-shell grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow">05 — Enquiry</p>
          <h2 className="mt-4 max-w-md font-display text-4xl leading-tight">
            Let&apos;s Build a Better Connection
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Tell us what you are interested in and we will connect with you directly on WhatsApp.
          </p>
        </div>
        <div className="md:col-span-5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-saffron-deep"
          >
            Enquire Now <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
