import React from "react";
import Navbar from "@/components/home/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import TrustIndicators from "@/components/home/TrustIndicators";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import DomesticPackages from "@/components/home/DomesticPackages";
import InternationalPackages from "@/components/home/InternationalPackages";
import OurServices from "@/components/home/OurServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VisaServices from "@/components/home/VisaServices";
import ReviewsSection from "@/components/home/ReviewsSection";
import ContactSection from "@/components/home/ContactSection";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />
      <HeroSlider />
      <FeaturedPackages />
      <DomesticPackages />
      <InternationalPackages />
      <OurServices />
      <WhyChooseUs />
      <VisaServices />
      <ReviewsSection />
      <ContactSection />
      <TrustIndicators />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}