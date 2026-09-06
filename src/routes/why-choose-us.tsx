import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, HeartHandshake, Leaf, Sparkles } from "lucide-react";
import { PageHero, ProductImage } from "@/components/site/shared";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us | Sun Savera Wellness Pvt Ltd" },
      {
        name: "description",
        content:
          "Why choose Sun Savera Wellness — quality focus, everyday utility, natural range and customer-first dealing.",
      },
      { property: "og:title", content: "Why Choose Us | Sun Savera Wellness" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WhyChooseUsPage,
});

const pillars = [
  {
    icon: BadgeCheck,
    title: "Quality Focused",
    text: "A quality-conscious approach across the product range — from brooms to spices to dried fruits.",
    image: "/images/grass-broom-finished-bands.jpeg",
    alt: "Quality-checked finished grass brooms",
  },
  {
    icon: Sparkles,
    title: "Everyday Utility",
    text: "Practical products shaped around everyday routines — cleaning, cooking and snacking.",
    image: "/images/grass-broom-blue-handles.jpeg",
    alt: "Everyday utility grass brooms with handles",
  },
  {
    icon: Leaf,
    title: "Natural Product Range",
    text: "A natural-inspired range across home and food, from grass fibre to whole spices.",
    image: "/images/spice-garam-masala-collage.jpeg",
    alt: "Natural whole spices for garam masala",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    text: "A reliable, GST and Udyam registered business centered on satisfaction and lasting relationships.",
    image: "/images/makhana-bowl.jpeg",
    alt: "Carefully presented dried fruit for customers",
  },
];

function WhyChooseUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Why Choose Us"
        title={
          <>
            Reliable, quality-focused, <span className="text-saffron-deep">customer-first.</span>
          </>
        }
        description="Four reasons customers trust Sun Savera Wellness for everyday household and food needs."
      />

      <section className="section-shell grid gap-6 pb-16 md:pb-24">
        {pillars.map((pillar, i) => (
          <article
            key={pillar.title}
            className={`grid gap-6 rounded-2xl border hairline bg-card p-5 transition-transform hover:-translate-y-1 md:items-center md:p-7 ${
              i % 2 === 1 ? "md:grid-cols-12" : "md:grid-cols-12"
            }`}
          >
            <ProductImage
              src={pillar.image}
              alt={pillar.alt}
              fit={
                pillar.title === "Natural Product Range" || pillar.title === "Customer First"
                  ? "contain"
                  : "cover"
              }
              className={`aspect-[16/10] ${i % 2 === 1 ? "md:order-2 md:col-span-5" : "md:col-span-5"}`}
            />
            <div
              className={`${i % 2 === 1 ? "md:order-1 md:col-span-7" : "md:col-span-7"} p-1 md:p-4`}
            >
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <pillar.icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-saffron-deep">0{i + 1}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl">{pillar.title}</h2>
              <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{pillar.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="section-shell flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/55">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl">Tell us what you need.</h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Enquire Now <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
