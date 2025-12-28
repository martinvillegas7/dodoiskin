"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Los productos son 100% originales?",
      answer:
        "Sí, somos distribuidores oficiales de SKIN1004. Todos nuestros productos llegan directamente del fabricante y cuentan con garantía de autenticidad.",
    },
    {
      question: "¿Hacen envíos a todo el país?",
      answer:
        "Sí, realizamos envíos a toda Colombia. Los tiempos varían según tu ubicación, generalmente de 2-5 días hábiles.",
    },
    {
      question: "¿Me ayudan a armar una rutina según mi tipo de piel?",
      answer:
        "Por supuesto, ese es nuestro fuerte. Nuestro equipo te asesorará personalmente por WhatsApp para crear tu rutina ideal.",
    },
    {
      question: "¿Cómo pago mi pedido?",
      answer:
        "Aceptamos transferencia bancaria, Nequi, Daviplata y otros métodos. Todo se coordina por WhatsApp con seguridad.",
    },
    {
      question: "¿Puedo devolver un producto?",
      answer:
        "Sí, contamos con política de devolución en los primeros 15 días si el producto no cumple con tus expectativas.",
    },
    {
      question: "¿Ofrecen muestras o kits de inicio?",
      answer: "Sí, disponemos de kits especiales para que comiences tu rutina con confianza. Consúltanos por WhatsApp.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Preguntas frecuentes</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-lg overflow-hidden bg-background transition">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition"
              >
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#1f2937] transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-muted/20 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
