"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">DO DO I</h3>
            <p className="text-sm text-background/80">
              Skincare coreano original para tu rutina diaria.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#productos"
                  className="hover:text-[#1f2937] transition"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-primary transition">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition">
                  Preguntas
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold">Síguenos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/dodo_iskin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1f2937] transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+573127114622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1f2937] transition"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/+573127114622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1f2937] transition"
                >
                  Escríbenos por WhatsApp
                </a>
              </li>
              <li>Email: dodoiskincare1009@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© 2025 DO DO I. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
