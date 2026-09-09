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
  turnover: "Up to ₹1 Crore",
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
  images?: { src: string; alt: string }[];
};

export const HERO_SLIDES: { src: string; alt: string }[] = [
  { src: "/images/sun-masala-powder-bowls.jpeg", alt: "Colourful garam masala powders in bowls" },
  { src: "/images/sun-whole-spice-sacks.jpeg", alt: "Whole spices in jute sacks with cardamom and chillies" },
  { src: "/images/sun-mixed-nuts-bowls.jpeg", alt: "Mixed nuts in bowls top view" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "grass-broom",
    number: "01",
    category: "Household",
    name: "Grass Broom",
    description: "Practical household cleaning product designed for everyday use.",
    image: "/images/grass-broom-green-handles-tight.jpeg",
    imageAlt: "Grass Broom with green handles — Sun Savera Wellness",
    fit: "contain",
  },
  {
    slug: "spice-garam-masala",
    number: "02",
    category: "Spice",
    name: "Spice Garam Masala",
    description: "A flavourful spice product suited for everyday Indian cooking.",
    image: "/images/sun-masala-powder-bowls.jpeg",
    imageAlt: "Spice Garam Masala powders in bowls — Sun Savera Wellness",
    fit: "contain",
    images: [
      { src: "/images/sun-masala-powder-bowls.jpeg", alt: "Garam masala powders in bowls and spoons" },
      { src: "/images/sun-whole-spice-sacks.jpeg", alt: "Whole spices in jute sacks" },
      { src: "/images/s-cinnamon-dalchini.jpeg", alt: "Cinnamon sticks close-up" },
      { src: "/images/s-black-cardamom.jpeg", alt: "Black cardamom close-up" },
      { src: "/images/s-mace-javitri.jpeg", alt: "Mace spice close-up" },
      { src: "/images/s-green-cardamom-plant.jpeg", alt: "Green cardamom growing on plant" },
      { src: "/images/s-nutmeg-jaiphal.jpeg", alt: "Whole nutmeg close-up" },
    ],
  },
  {
    slug: "coconut-broom",
    number: "03",
    category: "Household",
    name: "Coconut Broom",
    description:
      "Traditional-inspired household cleaning product designed for practical everyday use.",
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
    image: "/images/sun-mixed-nuts-bowls.jpeg",
    imageAlt: "Mixed nuts in bowls — Sun Savera Wellness",
    fit: "contain",
    images: [
      { src: "/images/sun-mixed-nuts-bowls.jpeg", alt: "Mixed nuts in bowls" },
      { src: "/images/s-almonds.jpeg", alt: "Premium almonds close-up" },
      { src: "/images/s-golden-raisins.jpeg", alt: "Golden raisins close-up" },
    ],
  },
];

export function buildWhatsAppLink(opts: {
  name: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
}) {
  const text = [
    "Hello Sun Savera Wellness,",
    "",
    `Name: ${opts.name}`,
    `Phone: ${opts.phone}`,
    `Email: ${opts.email}`,
    `Product: ${opts.product}`,
    `Quantity: ${opts.quantity || "Not specified"}`,
    `Requirement: ${opts.message || "General enquiry"}`,
  ].join("\n");
  return `https://wa.me/916289121867?text=${encodeURIComponent(text)}`;
}

export const GALLERY: { src: string; alt: string }[] = [
  { src: "/images/sun-masala-powder-bowls.jpeg", alt: "Garam masala powders in bowls and spoons" },
  { src: "/images/sun-whole-spice-sacks.jpeg", alt: "Whole spices in jute sacks" },
  { src: "/images/sun-mixed-nuts-bowls.jpeg", alt: "Mixed nuts in bowls" },
  { src: "/images/s-cinnamon-dalchini.jpeg", alt: "Cinnamon sticks close-up" },
  { src: "/images/s-black-cardamom.jpeg", alt: "Black cardamom close-up" },
  { src: "/images/s-mace-javitri.jpeg", alt: "Mace spice close-up" },
  { src: "/images/s-green-cardamom-plant.jpeg", alt: "Green cardamom growing on plant" },
  { src: "/images/s-nutmeg-jaiphal.jpeg", alt: "Whole nutmeg close-up" },
  { src: "/images/s-almonds.jpeg", alt: "Premium almonds close-up" },
  { src: "/images/s-golden-raisins.jpeg", alt: "Golden raisins close-up" },
  { src: "/images/grass-broom-green-handles.jpeg", alt: "Grass broom with green handles" },
  {
    src: "/images/grass-broom-finished-bands.jpeg",
    alt: "Finished grass brooms with colour bands",
  },
  { src: "/images/grass-broom-blue-handles.jpeg", alt: "Grass brooms with blue handles" },
  { src: "/images/grass-broom-heads-tied.jpeg", alt: "Hand-tied grass broom heads" },
  { src: "/images/grass-raw-bundles-standing.jpeg", alt: "Raw grass bundles standing" },
  { src: "/images/grass-raw-bundles-indoor.jpeg", alt: "Raw grass bundles stored indoors" },
  { src: "/images/grass-raw-field-piles.jpeg", alt: "Raw grass piles in the field" },
  { src: "/images/grass-raw-sticks-outdoor.jpeg", alt: "Raw grass sticks kept outdoors" },
  { src: "/images/coconut-broom-raw-bundles.jpeg", alt: "Coconut broom raw bundles" },
  { src: "/images/coconut-broom-stacks-outdoor.jpeg", alt: "Coconut broom stacks outdoors" },
  { src: "/images/spice-garam-masala-collage.jpeg", alt: "Garam masala whole spice collage" },
  { src: "/images/spice-cloves-closeup.jpeg", alt: "Whole cloves close-up" },
  { src: "/images/spice-green-cardamom.jpeg", alt: "Green cardamom pods" },
  { src: "/images/makhana-bowl.jpeg", alt: "Dried fruit presented in a bowl" },
  { src: "/images/makhana-pile-bulk.jpeg", alt: "Dried fruit pile in bulk" },
  { src: "/images/makhana-sack-bulk.jpeg", alt: "Dried fruit sack in bulk" },
  { src: "/images/cashew-closeup.jpeg", alt: "Premium cashews close-up" },
  { src: "/images/cashew-scoop.jpeg", alt: "Cashews in a scoop" },
  { src: "/images/mixed-dry-fruits-nuts.jpeg", alt: "Mixed dry fruits and nuts" },
];
