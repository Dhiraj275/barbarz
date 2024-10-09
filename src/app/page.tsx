import AboutUsSection from "@/components/AboutUsSection";
import BestBarber from "@/components/BestBarber";
import BlogsSection from "@/components/BlogsSection";
import ClientSection from "@/components/ClientSection";
import ContactSection from "@/components/ContactSection";
import CoverSection from "@/components/CoverSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <CoverSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <BestBarber />
      <BlogsSection />
      <ClientSection />
      <WorkSection />
      <Footer />
    </>
  );
}
