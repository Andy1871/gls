import type { Metadata } from "next";
import { policies } from "../data/policies";

export const metadata: Metadata = {
  title: "Studio Policies | Green Life Studio",
  description:
    "Booking, cancellation, payment and studio policies for Green Life Studio.",
};

export default function PoliciesPage() {
  return (
    <div className="px-6 pt-24 pb-24 text-foreground md:px-12 md:pt-28 lg:px-20">
      <h1 className="text-center font-heading text-5xl font-medium md:text-6xl">
        Studio Policies
      </h1>

      <ol className="mx-auto mt-10 flex max-w-5xl flex-col gap-8 md:mt-12">
        {policies.map((policy, i) => (
          <li key={policy.title}>
            <h2 className="text-xl font-bold md:text-2xl">
              {i + 1}. {policy.title}
            </h2>
            <div className="mt-2 flex flex-col gap-3 leading-relaxed md:text-lg">
              {policy.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
