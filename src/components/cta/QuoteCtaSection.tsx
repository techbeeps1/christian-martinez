"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function QuoteCtaSection() {
  const [zipCode, setZipCode] = useState("");

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim()) {
      alert(`Quote requested with ZIP: ${zipCode}`);
    }
  };

  return (
    <section className="relative py-[150px] md:mt-[150px] mt-[130px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/cta-bg-img.jpg"
        alt="Mountain Lake Forest Background"
        fill
        priority={false}
        className="object-cover object-center"
      />

      {/* Primary Overlay with 70% Opacity */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-[640px]">
          {/* Title */}
          <h2 className="font-heading text-[32px]  text-white">
            Get your free, no-obligation quote.
          </h2>

          {/* Subtext */}
          <p className="mt-[10px] text-lg text-white">
            Find the right coverage for your lifestyle without the hassle.
          </p>

          {/* ZIP Code Form (Exact Same Design & Properties as Hero Section) */}
          <form
            onSubmit={handleQuoteSubmit}
            className="mt-[35px] max-w-[557px] flex flex-col sm:flex-row items-stretch sm:items-center gap-[16px] sm:gap-3.5"
          >
            <label htmlFor="cta-zip-code" className="sr-only">
              Your ZIP code
            </label>
            <input
              id="cta-zip-code"
              type="text"
              pattern="[0-9]*"
              maxLength={5}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Your ZIP code"
              required
              className="w-full  h-[50px] bg-white text-[#8A8A8A] px-[20px] text-base placeholder:text-[#8A8A8A] outline-none rounded-none focus:ring-1 focus:ring-secondary"
            />
            <button
              type="submit"
              className="h-[50px] px-[44px] duration-300 bg-secondary hover:bg-[#a88250] active:bg-[#997342] text-white text-base font-normal tracking-normal whitespace-nowrap cursor-pointer rounded-none flex items-center justify-center"
            >
              Get a quote
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

