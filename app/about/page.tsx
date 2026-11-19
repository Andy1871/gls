import type { Metadata } from "next";
import Image from "next/image";
import Button from "../components/ui/Button";
import Hero from "../components/about/header/Hero";
import FunFactsStrip from "../components/about/FunFactsStrip";
import { funFacts } from "../data/funFacts";
import SoftTexture from "../components/ui/SoftTexture";

export const metadata: Metadata = {
  title: "About | Green Life Studio",
  description: "Meet the person behind Green Life Studio.",
};

export default function AboutPage() {
  return (
    <>
      <Hero />

      {/* About section */}
      <section className="grid md:min-h-screen md:grid-cols-2">
        <div className="flex items-center  px-6 py-20 md:px-12 lg:px-20 bg-amber-50">
          <div className="max-w-lg">
            <h2 className="font-heading text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Meet Tasha
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed md:text-lg">
              <p>
                For years I struggled to find a routine I loved. I tried gyms, home workouts and running, always chasing quick results without knowing what worked for me.
              </p>
              <p>Then I discovered Reformer Pilates and everything clicked. I trained as an instructor alongside my corporate IT and sales career, then took the plunge, left my 9 to 5 and built Green Life Studio in my garden. Along the way I rediscovered my love of strength training and qualified as a Level 3 Personal Trainer.</p>

              <p>I’ve had my own struggles with food too, from restriction and bingeing to feeling I had to follow strict rules. Now I enjoy simple, nourishing food without constant tracking, and that balance shapes everything I teach.</p>
              <p>
                At Green Life Studio, I bring together Pilates, strength and nutrition to help you find what works for you and build habits that last. No quick fixes, no perfection, just a stronger, healthier and more balanced you.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/pilates" className="text-base">
                Explore Pilates
              </Button>
              <Button href="/personaltraining" className="text-base">
                Explore online coaching
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-[70svh] md:h-auto">
          <Image
            src="/about/meet-tasha.jpeg"
            alt="Tasha in the studio"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Fun Facts */}
      {/* Same side padding as the Meet Tasha text, so it lines up */}
      <section className="bg-sage-dark px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <FunFactsStrip facts={funFacts} />
      </section>

      {/* Three image/block section */}
      <section className="grid md:h-[90svh] md:grid-cols-2">
        {/* Left: one full-height image */}
        <div className="relative h-[70svh] md:h-full">
          <Image
            src="/about/teaching.jpeg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right: call to action on the page background, half-height image below */}
        <div className="grid md:grid-rows-2">
          <div className="relative flex items-center overflow-hidden px-6 py-16 md:px-12 lg:px-20">
            <SoftTexture />
            <div className="relative max-w-lg">
              <h2 className="font-heading text-4xl leading-[1.05] md:text-5xl">
                Get in touch today to{" "}
                <span className="text-sage-dark">work with me</span>
              </h2>
              <Button href="/contact" className="mt-8 text-base">
                Contact
              </Button>
            </div>
          </div>
          <div className="relative h-[50svh] md:h-full">
            <Image
              src="/header-ps.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
