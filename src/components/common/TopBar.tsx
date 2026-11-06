import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FiSmartphone } from "react-icons/fi";

export function TopBar() {
  return (
    <div className="bg-[#242D2C]">
      <Container className="flex h-[44px] items-center justify-between">
        {/* Left: Phone Call */}
        <Link
          href="tel:6502988698"
          className="inline-flex items-center gap-[9px] text-sm text-white duration-300 hover:text-secondary group"
          aria-label="Call Christian Martinez Mairena Insurance Agency at 650.298.8698"
        >
          <FiSmartphone className="text-white duration-300 text-[15px] group-hover:text-secondary" />
          Call 650.298.8698
        </Link>

        {/* Right: Language Selector */}
        <div
          className="inline-flex items-center gap-[5px]"
          aria-label="Switch to Spanish"
        >
          <Image
            src="/flag.jpg"
            alt="Español"
            width={18}
            height={12}
            className="h-auto w-auto"
          />
          <span className="text-sm text-white">Español</span>
        </div>
      </Container>
    </div>
  );
}

