import Image from "next/image";
import { Container } from "@/components/ui/Container";

const values = [
  {
    icon: "/transparency.svg",
    title: "Transparency",
    description:
      "We explain what you're covered for, what you're not, and what it costs, in plain language, so you know where you stand before you ever need it.",
    width: 80,
    height: 79,
  },
  {
    icon: "/partnership.svg",
    title: "Long-Term Partnership",
    description:
      "We're in it for the long run, not just the day you sign. Life is unpredictable, so we stay in touch, as often or as little as you'd like.",
    width: 88,
    height: 36,
  },
  {
    icon: "/coverage.svg",
    title: "Coverage that grows",
    description:
      "As your family or business grows, your coverage should keep up. We stay involved to protect what you've built and give you peace of mind.",
    width: 71,
    height: 80,
  },
];

export function CoreValuesSection() {
  return (
    <section className="bg-white pt-[45px] md:pt-[60px] pb-[70px] sm:pb-[90px] lg:pb-[120px]">
      <Container>
        {/* Section Heading */}
        <h2 className="font-heading md:text-[45px] text-[32px] text-primary md:mb-[80px] mb-[30px]">
          Core Values &amp; Mission
        </h2>

        {/* 3 Values Cards Grid: 2 columns on mobile/tablet (<992px), 3 columns on desktop (>=992px) */}
        <div className="grid grid-cols-1 min-[992px]:grid-cols-3 gap-[20px] lg:gap-[30px] xl:gap-[44px]">
          {values.map((item) => (
            <div
              key={item.title}
              className="border border-secondary p-[20px] sm:p-[34px] flex flex-col items-center text-center rounded-none shadow-none justify-between"
            >
              {/* Icon Container (Natural/Auto size as requested) */}
              <div className="min-[992px]:h-[102px] min-[992px]:w-[102px] h-[55px] w-[55px] sm:h-[75px] sm:w-[75px] flex items-center justify-center mb-4 sm:mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-auto h-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px] sm:text-[20px] min-[992px]:text-[22px] font-medium text-black mb-[10px] sm:mb-[15px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-[15px] min-[992px]:text-base leading-[20px] sm:leading-[23px] text-black font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

