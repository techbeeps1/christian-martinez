"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const [zipCode, setZipCode] = useState("");

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim()) {
      alert(`Quote requested with ZIP: ${zipCode}`);
    }
  };

  return (
    <div>
      {/* Hero Main (Dark Green Background) */}
      <section className="relative bg-primary pt-[48px] pb-0">
        <Container>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
            {/* Left Column: Natural Size Image Overlapping Downward by exact 96px */}
            <div className="w-full lg:w-[620px] shrink-0 order-2 lg:order-1 flex justify-start">
              <div className="relative lg:-mb-[96px] z-20">
                <Image
                  src="/hero-img.jpg"
                  alt="Christian Martinez Mairena Insurance Agency Team"
                  width={620}
                  height={606}
                  priority
                  className="w-full lg:w-[620px] h-auto lg:h-[606px] block"
                />
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="w-full lg:w-[560px] shrink-0 order-1 lg:order-2 pb-[43px]">
              {/* Heading */}
              <h1 className="font-heading text-[45px] leading-[1.15] text-white">
                Insurance built around your life,{" "}
                <span className="text-accent block sm:inline">right here in San Jose</span>
              </h1>

              {/* 3 Categories: Auto, Home, Life (170x170px, 25px gap, default #3C5451, hover accent) */}
              <div className="mt-[28px] flex items-center gap-[25px]">
                {/* Auto Box */}
                <div className="w-[170px] h-[170px] bg-[#3C5451] hover:bg-accent transition-colors duration-200 flex flex-col items-center justify-center cursor-default">
                  <div className="flex items-center justify-center mb-3.5">
                    <Image
                      src="/auto-icon.svg"
                      alt="Auto"
                      width={68}
                      height={46}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <span className="text-[18px] text-center text-white font-normal">Auto</span>
                </div>

                {/* Home Box */}
                <div className="w-[170px] h-[170px] bg-[#3C5451] hover:bg-accent transition-colors duration-200 flex flex-col items-center justify-center cursor-default">
                  <div className="flex items-center justify-center mb-3.5">
                    <Image
                      src="/house.svg"
                      alt="Home"
                      width={60}
                      height={58}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <span className="text-[18px] text-center text-white font-normal">Home</span>
                </div>

                {/* Life Box */}
                <div className="w-[170px] h-[170px] bg-[#3C5451] hover:bg-accent transition-colors duration-200 flex flex-col items-center justify-center cursor-default">
                  <div className="flex items-center justify-center mb-3.5">
                    <Image
                      src="/heart.svg"
                      alt="Life"
                      width={61}
                      height={54}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <span className="text-[18px] text-center text-white font-normal">Life</span>
                </div>
              </div>

              {/* ZIP Form (Separate Input & Button with clean Gap) */}
              <form
                onSubmit={handleQuoteSubmit}
                className="mt-[28px] flex flex-col sm:flex-row items-stretch sm:items-center gap-[16px] sm:gap-3.5"
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
                  className="w-full flex-1 h-[50px] bg-white text-[#8A8A8A] px-[20px] text-base placeholder:text-[#8A8A8A] outline-none rounded-none focus:ring-1 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="h-[50px] px-[44px] duration-300 bg-secondary hover:bg-[#a88250] active:bg-[#997342] text-white text-base font-normal tracking-normal whitespace-nowrap cursor-pointer rounded-none flex items-center justify-center"
                >
                  Get a quote
                </button>
              </form>

              {/* 12 Years Badge */}
              <div className="mt-[24px]">
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
            <div className="w-full lg:w-[560px] shrink-0 flex flex-wrap items-center gap-[20px] sm:gap-6">
              <Image
                src="/farmers-logo.png"
                alt="Farmers Insurance"
                width={92}
                height={49}
                className="h-auto w-auto"
              />
              <p className="text-base text-[#7A7A7A]">
                Proudly serving as your local Farmers<sup>®</sup> <br /> Insurance Agent.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
