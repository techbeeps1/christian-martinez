"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FiArrowRight } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";




import { CiUser } from "react-icons/ci";
import Link from "next/link";



const teamMembers = [
  {
    id: "christian",
    name: "Christian Martinez Mairena",
    role: "Insurance Agent",
    image: "/team-img.png",
    isAvatar: false,
    back: {
      specialties: "Home, Auto, Life, and Business",
      credentials: "MBA | CA Producer Lic. #0H44542",
      email: "cmairena@farmersagent.com",
      office: "1302 Lincoln Ave Ste. 206, San Jose, CA 95125",
      phone: "650.298.8393",
      fax: "650.298.8698",
    },
  },
  {
    id: "diana",
    name: "Diana Morales Quiroz",
    role: "Insurance Producer",
    image: "",
    isAvatar: true,
    back: {
      specialties: "Home, Auto, Life, and Business",
      credentials: "CA Producer Lic. 4276706",
      email: "diana.cmairena@farmersagency.com",
      office: "1302 Lincoln Ave Ste. 206, San Jose, CA 95125",
      phone: "650.298.8393",
      fax: "650.298.8698",
    },
  },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`team-flip-card w-full h-[313px] sm:h-[420px] md:h-[452px] ${flipped ? "flipped" : ""
        }`}
      onClick={() => setFlipped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((prev) => !prev);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${member.name} details card. Hover or click to flip.`}
    >
      <div className="team-flip-inner">
        {/* FRONT SIDE */}
        <div className="team-flip-front bg-white border border-primary px-[25px] sm:px-[45px] py-[25px] sm:py-[40px] flex flex-col justify-between overflow-hidden relative shadow-sm">
          {/* Faint Logo Watermark in Bottom-Right */}
          <div className="absolute right-[26px] bottom-[20px] w-[190px] h-[190px] sm:w-[275px] sm:h-[275px] overflow-hidden pointer-events-none">
            <Image
              src="/about-bg-logo.svg"
              alt=""
              width={170}
              height={210}
              className="w-full h-full object-contain opacity-50 object-bottom-right"
            />
          </div>

          {/* Top: Photo or Avatar */}
          <div className="relative z-10">
            {member.isAvatar ? (
              <div className="w-[115px] h-[115px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <CiUser className="text-white h-[85px] w-[85px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px]" />
              </div>
            ) : (
              <div className="w-[117px] h-[117px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] border border-[#E8E8E8] rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Bottom: Name, Role & Circular Arrow Button */}
          <div className="relative z-10 flex items-end justify-between pt-4">
            <div>
              <h3 className="font-heading text-[28px] sm:text-[32px] text-primary">
                {member.name}
              </h3>
              <p className="text-lg text-primary font-normal mt-1">
                {member.role}
              </p>
            </div>

            {/* Arrow Icon in Circle Button */}
            <div
              className="w-[38px] h-[38px] rounded-full border border-black flex items-center justify-center text-black shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <FiArrowRight className="w-4 h-4 stroke-[1.5]" />
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="team-flip-back bg-background border border-primary p-6 sm:p-8 flex flex-col justify-between text-left overflow-hidden shadow-sm">
          <div>
            {/* Specialties Heading */}
            <h4 className="text-[18px] sm:text-[22px] md:text-[25px] font-semibold text-primary">
              {member.back.specialties}
            </h4>

            {/* Credentials */}
            <p className="text-[14px] sm:text-[18px] md:text-[20px] text-primary font-normal mt-[20px] sm:mt-[30px] md:mt-[40px]">
              {member.back.credentials}
            </p>

            {/* Email Link */}
            <Link
              href={`mailto:${member.back.email}`}
              className="text-[14px] sm:text-[18px] md:text-[20px] underline text-primary hover:text-secondary font-semibold mt-1 block"
              onClick={(e) => e.stopPropagation()}
            >
              {member.back.email}
            </Link>

            {/* Divider */}
            <span className="text-primary text-[20px] mt-[15px] sm:mt-[20px] mb-[20px] sm:mb-[30px] block">
              —
            </span>

            {/* Shared Office Info */}
            <p className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold text-primary">
              Shared office info
            </p>
            <p className="text-[13px] sm:text-[16px] md:text-[20px] text-primary font-normal mt-2 leading-snug">
              {member.back.office}
            </p>
            <p className="text-[13px] sm:text-[16px] md:text-[20px] text-primary font-normal mt-2">
              Office:{" "}
              <a
                href={`tel:${member.back.phone.replace(/[^0-9]/g, "")}`}
                className="font-semibold text-black hover:text-secondary underline"
                onClick={(e) => e.stopPropagation()}
              >
                {member.back.phone}
              </a>
            </p>
            <p className="text-[13px] sm:text-[16px] md:text-[20px] mt-2 text-primary font-normal">
              Fax: <span className="font-semibold text-black">{member.back.fax}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MeetTeamSection() {
  return (
    <section className="py-[60px] sm:py-[150px]">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="max-w-[624px]">
          <h2 className="font-heading md:text-[45px] text-[32px] text-primary mb-[30px]">
            Meet the Team
          </h2>
          <p className="text-base leading-[25px] text-black">
            Insurance is personal, and our dedicated team is here to make sure you
            always have someone friendly and knowledgeable to talk to. Whether
            you have a quick question about your billing or need to file a claim,
            we are here to help.
          </p>
        </div>

        {/* 2 Team Cards Grid with 3D Flip Effect: 1 card per row on tablet and mobile (<1024px), 2 cards per row on lg (>=1024px) */}
        <div className="mt-[36px] sm:mt-[70px] grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom Social Links */}
        <div className="mt-[100px] pb-[40px] sm:pb-0 sm:mt-[130px] flex flex-col items-center justify-center text-center">
          {/* Accent Line */}
          <div className="w-[90px] h-[2px] bg-primary mb-[20px]" />

          {/* Social Prompt */}
          <p className=" sm:text-[22px] font-medium leading-[25px] text-primary mb-[30px]">
            Connect with our team online
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-[12px]">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-primary hover:text-secondary transition-colors"
            >

              <IoLogoFacebook className="w-[52px] h-[52px]" />

            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-primary hover:text-secondary transition-colors"
            >
              <FaSquareInstagram className="w-[48px] h-[48px]" />

            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-primary hover:text-secondary transition-colors"
            >
              <AiFillTikTok className="w-[50px] h-[50px]" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

