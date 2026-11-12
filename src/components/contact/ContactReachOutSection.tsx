import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function ContactReachOutSection() {
  return (
    <section className="bg-white pb-[60px]  mt-[100px] sm:pb-[75px] md:pb-[112px] lg:-mt-[4px]">
      <Container>
        <div className="flex justify-between lg:gap-[20px] gap-[60px] lg:flex-row flex-col items-end">
          {/* Left Column: Contact Details */}
          <div className="lg:w-5/12 w-full">
            {/* Heading */}
            <h2 className="font-heading md:text-[32px] text-[28px] text-black">
              How You Can Reach Out to Me
            </h2>

            {/* Contact Pills (Dark Green label + White bordered value with dark text) */}
            <div className="md:mt-[30px] mt-[35px] flex flex-col items-start gap-[10px]">
              {/* Office */}
              <div className="inline-flex items-center text-[14px] sm:text-base leading-[25px]">
                <span className="p-[10px] bg-primary text-white border border-primary font-medium shrink-0">
                  Office
                </span>
                <span
                  className="p-[10px] bg-white text-black border border-primary "
                >
                  650.298.8393
                </span>
              </div>

              {/* Cell/Text */}
              <div className="inline-flex items-center text-[14px] sm:text-base leading-[25px]">
                <span className="p-[10px] bg-primary text-white border border-primary font-medium shrink-0">
                  Cell/Text
                </span>
                <span
                  className="p-[10px] bg-white text-black border border-primary "
                >
                  408.910.9357
                </span>
              </div>

              {/* E-mail */}
              <div className="inline-flex items-center text-[13px] sm:text-base leading-[25px] max-w-full">
                <span className="p-[10px] bg-primary text-white border border-primary font-medium shrink-0">
                  E-mail
                </span>
                <span
                  className="p-[10px] bg-white text-black border border-primary  break-all sm:break-normal"
                >
                  cmairena@farmersagent.com
                </span>
              </div>
            </div>

            {/* Address & Office Hours */}
            <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-w-[470px] justify-between">
              {/* Address */}
              <div className="text-base text-black leading-[25px]">
                <span className="font-semibold block mb-1">Address:</span>
                <p>
                  1302 Lincoln Ave<br />
                  Ste 206<br />
                  San Jose, CA 95125
                </p>
              </div>

              {/* Office Hours */}
              <div className="text-base text-black leading-[25px]">
                <span className="font-semibold block mb-1">Office hours:</span>
                <div className="text-[14px] leading-[1.5] space-y-0.5">
                  <div className="flex justify-start gap-[60px] sm:gap-4">
                    <span className="text-[#8D8B70] w-20">Mon - Fri</span>
                    <span className="text-black">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-start gap-[60px] sm:gap-4">
                    <span className="text-[#8D8B70] w-20">Sat</span>
                    <span className="text-black">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-start gap-[60px] sm:gap-4">
                    <span className="text-[#8D8B70] w-20">Sun</span>
                    <span className="text-black">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Notice */}
            <p className="mt-[25px] text-base text-[#8D8B70]">
              Open outside of the office hours by appointment.
            </p>

            {/* Get Directions Button */}
            <div className="mt-[40px]">
              <Link
                href="https://maps.google.com/?q=1302+Lincoln+Ave+Ste+206,+San+Jose,+CA+95125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center md:w-auto w-full justify-center border border-secondary text-black px-[30px] py-[15px] text-base font-normal rounded-none hover:bg-secondary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Get directions
              </Link>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="lg:w-6/12 w-full">
            <div className="w-full aspect-square rounded-none overflow-hidden border border-black/10 shadow-sm bg-neutral-100">
              <iframe
                src="https://maps.google.com/maps?q=1302%20Lincoln%20Ave%20Ste%20206%2C%20San%20Jose%2C%20CA%2095125&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Christian Martinez Mairena Insurance Agency Office Location"
                className="w-full h-full rounded-none"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

