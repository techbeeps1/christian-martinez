import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FaSquareFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-[40px] pb-[20px]">
      <Container>
        {/* Main Grid: Desktop preserves user's exact lg:col-span-7 and lg:col-span-5 layout; 768px (md) keeps all columns in 1 row; Mobile orders columns as Personal/Business -> Contact -> Brand */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-[150px] md:gap-6 lg:gap-[30px] items-start">
          {/* Column 1: Brand / Logo / License / Farmers */}
          <div className="order-2 md:order-1 sm:col-span-2 md:col-span-5 lg:col-span-7 flex flex-col items-start">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/logo.svg"
                alt="Christian Martinez Mairena Insurance Agency, Inc."
                width={364}
                height={66}
                className="h-auto md:w-auto w-[300px] max-w-full"
              />
            </Link>

            <p className="mt-[30px] text-base leading-[25px] text-accent max-w-[300px]">
              Helping families &amp; business owners
              prepare for the unexpected.
            </p>

            <p className="mt-[30px] text-sm text-accent">
              CA Producer LIC 0H44542
            </p>

            {/* Farmers Badge */}
            <div className="mt-[30px] bg-white px-[12px] py-[6px] inline-flex items-center justify-center">
              <Image
                src="/farmers-logo.png"
                alt="Farmers Insurance"
                width={90}
                height={42}
                className="h-auto w-auto"
              />
            </div>
          </div>

          {/* Right Columns Wrapper: Personal, Business, Contact */}
          <div className="order-1 md:order-2 sm:col-span-2 md:col-span-7 lg:col-span-5">
            <div className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-6 gap-y-[40px] sm:gap-[40px] md:gap-4 lg:gap-[40px] justify-between">
              {/* Column 2: Personal */}
              <div className="col-span-1 md:col-span-3 lg:col-span-3">
                <h3 className="text-[19px] font-medium text-accent mb-[18px]">
                  Personal
                </h3>
                <ul className="space-y-[10px]">
                  <li>
                    <Link
                      href="#auto"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Auto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#home"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#life"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Life
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#renters"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Renters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#condo"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Condo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#mobile-home"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Mobile Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#motorcycle"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Motorcycle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#boat"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Boat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#trailer"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Trailer
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Business */}
              <div className="col-span-1 md:col-span-3 lg:col-span-3">
                <h3 className="text-[19px] font-medium text-accent mb-[18px]">
                  Business
                </h3>
                <ul className="space-y-[10px]">
                  <li>
                    <Link
                      href="#liability"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#workers-comp"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Liability
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#commercial-auto"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Workers'
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#key-person"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Comp
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#commercial-umbrella"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#bonds"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Auto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#bonds"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Key Person
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#bonds"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Umbrella
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#bonds"
                      className="text-white hover:text-accent text-sm leading-[27px] block transition-colors"
                    >
                      Bonds
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className="col-span-2 md:col-span-6 lg:col-span-6">
                <h3 className="text-[19px] font-medium text-accent mb-[18px]">
                  Contact
                </h3>

                <address className="not-italic text-white text-sm leading-[22px] space-y-[8px]">
                  <p>
                    1302 Lincoln Ave, Ste 206
                    <br />
                    San Jose, CA 95125
                  </p>

                  <p className="pt-[4px]">
                    <Link
                      href="tel:6502988393"
                      className="hover:text-accent transition-colors"
                    >
                      650.298.8393 (office)
                    </Link>
                  </p>

                  <p>
                    <Link
                      href="tel:4089109357"
                      className="hover:text-accent transition-colors"
                    >
                      408.910.9357 (cell/text)
                    </Link>
                  </p>

                  <p>
                    <Link
                      href="mailto:cmairena@farmersagent.com"
                      className="hover:text-accent transition-colors break-all"
                    >
                      cmairena@farmersagent.com
                    </Link>
                  </p>
                </address>

                {/* Social Media Icons */}
                <div className="mt-[22px] flex items-center gap-[8px]">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <FaSquareFacebook className="w-[22px] h-[22px]" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <FaInstagram className="w-[22px] h-[22px]" />
                  </Link>
                  <Link
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <FaTiktok className="w-[22px] h-[22px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[50px] text-sm text-accent">
          <p>© 2026 Christian Martinez Mairena Insurance Agency, Inc.</p>
        </div>
      </Container>
    </footer>
  );
}
