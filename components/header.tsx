"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProductPage = pathname?.startsWith("/productos/");

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="bg-muted text-muted-foreground text-center py-2 text-sm">
        ENVÍOS A TODO COLOMBIA · ASESORÍA PERSONALIZADA POR WHATSAPP
      </div>

      {/* Main header */}
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="DO DO I logo"
              width={90}
              height={24}
              className="h-4 md:h-6 lg:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {!isProductPage && (
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#productos"
                onClick={(e) => handleSmoothScroll(e, "#productos")}
                className="text-sm text-foreground hover:text-[#1f2937] transition"
              >
                Productos
              </Link>
              <Link
                href="#sobre"
                onClick={(e) => handleSmoothScroll(e, "#sobre")}
                className="text-sm text-foreground hover:text-[#1f2937] transition"
              >
                Sobre nosotros
              </Link>
              <Link
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "#faq")}
                className="text-sm text-foreground hover:text-[#1f2937] transition"
              >
                Preguntas
              </Link>
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition hidden md:block">
              <Search size={20} className="text-foreground" />
            </button>
            <a
              href="https://wa.me/+573127114622"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-[#DADDE3] transition"
            >
              Escribir
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && !isProductPage && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link
              href="#productos"
              onClick={(e) => handleSmoothScroll(e, "#productos")}
              className="text-sm text-foreground hover:text-[#1f2937] transition"
            >
              Productos
            </Link>
            <Link
              href="#sobre"
              onClick={(e) => handleSmoothScroll(e, "#sobre")}
              className="text-sm text-foreground hover:text-[#1f2937] transition"
            >
              Sobre nosotros
            </Link>
            <Link
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "#faq")}
              className="text-sm text-foreground hover:text-[#1f2937] transition"
            >
              Preguntas
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
