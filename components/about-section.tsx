"use client"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Sobre do do i</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos una marca enfocada en traer skincare coreano original y de calidad a Colombia. Creemos que la belleza
            verdadera viene del cuidado consistente y los ingredientes adecuados.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {[
            { icon: "✓", title: "Productos 100% originales", desc: "Distribuidores oficiales de SKIN1004" },
            { icon: "✓", title: "Asesoría personalizada", desc: "Según tu tipo de piel" },
            { icon: "✓", title: "Envíos a nivel nacional", desc: "Rápidos y seguros" },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl text-primary">{item.icon}</div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
        >
          Hablar con una asesora por WhatsApp
        </a>
      </div>
    </section>
  )
}
