"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-br from-background via-background to-accent/5">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-5 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            DO DO I
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Belleza consciente, piel real.
          </h2>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Traemos a Colombia lo mejor del skin care coreano con SKIN1004, una
            marca reconocida por su pureza, innovación y respeto por la piel.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="https://wa.me/+573127114622"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-[#DADDE3] transition text-center"
            >
              Escríbenos por WhatsApp
            </a>
            <a
              href="#productos"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold text-lg hover:bg-[#D8E6DE] transition text-center"
            >
              Ver productos
            </a>
          </div>
        </div>

        {/* Right - Product Image Placeholder */}
        <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-muted">
          <img
            src="/Centella.webp"
            alt="Centella asiática muestra"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
