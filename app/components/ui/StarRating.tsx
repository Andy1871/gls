import { cn } from "@/app/lib/cn";

type Props = {
  rating: number;
  className?: string;
};

export default function StarRating({ rating, className }: Props) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className={cn("flex gap-0.5 text-sage-dark", className)}
    >
      {Array.from({ length: rating }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}
