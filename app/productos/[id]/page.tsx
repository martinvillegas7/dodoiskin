"use client";

import { useState, useRef } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products, Product } from "@/lib/products";
import Header from "@/components/header";
import Footer from "@/components/footer";
import RelatedProducts from "@/components/related-products";

function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === parseInt(id));
}

function getRelatedProducts(currentProduct: Product, limit: number = 6): Product[] {
  return products
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, limit);
}

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProduct(params.id as string);

  if (!product) {
    notFound();
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const relatedProducts = getRelatedProducts(product, 6);
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#productos" className="hover:text-foreground transition">
              Productos
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted group">
                <div
                  ref={imageRef}
                  className="relative w-full h-full cursor-zoom-in"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsZooming(true)}
                  onMouseLeave={() => setIsZooming(false)}
                >
                  <div
                    className="relative w-full h-full"
                    style={{
                      transform: isZooming ? "scale(1.5)" : "scale(1)",
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <Image
                      src={productImages[selectedImageIndex]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Navigation Arrows */}
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-opacity opacity-100 cursor-pointer"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-opacity opacity-100 cursor-pointer"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer transition-all ${
                        selectedImageIndex === idx
                          ? "ring-2 ring-foreground opacity-100"
                          : "hover:opacity-80 opacity-60"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - Vista ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6 mt-4 lg:mt-0">
              {/* Category */}
              <p className="text-xs text-[#1f2937] font-semibold uppercase tracking-wider">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {product.name}
              </h1>

              {/* Price */}
              <div className="text-3xl font-bold text-foreground">
                {product.price}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  Descripción
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/+573127114622?text=Hola, me interesa el producto: ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-[#DADDE3] transition text-center"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} currentProductId={product.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

