import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { IoLanguageSharp } from "react-icons/io5";

export function MeetAgentSection() {
  return (
    <section className="bg-white pt-[135px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Text & Info */}
          <div className="w-full lg:flex-1 max-w-[560px]">
            {/* Subtitle / Overline */}
            <p className="text-accent text-[20px]">
              Meet Your Local Agent
            </p>

            {/* Main Heading */}
            <h2 className="font-heading text-[32px] text-primary">
              Christian Martinez Mairena
            </h2>

            {/* Bio Paragraph */}
            <p className="mt-[15px] text-base leading-[25px] text-black">
              Since 2012, Christian Martinez Mairena has helped Bay Area families and
              business owners protect what matters most, through insurance
              that&apos;s transparent and coverage that actually fits how they live. This agency
              runs on service first — when you sign with us, we stay by your side and
              keep showing up long after the paperwork is done.
            </p>

            {/* Key Highlights List */}
            <div className="mt-[20px] space-y-[5px]">
              {/* 1. Experience */}
              <div className="flex items-center gap-[10px] ">
                <TbRosetteDiscountCheck className="w-[20px] h-[20px] text-accent shrink-0" />
                <p className="text-base leading-[35px]">
                  <span className="text-accent font-normal">Experience:</span>{" "}
                  <span className="text-primary font-normal">12 years in business</span>
                </p>
              </div>

              {/* 2. Languages */}
              <div className="flex items-center gap-[10px]">
                <IoLanguageSharp className="w-[20px] h-[20px] text-accent shrink-0" />
                <p className="text-base leading-[35px]">
                  <span className="text-accent font-normal">Languages:</span>{" "}
                  <span className="text-primary font-normal">English, Spanish</span>
                </p>
              </div>

              {/* 3. Education */}
              <div className="flex items-center gap-[10px]">
                <Image
                  src="/education-icon.svg"
                  alt="Education"
                  width={20}
                  height={20}
                  className="w-auto h-auto shrink-0"
                />
                <p className="text-base leading-[35px]">
                  <span className="text-accent font-normal">Education:</span>{" "}
                  <span className="text-primary font-normal">
                    MBA, University of Phoenix, CA
                  </span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-[32px]">
              <Link
                href="#about"
                className="inline-flex items-center justify-center border border-secondary text-black px-[30px] py-[15px] text-base font-normal rounded-none hover:bg-secondary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Read the full story
              </Link>
            </div>
          </div>

          {/* Right Column: Office Photo */}
          <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
            <Image
              src="/story-img.jpg"
              alt="Christian Martinez Mairena in office"
              width={637}
              height={430}
              className="w-auto h-auto "
              priority={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

