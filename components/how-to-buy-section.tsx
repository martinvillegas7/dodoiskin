"use client";

export default function HowToBuySection() {
  const steps = [
    {
      number: "01",
      title: "Escríbenos por WhatsApp",
      description: "Inicia una conversación con nuestro equipo",
    },
    {
      number: "02",
      title: "Te ayudamos a elegir",
      description: "Recomendaciones según tu tipo de piel",
    },
    {
      number: "03",
      title: "Confirma tu pedido",
      description: "Datos de envío y forma de pago",
    },
    {
      number: "04",
      title: "Recibe tu rutina",
      description: "Y comienza tu transformación",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Cómo comprar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-4">
              {/* Step number */}
              <div className="text-5xl font-bold text-muted-foreground">
                {step.number}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-6 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/+573127114622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-[#DADDE3] transition"
          >
            Iniciar chat en WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
