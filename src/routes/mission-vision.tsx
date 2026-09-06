import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, HeartHandshake } from "lucide-react";
import { PageHero, ProductImage } from "@/components/site/shared";

export const Route = createFileRoute("/mission-vision")({
  head: () => ({
    meta: [
      { title: "Mission & Vision | Sun Savera Wellness Pvt Ltd" },
      {
        name: "description",
        content:
          "Our mission and vision — quality-focused everyday products and a trusted, recognizable brand.",
      },
      { property: "og:title", content: "Mission & Vision | Sun Savera Wellness" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MissionVisionPage,
});

function MissionVisionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Mission & Vision"
        title={
          <>
            What guides <span className="text-saffron-deep">Sun Savera Wellness.</span>
          </>
        }
        description="Two simple commitments — practical quality today, and a trusted brand for tomorrow."
      />

      <section className="section-shell grid gap-6 pb-16 md:grid-cols-2 md:pb-24">
        <article className="group relative overflow-hidden rounded-2xl border hairline bg-card p-8 transition-transform hover:-translate-y-1 md:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/15 blur-2xl transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
          <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Compass className="size-6" />
          </span>
          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-saffron-deep">
            Our Mission
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight">
            Practical quality for everyday life.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            &ldquo;Our mission is to provide thoughtfully selected, quality-focused products that
            bring practicality, reliability and value to everyday life while building lasting
            relationships with our customers.&rdquo;
          </p>
          <div className="mt-8">
            <ProductImage
              src="/images/grass-broom-blue-handles.jpeg"
              alt="Finished grass brooms — everyday practical quality"
              fit="contain"
              className="aspect-[16/9]"
            />
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground transition-transform hover:-translate-y-1 md:p-10">
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-accent/20 blur-2xl"
            aria-hidden="true"
          />
          <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground text-primary">
            <HeartHandshake className="size-6" />
          </span>
          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
            Our Vision
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight">
            A trusted brand, known for consistency.
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/75">
            &ldquo;Our vision is to build a trusted and recognizable product brand known for
            quality, consistency and customer-focused growth across everyday household and food
            categories.&rdquo;
          </p>
          <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-primary-foreground/20">
            <img
              src="/images/dried-fruit-bowls-grid.jpeg"
              alt="Assorted dried fruits representing growing food categories"
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </article>
      </section>

      <section className="border-t hairline bg-secondary/45">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-20">
          <div className="md:col-span-5">
            <ProductImage
              src="/images/mixed-dry-fruits-nuts.jpeg"
              alt="Mixed dry fruits and nuts — customer-focused growth"
              fit="cover"
              className="aspect-[4/3]"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">How we live it</p>
            <h2 className="mt-4 font-display text-3xl">Three behaviours, every day.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Select with care", "Quality-focused picks across home and food."],
                ["Serve with honesty", "Reliable dealing and clear communication."],
                ["Grow with customers", "Relationships first, then reach."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border hairline bg-background p-5">
                  <h3 className="font-display text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-saffron-deep"
            >
              Work With Us <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
