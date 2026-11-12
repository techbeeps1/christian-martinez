import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function BundleSavingsCtaSection() {
  return (
    <section className="relative py-[100px] md:py-[150px] overflow-hidden">
      {/* Background Image: service-insurance-bg.jpg */}
      <Image
        src="/service-insurance-bg.jpg"
        alt="Neighborhood Homes"
        fill
        priority={false}
        className="object-cover object-center"
      />

      {/* Dark Primary Overlay with 70% Opacity */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-[700px]">
          {/* Title */}
          <h2 className="font-heading text-[28px] md:text-[32px] text-white">
            Already have a home or renters policy with us?
          </h2>

          {/* Subtitle */}
          <p className="mt-[10px] text-base md:text-lg text-white">
            Bundling with Auto often unlocks extra savings.
          </p>

          {/* Action Button: See Home Insurance */}
          <div className="mt-[30px] sm:mt-[35px]">
            <Link
              href="/#home"
              className="inline-flex items-center justify-center h-[50px] px-[32px] duration-300 bg-secondary hover:bg-[#a88250] active:bg-[#997342] text-white text-base font-normal tracking-normal whitespace-nowrap cursor-pointer rounded-none"
            >
              See Home Insurance
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

