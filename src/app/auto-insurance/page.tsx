import type { Metadata } from "next";
import { TopBar } from "@/components/common/TopBar";
import { Header } from "@/components/header/Header";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { TypicallyCoveredSection } from "@/components/services/TypicallyCoveredSection";
import { BundleSavingsCtaSection } from "@/components/services/BundleSavingsCtaSection";
import { GettingCoveredStepsSection } from "@/components/services/GettingCoveredStepsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CallbackSection } from "@/components/callback/CallbackSection";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Auto Insurance | Christian Martinez Mairena Insurance Agency, Inc.",
  description:
    "Protect what matters most on California roads. Explore customized auto insurance coverage and bundling options with Christian Martinez Mairena in San Jose, CA.",
};

export default function AutoInsurancePage() {
  return (
    <>
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header */}
      <Header />

      {/* 3. Service Hero Section */}
      <ServiceHeroSection />

      {/* 4. What's Typically Covered Section */}
      <TypicallyCoveredSection />

      {/* 5. Bundling CTA Section */}
      <BundleSavingsCtaSection />

      {/* 6. Getting Covered Takes 3 Steps Section */}
      <GettingCoveredStepsSection />

      {/* 7. Questions & Answers (FAQ) Section */}
      <FaqSection />

      {/* 8. Callback Request Section */}
      <CallbackSection />

      {/* 9. Footer */}
      <Footer />
    </>
  );
}

