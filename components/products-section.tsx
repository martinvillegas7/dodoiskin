"use client";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "SKIN1004 Madagascar Centella Light Cleansing Oil",
      category: "Aceite limpiador",
      description: "Piel sensible, deshidratada",
      price: "$94.800",
      image: "/skin1004-cleanser-centella-light-cleansing-oil.jpg",
    },
    {
      id: 2,
      name: "SKIN1004 Madagascar Centella Tea-Trica BHA Foam",
      category: "Foam limpiador",
      description: "Piel con imperfecciones, con BHA",
      price: "$75.000",
      image: "/skin1004-tea-trica-bha-foam.png",
    },
    {
      id: 3,
      name: "SKIN1004 Madagascar Centella Tea-Trica Purifying Toner",
      category: "Tónico purificante",
      description: "Piel con imperfecciones, purificante",
      price: "$91.900",
      image:
        "/skin1004-ampoule-serum-210ml-coming-soon-tea-trica-purifying-toner.png",
    },
    {
      id: 4,
      name: "SKIN1004 Madagascar Centella Poremizing Clear Toner",
      category: "Tónico clarificante",
      description: "Piel con poros, clarificante",
      price: "$86.800",
      image: "/skin1004-toner-poremizing-clear-toner.png",
    },
    {
      id: 5,
      name: "SKIN1004 Madagascar Centella Probio-Cica Bakuchiol Eye Cream",
      category: "Crema para ojos",
      description: "Contorno de ojos, con bakuchiol",
      price: "$84.800",
      image: "/skin1004-cream-probio-cica-bakuchiol-eye-cream.png",
    },
    {
      id: 6,
      name: "SKIN1004 Madagascar Centella Poremizing Quick Clay Stick Mask",
      category: "Mascarilla de arcilla",
      description: "Piel con poros, mascarilla en stick",
      price: "$86.400",
      image: "/skin1004-poremizing-quick-clay-stick-mask.jpg",
    },
  ];

  return (
    <section
      id="productos"
      className="py-24 px-4 md:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Nuestros favoritos de SKIN1004
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Productos cuidadosamente seleccionados para cada tipo de piel
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group space-y-4">
              {/* Product Image */}
              <div className="relative h-80 rounded-lg overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-xs text-[#1f2937] font-semibold uppercase tracking-wider">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Price and CTA */}
              <div className="flex items-end justify-between pt-4">
                <span className="text-xl font-bold text-foreground">
                  {product.price}
                </span>
                <a
                  href="https://wa.me/+573127114622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-[#DADDE3] transition"
                >
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
