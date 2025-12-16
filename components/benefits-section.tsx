"use client"

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Rutinas suaves y efectivas",
      description: "Fórmulas que respetan tu piel",
    },
    {
      title: "Ingredientes de alta calidad",
      description: "Seleccionados cuidadosamente",
    },
    {
      title: "Para todo tipo de piel",
      description: "Sensible, grasa, mixta y seca",
    },
    {
      title: "Prevención y cuidado",
      description: "Enfoque a largo plazo",
    },
  ]

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Beneficios del skincare coreano
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-background rounded-xl border border-border space-y-3">
              <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
          >
            Quiero asesoría por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
