import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Handshake,
  Leaf,
  MessagesSquare,
  Package,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import { BUSINESS, GALLERY, PRODUCTS } from "@/lib/site";
import {
  FeatureMarquee,
  GalleryGrid,
  ProductImage,
  ProductRow,
  Reveal,
  SectionHeading,
} from "@/components/site/shared";

const trustStrip = [
  { icon: Award, label: "Quality Focused" },
  { icon: ShoppingBag, label: "Everyday Utility" },
  { icon: Truck, label: "Reliable Supply" },
  { icon: MessagesSquare, label: "Customer First" },
] as const;

const whyChoose = [
  ["01", "Quality Focused", "Carefully presented products with attention to quality."],
  ["02", "Everyday Utility", "Products selected for practical everyday requirements."],
  ["03", "Natural Product Range", "A natural-inspired range across household and food categories."],
  ["04", "Customer First", "Simple communication and responsive enquiry support."],
] as const;

const steps = [
  ["01", "Share Your Requirement", "Tell us which product you need."],
  ["02", "Discuss Your Requirement", "Our team can understand your enquiry and requirements."],
  ["03", "Connect & Proceed", "Move forward with the suitable product enquiry."],
] as const;

const trustPoints = [
  ["Quality-focused approach", "Attention to quality across the product range."],
  ["Practical product selection", "Products picked for everyday usability."],
  ["Clear communication", "Simple, responsive dealing on every enquiry."],
  ["Enquiry support", "Direct WhatsApp and phone support for requirements."],
] as const;

