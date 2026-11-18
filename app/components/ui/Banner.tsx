const keywords = [
  "Pilates",
  "Personal Training",
  "Nutrition",
  "Strength",
  "Balance",
  "Community",
  "Well-Being",
  "Reformer",
  "1-2-1",
  "Wellness",
];

export default function KeywordBanner() {
  return (
    <div className="w-full overflow-hidden bg-sage py-4">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[...keywords, ...keywords].map((word, i) => (
          <span
            key={i}
            className="flex items-center font-heading text-xl text-sage-dark md:text-2xl"
          >
            <span className="px-6">{word}</span>
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
