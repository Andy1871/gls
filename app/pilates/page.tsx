import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "../components/ui/SectionHeader";
import OfferingBox from "../components/offerings/OfferingBox";
import CrossSell from "../components/ui/CrossSell";

export const metadata: Metadata = {
  title: "Pilates | Greenlife Studio",
  description: "Private, group and corporate Pilates with Greenlife Studio.",
};

// Fine film-grain texture (same as the about page hero), so the green isn't flat
const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// Placeholder images: swap for Pilates-specific photos
const offerings = [
  {
    title: "Private 1-2-1",
    description:
      "Private sessions on the reformer, tailored completely to you. Ideal if you’re new to Pilates, working around an injury or want focused attention on your technique and goals.",
    image: "/about/teaching.jpeg",
    href: "/contact", // swap for your booking link
  },
  {
    title: "Group Mat Classes",
    description:
      "Friendly, supportive classes in Camberley, twice a week, to build strength and mobility. Every exercise comes with options, so you can always work at the level that’s right for you.",
    image: "/images/group-mat-1600.jpg",
    href: "/contact", // swap for your booking link
  },
  {
    title: "Business & Events",
    description:
      "Mat Pilates brought to you. Whether it’s a company wellness day, a retreat, a birthday or a hen do. They’re a relaxed, inclusive way for everyone to unwind, move and recharge together, and no experience is needed.",
    image: "/images/group-wo-matcha-1600.jpg",
    href: "/contact", // swap for your booking link
  },
];

export default function PilatesPage() {
  return (
    <>
      {/* Hero: image left, green block right */}
      <section className="grid pt-18 md:h-svh md:min-h-160 md:grid-cols-2">
        <div className="relative h-[70svh] md:h-full">
          <Image
            quality={90}
            src="/images/front-torso-props-2400.jpg"
            alt="Pilates in the studio"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative flex items-center overflow-hidden bg-sage-dark px-6 py-20 text-beige md:px-12 lg:px-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,232,213,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.25),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{ backgroundImage: grain }}
          />

          <div className="relative max-w-xl">
            <h1 className="font-heading text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Private and Group Pilates in Camberley, Surrey{" "}
            </h1>
            <div className="mt-10 h-px w-16 bg-sage/50" />
            <p className="mt-6 max-w-md leading-relaxed text-beige/80 md:text-lg">
              Pilates for women of every level, in a calm, welcoming space where
              you can move at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Text block left, image right */}
      <section className="grid md:min-h-screen md:grid-cols-2">
        <div className="flex items-center bg-amber-50 px-6 py-20 md:px-12 lg:px-20">
          <div className="max-w-lg">
            <h2 className="font-heading text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Why Pilates
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed md:text-lg">
              <p>
                Pilates strengthens your deep core muscles to support your
                spine, improve your posture and keep your joints supple. It also
                asks you to slow down and breathe, so you leave feeling lighter
                in body and mind.
              </p>
              <p>
                On the reformer, every session is one-to-one and tailored to
                your body and goals, while my group mat classes are a friendly,
                relaxed way to practise alongside others.
              </p>
            </div>
          </div>
        </div>

        {/* Comes first on phones so the page alternates image / text */}
        <div className="relative order-first h-[70svh] md:order-none md:h-auto">
          <Image
            quality={90}
            src="/images/birdseye-mat-props-2400.jpg"
            alt="Pilates mat and props from above"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Offerings */}
      <section className="pt-16 md:pt-24">
        <div className="px-6 text-center">
          <SectionHeader>
            Find your <span className="text-sage-dark">class</span>
          </SectionHeader>
        </div>

        <div className="m-6 mt-12 grid gap-12 md:grid-cols-3 md:gap-6">
          {offerings.map((o) => (
            <OfferingBox key={o.title} {...o} cta="Book here"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          ))}
        </div>

        {/* PT & nutrition cross-sell */}
        <CrossSell
          className="mt-16 md:mt-20"
          image="/images/picking-up-weight-1536.jpg"
          alt="Picking up a weight"
          href="/personaltraining"
        >
          Interested in <span>Personal Training</span>, <span>Nutrition</span>{" "}
          &amp; <span>online coaching</span>?
        </CrossSell>
      </section>
    </>
  );
}