const highlights = [
  { value: "Everyday Range", label: "Quality Focused" },
  { value: "4", label: "Product Categories" },
  { value: "Customer Focused", label: "Business" },
  { value: "Up to ₹1 Crore", label: "Turnover", featured: true },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Sun Savera Wellness Pvt Ltd | Grass Broom, Coconut Broom, Garam Masala, Dried Fruit",
      },
      {
        name: "description",
        content:
          "Sun Savera Wellness Pvt Ltd — Grass Broom, Spice Garam Masala, Coconut Broom and Dried Fruit. Quality products for everyday living. Request a quote on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Sun Savera Wellness Pvt Ltd | Quality Products for Everyday Living",
      },
      {
        property: "og:description",
        content:
          "Carefully selected household and food products with a focus on quality, everyday utility and dependable customer service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="float-slow pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-saffron/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="float-slower pointer-events-none absolute -right-20 top-40 size-96 rounded-full bg-forest/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-shell relative grid gap-12 pb-14 pt-14 md:grid-cols-12 md:items-center md:pb-20 md:pt-20">
          <div className="md:col-span-7">
            <span className="topline reveal-up block" aria-hidden="true" />
            <p className="eyebrow reveal-up mt-4">Quality Products • Trusted Supply</p>
            <h1 className="reveal-up delay-1 mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-foreground display-balance sm:text-7xl">
              Quality Products for <span className="text-saffron-deep">Everyday Living</span>
            </h1>
            <p className="reveal-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sun Savera Wellness Pvt Ltd brings together carefully selected household and food
              products with a focus on quality, everyday utility and dependable customer service.
            </p>
            <div className="reveal-up delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-saffron-deep"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-saffron-deep"
              >
                <span>Explore Products</span>
                <ArrowDownRight className="size-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
              <span>GST Registered</span>
              <span>Udyam Registered</span>
              <span>WhatsApp Enquiry</span>
            </div>
          </div>
          <div className="reveal-up delay-2 relative md:col-span-5">
            <div
              className="absolute -inset-3 -rotate-2 rounded-2xl border hairline bg-gradient-to-br from-saffron/25 via-transparent to-forest/15"
              aria-hidden="true"
            />
            <ProductImage
              src="/images/grass-broom-green-handles-tight.jpeg"
              alt="Grass Broom with green handles — Sun Savera Wellness hero product"
              fit="contain"
              eager
              wellClass="bg-[#e9f1e2]"
              className="relative aspect-[4/5] w-full shadow-xl"
            />
            <div className="absolute -bottom-4 -left-3 rounded-md bg-primary px-4 py-3 text-primary-foreground shadow-lg">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-primary-foreground/60">
                Sun Savera Wellness
              </p>
              <p className="mt-1 font-display text-xl">Home + Food</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE TICKER — premium infinite sliding strip */}
      <section
        className="overflow-hidden border-y hairline bg-primary text-primary-foreground"
        aria-label="Highlights"
      >
        <FeatureMarquee items={trustStrip} />
      </section>

      {/* ABOUT / INTRO */}
      <section className="section-shell grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24">
        <Reveal className="md:col-span-6">
          <span className="topline block" aria-hidden="true" />
          <p className="eyebrow mt-4">Sun Savera Wellness</p>
          <h2 className="mt-4 max-w-md font-display text-4xl leading-tight display-balance sm:text-5xl">
            Products Selected for Everyday Needs
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sun Savera Wellness Pvt Ltd is focused on bringing together practical household and food
            products with a strong emphasis on quality, consistency and customer satisfaction.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:-translate-y-0.5 hover:bg-saffron-deep"
          >
            About Us <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={120} className="relative md:col-span-6">
          <ProductImage
            src="/images/grass-broom-heads-tied.jpeg"
            alt="Hand-tied grass broom heads ready for finishing"
            fit="cover"
            className="aspect-[4/3] w-full shadow-lg"
          />
          <div className="absolute -bottom-5 -left-2 hidden w-44 sm:block md:-left-5">
            <ProductImage
              src="/images/spice-cloves-closeup.jpeg"
              alt="Whole cloves — garam masala ingredient"
              fit="cover"
              className="aspect-square shadow-lg"
            />
          </div>
        </Reveal>
      </section>

      {/* COMPANY HIGHLIGHTS */}
      <section
        className="border-y hairline bg-gradient-to-r from-forest via-forest to-[#3d5a3a] text-primary-foreground"
        aria-label="Company highlights"
      >
        <div className="section-shell grid grid-cols-2 gap-px py-10 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div
                className={`flex h-full flex-col justify-center rounded-xl px-6 py-6 ${
                  "featured" in item && item.featured
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : ""
                }`}
              >
                <p
                  className={`font-mono text-[0.62rem] uppercase tracking-[0.18em] ${
                    "featured" in item && item.featured
                      ? "text-accent-foreground/70"
                      : "text-primary-foreground/55"
                  }`}
                >
                  {item.label}
                </p>
                <p className="mt-2 font-display text-2xl sm:text-3xl">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section className="border-b hairline bg-secondary/45">
        <div className="section-shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Our Products"
            title="Products Designed for Everyday Needs"
            description="Everyday products selected with quality and usability in mind — each in its own dedicated showcase."
            action={
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-saffron-deep"
              >
                View All Products <ArrowUpRight className="size-4" />
              </Link>
            }
          />
          <div className="mt-10 grid gap-8 md:gap-10">
            {PRODUCTS.map((product, i) => (
              <ProductRow key={product.slug} product={product} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* B2B / BUSINESS PARTNERSHIP */}
      <section className="section-shell py-16 md:py-24">
        <Reveal>
          <span className="topline block" aria-hidden="true" />
          <p className="eyebrow mt-4">Business Enquiries</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Built for Customers & Business Enquiries
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you are looking for household products, food products or regular supply
            requirements, connect with Sun Savera Wellness for product and business enquiries.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="group h-full rounded-2xl border hairline border-saffron-deep/25 bg-gradient-to-br from-card to-[#faf3e3] p-8 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="grid size-12 place-items-center rounded-xl bg-saffron-deep text-white">
                <Package className="size-6" />
              </span>
              <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-saffron-deep">
                Product Enquiry
              </p>
              <h3 className="mt-3 font-display text-2xl">
                For customers interested in our products.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Grass Broom, Coconut Broom, Spice Garam Masala or Dried Fruit — tell us what you
                need and we will respond on WhatsApp.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-saffron-deep"
              >
                Start an Enquiry <ArrowUpRight className="size-4" />
              </Link>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="group h-full rounded-2xl bg-gradient-to-br from-primary to-forest p-8 text-primary-foreground shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Store className="size-6" />
              </span>
              <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                Business Enquiry
              </p>
              <h3 className="mt-3 font-display text-2xl">
                For retailers, wholesalers and business requirements.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                Share your product, quantity and requirement — our team will connect with you to
                discuss it further.
              </p>
              <Link
                to="/contact"
                search={{ product: "General Enquiry" }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Start an Enquiry <ArrowUpRight className="size-4" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y hairline bg-gradient-to-b from-[#f4ecda] to-secondary/60">
        <div className="section-shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Sun Savera Wellness?"
            action={
              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-saffron-deep"
              >
                More About Why Choose Us <ArrowUpRight className="size-4" />
              </Link>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {whyChoose.map(([number, title, description], i) => (
              <Reveal key={number} delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl border hairline bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="font-display text-4xl text-saffron-deep/70">{number}</span>
                  <h3 className="mt-4 font-display text-2xl">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-shell py-16 md:py-24">
        <SectionHeading eyebrow="How It Works" title="Simple enquiry in three steps" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([number, title, description], i) => (
            <Reveal key={number} delay={i * 100}>
              <div className="h-full rounded-2xl border hairline bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="topline block" aria-hidden="true" />
                <span className="mt-4 block font-mono text-xs text-saffron-deep">{number}</span>
                <h3 className="mt-3 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST — no fake testimonials */}
      <section className="border-y hairline bg-primary text-primary-foreground">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <Reveal className="md:col-span-5">
            <span className="topline topline-light block" aria-hidden="true" />
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/55">
              Trust
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight">Quality & Customer Focus</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/70">
              A registered enterprise with a straightforward promise — practical products, honest
              dealing and responsive support.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-primary-foreground/75">
              <p>GSTIN: {BUSINESS.gstin}</p>
              <p>Udyam: {BUSINESS.udyam}</p>
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl bg-primary-foreground/15 sm:grid-cols-2 md:col-span-7">
            {trustPoints.map(([title, text], i) => (
              <Reveal key={title} delay={i * 80} className="bg-primary">
                <div className="h-full p-6">
                  <h3 className="inline-flex items-center gap-2 font-display text-lg">
                    <Leaf className="size-4 text-accent" /> {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-shell py-16 md:py-24" aria-label="Gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="Real products, real material"
          description="From raw material to finished product — tap any image to view it closer."
          action={
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-saffron-deep"
            >
              View Products <ArrowUpRight className="size-4" />
            </Link>
          }
        />
        <Reveal className="mt-10">
          <GalleryGrid items={GALLERY.slice(0, 8)} />
        </Reveal>
      </section>

      {/* REQUEST A QUOTE CTA */}
      <section className="border-t hairline bg-gradient-to-r from-[#f4ecda] via-secondary/60 to-[#e9f1e2]">
        <div className="section-shell grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-24">
          <Reveal className="md:col-span-7">
            <span className="topline block" aria-hidden="true" />
            <p className="eyebrow mt-4">Request a Quote</p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-tight sm:text-5xl">
              Share your product requirement
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              Share your product requirement and our team will get back to you.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-saffron-deep"
            >
              Request a Quote <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-saffron-deep"
            >
              <Handshake className="size-4" /> {BUSINESS.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
