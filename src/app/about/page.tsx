import type { Metadata } from "next";
import { TopBar } from "@/components/common/TopBar";
import { Header } from "@/components/header/Header";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { FoundationTrustSection } from "@/components/about/FoundationTrustSection";
import { QuoteCtaSection } from "@/components/cta/QuoteCtaSection";
import { MeetTeamSection } from "@/components/about/MeetTeamSection";
import { CallbackSection } from "@/components/callback/CallbackSection";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "About Us | Christian Martinez Mairena Insurance Agency, Inc.",
  description:
    "Learn about Christian Martinez Mairena Insurance Agency, Inc. in San Jose, CA. Dedicated to protecting Bay Area families and businesses with transparent, honest insurance guidance since 2012.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header */}
      <Header />

      {/* 3. About Hero Section */}
      <AboutHeroSection />

      {/* 4. Core Values & Mission Section */}
      <CoreValuesSection />

      {/* 5. A Foundation of Trust & Industry Recognition Section */}
      <FoundationTrustSection />

      {/* 6. Quote CTA Banner Section */}
      <QuoteCtaSection />

      {/* 7. Meet the Team Section (with 3D Flip Cards on Hover) */}
      <MeetTeamSection />

      {/* 8. Callback Request Section */}
      <CallbackSection />

      {/* 9. Footer */}
      <Footer />
    </>
  );
}
