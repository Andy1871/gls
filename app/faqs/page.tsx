import type { Metadata } from "next";
import Button from "../components/ui/Button";
import { faqSections } from "../data/faqs";

export const metadata: Metadata = {
  title: "FAQs | Green Life Studio",
  description:
    "Answers to common questions about Pilates, online coaching and Green Life Studio.",
};

export default function FaqsPage() {
  return (
    <div className="px-6 pt-24 pb-24 text-foreground md:px-0 md:pt-28">
      <h1 className="text-center font-heading text-5xl font-medium md:text-6xl">
        FAQs
      </h1>

      {/* Centred container at 65% width on larger screens, text left-aligned inside */}
      <div className="mx-auto mt-12 flex w-full flex-col gap-14 md:mt-16 md:w-[65%]">
        {faqSections.map((section, i) => (
          <section key={section.title}>
            <h2 className="font-heading text-3xl font-medium md:text-4xl">
              {section.title}
            </h2>

            <div className="mt-6 border-t border-foreground/15">
              {section.faqs.map((faq) => (
                // Sharing a `name` makes the browser keep only one FAQ open per section
                <details
                  key={faq.question}
                  name={`faq-${i}`}
                  className="group border-b border-foreground/15"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      aria-hidden
                      className="text-2xl leading-none transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* Small nudge to the contact page for anything not covered above */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-medium md:text-4xl">
            Can&rsquo;t find an answer?
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/70">
            Feel free to get in touch and I&rsquo;ll be happy to help.
          </p>
          <Button href="/contact" className="mt-6">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}
