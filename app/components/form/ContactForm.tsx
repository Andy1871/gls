import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import EnquiryForm from "./EnquiryForm";

type ContactFormProps = {
  title?: string;
};

export default function ContactForm({ title }: ContactFormProps) {
  return (
    // Mobile: laid out like the contact page (photo on top, then heading, text and form).
    // iPad & desktop (md+): photo fills the section with the form card sitting over it.
    <section className="relative w-full md:flex md:min-h-[75vh] md:items-center md:overflow-hidden">
      <div className="relative h-[45svh] w-full md:absolute md:inset-0 md:h-auto">
        <Image
          src="/studio-ls.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-6 px-6 pt-16 pb-8 md:gap-12 md:px-4 md:py-16 lg:grid-cols-2 lg:items-start lg:px-6">
        {/* Left: title (on mobile, styled like the contact page heading) */}
        <div>
          <SectionHeader className="text-5xl font-normal leading-[1.05] md:font-medium md:leading-normal">
            {title}
          </SectionHeader>
        </div>

        {/* Right: form */}
        <EnquiryForm className="flex flex-col bg-beige md:p-8 md:shadow-lg">
          {/* Card heading only needed when the form sits over the photo */}
          <SectionHeader size="sm" className="mb-4 hidden md:block">
            Contact me to enquire and book
          </SectionHeader>

          <div className="mb-8 space-y-3 leading-relaxed text-foreground/70 md:text-sm md:text-foreground">
            <p>
              Get in touch to discuss your pilates and well-being journey, or if
              you have any other questions.
            </p>
            <p>
              Please book online here (link) if you would like to join one of my
              two weekly group mat classes.
            </p>
          </div>
        </EnquiryForm>
      </div>
    </section>
  );
}
