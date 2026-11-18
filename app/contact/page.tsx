import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "../components/form/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact | Green Life Studio",
  description:
    "Get in touch about Pilates, personal training and nutrition with Green Life Studio.",
};

export default function ContactPage() {
  return (
    <>
      {/* Split screen: photo left, heading + form right */}
      <section className="grid pt-18 md:min-h-svh md:grid-cols-2">
        <div className="relative h-[45svh] md:h-auto">
          <Image
            src="/studio-ls.jpg"
            alt="The studio"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-16 md:px-12 md:py-20 lg:px-20">
          <div className="w-full max-w-lg ">
            <h1 className="font-heading text-5xl leading-[1.05] md:text-6xl">
              Let&rsquo;s start your{" "}
              <span className="text-sage-dark">journey</span>
            </h1>
            <p className="mt-6 leading-relaxed text-foreground/70 md:text-lg">
              [Pilates, personal training or nutrition: send me a message and
              I&rsquo;ll get back to you within a couple of days.]
            </p>
            <p className="mt-2 leading-relaxed text-foreground/70 md:text-lg">
              Please book online here (link) if you would like to join one of my
              two weekly group mat classes.
            </p>

            <EnquiryForm className="mt-8 flex flex-col" />
          </div>
        </div>
      </section>
    </>
  );
}
