import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import type { FunFact } from "@/app/data/funFacts";

export default function FunFactsStrip({ facts }: { facts: FunFact[] }) {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-12 flex flex-col gap-4 border-b border-beige/20 pb-10 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeader size="lg" className="text-beige">
            Get to know me better
          </SectionHeader>
        </div>
      </div>

      {/* Facts */}
      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact, i) => (
          <li key={i} className="group flex items-start gap-5">
            {/* Fixed-size thumbnail, always on the left, so every image lines up */}
            <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-beige/10 ring-1 ring-beige/20 transition-colors group-hover:ring-beige/40">
              {fact.image ? (
                <Image
                  src={fact.image}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl text-beige/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
            </div>

            <div className="pt-1">
              <h3 className="font-heading text-xl leading-snug text-beige">
                {fact.question}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-beige/70">
                {fact.answer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
