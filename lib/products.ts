export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  images?: string[]; // Imágenes adicionales para la página de detalle
}

export const products: Product[] = [
  {
    id: 1,
    name: "SKIN1004 Madagascar Centella Light Cleansing Oil",
    category: "Aceite limpiador",
    description: "Piel sensible, deshidratada",
    price: "$94.800",
    image: "/skin1004-cleanser-centella-light-cleansing-oil.jpg",
    images: [
      "/skin1004-cleanser-centella-light-cleansing-oil.jpg",
      "/skin1004-cleanser-centella-light-cleansing-oil-2.jpg",
      "/skin1004-cleanser-centella-light-cleansing-oil-3.jpg",
    ],
  },
  {
    id: 2,
    name: "SKIN1004 Madagascar Centella Tea-Trica BHA Foam",
    category: "Foam limpiador",
    description: "Piel con imperfecciones, con BHA",
    price: "$75.000",
    image: "/skin1004-tea-trica-bha-foam.png",
    images: [
      "/skin1004-tea-trica-bha-foam.png",
      "/skin1004-tea-trica-bha-foam-2.jpg",
      "/skin1004-tea-trica-bha-foam-3.png",
    ],
  },
  {
    id: 3,
    name: "SKIN1004 Madagascar Centella Tea-Trica Purifying Toner",
    category: "Tónico purificante",
    description: "Piel con imperfecciones, purificante",
    price: "$91.900",
    image:
      "/skin1004-ampoule-serum-210ml-coming-soon-tea-trica-purifying-toner.png",
    images: [
      "/skin1004-ampoule-serum-210ml-coming-soon-tea-trica-purifying-toner.png",
      "/skin1004-toner-210ml-tea-trica-purifying-toner-2.jpg",
      "/skin1004-toner-210ml-tea-trica-purifying-toner-3.png",
    ],
  },
  {
    id: 4,
    name: "SKIN1004 Madagascar Centella Poremizing Clear Toner",
    category: "Tónico clarificante",
    description: "Piel con poros, clarificante",
    price: "$86.800",
    image: "/skin1004-toner-poremizing-clear-toner.png",
    images: [
      "/skin1004-toner-poremizing-clear-toner.png",
      "/skin1004-toner-210ml-coming-soon-poremizing-clear-toner-2.png",
      "/skin1004-toner-210ml-coming-soon-poremizing-clear-toner-3.png",
    ],
  },
  {
    id: 5,
    name: "SKIN1004 Madagascar Centella Probio-Cica Bakuchiol Eye Cream",
    category: "Crema para ojos",
    description: "Contorno de ojos, con bakuchiol",
    price: "$84.800",
    image: "/skin1004-cream-probio-cica-bakuchiol-eye-cream.png",
    images: [
      "/skin1004-cream-probio-cica-bakuchiol-eye-cream.png",
      "/skin1004-cream-probio-cica-bakuchiol-eye-cream-2.png",
      "/skin1004-cream-probio-cica-bakuchiol-eye-cream-3.png",
    ],
  },
  {
    id: 6,
    name: "SKIN1004 Madagascar Centella Poremizing Quick Clay Stick Mask",
    category: "Mascarilla de arcilla",
    description: "Piel con poros, mascarilla en stick",
    price: "$86.400",
    image: "/skin1004-poremizing-quick-clay-stick-mask.jpg",
    images: [
      "/skin1004-poremizing-quick-clay-stick-mask.jpg",
      "/skin1004-poremizing-quick-clay-stick-mask-2.jpg",
      "/skin1004-poremizing-quick-clay-stick-mask-3.jpg",
    ],
  },
];
