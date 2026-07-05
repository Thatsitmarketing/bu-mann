import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import ServicesScroll from "@/components/ServicesScroll";
import FadeTextCTA from "@/components/FadeTextCTA";
import Stats from "@/components/Stats";
import TeamSection from "@/components/TeamSection";
import ProcessSection from "@/components/ProcessSection";
import CareerTeaser from "@/components/CareerTeaser";
import FaqSection from "@/components/FaqSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <ServicesScroll />

      <FadeTextCTA
        words={[
          { text: "Ihr" },
          { text: "Zuhause" },
          { text: "verdient" },
          { text: "Technik," },
          { text: "die" },
          { text: "einfach" },
          { text: "funktioniert.", accent: true },
        ]}
        ctaLabel="Beratung anfragen"
        ctaHref="/kontakt"
      />

      <Stats />
      <ProcessSection />
      <TeamSection />
      <CareerTeaser />

      <FadeTextCTA
        variant="navy"
        words={[
          { text: "Energiewende" },
          { text: "beginnt" },
          { text: "zu" },
          { text: "Hause" },
          { text: "–" },
          { text: "mit" },
          { text: "null" },
          { text: "Stress,", accent: true },
          { text: "null" },
          { text: "Kompromissen.", accent: true },
        ]}
        ctaLabel="Jetzt Projekt starten"
        ctaHref="/kontakt"
      />

      <FaqSection />
      <TestimonialSlider />
      <ContactSection />
    </>
  );
}
