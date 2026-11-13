"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ContactHeroSection() {
  return (
    <div>
      {/* 1. Contact Hero Main (Dark Green Background) */}
      <section className="relative bg-primary pt-[36px] sm:pt-[44px] md:pt-[56px] xl:pt-[64px] pb-[36px] md:pb-0">
        <Container>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5 lg:gap-8 xl:gap-[50px]">
            {/* Left Column: Content (Heading & Description) */}
            <div className="w-full md:flex-1 xl:w-[560px] xl:shrink-0 pb-0 md:pb-[40px] lg:pb-[56px] xl:pb-[70px]">
              {/* Heading */}
              <h1 className="font-heading md:text-[45px] text-[32px] text-white">
                Contact
              </h1>

              {/* Description */}
              <p className="mt-[16px] sm:mt-[20px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] leading-[28px] sm:leading-[34px] md:leading-[38px] text-white max-w-[530px]">
                Whether you need a new quote, have a question about your policy,
                or just want to say hello, our team is here to help. We aim to
                respond within one business day.
              </p>
            </div>

            {/* Right Column: Landscape Photo (Overlaps bottom white section on desktop) */}
            <div className="w-full md:w-[380px] lg:w-[480px] xl:w-[620px] shrink-0 flex justify-center md:justify-end mt-[20px] md:mt-0">
              <div className="relative -mb-[96px] md:-mb-[50px] lg:-mb-[72px] xl:-mb-[96px] z-20 w-full max-w-[620px]">
                <Image
                  src="/hero-contact-img.jpg"
                  alt="Christian Martinez Mairena Insurance Agency - Contact"
                  width={624}
                  height={379}
                  priority
                  className="w-full lg:h-[380px] h-auto block object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Farmers Endorsement (White Bottom Bar) */}
      <section className="bg-white md:pt-[24px] pt-[96px] ">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Farmers Logo & Text on Left */}
            <div className="w-full lg:w-[560px] shrink-0 flex items-center gap-[20px] sm:gap-6">
              <Image
                src="/farmers-logo.png"
                alt="Farmers Insurance"
                width={92}
                height={49}
                className="h-auto"
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
    </div>
  );
}

