import Header from "@/components/header";
import Hero from "@/components/hero";
import VisualBlocks from "@/components/visual-blocks";
import AboutSection from "@/components/about-section";
import PhilosophySection from "@/components/philosophy-section";
import BenefitsSection from "@/components/benefits-section";
import ProductsSection from "@/components/products-section";
import HowToBuySection from "@/components/how-to-buy-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import SectionWrapper from "@/components/section-wrapper";
// import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SectionWrapper>
        <ProductsSection />
      </SectionWrapper>
      <SectionWrapper delay={100}>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper delay={200}>
        <VisualBlocks />
      </SectionWrapper>
      <SectionWrapper delay={100}>
        <PhilosophySection />
      </SectionWrapper>
      <SectionWrapper delay={200}>
        <BenefitsSection />
      </SectionWrapper>
      <SectionWrapper delay={100}>
        <HowToBuySection />
      </SectionWrapper>
      <SectionWrapper delay={200}>
        <TestimonialsSection />
      </SectionWrapper>
      <SectionWrapper delay={100}>
        <FAQSection />
      </SectionWrapper>
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}
