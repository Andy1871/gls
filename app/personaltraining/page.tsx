import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import SoftTexture from "../components/ui/SoftTexture";
import CrossSell from "../components/ui/CrossSell";
import GreenTexture from "../components/ui/GreenTexture";
import { cn } from "../lib/cn";

export const metadata: Metadata = {
  title: "Personal Training & Nutrition | Green Life Studio",
  description:
    "Online personal training and nutrition coaching for women, on its own or alongside Pilates.",
};

// Placeholder images and copy: swap for your own
const services = [
  {
    title: "Personal Training",
    image: "/header-ps.jpg",
    alt: "Personal training session",
    points: [
      "Feel strong, capable and proud of what your body can do",
      "Lift heavier, move freely and feel more confident every week",
      "Train at home or in the gym, with a plan made just for you",
    ],
  },
  {
    title: "Nutrition Support",
    image: "/homepage/nutrition.jpeg",
    alt: "Healthy, balanced food",
    points: [
      "Food that fuels you, never restricts you",
      "More energy, better sleep and food you actually enjoy",
      "Simple habits that fit your real life",
    ],
  },
];

// What's included in the 12-week package. Placeholder copy: swap for your own
const included = [
  {
    title: "A plan built for you",
    body: "A training programme designed around your goals, schedule and experience, for home or the gym.",
  },
  {
    title: "Everything in one app",
    body: "Your sessions, demo videos and progress, all on your phone.",
  },
  {
    title: "Nutrition guidance that fits your life",
    body: "Simple, flexible guidance with no strict diets, built around the food you enjoy.",
  },
  {
    title: "Support every week",
    body: "A weekly check-in to talk through how you’re feeling, ask questions and stay motivated.",
  },
  {
    title: "Habit coaching",
    body: "Small, sustainable habits around sleep, stress and energy that add up over time.",
  },
  {
    title: "Progress reviews",
    body: "We’ll track your strength and milestones, then adjust your plan as you improve.",
  },
  {
    title: "Alongside Pilates",
    body: "Pair your coaching with studio Pilates sessions for an all-round approach.",
  },
];

export default function PersonalTrainingPage() {
  return (
    <>
      {/* Hero: textured page-colour block left, image right */}
      <section className="grid pt-18 md:h-svh md:min-h-160 md:grid-cols-2">
        <div className="relative flex items-center overflow-hidden px-6 py-20 text-sage-dark md:px-12 lg:px-20">
          <SoftTexture />

          <div className="relative max-w-xl">
            <h1 className="font-heading text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Get stronger, <span>wherever you are.</span>
            </h1>
            <div className="mt-10 h-px w-16 bg-sage-dark/40" />
            <p className="mt-6 max-w-md leading-relaxed text-foreground/75 md:text-lg">
              Start with a 12-week block of coaching built around you, then keep
              building with 4, 8 or 12-week blocks beyond. Strength, nutrition
              and confidence, delivered online.
            </p>
            <Button href="#whats-included" className="mt-10 text-base">
              What&rsquo;s included
            </Button>
          </div>
        </div>

        {/* Comes first on phones, matching the Pilates page */}
        <div className="relative order-first h-[70svh] md:order-none md:h-full">
          <Image
            src="/header-ps.jpg"
            alt="Personal training"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* PT and nutrition: a 2x2 checkerboard that fits on one screen */}
      <section>
        {/*
          Desktop: [PT image][PT text] / [Nutrition text][Nutrition image]
          Phones: image then text for each
        */}
        <div className="grid md:h-svh md:min-h-176 md:grid-cols-2 md:grid-rows-2">
          {services.map((s, i) => [
            <div
              key={`${s.title}-image`}
              className={cn(
                "relative h-[45svh] md:h-auto",
                i === 0 ? "order-1" : "order-3 md:order-4",
              )}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>,
            <div
              key={`${s.title}-text`}
              className={cn(
                "flex items-center bg-sage-dark px-6 py-14 md:px-12 lg:px-20",
                i === 0 ? "order-2" : "order-4 md:order-3",
              )}
            >
              <div className="w-full max-w-lg">
                <h3 className="font-heading text-4xl text-beige lg:text-5xl">
                  {s.title}
                </h3>
                {/* Each point as a short plain paragraph */}
                <ul className="mt-6 space-y-3">
                  {s.points.map((point, j) => (
                    <li key={j} className="mt-3 text-lg leading-snug text-beige/80 md:text-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
          ])}
        </div>
      </section>

      {/* Packages: centred heading, then what's included in the 12-week package */}
      {/* scroll-mt keeps the heading clear of the fixed nav when jumped to from the hero */}
      <section
        id="whats-included"
        className="scroll-mt-18 px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <SectionHeader className="mx-auto max-w-3xl text-center text-sage-dark">
          What&rsquo;s included in your 12-week package and beyond?
        </SectionHeader>

        <div className="mx-auto max-w-5xl">
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6">
            {included.map((item, i) => (
              <li
                key={item.title}
                className="border border-sage-dark/10 bg-white/50 p-8 md:p-10"
              >
                <span
                  aria-hidden
                  className="font-heading text-4xl leading-none text-sage-dark/30 md:text-5xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-6 font-heading text-2xl text-sage-dark">
                  {item.title}
                </h4>
                <p className="mt-3 leading-relaxed text-foreground/70">
                  {item.body}
                </p>
              </li>
            ))}

            {/* 08: the bold "what happens next" card */}
            <li className="relative flex flex-col overflow-hidden bg-sage-dark p-8 text-beige md:p-10">
              <GreenTexture />
              <span
                aria-hidden
                className="relative font-heading text-4xl leading-none text-sage/60 md:text-5xl"
              >
                {String(included.length + 1).padStart(2, "0")}
              </span>
              <h4 className="relative mt-6 font-heading text-2xl md:text-3xl">
                What happens next?
              </h4>
              <p className="relative mt-3 leading-relaxed text-beige/80">
                Continue your progress with 4, 8 or 12-week blocks.
              </p>
            </li>
          </ol>

          {/* Centred under the cards */}
          <div className="mt-12 flex justify-center">
            <Button href="/contact" className="text-base">
              Enquire now
            </Button>
          </div>
        </div>
      </section>

      {/* Pilates cross-sell (same banner as on the Pilates page) */}
      <CrossSell
        image="/homepage/pilates.jpeg"
        alt="Pilates in the studio"
        href="/pilates"
      >
        Want to learn more about <span>Pilates</span>?
      </CrossSell>
    </>
  );
}
