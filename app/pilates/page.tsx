import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "../components/ui/SectionHeader";
import OfferingBox from "../components/offerings/OfferingBox";
import CrossSell from "../components/ui/CrossSell";

export const metadata: Metadata = {
  title: "Pilates | Green Life Studio",
  description: "Private, group and corporate Pilates with Green Life Studio.",
};

// Fine film-grain texture (same as the about page hero), so the green isn't flat
const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// Placeholder images: swap for Pilates-specific photos
const offerings = [
  {
    title: "Private 1-2-1",
    description:
      "[Short description of private sessions: tailored to you, your goals and your pace.]",
    image: "/homepage/pilates.jpeg",
    href: "/contact", // swap for your booking link
  },
  {
    title: "Group Classes",
    description:
      "[Short description of group classes: class sizes, levels, where and when.]",
    image: "/about/teaching.jpeg",
    href: "/contact", // swap for your booking link
  },
  {
    title: "Business & Events",
    description:
      "[Short description of corporate wellness, workplace sessions, retreats and private events.]",
    image: "/header-ps.jpg",
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
            src="/homepage/pilates.jpeg"
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
              [Pilates Surrey Camberley,]{" "}
              <span className="text-sage">[key words]</span>
            </h1>
            <div className="mt-10 h-px w-16 bg-sage/50" />
            <p className="mt-6 max-w-md leading-relaxed text-beige/80 md:text-lg">
              [One or two sentences introducing your Pilates: the style you
              teach, who it&rsquo;s for and how it&rsquo;ll make them feel.]
            </p>
          </div>
        </div>
      </section>

      {/* Text block left, image right */}
      <section className="grid md:min-h-screen md:grid-cols-2">
        <div className="flex items-center bg-amber-50 px-6 py-20 md:px-12 lg:px-20">
          <div className="max-w-lg">
            <h2 className="font-heading text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              [Why Pilates]
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed md:text-lg">
              <p>
                [A short paragraph on the benefits of Pilates and why you love
                teaching it: strength, posture, mobility, calm.]
              </p>
              <p>
                [A second short paragraph on what a session with you is like,
                and that every level is welcome, from complete beginners up.]
              </p>
            </div>
          </div>
        </div>

        {/* Comes first on phones so the page alternates image / text */}
        <div className="relative order-first h-[70svh] md:order-none md:h-auto">
          <Image
            src="/about/teaching.jpeg"
            alt="Teaching a Pilates session"
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
            <OfferingBox key={o.title} {...o} cta="Book Here" />
          ))}
        </div>

        {/* PT & nutrition cross-sell */}
        <CrossSell
          className="mt-16 md:mt-20"
          image="/header-ps.jpg"
          alt="Personal training session"
          href="/personaltraining"
        >
          Interested in <span>personal training</span>,{" "}
          <span>nutrition</span> &amp;{" "}
          <span>online coaching</span>?
        </CrossSell>
      </section>
    </>
  );
}
