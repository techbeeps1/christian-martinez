import type { Metadata } from "next";
import { TopBar } from "@/components/common/TopBar";
import { Header } from "@/components/header/Header";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactReachOutSection } from "@/components/contact/ContactReachOutSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CallbackSection } from "@/components/callback/CallbackSection";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Christian Martinez Mairena Insurance Agency, Inc.",
  description:
    "Get in touch with Christian Martinez Mairena Insurance Agency, Inc. in San Jose, CA. Whether you need a new quote, policy assistance, or have questions, our team is ready to help.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header */}
      <Header />

      {/* 3. Contact Hero Section */}
      <ContactHeroSection />

      {/* 4. Contact Details & Map Section */}
      <ContactReachOutSection />

      {/* 5. Discuss Coverage Form Section */}
      <ContactFormSection />

      {/* 6. Questions & Answers (FAQ) Section */}
      <FaqSection />

      {/* 7. Callback Request Section */}
      <CallbackSection />

      {/* 8. Footer */}
      <Footer />
    </>
  );
}

