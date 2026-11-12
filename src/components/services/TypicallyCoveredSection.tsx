import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FiCheck } from "react-icons/fi";

const coverageItems = [
  { title: "Liability" },
  { title: "Collision" },
  { title: "Comprehensive" },
  { title: "Uninsured Motorist" },
  { title: "Roadside Assistance" },
  { title: "Rental Reimbursement" },
];

export function TypicallyCoveredSection() {
  return (
    <section className="overflow-hidden">
      <Container className="relative py-[60px] sm:py-[80px] lg:py-[100px]">
        {/* Section Heading */}
        <h2 className="font-heading md:text-[45px] text-[32px] text-primary mb-[60px] leading-tight">
          What&apos;s Typically Covered
        </h2>

        {/* 6 Square Coverage Boxes Grid: 195px x 195px, 20px gap, 4 columns on desktop (4 in row 1, 2 in row 2) */}
        <div className="grid grid-cols-2 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] max-w-[840px] relative z-10">
          {coverageItems.map((item) => (
            <div
              key={item.title}
              className="w-full p-[20px] max-w-[195px] h-[195px] min-[450px]:w-[195px] bg-white hover:bg-primary border-2 border-primary p-[15px] flex flex-col items-center justify-center text-center shadow-none transition-all duration-300  group"
            >
              {/* React Check Icon (50px, primary color, turns white on hover) */}
              <FiCheck
                size={50}
                className="text-primary group-hover:text-white mb-[12px] shrink-0 stroke-[1.5] transition-colors duration-300"
              />

              {/* Box Title: font-size 22px, regular font-weight, text-align center, turns white on hover */}
              <span className=" text-lg md:text-[22px] font-normal text-center text-primary group-hover:text-white leading-[1.2] transition-colors duration-300">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Faint Logo Watermark - Positioned inside Container Width (right: 0, bottom: -100px) */}
        <div className="absolute right-0 -bottom-[100px] pointer-events-none z-0 select-none hidden md:block">
          <Image
            src="/about-bg-logo.svg"
            alt=""
            width={532}
            height={661}
            className="w-auto h-auto block opacity-30 object-contain object-bottom-right"
            priority={false}
          />
        </div>
      </Container>
    </section>
  );
}

