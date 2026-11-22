import Image from "next/image";
import type { ReactNode } from "react";
import Button from "./Button";
import { cn } from "@/app/lib/cn";

type Props = {
  image: string;
  alt: string;
  // The heading text; wrap key words in <span>
  children: ReactNode;
  href: string;
  cta?: string;
  className?: string;
};

// Full-width banner pointing to another service: photo left third, sage text panel right
export default function CrossSell({
  image,
  alt,
  children,
  href,
  cta = "Read more",
  className,
}: Props) {
  return (
    <div className={cn("grid md:grid-cols-3", className)}>
      <div className="relative h-[40svh] md:h-auto md:min-h-80">
        <Image
          quality={90}
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center bg-sage px-6 py-12 md:col-span-2 md:px-12 lg:px-16">
        <div>
          <h3 className="max-w-2xl font-heading text-3xl leading-tight text-sage-dark md:text-4xl">
            {children}
          </h3>
          <Button href={href} className="mt-8 text-base hover:bg-beige">
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
