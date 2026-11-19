import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

type Props = {
  title: string;
  description: string;
  image: string;
  href?: string;
  // Button text (only shown when there is an href)
  cta?: string;
  // Optional second button that goes to a booking form (e.g. "#book" on the homepage)
  bookHref?: string;
};

export default function OfferingBox({
  title,
  description,
  image,
  href,
  cta = "Learn more",
  bookHref,
}: Props) {
  const imageBox = (
    <div className="relative h-[60svh] overflow-hidden border-2 border-sage">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );

  return (
    <div className="flex w-full flex-col">
      {/* Image (links through when there's a page to go to) */}
      {href ? (
        <Link href={href} className="group block" aria-label={title}>
          {imageBox}
        </Link>
      ) : (
        imageBox
      )}

      {/* Text below the image */}
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="font-heading text-3xl font-medium text-sage-dark lg:text-4xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">
          {description}
        </p>
        {href && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Button href={href} className="group">
              {cta}
            </Button>
            {bookHref && (
              <Button
                href={bookHref}
                variant="white"
                className="border border-sage-dark hover:bg-sage hover:text-sage-dark"
              >
                Book a session
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
