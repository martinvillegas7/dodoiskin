"use client";

export default function VisualBlocks() {
  const blocks = [
    {
      id: 1,
      title: "Rutinas personalizadas",
      description: "Diseñadas según tu tipo de piel",
      image: "/rutina-personalizada.webp",
      cta: "Asesoría personalizada",
    },
    {
      id: 2,
      title: "Productos SKIN1004 originales",
      description: "100% auténticos y de calidad",
      image: "/skin1004-original.webp",
      cta: "Ver colección",
    },
    {
      id: 3,
      title: "Skincare para todo tipo de piel",
      description: "Sensible, grasa, mixta o seca",
      image: "/toda-piel.jpg",
      cta: "Descubre tu rutina",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block) => (
            <div key={block.id} className="space-y-6">
              {/* Image */}
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-muted">
                <img
                  src={block.image || "/placeholder.svg"}
                  alt={block.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {block.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {block.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/+573127114622"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-[#1f2937] font-semibold text-sm hover:underline transition"
              >
                {block.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
