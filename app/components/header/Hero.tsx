// import Image from "next/image";
// import HeroText from "./HeroText";

// export default function Hero() {
//   return (
//     <section className="relative h-svh w-full">
//       <Image
//         src="/hero-test.png"
//         alt="Woman doing mat pilates"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover"
//       />

//       {/* Below div just creates a gradient overlay from bottom left - darkens the image */}
//       <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
//       <HeroText />
//     </section>
//   );
// }

// // This is using the lovable.dev design with text bottom left. But the Alluna design has the text top centered nicely above the image which works for pilates
// // We can look at both, depending on what imagery you end up using.

import Image from "next/image";
import Button from "../ui/Button";
import KeywordBanner from "../ui/Banner";
import { Fragment } from "react";

// Words round the rotating badge, evenly spaced with a dot between each
const badgeWords = ["Pilates", "Strength", "Wellbeing"];

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden text-stone-800 md:min-h-svh">
      {/* Soft warm glow behind the image side */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-1/3 h-[38rem] w-[38rem] rounded-full bg-[#E6D6C3]/70 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-6 pb-20 pt-22 md:grid-cols-12 md:gap-8 md:px-12 md:pt-32">
        {/* ── Text ───────────────────────────── */}
        <div className="md:col-span-6 lg:col-span-5">
          <h1 className="font-heading text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            Your body,
            <br />
            <span className="text-sage-dark">stronger.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-stone-600 md:text-lg">
            Pilates, personal training and nutrition for women of every level,
            at a pace that feels good.
          </p>

          <div className="mt-10 hidden flex-wrap items-center gap-x-8 gap-y-4 md:flex">
            {/* Hidden on mobile so the image sits higher. Swap the variant for your dark/primary style - "white" won't show on this background */}
            {/* Goes to the contact page, where the enquiry form is */}
            <Button href="/contact" className="text-base md:text-lg">
              Book a session
            </Button>
          </div>
        </div>

        {/* ── Image ──────────────────────────── */}
        <div className="relative md:col-span-6 lg:col-span-6 lg:col-start-7">
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:ml-auto md:mr-0 md:max-w-md lg:max-w-[30rem]">
            {/* Solid sage arch peeking out behind */}
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-full w-full rounded-t-full bg-sage md:-right-6 md:-top-6"
            />

            {/* Arched portrait */}
            <div className="relative aspect-3/4 overflow-hidden rounded-t-full bg-stone-200 shadow-[0_30px_60px_-30px_rgba(60,40,20,0.35)]">
              <Image
                src="/front-laying-pose-2400.webp"
                alt="Woman doing mat pilates"
                fill
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, 90vw"
                className="object-cover"
                quality={90}
              />
            </div>

            {/* Slowly rotating circular badge */}
            <div className="absolute -left-6 top-[18%] flex size-24 items-center justify-center rounded-full bg-sage-dark text-beige shadow-lg md:-left-12 md:size-28">
              <svg
                viewBox="0 0 100 100"
                aria-hidden
                className="absolute inset-0 size-full animate-spin-slow motion-reduce:animate-none"
              >
                <defs>
                  <path
                    id="hero-badge-circle"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                  />
                </defs>
                {/*
                  One line of text: "word · word · word · " with non-breaking spaces
                  (normal spaces at the ends get stripped by SVG, which is what removed
                  the gap at the join). textLength = the circumference (2π × 37), so the
                  line fits exactly once round and every gap, including the join, matches.
                */}
                <text className="fill-current text-[9.5px] font-medium uppercase tracking-[0.1em]">
                  <textPath
                    href="#hero-badge-circle"
                    textLength="232.5"
                    lengthAdjust="spacing"
                  >
                    {badgeWords.map((word) => (
                      <Fragment key={word}>
                        {word}
                        {" "}
                        <tspan className="text-[13px]">·</tspan>
                        {" "}
                      </Fragment>
                    ))}
                  </textPath>
                </text>
              </svg>
              <span aria-hidden className="font-heading text-2xl">
                ✦
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Last item in the full-height hero, so it sits along the bottom of the first screen */}
      <KeywordBanner />
    </section>
  );
}
