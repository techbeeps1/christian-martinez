import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  TbRosetteDiscountCheck,
} from "react-icons/tb";
import { IoLanguageSharp, IoLocationOutline } from "react-icons/io5";
import { LuStamp } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { FiAward } from "react-icons/fi";


const awardRows = [
  [
    { name: "Toppers Award", hasIcon: true },
    { name: "Blue Vase Award", hasIcon: true },
  ],
  [
    { name: "West Territory Life Production Award", hasIcon: true },
  ],
  [
    { name: "Century Award", hasIcon: true },
    { name: "Prime Agency", hasIcon: false },
  ],
  [
    { name: "South Bay Masters", hasIcon: false },
    { name: "South Bay Stars", hasIcon: false },
  ],
];

export function FoundationTrustSection() {
  return (
    <section className="relative bg-background mt-[50px] md:mt-[30px] md:pt-[150px] md:pb-[190px] pt-[60px] pb-[77px] overflow-hidden">
      {/* Background Logo: Bottom-Left (Natural watermark matching homepage) */}
      <div className="absolute md:block hidden -bottom-[100px] left-0 pointer-events-none z-0 select-none">
        <Image
          src="/about-bg-logo.svg"
          alt=""
          width={532}
          height={661}
          className="w-auto h-auto block"
          priority={false}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[50px] lg:gap-[60px] xl:gap-[80px]">
          {/* Left Column: Heading, Paragraphs & Key Information */}
          <div className="w-full lg:max-w-[560px] xl:max-w-[580px]">
            {/* Title */}
            <h2 className="font-heading md:text-[45px] text-[32px] text-black md:mb-[50px] mb-[30px]">
              A Foundation of Trust
            </h2>

            {/* Paragraph 1 */}
            <p className=" text-base leading-[25px] text-black">
              Since 2012, Christian Martinez Mairena has helped Bay Area families
              and business owners protect what they&apos;re building, whether
              that&apos;s a household or a company, through insurance that&apos;s
              transparent and easy to understand. From a first home to a first hire,
              the goal has always stayed the same: coverage that fits, explained
              in plain language, and revisited as life changes.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-[15px] text-base leading-[25px] text-black">
              Families and business owners have trusted Christian for more than a
              decade because they want someone who takes the time to understand
              what they&apos;ve built and where they&apos;re headed. It&apos;s the
              same standard for every family and business, whether they&apos;re
              new to the agency or have been with it for years.
            </p>

            {/* Metadata Information List */}
            <div className="mt-[28px] sm:mt-[32px] space-y-[10px] sm:space-y-[12px]">
              {/* 1. Experience */}
              <div className="flex items-center gap-[10px]">
                <TbRosetteDiscountCheck className="w-[24px] h-[24px] text-[#737373] shrink-0" />
                <p className="text-base leading-[28px]">
                  <span className="text-[#737373] font-normal">Experience:</span>{" "}
                  <span className="text-black font-normal">12 years in business</span>
                </p>
              </div>

              {/* 2. Languages */}
              <div className="flex items-center gap-[10px]">
                <IoLanguageSharp className="w-[24px] h-[24px] text-[#737373] shrink-0" />
                <p className="text-base leading-[28px]">
                  <span className="text-[#737373] font-normal">Languages:</span>{" "}
                  <span className="text-black font-normal">English, Spanish</span>
                </p>
              </div>

              {/* 3. Education */}
              <div className="flex items-center gap-[10px]">
                <FaGraduationCap className="w-[24px] h-[24px] text-[#737373] shrink-0" />

                <p className="text-base leading-[28px]">
                  <span className="text-[#737373] font-normal">Education:</span>{" "}
                  <span className="text-black font-normal">
                    MBA, University of Phoenix, CA
                  </span>
                </p>
              </div>

              {/* 4. License Number */}
              <div className="flex items-center gap-[10px]">
                <LuStamp className="w-[24px] h-[24px] text-[#737373] shrink-0" />
                <p className="text-base leading-[28px]">
                  <span className="text-[#737373] font-normal">License Number:</span>{" "}
                  <span className="text-black font-normal">
                    CA Producer LIC 0H44542
                  </span>
                </p>
              </div>

              {/* 5. Communities served */}
              <div className="flex items-start gap-[10px]">
                <IoLocationOutline className="w-[24px] h-[24px] text-[#737373] shrink-0 mt-1" />
                <p className="text-base leading-[26px]">
                  <span className="text-[#737373] font-normal">Communities served:</span>{" "}
                  <span className="text-black font-normal">
                    San Jose · San Francisco · Palo Alto · Santa Clara · Sunnyvale ·
                    Mountain View · San Mateo · Fremont
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Industry Recognition & Awards Badges */}
          <div className="w-full lg:flex-1 lg:max-w-[500px] xl:max-w-[520px] pt-2 lg:pt-0">
            {/* Heading */}
            <h3 className="text-[20px] sm:text-[30px] text-black leading-tight mb-[24px] sm:mb-[30px]">
              Industry Recognition &amp; Awards
            </h3>
            {/* Badges Matrix */}
            <div className="space-y-[14px]">
              {awardRows.map((row, idx) => (
                <div key={idx} className="flex flex-wrap items-center gap-[15px]">
                  {row.map((award) => (
                    <div
                      key={award.name}
                      className="bg-white/30  md:p-[20px] p-[15px] inline-flex items-center gap-[10px] text-base  text-[#867F76] font-normal rounded-none shadow-none"
                    >
                      {award.hasIcon && (
                        <FiAward className="md:w-[24px] md:h-[24px] w-[20px] h-[20px] text-[#867F76] shrink-0" />

                      )}
                      <span>{award.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

