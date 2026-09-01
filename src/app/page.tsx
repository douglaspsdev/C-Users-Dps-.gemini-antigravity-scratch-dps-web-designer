import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import TargetAudience from "@/components/TargetAudience";
import Process from "@/components/Process";
import InteractiveBudgetCalculator from "@/components/InteractiveBudgetCalculator";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <Differentials />
        <TargetAudience />
        <Process />
        <InteractiveBudgetCalculator />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
