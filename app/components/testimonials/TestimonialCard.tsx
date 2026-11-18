import Image from "next/image";
import StarRating from "../ui/StarRating";
import { Testimonial } from "@/app/data/testimonials";

// Photo circle, stars, name, then the review. Cards grow to fit their text.
export default function TestimonialCard({
  name,
  text,
  image,
  initials,
  rating,
}: Testimonial) {
  return (
    <figure className="flex w-full flex-col items-center bg-white px-7 py-10 text-center">
      <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-full bg-sage">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <span className="font-heading text-2xl text-sage-dark">
            {initials}
          </span>
        )}
      </div>

      <StarRating rating={rating} className="mt-5" />

      <figcaption className="mt-3 font-heading text-2xl text-sage-dark">
        {name}
      </figcaption>

      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/70">
        &ldquo;{text}&rdquo;
      </blockquote>
    </figure>
  );
}
