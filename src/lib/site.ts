export const BUSINESS = {
  name: "SUN SAVERA WELLNESS PVT LTD",
  shortName: "Sun Savera",
  tagline: "Wellness Pvt Ltd",
  phone: "6289121867",
  phoneDisplay: "6289121867",
  phoneHref: "tel:6289121867",
  whatsapp: "https://wa.me/916289121867",
  email: "sswpl2025@gmail.com",
  emailHref: "mailto:sswpl2025@gmail.com",
  gstin: "19ABRCS0855Q1ZA",
  udyam: "UDYAM-WB-10-0210086",
  copyright: "© 2026 Sun Savera Wellness Pvt Ltd. All Rights Reserved.",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Mission & Vision", to: "/mission-vision" },
  { label: "Products", to: "/products" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const PRODUCT_OPTIONS = [
  "Grass Broom",
  "Spice Garam Masala",
  "Coconut Broom",
  "Dried Fruit",
  "General Enquiry",
] as const;

export type Product = {
  slug: string;
  number: string;
  category: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  fit: "contain" | "cover";
};

export const PRODUCTS: Product[] = [
  {
    slug: "grass-broom",
    number: "01",
    category: "Household",
    name: "Grass Broom",
    description:
      "Practical everyday household cleaning product designed for convenient and reliable use.",
    image: "/images/grass-broom-green-handles.jpeg",
    imageAlt: "Grass Broom with green handles — Sun Savera Wellness",
    fit: "contain",
  },
  {
    slug: "spice-garam-masala",
    number: "02",
    category: "Spice",
    name: "Spice Garam Masala",
    description:
      "A flavourful spice blend suited for everyday Indian cooking and meal preparation.",
    image: "/images/spice-garam-masala-collage.jpeg",
    imageAlt: "Spice Garam Masala ingredients — Sun Savera Wellness",
    fit: "contain",
  },
  {
    slug: "coconut-broom",
    number: "03",
    category: "Household",
    name: "Coconut Broom",
    description:
      "A traditional-inspired household cleaning product designed for practical everyday use.",
    image: "/images/coconut-broom-raw-bundles.jpeg",
    imageAlt: "Coconut Broom bundles — Sun Savera Wellness",
    fit: "contain",
  },
  {
    slug: "dried-fruit",
    number: "04",
    category: "Food",
    name: "Dried Fruit",
    description:
      "A carefully presented dried fruit product suitable for everyday consumption and gifting.",
    image: "/images/makhana-bowl.jpeg",
    imageAlt: "Dried Fruit presented in a bowl — Sun Savera Wellness",
    fit: "contain",
  },
];

export function buildWhatsAppLink(opts: {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}) {
  const text = [
    "Hello Sun Savera Wellness,",
    "",
    `Name: ${opts.name}`,
    `Phone: ${opts.phone}`,
    `Email: ${opts.email}`,
    `Product Interested In: ${opts.product}`,
    `Message: ${opts.message || "General enquiry"}`,
  ].join("\n");
  return `https://wa.me/916289121867?text=${encodeURIComponent(text)}`;
}
