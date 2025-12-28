"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Suscríbete a nuestro newsletter</h2>
          <p className="text-lg text-muted-foreground">
            Recibe consejos de skincare, productos nuevos y ofertas exclusivas directamente en tu email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="tu-email@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 border border-border rounded-full bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-[#DADDE3] transition whitespace-nowrap"
          >
            Suscribirse
          </button>
        </form>

        {submitted && (
          <p className="text-sm text-green-600 font-semibold">¡Gracias! Pronto recibirás nuestras novedades.</p>
        )}
      </div>
    </section>
  )
}
