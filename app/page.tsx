import Hero from "./components/header/Hero";
import OfferingBox from "./components/offerings/OfferingBox";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import CtaBanner from "./components/ui/CtaBanner";
import SectionHeader from "./components/ui/SectionHeader";

export default function Home() {
  return (
    <section>
      <Hero />

      <section className="py-16 md:py-16">
        {/* Narrower container brings the title in and the two columns closer together */}
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2 md:gap-10 md:px-12">
          <div>
            <SectionHeader>Why choose </SectionHeader>
            <SectionHeader className="text-sage-dark">
              Greenlife Studio
            </SectionHeader>
          </div>

          <div>
            <p className="leading-relaxed md:mt-16">
              At Greenlife Studio, I help women build strength, confidence and a
              healthier relationship with their bodies through{" "}
              <strong className="font-heading text-4xl leading-[1.1] md:text-4xl lg:text-4xl text-sage-dark">
                pilates
              </strong>
              ,{" "}
              <strong className="font-heading text-4xl leading-[1.1] md:text-4xl lg:text-4xl  text-sage-dark">
                personal training
              </strong>{" "}
              and{" "}
              <strong className="font-heading text-4xl leading-[1.1] md:text-4xl lg:text-4xl  text-sage-dark">
                nutrition support
              </strong>
              . Whether you’re stepping onto a mat for the first time or
              returning after a break, you’ll find a calm, welcoming space
            </p>
          </div>
        </div>
      </section>

      {/* WE COULD MAKE THIS VIDEO-ON-HOVER CARDS THAT HAVE THE STILL IMAGE AT FIRST, AND TURN INTO A VIDEO ON HOVER. */}
      <div className="m-6 grid gap-12 md:grid-cols-2 md:gap-6">
        <OfferingBox
          title="Pilates"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
          image="/homepage/pilates.jpeg"
          href="/pilates"
          bookHref="/contact"
        />
        <OfferingBox
          title="Personal Training & Nutrition"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
          image="/header-ps.jpg"
          href="/personaltraining"
          bookHref="/contact"
        />
      </div>
      {/* 
      <div className="mx-auto mt-20 w-3/4 text-center">
        <SectionHeader>Tasha's Greenlife Studio Story</SectionHeader>
        <p className="mt-4 text-lg leading-relaxed md:text-lg md:leading-relaxed">
          Do you want any kind of about section on here with a picture of you?
          There would still be an actual about page with your journey, your
          values, key numbers about the studio/you.
        </p>
      </div> */}

      <div className="mt-20 md:mt-24">
        <TestimonialsSection />
      </div>

      {/* Closing call to action: the enquiry form lives on the contact page only */}
      <CtaBanner className="mt-6" />

      {/* <div className="mx-auto mt-20 w-3/4 text-center">
        <SectionHeader>What Everyone's Saying</SectionHeader>
        <p className="mt-4 text-lg leading-relaxed md:text-lg md:leading-relaxed">
          A draggable testimonials section - I will just literally copy and
          paste all the text from Google & peoples names into here with a 5 star
          thing.
          <br />
          Alluna one is quite good, there are loads online to look through
        </p>
      </div> */}
    </section>
  );
}
