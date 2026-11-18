import GreenTexture from "../../ui/GreenTexture";

export default function HeroText() {
  // Larger serif words mixed into the all-caps headline
  const serifWord =
    "font-heading text-[1.5em] font-normal normal-case tracking-normal";

  return (
    <div className="relative flex items-center overflow-hidden bg-sage-dark px-6 py-20 text-beige md:px-12 lg:px-20">
      {/* Soft light patches + grain so the green isn't flat */}
      <GreenTexture />

      <div className="relative max-w-xl">
        <h1 className="font-sans text-2xl font-medium uppercase leading-tight tracking-[0.12em] md:text-3xl lg:text-4xl">
          Helping every woman feel{" "}
          <span className={serifWord + " text-sage"}>strong,</span>{" "}
          <span className={serifWord + " text-sage"}>calm</span> and completely{" "}
          <span className={serifWord + " text-sage"}>at home.</span>
        </h1>

        <div className="mt-10 h-px w-16 bg-sage/50" />

        <p className="mt-6 max-w-md text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-beige/80 md:text-sm">
          Private &amp; group Pilates · Personal training · Nutrition
          <br />
          In Surrey and online
        </p>
      </div>
    </div>
  );
}
