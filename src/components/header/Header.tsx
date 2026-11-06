"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { FiChevronDown, FiX } from "react-icons/fi";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [personalDropdown, setPersonalDropdown] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);

  // Mobile Accordion States
  const [mobilePersonalOpen, setMobilePersonalOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);

  // Lock body scroll when offcanvas is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close offcanvas on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
            className="h-[48px] md:h-[34px] lg:h-auto w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation (Visible at >= 992px) */}
        <nav
          aria-label="Main Navigation"
          className="hidden min-[992px]:flex items-center gap-[16px] lg:gap-[28px] xl:gap-[40px]"
        >
          {/* Personal Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPersonalDropdown(true)}
            onMouseLeave={() => setPersonalDropdown(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-[100%] tracking-[0%] text-white font-normal cursor-pointer py-3 hover:opacity-85 transition-opacity"
              aria-expanded={personalDropdown}
            >
              <span>Personal</span>
              <FiChevronDown
                className={`h-4 w-4 transition-transform duration-300 ease-out text-white ${
                  personalDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu (Zero Radius, Borderless, Smooth Animation) */}
            <div
              className={`absolute left-0 top-full pt-2.5 w-56 z-50 transition-all duration-200 ease-out origin-top-left ${
                personalDropdown
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
              className="inline-flex items-center gap-1.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-[100%] tracking-[0%] text-white font-normal cursor-pointer py-3 hover:opacity-85 transition-opacity"
              aria-expanded={businessDropdown}
            >
              <span>Business</span>
              <FiChevronDown
                className={`h-4 w-4 transition-transform duration-300 ease-out text-white ${
                  businessDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu (Zero Radius, Borderless, Smooth Animation) */}
            <div
              className={`absolute left-0 top-full pt-2.5 w-60 z-50 transition-all duration-200 ease-out origin-top-left ${
                businessDropdown
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
            className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[100%] tracking-[0%] text-white font-normal hover:opacity-85 transition-opacity"
          >
            About
          </Link>

          {/* Contact Link */}
          <Link
            href="#contact"
            className="text-[14px] lg:text-[16px] xl:text-[18px] leading-[100%] tracking-[0%] text-white font-normal hover:opacity-85 transition-opacity"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button (Shows below 992px) - Design matches screenshot exactly */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="min-[992px]:hidden inline-flex items-center justify-center p-2 text-white hover:opacity-85 focus:outline-none cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label="Open Navigation Menu"
        >
          <div className="flex flex-col justify-between w-[32px] h-[20px]" aria-hidden="true">
            <span className="w-full h-[2px] bg-white block" />
            <span className="w-full h-[2px] bg-white block" />
            <span className="w-full h-[2px] bg-white block" />
          </div>
        </button>
      </Container>

      {/* Offcanvas Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 min-[992px]:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Offcanvas Side Drawer (Smooth slide-in from right) */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] sm:w-[350px] max-w-[85vw] bg-primary text-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out min-[992px]:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block"
            aria-label={siteConfig.name}
          >
            <Image
              src="/logo.svg"
              alt={`${siteConfig.name} Insurance Agency, Inc.`}
              width={200}
              height={36}
              className="h-[30px] w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 text-white hover:text-accent focus:outline-none transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1">
          {/* 1. Personal Accordion */}
          <div className="border-b border-white/10 pb-2">
            <button
              type="button"
              onClick={() => setMobilePersonalOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-3 text-[18px] text-white font-medium hover:text-accent transition-colors cursor-pointer"
              aria-expanded={mobilePersonalOpen}
            >
              <span>Personal</span>
              <FiChevronDown
                className={`w-5 h-5 text-accent transition-transform duration-300 ${
                  mobilePersonalOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Smooth Accordion Submenu */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                mobilePersonalOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pl-4 pb-2 pt-1 space-y-2 border-l border-white/20 ml-1">
                  <Link
                    href="#auto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[15px] text-white/80 hover:text-white transition-colors"
                  >
                    Auto Insurance
                  </Link>
                  <Link
                    href="#home"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[15px] text-white/80 hover:text-white transition-colors"
                  >
                    Home Insurance
                  </Link>
                  <Link
                    href="#life"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[15px] text-white/80 hover:text-white transition-colors"
                  >
                    Life Insurance
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Business Accordion */}
          <div className="border-b border-white/10 pb-2">
            <button
              type="button"
              onClick={() => setMobileBusinessOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-3 text-[18px] text-white font-medium hover:text-accent transition-colors cursor-pointer"
              aria-expanded={mobileBusinessOpen}
            >
              <span>Business</span>
              <FiChevronDown
                className={`w-5 h-5 text-accent transition-transform duration-300 ${
                  mobileBusinessOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Smooth Accordion Submenu */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                mobileBusinessOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pl-4 pb-2 pt-1 space-y-2 border-l border-white/20 ml-1">
                  <Link
                    href="#commercial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[15px] text-white/80 hover:text-white transition-colors"
                  >
                    Commercial Insurance
                  </Link>
                  <Link
                    href="#liability"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[15px] text-white/80 hover:text-white transition-colors"
                  >
                    General Liability
                  </Link>
                  <Link
                    href="#workers-comp"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[15px] text-white/80 hover:text-white transition-colors"
                  >
                    Workers&apos; Compensation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. About Link */}
          <div className="border-b border-white/10 py-1">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-[18px] text-white font-medium hover:text-accent transition-colors"
            >
              About
            </Link>
          </div>

          {/* 4. Contact Link */}
          <div className="border-b border-white/10 py-1">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-[18px] text-white font-medium hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-white/10 mt-auto bg-black/10">
          <Link
            href="tel:6502988698"
            className="flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
          >
            <span>Call 650.298.8698</span>
          </Link>
          <p className="mt-2 text-xs text-accent/70">
            CA Producer LIC 0H44542
          </p>
        </div>
      </div>
    </header>
  );
}
