import { TopBar } from "@/components/common/TopBar";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { MeetAgentSection } from "@/components/agent/MeetAgentSection";
import { WhatWeCoverSection } from "@/components/coverage/WhatWeCoverSection";
import { TestimonialsSlider } from "@/components/testimonials/TestimonialsSlider";
import { QuoteCtaSection } from "@/components/cta/QuoteCtaSection";
import { ReachOutSection } from "@/components/contact/ReachOutSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CallbackSection } from "@/components/callback/CallbackSection";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      {/* 1. Top Bar (Call & Language) */}
      <TopBar />

      {/* 2. Header (Logo & Navigation) */}
      <Header />

      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Meet Your Local Agent Section */}
      <MeetAgentSection />

      {/* 5. What We Cover Section */}
      <WhatWeCoverSection />

      {/* 6. Testimonials Slider Section */}
      <TestimonialsSlider />

      {/* 7. Quote CTA Banner Section */}
      <QuoteCtaSection />

      {/* 8. Reach Out / Contact Section */}
      <ReachOutSection />

      {/* 9. FAQ / Questions & Answers Section */}
      <FaqSection />

      {/* 10. Callback Request Section */}
      <CallbackSection />

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
