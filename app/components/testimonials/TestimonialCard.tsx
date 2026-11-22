"use client";

import Image from "next/image";
import { useState } from "react";
import StarRating from "../ui/StarRating";
import { Testimonial } from "@/app/data/testimonials";

// Reviews longer than this many words are cut short with a "Read more" button
const WORD_LIMIT = 65;

// The first `limit` words of `text`, keeping its paragraph breaks,
// or null if the text is already short enough
function shorten(text: string, limit: number) {
  const words = [...text.matchAll(/\S+/g)];
  if (words.length <= limit) return null;
  const last = words[limit - 1];
  return text.slice(0, last.index + last[0].length).replace(/[.,!?;:\s-]+$/, "") + "…";
}

// First letters of the first and last words, e.g. "Sarah-Jane Sykes" -> "SS", "Ruby" -> "R"
function getInitials(name: string) {
  const words = name.trim().split(/\s+/);
  const letters = words.length > 1 ? [words[0], words[words.length - 1]] : words;
  return letters.map((w) => w[0].toUpperCase()).join("");
}

// Photo circle, stars, name, then the review. Cards grow to fit their text.
export default function TestimonialCard({
  name,
  text,
  image,
  initials,
  rating,
}: Testimonial) {
  const [expanded, setExpanded] = useState(false);
  const short = shorten(text, WORD_LIMIT);

  return (
    <figure className="flex w-full flex-col items-center bg-white px-7 py-10 text-center">
      <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-full bg-sage">
        {image ? (
          <Image
            quality={90}
            src={image}
            alt={name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <span className="font-heading text-2xl text-sage-dark">
            {initials ?? getInitials(name)}
          </span>
        )}
      </div>

      <StarRating rating={rating} className="mt-5" />

      <figcaption className="mt-3 font-heading text-2xl text-sage-dark">
        {name}
      </figcaption>

      <blockquote className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/70">
        &ldquo;{short && !expanded ? short : text}&rdquo;
      </blockquote>

      {short && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="mt-4 text-sm font-medium text-sage-dark underline underline-offset-4 hover:text-foreground"
        >
          {expanded ? "See less" : "Read more"}
        </button>
      )}
    </figure>
  );
}
