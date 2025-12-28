"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Manuela Sánchez",
      type: "Piel sensible",
      comment:
        "Finalmente encontré productos que respetan mi piel. Los cambios son notables en dos semanas.",
      rating: 5,
    },
    {
      name: "Ana Isabel Aristizábal",
      type: "Piel mixta",
      description:
        "La asesoría personalizada fue clave. Me recomendaron una rutina perfecta para mí.",
      rating: 5,
    },
    {
      name: "Martín Villegas",
      type: "Piel grasa",
      comment:
        "Creía que skincare no era para mí hasta que probé do do i. Ahora es mi ritual diario.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Lo que dicen nuestras clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-muted/50 rounded-xl border border-border space-y-4"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#1f2937] text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground italic leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="space-y-1">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
