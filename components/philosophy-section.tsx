"use client"

export default function PhilosophySection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Image */}
          <div className="h-96 rounded-xl overflow-hidden bg-muted">
            <img src="/mujer-aplicando-skincare-coreano.jpg" alt="Skincare ritual" className="w-full h-full object-cover" />
          </div>

          {/* Center Content */}
          <div className="space-y-6 text-center lg:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestra filosofía de cuidado</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Priorizamos ingredientes suaves pero efectivos, rutinas sostenibles y un enfoque en el cuidado a largo
              plazo. Cada producto está pensado para nutrir tu piel y potenciar tu brillo natural.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-semibold hover:underline transition"
            >
              Conoce más y escríbenos →
            </a>
          </div>

          {/* Right Image */}
          <div className="h-96 rounded-xl overflow-hidden bg-muted">
            <img src="/productos-skincare-minimalista-packaging-elegante.jpg" alt="Productos filosofía" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
