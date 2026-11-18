import Button from "../ui/Button";

export default function HeroText() {
  return (
    <div className="absolute bottom-0 left-0 max-w-3xl p-6 pb-12 md:p-12 md:pb-16">
      <h1 className="font-heading font-medium text-4xl leading-none text-white md:text-6xl lg:text-7xl">
        Your Body,
        <br />
        Stronger.
      </h1>
      {/* <p className="mt-4 max-w-xl text-lg text-white/90 md:text-lg">
        Pilates, Personal Training and Nutrition for Women of Every Level
      </p> */}
      <Button
        href="/contact"
        variant="white"
        className="text-base md:text-lg mt-8"
      >
        Enquire Now
      </Button>
    </div>
  );
}
