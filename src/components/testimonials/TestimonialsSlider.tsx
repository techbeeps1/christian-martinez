"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Alex A.",
    date: "October 5, 2020",
    rating: 5,
    text: "Christian is very professional and I'm sure she represents Farmers brand and values Christian did listen to my needs and guide me to get the best product available.",
  },
  {
    id: 2,
    author: "Mary Salve L.",
    date: "July 1, 2020",
    rating: 5,
    text: "I did not have contact with Christian but I had contact with Orlando. Orlando was helpful and replied promptly and answered my questions. Thank you",
  },
  {
    id: 3,
    author: "Alex A.",
    date: "October 5, 2020",
    rating: 5,
    text: "Christian is very professional and I'm sure she represents Farmers brand and values Christian did listen to my needs and guide me to get the best product available.",
  },
  {
    id: 4,
    author: "Mary Salve L.",
    date: "July 1, 2020",
    rating: 5,
    text: "I did not have contact with Christian but I had contact with Orlando. Orlando was helpful and replied promptly and answered my questions. Thank you",
  }
];

export function TestimonialsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll boundary to enable/disable arrow buttons
  const checkScroll = useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Scroll to previous card
  const scrollPrev = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector<HTMLElement>("[data-card]");
      const scrollStep = card ? card.offsetWidth + 20 : 460;
      sliderRef.current.scrollBy({ left: -scrollStep, behavior: "smooth" });
    }
  };

  // Scroll to next card
  const scrollNext = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector<HTMLElement>("[data-card]");
      const scrollStep = card ? card.offsetWidth + 20 : 460;
      sliderRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
  };

  // Optional mouse drag-to-scroll support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    sliderRef.current.scrollLeft = scrollStart.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-white pt-[150px] overflow-hidden">
      {/* 1. Header (Title & Subtitle aligned to Container) */}
      <Container>
        <div className="max-w-[600px]">
          <h2 className="font-heading text-[32px]  text-primary">
            Trusted Across the Bay Area Since{" "}
            <span className="text-accent">2012</span>
          </h2>
          <p className="mt-[20px] text-base leading-[25px] text-black max-w-[470px]">
            Heavy lifting for you, making sure you get the exact coverage you
            need through a process that is straightforward and completely
            personalized.
          </p>
        </div>
      </Container>

      {/* 2. Slider Track (Left-aligned with Container, overflows to right) */}
      <div className="mt-[44px]">
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="flex gap-[20px] overflow-x-auto scroll-smooth no-scrollbar select-none cursor-grab active:cursor-grabbing"
          style={{
            paddingLeft: "calc((100vw - min(100vw, 1280px)) / 2 + 20px)",
            paddingRight: "20px",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              data-card
              className="w-[320px] sm:w-[400px] lg:w-[633px] shrink-0 bg-white border border-primary p-[25px] rounded-none flex flex-col justify-between"
            >
              {/* Stars & Rating */}
              <div>
                <div className="flex items-center gap-[4px] mb-[25px]">
                  <div className="flex items-center gap-[4px] text-[#69F7AE]">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="w-[25px] h-[25px]" />
                    ))}
                  </div>
                  <span className="text-base font-semibold text-primary leading-[25px] ml-[14px]">
                    {review.rating} out of 5
                  </span>
                </div>

                {/* Review Text (Italic) */}
                <p className="italic text-lg leading-[30px] text-black ">
                  {review.text}
                </p>
              </div>

              {/* Reviewer & Date */}
              <div className="flex items-center justify-between text-lg mt-[50px]">
                <span className="font-semibold text-primary">
                  {review.author}
                </span>
                <span className="text-accent text-base font-normal">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Slider Arrows (Positioned under first card, aligned to Container) */}
      <Container className="mt-[28px]">
        <div className="flex items-center gap-[12px]">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Previous review"
            className={`w-[36px] h-[36px] rounded-full border border-[#C5BFB8] flex items-center justify-center transition-all duration-200 cursor-pointer ${canScrollLeft
              ? "text-primary hover:border-primary hover:bg-primary hover:text-white"
              : "opacity-40 cursor-not-allowed text-neutral-400"
              }`}
          >
            <FiArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollRight}
            aria-label="Next review"
            className={`w-[36px] h-[36px] rounded-full border border-[#C5BFB8] flex items-center justify-center transition-all duration-200 cursor-pointer ${canScrollRight
              ? "text-primary hover:border-primary hover:bg-primary hover:text-white"
              : "opacity-40 cursor-not-allowed text-neutral-400"
              }`}
          >
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}

