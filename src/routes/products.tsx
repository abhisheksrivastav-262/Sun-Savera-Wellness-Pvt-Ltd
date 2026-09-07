import { createFileRoute } from "@tanstack/react-router";
import { GALLERY, PRODUCTS } from "@/lib/site";
import { GalleryGrid, PageHero, ProductRow } from "@/components/site/shared";

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

function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Products"
        title={
          <>
            Products Designed <span className="text-saffron-deep">for Everyday Needs.</span>
          </>
        }
        description="Everyday products selected with quality and usability in mind."
      />

      <section className="section-shell grid gap-8 pb-16 md:gap-10 md:pb-24">
        {PRODUCTS.map((product, i) => (
          <ProductRow key={product.slug} product={product} flip={i % 2 === 1} />
        ))}
      </section>

      <section className="border-t hairline bg-secondary/45" aria-label="Product gallery">
        <div className="section-shell py-16 md:py-20">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl">
            Real range, real material.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Tap any image to view it closer.
          </p>
          <div className="mt-8">
            <GalleryGrid items={GALLERY} />
          </div>
        </div>
      </section>
    </main>
  );
}
