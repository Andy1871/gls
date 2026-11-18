import Image from "next/image";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="grid pt-18 md:h-svh md:min-h-160 md:grid-cols-2">
      <div className="relative h-[70svh] md:h-full">
        <Image
          src="/about/meet-tasha.jpeg"
          alt="Tasha in the studio"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <HeroText />
    </section>
  );
}
