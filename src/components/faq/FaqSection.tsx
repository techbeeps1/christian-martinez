"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "How does it work?",
    answer:
      "Getting started is simple. You can submit your ZIP code online, call our office, or visit us in San Jose. We take the time to understand your unique lifestyle, review your current coverage for any gaps or overpayments, and customize a policy package that fits your exact needs and budget.",
  },
  {
    question: "What neighborhoods do you serve?",
    answer:
      "We proudly serve the entire Greater Bay Area and Silicon Valley, including San Jose, Willow Glen, Campbell, Cupertino, Sunnyvale, Santa Clara, Palo Alto, Mountain View, Fremont, San Mateo, and surrounding communities.",
  },
  {
    question: "What are your office hours?",
    answer:
      "Our office is open Monday through Friday from 9:00 AM to 5:00 PM, and Saturdays from 9:00 AM to 2:00 PM. We are closed on Sundays, but we are always available outside of standard office hours by appointment to accommodate your schedule.",
  },
  {
    question: "What types of insurance products do you offer?",
    answer:
      "We provide comprehensive coverage for both personal and commercial needs, including Auto, Home, Renters, Condo, Mobile Home, Motorcycle, Boat, Trailer, Life, Umbrella, Business Property, Commercial Auto, and General Liability insurance.",
  },
  {
    question: "Can I save money by bundling my policies?",
    answer:
      "Yes! Bundling multiple policies—such as Auto and Home, or Auto and Life—is one of the most effective ways to lower your overall premium. You can often qualify for significant multi-policy discounts and loyalty perks.",
  },
  {
    question: "Is it time to review my life insurance policy?",
    answer:
      "It is always a smart idea to review your life insurance whenever you experience major life milestones—such as purchasing a home, starting or expanding a family, changing careers, or nearing retirement. We offer complimentary policy reviews to ensure your loved ones remain fully protected.",
  },
  {
    question: "How do I file a claim if I get into an accident?",
    answer:
      "If you experience an accident or loss, reach out to our office directly at 650.298.8393 or contact the 24/7 Farmers Claims line. We will guide you step-by-step through the process, help you submit necessary documentation, and advocate on your behalf until your claim is settled.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-[70px] lg:py-[100px]">
      {/* Explicit Custom Width (max-w-[950px] with px-[20px] left/right padding, no generic Container) */}
      <div className="w-full max-w-[950px] mx-auto px-[20px]">
        {/* Title */}
        <h2 className="font-heading text-[36px] sm:text-[42px] lg:text-[46px] leading-[1.15] text-primary text-center mb-[40px]">
          Questions &amp; Answers
        </h2>

        {/* Accordion List */}
        <div className="space-y-[10px]">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-[#F7F7F7] rounded-none overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-[20px] sm:px-[26px] py-[16px] sm:py-[18px] text-left cursor-pointer select-none hover:bg-[#F2F2F2] transition-colors"
                >
                  <span className="text-[15px] sm:text-[16px] text-primary font-normal">
                    {item.question}
                  </span>
                  <span className="text-primary ml-4 shrink-0 transition-transform duration-200">
                    {isOpen ? (
                      <FiMinus className="w-[18px] h-[18px]" />
                    ) : (
                      <FiPlus className="w-[18px] h-[18px]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-[20px] sm:px-[26px] pb-[20px] pt-1 text-[14px] sm:text-[15px] leading-[1.65] text-[#555555]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

