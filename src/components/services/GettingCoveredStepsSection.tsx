import { Container } from "@/components/ui/Container";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    number: "1.",
    title: "Share Your Info",
    description: "License, contact details, and vehicle info",
    hasArrow: false,
  },
  {
    number: "2.",
    title: "Get Your Quote",
    description: "We shop it and bring back real pricing",
    hasArrow: true,
  },
  {
    number: "3.",
    title: "You’re Covered",
    description: "We confirm coverage and stay on call after",
    hasArrow: false,
  },
];

export function GettingCoveredStepsSection() {
  return (
    <section className="bg-background py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        {/* Section Heading */}
        <h2 className="font-heading md:text-[45px] text-[32px] text-primary mb-[70px]">
          Getting Covered Takes 3 Steps
        </h2>

        {/* 3 Step Cards Grid: 1 Row on Tablet and Desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-primary p-[30px] flex flex-col justify-between rounded-none shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Top Row: On mobile (<md), number & arrow are in one row. On md+, number is at top */}
              <div className="flex items-center justify-between md:block">
                <span className="font-heading text-[55px] lg:text-[80px] xl:text-[105px] leading-none text-[#DBD0C4] block">
                  {step.number}
                </span>

                {/* Arrow in top row on mobile */}
                {step.hasArrow && (
                  <div className="md:hidden w-[34px] h-[34px] rounded-full border border-[#DBD0C4] flex items-center justify-center text-[#DBD0C4]">
                    <FiArrowRight className="w-[20px] h-[20px] stroke-[1.5]" />
                  </div>
                )}
              </div>

              {/* Middle: Arrow for Desktop & Tablet only (hidden on mobile) */}
              {step.hasArrow ? (
                <div className="hidden md:flex my-[30px] items-center justify-center">
                  <div className="w-[30px] h-[30px] rounded-full border border-[#DBD0C4] flex items-center justify-center text-[#DBD0C4]">
                    <FiArrowRight className="w-[24px] h-[24px] stroke-[1.5]" />
                  </div>
                </div>
              ) : (
                <div className="hidden md:block my-auto" aria-hidden="true" />
              )}

              {/* Bottom: Title & Description */}
              <div>
                <h3 className="text-[25px] lg:text-[30px] mt-[30px] sm:mt-[40px] md:mt-0 font-medium text-white mb-[8px] lg:mb-[20px]">
                  {step.title}
                </h3>
                <p className="text-lg lg:text-[25px] text-white font-normal ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

