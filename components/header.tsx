"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="bg-muted text-muted-foreground text-center py-2 text-sm">
        ENVÍOS A TODO COLOMBIA · ASESORÍA PERSONALIZADA POR WHATSAPP
      </div>

      {/* Main header */}
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight text-foreground">do do i</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#productos" className="text-sm text-foreground hover:text-primary transition">
              Productos
            </Link>
            <Link href="#sobre" className="text-sm text-foreground hover:text-primary transition">
              Sobre nosotros
            </Link>
            <Link href="#faq" className="text-sm text-foreground hover:text-primary transition">
              Preguntas
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition hidden md:block">
              <Search size={20} className="text-foreground" />
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Escribir
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link href="#productos" className="text-sm text-foreground hover:text-primary transition">
              Productos
            </Link>
            <Link href="#sobre" className="text-sm text-foreground hover:text-primary transition">
              Sobre nosotros
            </Link>
            <Link href="#faq" className="text-sm text-foreground hover:text-primary transition">
              Preguntas
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
