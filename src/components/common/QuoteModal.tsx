"use client";

import { useState, useEffect, useRef } from "react";
import { FiX, FiChevronDown, FiCheck } from "react-icons/fi";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialZipCode?: string;
  initialType?: string;
}

const INSURANCE_OPTIONS = [
  "Auto",
  "Home",
  "Life",
  "Renters",
  "Condo",
  "Mobile Home",
  "Motorcycle",
  "Boat",
  "Trailer",
  "Commercial Auto",
  "General Liability",
  "Business Insurance",
  "Umbrella Insurance",
];

export function QuoteModal({
  isOpen,
  onClose,
  initialZipCode = "",
  initialType = "Auto",
}: QuoteModalProps) {
  const [insuranceType, setInsuranceType] = useState(initialType);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState(initialZipCode);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initial props when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialZipCode) setZip(initialZipCode);
      if (initialType) setInsuranceType(initialType);
      setIsSubmitted(false);
      setIsDropdownOpen(false);
    }
  }, [isOpen, initialZipCode, initialType]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isDropdownOpen, onClose]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs transition-opacity duration-300 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="min-h-full flex items-center justify-center py-6 sm:py-10">
        {/* 1. Popup Box: width 630px, padding 50px */}
        <div
          className="relative w-full max-w-[630px] bg-white p-[24px] sm:p-[40px] md:p-[50px] shadow-2xl rounded-none my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 3. Popup Close Icon: size 30px, color black, position right 30px, top 30px */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-[20px] right-[20px] sm:top-[30px] sm:right-[30px] text-black hover:opacity-70 transition-opacity cursor-pointer focus:outline-none p-0 z-10"
            aria-label="Close quote modal"
          >
            <FiX className="w-[30px] h-[30px] text-black stroke-[1.2]" />
          </button>

          {isSubmitted ? (
            /* Success State */
            <div className="py-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-secondary/15 text-secondary rounded-full flex items-center justify-center">
                <FiCheck className="w-7 h-7 stroke-[2]" />
              </div>
              <h2 className="font-heading text-[34px] sm:text-[45px] leading-[100%] text-primary mb-3">
                Thank You!
              </h2>
              <p className="text-black text-[16px] font-normal leading-relaxed mb-6">
                Thank you{fullName ? `, ${fullName}` : ""}! We have received your
                quote request for <strong className="text-primary">{insuranceType}</strong>.
                We will get back to you within a few days.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="h-[50px] pt-[15px] pb-[15px] px-[20px] min-w-[140px] bg-secondary hover:bg-[#a88250] text-white text-[16px] font-normal leading-[100%] transition-colors cursor-pointer rounded-none"
              >
                Close
              </button>
            </div>
          ) : (
            /* Form Content */
            <>
              {/* 2. Popup Title: font-size 45px, line-height 100%, text-align center, color primary */}
              <h2
                id="quote-modal-title"
                className="font-heading text-[32px] sm:text-[45px] leading-[100%] text-center text-primary font-normal"
              >
                Get a quote
              </h2>

              {/* 4. Popup Description: font-style Regular, font-size 16px, text-align center, color black */}
              <p className="mt-[16px] sm:mt-[20px] text-center text-[16px] font-normal text-black leading-snug max-w-[420px] mx-auto">
                Fill out the following form and we will get back to you within a few days.
              </p>

              <form onSubmit={handleSubmit} className="mt-[28px] sm:mt-[34px] space-y-[15px]">
                {/* Field 1: Type of insurance (Div role="button" with flexbox centering - NEVER clips text) */}
                <div>
                  <label
                    htmlFor="quote-insurance-type-btn"
                    className="block text-[12px] font-normal text-[#A9A9A9] mb-[6px]"
                  >
                    Type of insurance
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <div
                      role="button"
                      tabIndex={0}
                      id="quote-insurance-type-btn"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsDropdownOpen((prev) => !prev);
                        }
                      }}
                      className="w-full h-[50px] px-[20px] bg-[#F7F4F1] border border-[#DBD0C4] flex items-center justify-between rounded-none outline-none focus:ring-1 focus:ring-secondary cursor-pointer select-none transition-colors"
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                    >
                      <span className="text-[16px] font-normal text-[#1A1A1A] leading-normal block overflow-visible">
                        {insuranceType}
                      </span>
                      <FiChevronDown
                        className={`w-[18px] h-[18px] text-black shrink-0 transition-transform duration-200 stroke-[2] ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Hidden input for form data */}
                    <input type="hidden" name="insuranceType" value={insuranceType} />

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <ul
                        role="listbox"
                        className="absolute left-0 right-0 top-full mt-1 max-h-[220px] overflow-y-auto bg-white border border-[#DBD0C4] shadow-xl z-50 py-1.5"
                      >
                        {INSURANCE_OPTIONS.map((type) => (
                          <li
                            key={type}
                            role="option"
                            aria-selected={insuranceType === type}
                            onClick={() => {
                              setInsuranceType(type);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-[20px] py-2.5 text-[15px] cursor-pointer hover:bg-[#F7F4F1] transition-colors flex items-center justify-between ${
                              insuranceType === type
                                ? "font-medium text-secondary bg-[#F7F4F1]/60"
                                : "text-[#1A1A1A]"
                            }`}
                          >
                            <span>{type}</span>
                            {insuranceType === type && (
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Field 2: Full name */}
                <div>
                  <label
                    htmlFor="quote-full-name"
                    className="block text-[12px] font-normal text-[#A9A9A9] mb-[6px]"
                  >
                    Full name
                  </label>
                  <input
                    id="quote-full-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-[50px] px-[20px] bg-[#F7F4F1] border border-[#DBD0C4] text-[16px] font-normal text-[#1A1A1A] placeholder:text-[#8A8A8A] leading-normal rounded-none outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                {/* Field 3: E-mail */}
                <div>
                  <label
                    htmlFor="quote-email"
                    className="block text-[12px] font-normal text-[#A9A9A9] mb-[6px]"
                  >
                    E-mail
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    placeholder="Your E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[50px] px-[20px] bg-[#F7F4F1] border border-[#DBD0C4] text-[16px] font-normal text-[#1A1A1A] placeholder:text-[#8A8A8A] leading-normal rounded-none outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                {/* Field 4: Phone number */}
                <div>
                  <label
                    htmlFor="quote-phone"
                    className="block text-[12px] font-normal text-[#A9A9A9] mb-[6px]"
                  >
                    Phone number
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-[50px] px-[20px] bg-[#F7F4F1] border border-[#DBD0C4] text-[16px] font-normal text-[#1A1A1A] placeholder:text-[#8A8A8A] leading-normal rounded-none outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                {/* Field 5: Address & ZIP code (2 Columns in 1 Row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                  {/* Left: Address */}
                  <div>
                    <label
                      htmlFor="quote-address"
                      className="block text-[12px] font-normal text-[#A9A9A9] mb-[6px]"
                    >
                      Address
                    </label>
                    <input
                      id="quote-address"
                      type="text"
                      placeholder="Street"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full h-[50px] px-[20px] bg-[#F7F4F1] border border-[#DBD0C4] text-[16px] font-normal text-[#1A1A1A] placeholder:text-[#8A8A8A] leading-normal rounded-none outline-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>

                  {/* Right: ZIP code */}
                  <div>
                    <label
                      htmlFor="quote-zip"
                      className="block text-[12px] font-normal text-[#A9A9A9] mb-[6px]"
                    >
                      ZIP code
                    </label>
                    <input
                      id="quote-zip"
                      type="text"
                      pattern="[0-9]*"
                      maxLength={5}
                      required
                      placeholder="ZIP code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full h-[50px] px-[20px] bg-[#F7F4F1] border border-[#DBD0C4] text-[16px] font-normal text-[#1A1A1A] placeholder:text-[#8A8A8A] leading-normal rounded-none outline-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                </div>

                {/* 7. Button Properties: height 50px, padding 15px 20px, font-weight 400, font-size 16px, bg-color secondary */}
                <div className="pt-[15px] sm:pt-[20px] flex justify-center">
                  <button
                    type="submit"
                    className="h-[50px] pt-[15px] pb-[15px] px-[20px] min-w-[140px] bg-secondary hover:bg-[#a88250] active:bg-[#997342] text-white text-[16px] font-normal leading-[100%] transition-colors cursor-pointer rounded-none flex items-center justify-center"
                  >
                    Send
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
