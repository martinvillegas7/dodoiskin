import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

interface RelatedProductsProps {
  products: Product[];
  currentProductId: number;
}

export default function RelatedProducts({
  products,
  currentProductId,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Productos relacionados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/productos/${product.id}`}
            className="group space-y-4 hover:opacity-90 transition"
          >
            {/* Product Image */}
            <div className="relative h-64 rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <p className="text-xs text-[#1f2937] font-semibold uppercase tracking-wider">
                {product.category}
              </p>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <div className="text-xl font-bold text-foreground">
                {product.price}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

