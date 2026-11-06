"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const personalCoverages = [
  { name: "Auto", icon: "/auto-icon.svg" },
  { name: "Home", icon: "/house.svg" },
  { name: "Renters", icon: "/renters-icon.svg" },
  { name: "Condo", icon: "/condo-icon.svg" },
  { name: "Mobile Home", icon: "/mobile-home-icon.svg" },
  { name: "Life", icon: "/heart.svg" },
  { name: "Motorcycle", icon: "/Motorcycle.svg" },
  { name: "Boat", icon: "/boat-icon.svg" },
  { name: "Trailer", icon: "/trailer.svg" },
];

const businessCoverages = [
  { name: "Commercial Auto", icon: "/auto-icon.svg" },
  { name: "Business Property", icon: "/house.svg" },
  { name: "General Liability", icon: "/checkmark.svg" },
  { name: "Workers' Comp", icon: "/heart.svg" },
  { name: "Commercial", icon: "/condo-icon.svg" },
  { name: "Trailer & Fleet", icon: "/trailer.svg" },
];

export function WhatWeCoverSection() {
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");

  const currentCoverages =
    activeTab === "personal" ? personalCoverages : businessCoverages;

  return (
    <section
      id="coverage"
      className="relative bg-background py-[80px] lg:py-[100px] mt-[126px] md:mt-[150px] overflow-hidden"
    >
      {/* Background Logo: Bottom-Left, Natural Size (No width/height overrides) */}
      <div className="absolute md:block hidden bottom-0 left-0 pointer-events-none z-0 select-none">
        <Image
          src="/bg-logo.png"
          alt=""
          width={532}
          height={661}
          className="w-auto h-auto block"
          priority={false}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[60px] lg:gap-25">
          {/* Left Column: Heading, Description & Service Areas */}
          <div className="w-full">
            {/* Title */}
            <h2 className="font-heading md:text-[32px] text-[28px] text-black">
              What We Cover
            </h2>

            {/* Paragraph */}
            <p className="mt-[24px] text-base leading-[25px] text-black">
              From your car and home to your business, we build coverage around
              your life explained clearly, reviewed together, and backed by a
              team that&apos;s still here after you sign.
            </p>

            {/* Gold Divider Line */}
            <div className="md:w-[137px] w-[84px] h-[3px] bg-secondary md:mt-[50px] mt-[20px] md:mb-[24px] mb-[28px]" />

            {/* Service Area */}
            <div>
              <p className="text-base leading-[29px] text-prmary">
                <span className="font-semibold block">Serving the Greater Bay Area</span>
                San Jose · San Francisco · Palo Alto · Santa Clara · Sunnyvale ·
                Mountain View · San Mateo · Fremont
              </p>
            </div>
          </div>

          {/* Right Column: Tabs & 3x3 Boxes Grid */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-start">
            {/* Tabs (Personal / Business) */}
            <div className="flex items-center gap-[24px] md:mb-[28px] mb-[22px]">
              <button
                type="button"
                onClick={() => setActiveTab("personal")}
                className={`text-[22px] leading-[30px] font-medium pb-1 transition-all duration-150 cursor-pointer ${activeTab === "personal"
                  ? "text-black border-b-[2.5px] border-[#9F7E00]"
                  : "text-[#A5A389] hover:text-black"
                  }`}
              >
                Personal
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("business")}
                className={`text-[22px] leading-[30px] font-normal pb-1 transition-all duration-150 cursor-pointer ${activeTab === "business"
                  ? "text-black border-b-[2.5px] border-[#9F7E00]"
                  : "text-[#A5A389] hover:text-black"
                  }`}
              >
                Business
              </button>
            </div>

            {/* Boxes Grid: 170x170px, 25px gap, default bg-primary, hover bg-accent, text-white, text-[18px] */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-[25px] gap-[20px]">
              {currentCoverages.map((item) => (
                <div
                  key={item.name}
                  className="w-[170px] h-[170px] bg-primary hover:bg-accent transition-colors duration-200 flex flex-col items-center justify-center cursor-default rounded-none shadow-sm"
                >
                  <div className="flex items-center justify-center mb-3.5">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={60}
                      height={50}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <span className="text-[18px] text-center text-white font-normal px-2">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

