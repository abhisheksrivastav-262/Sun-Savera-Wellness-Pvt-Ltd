import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { PRODUCT_OPTIONS, buildWhatsAppLink } from "@/lib/site";

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
      />
    </label>
  );
}

export function EnquiryForm({ defaultProduct = "General Enquiry" }: { defaultProduct?: string }) {
  const [sent, setSent] = useState(false);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const product = String(form.get("product") ?? "General Enquiry");
    const message = String(form.get("message") ?? "").trim();
    window.open(
      buildWhatsAppLink({ name, phone, email, product, message }),
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <form
      onSubmit={submitEnquiry}
      className="rounded-xl border hairline bg-card p-6 md:p-8"
      aria-label="Product enquiry form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field label="Phone Number" name="phone" required type="tel" placeholder="Phone number" />
      </div>
      <div className="mt-4">
        <Field label="Email" name="email" required type="email" placeholder="Email address" />
      </div>
      <label className="mt-4 block text-sm">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
          Product Interested In
        </span>
        <span className="relative mt-1.5 block">
          <select
            name="product"
            defaultValue={defaultProduct}
            className="w-full appearance-none rounded-md border border-input bg-background px-3 py-3 pr-10 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            {PRODUCT_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </span>
      </label>
      <label className="mt-4 block text-sm">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
          Message
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your requirement"
          className="mt-1.5 block w-full resize-none rounded-md border border-input bg-background px-3 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-saffron-deep sm:w-auto"
      >
        Send Enquiry on WhatsApp
      </button>
      {sent && (
        <p className="mt-4 text-sm text-muted-foreground" role="status">
          Opening WhatsApp with your enquiry. We will connect with you shortly.
        </p>
      )}
    </form>
  );
}
