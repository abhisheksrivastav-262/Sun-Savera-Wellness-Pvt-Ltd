import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, ProductImage } from "@/components/site/shared";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sun Savera Wellness Pvt Ltd" },
      {
        name: "description",
        content:
          "About Sun Savera Wellness Pvt Ltd — quality-focused natural, household and food products for everyday living.",
      },
      { property: "og:title", content: "About Us | Sun Savera Wellness" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    title: "Quality-focused products",
    text: "Every product in our range is selected with quality and consistency in mind.",
  },
  {
    title: "Natural-inspired range",
    text: "Grass and coconut brooms, flavourful spices and carefully presented dried fruits.",
  },
  {
    title: "Everyday household utility",
    text: "Practical cleaning essentials shaped around real daily routines.",
  },
  {
    title: "Food for daily life",
    text: "Spice and dried fruit products suited to everyday cooking, consumption and gifting.",
  },
  {
    title: "Customer satisfaction",
    text: "Clear communication, dependable dealing and a customer-first attitude.",
  },
  {
    title: "Reliable business approach",
    text: "A GST and Udyam registered enterprise you can enquire and buy with confidence.",
  },
];

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title={<>About Sun Savera Wellness Pvt Ltd</>}
        description="A quality-conscious enterprise bringing thoughtfully selected natural, household and food products to everyday living."
      />

      <section className="section-shell grid gap-10 pb-16 md:grid-cols-12 md:items-center md:pb-24">
        <div className="md:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <ProductImage
              src="/images/grass-broom-finished-bands.jpeg"
              alt="Finished grass brooms bundled and ready"
              fit="contain"
              eager
              className="aspect-[3/4]"
            />
            <div className="grid gap-4">
              <ProductImage
                src="/images/spice-cloves-closeup.jpeg"
                alt="Whole cloves — garam masala ingredient"
                fit="cover"
                className="aspect-square"
              />
              <ProductImage
                src="/images/cashew-closeup.jpeg"
                alt="Premium cashews close-up"
                fit="cover"
                className="aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="eyebrow">Who we are</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Thoughtfully selected products for quality-conscious homes.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Sun Savera Wellness Pvt Ltd focuses on quality-oriented natural, household and food
              products. Our range covers everyday cleaning essentials such as Grass Broom and
              Coconut Broom, alongside food products including Spice Garam Masala and Dried Fruit.
            </p>
            <p>
              We keep our approach simple and dependable: practical products, honest dealing and a
              customer-first mindset. As a GST and Udyam registered enterprise, we aim to build
              lasting relationships with every customer we serve.
            </p>
          </div>
          <ul className="mt-8 grid gap-3">
            {[
              "Quality-focused selection",
              "Natural-inspired product range",
              "Customer-first dealing",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                <span className="grid size-6 place-items-center rounded-full bg-accent/20">
                  <Check className="size-3.5 text-saffron-deep" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-forest to-[#3d5a3a] p-6 text-primary-foreground shadow-lg">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary-foreground/60">
              Company Turnover
            </p>
            <p className="mt-2 font-display text-3xl text-accent">Up to ₹1 Crore</p>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-secondary/45">
        <div className="section-shell py-16 md:py-24">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl">
            Six pillars behind every product.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border hairline bg-border sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="bg-background p-6">
                <span className="font-mono text-xs text-saffron-deep">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24">
        <div className="md:col-span-6">
          <p className="eyebrow">Our material story</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            From raw material to finished product.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Our broom range begins as natural grass and coconut fibre — bundled, prepared and
            finished into practical household cleaning products for everyday use.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-saffron-deep"
          >
            Explore Products <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="md:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <ProductImage
              src="/images/grass-raw-field-piles.jpeg"
              alt="Raw grass bundles prepared in the field"
              fit="cover"
              className="aspect-[3/4]"
            />
            <ProductImage
              src="/images/coconut-broom-stacks-outdoor.jpeg"
              alt="Coconut broom raw material stacks"
              fit="cover"
              className="mt-8 aspect-[3/4]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
