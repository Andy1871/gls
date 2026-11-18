import Button from "./Button";
import { cn } from "@/app/lib/cn";

type Props = {
  title?: string;
  text?: string;
  href?: string;
  cta?: string;
  className?: string;
};

// Full-width sage call-to-action band, used at the end of the homepage to send visitors to the contact page
export default function CtaBanner({
  title = "Ready to start? Book your first session",
  text = "Whether it's pilates, personal training or nutrition support, get in touch and we'll find what's right for you.",
  href = "/contact",
  cta = "Get in touch",
  className,
}: Props) {
  return (
    <section
      className={cn("bg-sage px-6 py-16 md:px-12 md:py-24 lg:py-16", className)}
    >
      {/* Wider on large screens so the heading and text sit on fewer lines */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:max-w-5xl">
        <h2 className="font-heading text-4xl font-medium leading-tight text-sage-dark md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed lg:max-w-3xl text-sage-dark/80 md:text-lg">
          {text}
        </p>
        <Button href={href} className="mt-10 text-base md:text-lg lg:mt-8">
          {cta}
        </Button>
      </div>
    </section>
  );
}
