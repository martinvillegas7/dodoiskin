"use client"

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "SKIN1004 Madagascar Centella",
      category: "Tónico hidratante",
      description: "Piel sensible, deshidratada",
      price: "$89.000",
      image: "/skin1004-madagascar-centella-t-nico.jpg",
    },
    {
      id: 2,
      name: "SKIN1004 Hyaluronic Acid Toner",
      category: "Hidratación profunda",
      description: "Todos los tipos de piel",
      price: "$95.000",
      image: "/hyaluronic-acid-toner-skincare-coreano.jpg",
    },
    {
      id: 3,
      name: "SKIN1004 Ectoin Cream",
      category: "Crema protectora",
      description: "Piel sensible, irritada",
      price: "$125.000",
      image: "/ectoin-cream-skincare-protecci-n.jpg",
    },
    {
      id: 4,
      name: "SKIN1004 Sunyatta Cream",
      category: "Crema nutritiva",
      description: "Piel seca, madura",
      price: "$135.000",
      image: "/sunyatta-cream-moisturizer-skincare.jpg",
    },
    {
      id: 5,
      name: "SKIN1004 Barrier Cream",
      category: "Reparación de barrera",
      description: "Piel sensible, reactiva",
      price: "$119.000",
      image: "/barrier-cream-repair-skincare-coreano.jpg",
    },
    {
      id: 6,
      name: "SKIN1004 Serum Set",
      category: "Kit de serums",
      description: "Tratamiento completo",
      price: "$199.000",
      image: "/serum-set-skincare-coreano-collection.jpg",
    },
  ]

  return (
    <section id="productos" className="py-24 px-4 md:px-6 lg:px-8 bg-background">
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
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">{product.category}</p>
                <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>

              {/* Price and CTA */}
              <div className="flex items-end justify-between pt-4">
                <span className="text-xl font-bold text-foreground">{product.price}</span>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition"
                >
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
