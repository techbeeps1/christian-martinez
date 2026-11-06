"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { FiChevronDown } from "react-icons/fi";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [personalDropdown, setPersonalDropdown] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-primary">
      <Container className="flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label={siteConfig.name}
        >
          <Image
            src="/logo.svg"
            alt={`${siteConfig.name} Insurance Agency, Inc.`}
            width={393}
            height={66}
            className="h-auto w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-[40px]"
        >
          {/* Personal Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPersonalDropdown(true)}
            onMouseLeave={() => setPersonalDropdown(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[18px] leading-[100%] tracking-[0%] text-white font-normal cursor-pointer py-3 hover:opacity-85 transition-opacity"
              aria-expanded={personalDropdown}
            >
              <span>Personal</span>
              <FiChevronDown
                className={`h-4 w-4 transition-transform duration-300 ease-out text-white ${personalDropdown ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown Menu (Zero Radius, Borderless, Smooth Animation) */}
            <div
              className={`absolute left-0 top-full pt-2.5 w-56 z-50 transition-all duration-200 ease-out origin-top-left ${personalDropdown
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
            >
              <div className="bg-[#223533]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/40">
                <Link
                  href="#auto"
                  className="flex items-center justify-between px-4 py-2.5 text-[15px] font-normal text-white/90 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <span>Auto Insurance</span>
                </Link>
                <Link
                  href="#home"
                  className="flex items-center justify-between px-4 py-2.5 text-[15px] font-normal text-white/90 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <span>Home Insurance</span>
                </Link>
                <Link
                  href="#life"
                  className="flex items-center justify-between px-4 py-2.5 text-[15px] font-normal text-white/90 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <span>Life Insurance</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Business Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBusinessDropdown(true)}
            onMouseLeave={() => setBusinessDropdown(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[18px] leading-[100%] tracking-[0%] text-white font-normal cursor-pointer py-3 hover:opacity-85 transition-opacity"
              aria-expanded={businessDropdown}
            >
              <span>Business</span>
              <FiChevronDown
                className={`h-4 w-4 transition-transform duration-300 ease-out text-white ${businessDropdown ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown Menu (Zero Radius, Borderless, Smooth Animation) */}
            <div
              className={`absolute left-0 top-full pt-2.5 w-60 z-50 transition-all duration-200 ease-out origin-top-left ${businessDropdown
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
            >
              <div className="bg-[#223533]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/40">
                <Link
                  href="#commercial"
                  className="flex items-center justify-between px-4 py-2.5 text-[15px] font-normal text-white/90 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <span>Commercial Insurance</span>
                </Link>
                <Link
                  href="#liability"
                  className="flex items-center justify-between px-4 py-2.5 text-[15px] font-normal text-white/90 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <span>General Liability</span>
                </Link>
                <Link
                  href="#workers-comp"
                  className="flex items-center justify-between px-4 py-2.5 text-[15px] font-normal text-white/90 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <span>Workers&apos; Compensation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* About Link */}
          <Link
            href="#about"
            className="text-[18px] leading-[100%] tracking-[0%] text-white font-normal hover:opacity-85 transition-opacity"
          >
            About
          </Link>

          {/* Contact Link */}
          <Link
            href="#contact"
            className="text-[18px] leading-[100%] tracking-[0%] text-white font-normal hover:opacity-85 transition-opacity"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 text-white hover:opacity-80 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#243533] border-t border-[#3D5552] px-6 py-4 space-y-3">
          <Link
            href="#personal"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[18px] leading-[100%] tracking-[0%] text-white py-2"
          >
            Personal
          </Link>
          <Link
            href="#business"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[18px] leading-[100%] tracking-[0%] text-white py-2"
          >
            Business
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[18px] leading-[100%] tracking-[0%] text-white py-2"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[18px] leading-[100%] tracking-[0%] text-white py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
