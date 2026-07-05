import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import ServicesScroll from "@/components/ServicesScroll";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <ServicesScroll />

      <TestimonialSlider />

      <ProcessSection />

      <FaqSection />
      <ContactSection />
    </>
  );
}
