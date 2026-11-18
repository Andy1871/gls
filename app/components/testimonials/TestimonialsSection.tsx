"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/app/data/testimonials";
import Button from "../ui/Button";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        speed: 0.6,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  function scroll(direction: "prev" | "next") {
    if (!emblaApi) return;
    emblaApi.plugins().autoScroll?.reset(); // pause, then resume after the click
    if (direction === "prev") emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  }

  const arrowClass =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sage-dark shadow-md transition-colors hover:bg-sage";

  return (
    <section className="py-10 mb-10">
      <div className="px-6 text-center">
        <SectionHeader>See what everyone is saying</SectionHeader>
      </div>

      <div className="relative mt-12">
        <div
          ref={emblaRef}
          className="cursor-grab select-none overflow-hidden active:cursor-grabbing"
        >
          <div className="flex items-start">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 basis-[80%] pl-6 sm:basis-[45%] lg:basis-[24%]"
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scroll("prev")}
          aria-label="Previous testimonial"
          className={`${arrowClass} left-4 md:left-8`}
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          aria-label="Next testimonial"
          className={`${arrowClass} right-4 md:right-8`}
        >
          <FiArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
