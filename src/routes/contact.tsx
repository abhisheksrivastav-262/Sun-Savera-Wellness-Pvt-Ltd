import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { PageHero, ProductImage } from "@/components/site/shared";
import { EnquiryForm } from "@/components/site/enquiry-form";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Contact Us | Sun Savera Wellness Pvt Ltd" },
      {
        name: "description",
        content:
          "Contact Sun Savera Wellness Pvt Ltd — phone, email, GSTIN, Udyam and WhatsApp enquiry form.",
      },
      { property: "og:title", content: "Contact Us | Sun Savera Wellness" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { product } = Route.useSearch();

  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s Build a <span className="text-saffron-deep">Better Connection.</span>
          </>
        }
        description="Tell us what you are interested in and we will connect with you directly on WhatsApp."
      />

      <section className="section-shell grid gap-10 pb-16 md:grid-cols-12 md:pb-24">
        <div className="md:col-span-5">
          <h2 className="font-display text-2xl">{BUSINESS.name}</h2>
          <div className="mt-8 space-y-5 text-sm">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                Phone
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-1 flex items-center gap-3 font-semibold text-base hover:text-saffron-deep"
              >
                <Phone className="size-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                Email
              </p>
              <a
                href={BUSINESS.emailHref}
                className="mt-1 flex items-center gap-3 font-semibold text-base hover:text-saffron-deep"
              >
                <Mail className="size-4" /> <span className="break-all">{BUSINESS.email}</span>
              </a>
            </div>
            <div className="grid gap-4 rounded-xl border hairline bg-card p-5">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  GSTIN
                </p>
                <p className="mt-1 font-semibold">{BUSINESS.gstin}</p>
              </div>
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Udyam Registration Number
                </p>
                <p className="mt-1 font-semibold">{BUSINESS.udyam}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <ProductImage
              src="/images/grass-raw-bundles-indoor.jpeg"
              alt="Natural grass bundles — Sun Savera Wellness products"
              fit="cover"
              className="aspect-[16/10]"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <EnquiryForm key={product ?? "default"} defaultProduct={product ?? "General Enquiry"} />
        </div>
      </section>
    </main>
  );
}
