import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import type { FunFact } from "@/app/data/funFacts";

export default function FunFactsStrip({ facts }: { facts: FunFact[] }) {
  return (
    <div className="grid w-full gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <SectionHeader size="sm" className="text-beige">
          Get to know me better
        </SectionHeader>
      </div>

      {facts.map((fact, i) => (
        <div key={i} className="flex flex-row-reverse justify-end gap-3">
          <div className="relative size-20 shrink-0 overflow-hidden bg-beige/10 outline outline-beige/20">
            {fact.image && (
              <Image
                src={fact.image}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            )}
          </div>

          <div>
            <h3 className="text-lg leading-snug text-beige">{fact.question}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-beige/65">
              {fact.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
