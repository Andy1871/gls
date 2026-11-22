import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "../components/form/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact | Greenlife Studio",
  description:
    "Get in touch about Pilates, Personal Training and Nutrition with Greenlife Studio.",
};

export default function ContactPage() {
  return (
    <>
      {/* Split screen: photo left, heading + form right */}
      <section className="grid pt-18 md:min-h-svh md:grid-cols-2">
        <div className="relative h-[45svh] md:h-auto">
          <Image
            quality={90}
            src="/images/camera-front-facing-3-2400.jpg"
            alt="Tasha in the studio"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[50%_50%] md:object-[50%_80%]"
          />
        </div>

        <div className="flex items-center px-6 pt-10 pb-16 md:px-12 md:py-20 lg:px-20">
          <div className="w-full max-w-lg ">
            <h1 className="font-heading text-5xl leading-[1.05] md:text-6xl">
              Let&rsquo;s start your{" "}
              <span className="text-sage-dark">journey</span>
            </h1>
            <p className="mt-8 leading-relaxed text-foreground/70 md:text-lg">
              Interested in private Pilates, online coaching or a workplace
              session? Or just have a question? Send me a message and I&rsquo;ll
              get back to you within a couple of days.
            </p>
            <p className="mt-2 leading-relaxed text-foreground/70 md:text-lg">
              Want to join a group mat class?{" "}
              <a
                href="https://bookwhen.com/greenlifepilates"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Book your spot online
              </a>
              .
            </p>

            <EnquiryForm className="mt-8 flex flex-col" />
          </div>
        </div>
      </section>
    </>
  );
}
