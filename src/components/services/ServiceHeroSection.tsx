"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuoteModal } from "@/components/common/QuoteModal";

export function ServiceHeroSection() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div>
      {/* 1. Service Hero Main (Dark Green Background) */}
      <section className="relative bg-primary pt-[36px] sm:pt-[44px] md:pt-[56px] xl:pt-[64px] pb-[36px] md:pb-0">
        <Container>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5 lg:gap-8 xl:gap-10">
            {/* Left Column: Content (Breadcrumb, Heading, Description, Button) */}
            <div className="w-full md:flex-1 xl:w-[560px] xl:shrink-0 pb-0 md:pb-[20px] lg:pb-[24px]">
              {/* Breadcrumb */}
              <p className="text-base text-[#DBD0C4] font-normal mb-[14px] sm:mb-[18px]">
                Personal / Auto Insurance
              </p>

              {/* Heading */}
              <h1 className="font-heading md:text-[45px] text-[32px] text-white leading-tight">
                Auto Insurance
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-[16px] sm:mt-[20px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[34px] md:leading-[38px] text-white max-w-[530px] font-normal">
                Most auto policies stop at the state minimum. We start with what
                you actually have to protect, then build coverage — and a price —
                around that, with an easy way to bundle in home for more savings.
              </p>

              {/* Get Quote Button */}
              <div className="mt-[28px] sm:mt-[36px] flex justify-start">
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="h-[48px] sm:h-[50px] px-[28px] bg-secondary hover:bg-[#a88250] active:bg-[#997342] text-white text-base font-medium rounded-none inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  Get an Auto quote
                </button>
              </div>
            </div>

            {/* Right Column: Service Photo (Overlaps bottom white section on desktop) */}
            <div className="w-full md:w-[380px] lg:w-[480px] xl:w-[620px] shrink-0 flex justify-center md:justify-end mt-[20px] md:mt-0">
              <div className="relative -mb-[96px] md:-mb-[70px] lg:-mb-[110px] xl:-mb-[140px] z-20 w-full max-w-[620px]">
                <Image
                  src="/service-right-img.jpg"
                  alt="Auto Insurance - Christian Martinez Mairena Insurance Agency"
                  width={624}
                  height={452}
                  priority
                  className="w-full h-auto block object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Farmers Endorsement (White Bottom Bar) */}
      <section className="bg-white md:pt-[24px] pt-[96px] pb-[40px] md:pb-[50px]">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Farmers Logo & Text on Left */}
            <div className="w-full lg:w-[560px] shrink-0 flex items-center gap-[20px] sm:gap-6">
              <Image
                src="/farmers-logo.png"
                alt="Farmers Insurance"
                width={92}
                height={49}
                className="h-auto md:w-auto w-[37%]"
              />
              <p className="text-base text-[#7A7A7A]">
                Proudly serving as your local Farmers<sup>®</sup>{" "}
                <br className="hidden sm:inline" /> Insurance Agent.
              </p>
            </div>

            {/* Spacer matching photo width on Right (Desktop only) */}
            <div
              className="hidden lg:block lg:w-[480px] xl:w-[620px] shrink-0"
              aria-hidden="true"
            />
          </div>
        </Container>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialType="Auto"
      />
    </div>
  );
}

