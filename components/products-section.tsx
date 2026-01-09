"use client";

import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsSection() {
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
              <Link href={`/productos/${product.id}`}>
                <div className="relative h-80 rounded-lg overflow-hidden bg-muted cursor-pointer">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="space-y-2 mt-4">
                <p className="text-xs text-[#1f2937] font-semibold uppercase tracking-wider">
                  {product.category}
                </p>
                <Link href={`/productos/${product.id}`}>
                  <h3 className="text-lg font-bold text-foreground hover:text-primary transition cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Price and CTA */}
              <div className="flex items-end justify-between pt-4">
                <span className="text-xl font-bold text-foreground">
                  {product.price}
                </span>
                <Link
                  href={`/productos/${product.id}`}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-[#DADDE3] transition"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
