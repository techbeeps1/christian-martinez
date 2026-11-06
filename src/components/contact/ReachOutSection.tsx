import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function ReachOutSection() {
  return (
    <section id="contact" className="bg-background md:py-[112px] py-[75px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 max-w-[540px]">
            <h2 className="font-heading md:text-[32px] text-[28px] text-black">
              How You Can Reach Out to Me
            </h2>

            <div className="md:mt-[30px] mt-[35px] flex flex-col items-start gap-[10px]">
              <div
                className="inline-flex  items-center text-base leading-[25px] gap-[2px] "
              >
                <span className="p-[10px] bg-primary text-white ">
                  Office
                </span>
                <span className="p-[10px] bg-primary text-white">
                  650.298.8393
                </span>
              </div>

              <div
                className="inline-flex items-center text-base leading-[25px] gap-[2px] "
              >
                <span className="p-[10px] bg-primary text-white">
                  Cell/Text
                </span>
                <span className="p-[10px] bg-primary text-white">
                  408.910.9357
                </span>
              </div>

              <div
                className="inline-flex  items-center text-base leading-[25px] gap-[2px] "
              >
                <span className="p-[10px] bg-primary text-white">
                  E-mail
                </span>
                <span className="p-[10px] bg-primary text-white">
                  cmairena@farmersagent.com
                </span>
              </div>
            </div>

            <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-w-[470px] justify-between">
              <div className="text-base text-black leading-[25px]">
                <span className="font-semibold ">
                  Address:
                </span>
                <p>
                  1302 Lincoln Ave<br />
                  Ste 206<br />
                  San Jose, CA 95125
                </p>
              </div>

              <div className="text-base text-black leading-[25px]">
                <span className="font-semibold mb-">
                  Office hours:
                </span>
                <div className="text-[14px] leading-[1.5] space-y-0.5">
                  <div className="flex justify-start gap-[60px] sm:gap-4">
                    <span className="text-[#8D8B70] w-20">Mon - Fri</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-start gap-[60px] sm:gap-4">
                    <span className="text-[#8D8B70] w-20">Sat</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-start gap-[60px] sm:gap-4">
                    <span className="text-[#8D8B70] w-20">Sun</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-[25px] text-base text-[#8D8B70]">
              Open outside of the office hours by appointment.
            </p>

            <div className="mt-[40px]">
              <Link
                href="https://maps.google.com/?q=1302+Lincoln+Ave+Ste+206,+San+Jose,+CA+95125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-secondary text-black px-[30px] py-[15px] text-base font-normal rounded-none hover:bg-secondary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Get directions
              </Link>
            </div>
          </div>

          {/*  Map  */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full  aspect-square rounded-none overflow-hidden border border-black/10 shadow-sm bg-neutral-100">
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

