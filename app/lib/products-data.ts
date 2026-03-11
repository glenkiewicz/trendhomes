export const productCategories = [
  {
    group: "Okna",
    items: [
      { name: "Okna PCV", href: "/produkty/okna", image: "/images/product-okna.png" },
      { name: "Okna Aluminiowe", href: "/produkty/okna-aluminiowe", image: "/images/product-okna.png" },
      { name: "Okna Drewniane", href: "/produkty/okna-drewniane", image: "/images/product-okna.png" },
      { name: "Okna Stalowe / Loftowe", href: "/produkty/okna-stalowe", image: "/images/product-okna.png" },
    ],
  },
  {
    group: "Drzwi",
    items: [
      { name: "Drzwi Zewnętrzne", href: "/produkty/drzwi", image: "/images/product-drzwi.png" },
      { name: "Drzwi Wewnętrzne", href: "/produkty/drzwi-wewnetrzne", image: "/images/product-drzwi.png" },
      { name: "Drzwi Tarasowe Przesuwne", href: "/produkty/drzwi-tarasowe", image: "/images/product-drzwi-tarasowe.png" },
      { name: "Drzwi Stalowe / Loftowe", href: "/produkty/drzwi-stalowe", image: "/images/product-drzwi.png" },
      { name: "Drzwi Aluminiowe", href: "/produkty/drzwi-aluminiowe", image: "/images/product-drzwi.png" },
    ],
  },
  {
    group: "Inne",
    items: [
      { name: "Rolety i Osłony", href: "/produkty/rolety", image: "/images/product-rolety.png" },
      { name: "Pergole i Ogrody zimowe", href: "/produkty/pergole", image: "/images/product-pergole.png" },
      { name: "Stolarka dla biznesu", href: "/produkty/dla-biznesu", image: "/images/product-biznes.png" },
    ],
  },
];

// Flat list for backward compatibility
export const allProductLinks = productCategories.flatMap((g) => g.items);

// Main product groups for homepage
export const mainProducts = [
  { name: "Okna", href: "/produkty/okna", image: "/images/product-okna.png" },
  { name: "Drzwi", href: "/produkty/drzwi", image: "/images/product-drzwi.png" },
  { name: "Drzwi Tarasowe", href: "/produkty/drzwi-tarasowe", image: "/images/product-drzwi-tarasowe.png" },
  { name: "Rolety i Osłony", href: "/produkty/rolety", image: "/images/product-rolety.png" },
  { name: "Pergole", href: "/produkty/pergole", image: "/images/product-pergole.png" },
  { name: "Dla biznesu", href: "/produkty/dla-biznesu", image: "/images/product-biznes.png" },
];
