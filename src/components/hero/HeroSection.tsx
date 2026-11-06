"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuoteModal } from "@/components/common/QuoteModal";

export function HeroSection() {
  const [zipCode, setZipCode] = useState("");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Auto");

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
  };

  return (
    <div>
      {/* Hero Main (Dark Green Background) */}
      <section className="relative bg-primary pt-[28px] sm:pt-[36px] md:pt-[40px] xl:pt-[48px] pb-[32px] md:pb-0">
        <Container>
          <div className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 lg:gap-8 xl:gap-10">
            {/* Left Column: Team Photo (Appears below content on mobile, left on desktop) */}
            <div className="w-full md:w-[360px] lg:w-[480px] xl:w-[620px] shrink-0 order-2 md:order-1 flex justify-center md:justify-start mt-[30px] sm:mt-[28px] md:mt-0">
              <div className="relative md:-mb-[50px] lg:-mb-[72px] xl:-mb-[96px] z-20 w-full max-w-[620px]">
                <Image
                  src="/hero-img.jpg"
                  alt="Christian Martinez Mairena Insurance Agency Team"
                  width={620}
                  height={606}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Right Column: Hero Content (Appears on top on mobile, right on desktop) */}
            <div className="w-full md:flex-1 xl:w-[560px] xl:shrink-0 order-1 md:order-2 pb-0 md:pb-[32px] xl:pb-[43px]">
              {/* Heading */}
              <h1 className="font-heading text-[32px] lg:text-[36px] xl:text-[45px] leading-[1.18] text-white">
                Insurance built around
                your life, <span className="text-accent">right here in<br className="sm:hidden" /> San Jose</span>
              </h1>

              {/* 3 Categories: Auto, Home, Life */}
              <div className="mt-[30px] sm:mt-[24px] xl:mt-[28px] flex items-center gap-[10px] sm:gap-[14px] md:gap-[8px] lg:gap-[16px] xl:gap-[25px] md:justify-start justify-between">
                {/* Auto Box */}
                <div
                  onClick={() => setSelectedCategory("Auto")}
                  className={`flex-1 md:max-w-[170px] max-w-[110px] h-[110px] md:h-[95px] lg:h-[140px] xl:h-[170px] transition-colors duration-200 flex flex-col items-center justify-center cursor-pointer ${
                    selectedCategory === "Auto" ? "bg-accent" : "bg-[#3C5451] hover:bg-accent/80"
                  }`}
                >
                  <div className="flex items-center justify-center mb-[15px] lg:mb-[40px]">
                    <Image
                      src="/auto-icon.svg"
                      alt="Auto"
                      width={68}
                      height={46}
                      className="w-auto h-[26px] lg:h-[38px] xl:h-[46px] object-contain"
                    />
                  </div>
                  <span className=" text-lg lg:text-[16px] xl:text-lg text-center text-white font-normal">Auto</span>
                </div>

                {/* Home Box */}
                <div
                  onClick={() => setSelectedCategory("Home")}
                  className={`flex-1 md:max-w-[170px] max-w-[110px] h-[110px] md:h-[95px] lg:h-[140px] xl:h-[170px] transition-colors duration-200 flex flex-col items-center justify-center cursor-pointer ${
                    selectedCategory === "Home" ? "bg-accent" : "bg-[#3C5451] hover:bg-accent/80"
                  }`}
                >
                  <div className="flex items-center justify-center mb-[15px] lg:mb-[40px]">
                    <Image
                      src="/house.svg"
                      alt="Home"
                      width={60}
                      height={58}
                      className="w-auto h-[26px] lg:h-[38px] xl:h-[46px] object-contain"
                    />
                  </div>
                  <span className="text-lg lg:text-[16px] xl:text-lg text-center text-white font-normal">Home</span>
                </div>

                {/* Life Box */}
                <div
                  onClick={() => setSelectedCategory("Life")}
                  className={`flex-1 md:max-w-[170px] max-w-[110px] h-[110px] md:h-[95px] lg:h-[140px] xl:h-[170px] transition-colors duration-200 flex flex-col items-center justify-center cursor-pointer ${
                    selectedCategory === "Life" ? "bg-accent" : "bg-[#3C5451] hover:bg-accent/80"
                  }`}
                >
                  <div className="flex items-center justify-center mb-[15px] lg:mb-[40px]">
                    <Image
                      src="/heart.svg"
                      alt="Life"
                      width={61}
                      height={54}
                      className="w-auto h-[26px] lg:h-[38px] xl:h-[46px] object-contain"
                    />
                  </div>
                  <span className="text-lg lg:text-[16px] xl:text-lg text-center text-white font-normal">Life</span>
                </div>
              </div>

              {/* ZIP Form (Stacked full width on mobile, inline on desktop) */}
              <form
                onSubmit={handleQuoteSubmit}
                className="mt-[34px]  md:mt-[30px] xl:mt-[36px] flex flex-col md:flex-row items-stretch md:items-center gap-[22px] md:gap-[16px]"
              >
                <label htmlFor="zip-code-input" className="sr-only">
                  Your ZIP code
                </label>
                <input
                  id="zip-code-input"
                  type="text"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Your ZIP code"
                  required
                  className="w-full  h-[50px] bg-white text-black placeholder:text-[#8A8A8A] px-[20px] text-base outline-none rounded-none focus:ring-1 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="w-full md:w-auto h-[50px] px-[20px] lg:px-[36px] xl:px-[44px] duration-300 bg-secondary hover:bg-[#a88250] active:bg-[#997342] text-white text-base font-normal tracking-normal whitespace-nowrap cursor-pointer rounded-none flex items-center justify-center"
                >
                  Get a quote
                </button>
              </form>

              {/* 12 Years Badge (Centered on mobile, left on desktop) */}
              <div className="mt-[33px] flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-[5px] rounded-full border border-[#69F7AE] px-[14px] py-[5px] text-xs text-[#69F7AE]">
                  <Image
                    src="/checkmark.svg"
                    alt="Certified"
                    width={18}
                    height={18}
                    className="h-auto w-auto"
                  />
                  <span className="text-base leading-[24px]">12 years in business</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Farmers Endorsement (White Bottom Bar) */}
      <section className="pt-[24px] pb-[40px]">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Spacer matching photo width */}
            <div className="hidden lg:block lg:w-[620px] shrink-0" aria-hidden="true" />

            {/* Farmers Logo & Text */}
            <div className="w-full lg:w-[560px] shrink-0 flex  items-center gap-[20px] sm:gap-6">
              <Image
                src="/farmers-logo.png"
                alt="Farmers Insurance"
                width={92}
                height={49}
                className="h-auto md:w-auto w-[37%]"
              />
              <p className="text-base text-[#7A7A7A]">
                Proudly serving as your local Farmers<sup>®</sup> <br className="hidden sm:inline" /> Insurance Agent.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialZipCode={zipCode}
        initialType={selectedCategory}
      />
    </div>
  );
}
