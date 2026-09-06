import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/site";
import { PageHero, ProductCard, ProductImage } from "@/components/site/shared";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Grass Broom, Garam Masala, Coconut Broom, Dried Fruit" },
      {
        name: "description",
        content:
          "Shop the Sun Savera Wellness range: Grass Broom, Spice Garam Masala, Coconut Broom and Dried Fruit.",
      },
      { property: "og:title", content: "Products | Sun Savera Wellness" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProductsPage,
});

const gallery = [
  {
    src: "/images/grass-broom-finished-bands.jpeg",
    alt: "Finished grass brooms with colour bands",
  },
  { src: "/images/grass-raw-bundles-standing.jpeg", alt: "Raw grass bundles standing" },
  { src: "/images/coconut-broom-stacks-outdoor.jpeg", alt: "Coconut broom raw stacks" },
  { src: "/images/spice-green-cardamom.jpeg", alt: "Green cardamom for garam masala" },
  { src: "/images/spice-cloves-closeup.jpeg", alt: "Whole cloves close-up" },
  { src: "/images/makhana-pile-bulk.jpeg", alt: "Makhana dried fruit in bulk" },
  { src: "/images/cashew-scoop.jpeg", alt: "Cashews in a scoop" },
  { src: "/images/mixed-dry-fruits-nuts.jpeg", alt: "Mixed dry fruits and nuts" },
];

function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title={
          <>
            The Range — <span className="text-saffron-deep">four products, one standard.</span>
          </>
        }
        description="Household essentials and food products, thoughtfully selected for everyday living."
      />

      <section className="section-shell grid gap-6 pb-16 md:pb-24">
        {PRODUCTS.map((product, i) => (
          <ProductCard
            key={product.slug}
            product={product}
            layout={i % 2 === 0 ? "feature" : "standard"}
          />
        ))}
      </section>

      <section className="border-t hairline bg-secondary/45" aria-label="Product gallery">
        <div className="section-shell py-16 md:py-20">
          <p className="eyebrow">Closer look</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl">
            Real range, real material.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((item) => (
              <ProductImage
                key={item.src}
                src={item.src}
                alt={item.alt}
                fit="cover"
                className="aspect-square"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
