"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Container } from "@/components/ui/Container";

export function CallbackSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      alert(`Thank you, ${name}! We have received your request and will call you back shortly.`);
      setName("");
      setPhone("");
      setTopic("");
    }
  };

  return (
    <section
      className="relative md:block flex items-end  md:py-[150px] py-[50px] h-[730px] bg-cover md:bg-center bg-[position:88%_12%] bg-no-repeat bg-[url('/cta-bg-mobile.jpg')] md:bg-[url('/cta.jpg')]"
    >
      {/* Primary Overlay with 50% Opacity */}
      <div className="absolute inset-0 bg-primary/50" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-[520px]">
          {/* Title - font styling matching other h2 elements */}
          <h2 className="font-heading md:text-[32px] text-[28px] leading-[1.25] text-white">
            Not ready for a quote?
            <br />
            Request a quick callback.
          </h2>

          {/* Callback Form */}
          <form onSubmit={handleSubmit} className="mt-[40px] space-y-[15px]">
            {/* Row 1: Name and Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
              <div>
                <input
                  id="callback-name"
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-[50px] bg-white text-black px-[20px] text-base placeholder:text-[#8A8A8A] outline-none rounded-none focus:ring-1 focus:ring-secondary"
                />
              </div>

              <div>
                <input
                  id="callback-phone"
                  type="tel"
                  placeholder="Phone number"
                  aria-label="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full h-[50px] bg-white text-black px-[18px] text-base placeholder:text-[#8A8A8A] outline-none rounded-none focus:ring-1 focus:ring-secondary"
                />
              </div>
            </div>

            {/* Row 2: Select Dropdown */}
            <div className="relative">
              <select
                id="callback-topic"
                aria-label="What do you need help with?"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
                className={`w-full h-[50px] bg-white px-[18px] pr-[44px] text-base outline-none rounded-none appearance-none cursor-pointer focus:ring-1 focus:ring-secondary ${topic ? "text-black" : "text-[#8A8A8A]"
                  }`}
              >
                <option value="" disabled hidden>
                  What do you need help with?
                </option>
                <option value="Auto Insurance" className="text-black">
                  Auto Insurance
                </option>
                <option value="Home Insurance" className="text-black">
                  Home Insurance
                </option>
                <option value="Life Insurance" className="text-black">
                  Life Insurance
                </option>
                <option value="Business Insurance" className="text-black">
                  Business Insurance
                </option>
                <option value="Renters Insurance" className="text-black">
                  Renters Insurance
                </option>
                <option value="Umbrella Insurance" className="text-black">
                  Umbrella Insurance
                </option>
                <option value="General Question / Other" className="text-black">
                  General Question / Other
                </option>
              </select>
              <FiChevronDown className="absolute right-[18px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#555555] pointer-events-none" />
            </div>

            {/* Row 3: Submit Button */}
            <div className="mt-[40px]">
              <button
                type="submit"
                className="h-[50px] px-[27px] md:w-auto w-full duration-300 bg-secondary hover:bg-[#a88250] active:bg-[#997342] text-white text-base font-medium tracking-normal whitespace-nowrap cursor-pointer rounded-none inline-flex items-center justify-center transition-colors"
              >
                Request a Call
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

