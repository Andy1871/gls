import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const instagramUrl = "https://instagram.com/yourhandle";

// Placeholder images: swap for real Instagram posts
const posts = [
  { image: "/images/side-sat-mat-1600.jpg", alt: "Mat Pilates class" },
  { image: "/about/teaching.jpeg", alt: "Teaching a session" },
  { image: "/header-ps.jpg", alt: "Studio session" },
  { image: "/images/front-tophalf-oranges-1600.jpg", alt: "Holding oranges" },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/pilates", label: "Pilates" },
  { href: "/personaltraining", label: "PT & Nutrition" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/policies", label: "Studio Policies" },
  { href: "/contact", label: "Contact" },
];

// Fine film-grain texture, as on the page heroes
const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sage-dark text-beige">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,232,213,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.25),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{ backgroundImage: grain }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Instagram: touching photos left, text right */}
        <div className="grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:order-2 lg:col-span-4">
            <SectionHeader size="sm" className="text-beige md:text-4xl">
              Follow along on{" "}
              <span className="text-sage">Instagram</span>
            </SectionHeader>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige/70">
              Classes, tips and studio life, shared every week.
            </p>
            <Button
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="white"
              className="mt-6 text-sm hover:bg-sage hover:text-sage-dark"
            >
              <FaInstagram className="h-4 w-4" />
              Follow me
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:order-1 lg:col-span-8">
            {posts.map((post, i) => (
              <a
                key={i}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-3/4 overflow-hidden"
              >
                <Image
                  quality={90}
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <FaInstagram className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-8 border-t border-beige/15 py-10 md:grid-cols-3">
          {/* Logo */}
          <div className="flex w-fit flex-col">
            <Link href="/">
              <Image
                quality={90}
                src="/gls-logo-footer.svg"
                alt="Greenlife Studio"
                width={280}
                height={100}
              />
            </Link>
            {/* <p className="mt-6 max-w-xs text-sm leading-relaxed text-beige/75">
              Pilates, Personal Training and Nutrition for women of every level,
              in a calm and welcoming space.
            </p> */}
          </div>

          {/* Site links, split over two columns (4 + 3) to keep the footer short */}
          <nav aria-label="Footer">
            <ul className="grid w-fit grid-flow-col grid-rows-4 gap-x-16 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-beige/75 transition-colors hover:text-beige"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book button */}
          <div className="md:flex md:items-start md:justify-end">
            <Button
              href="/contact"
              variant="white"
              className="text-base hover:bg-sage hover:text-sage-dark md:text-lg"
            >
              Book
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-beige/15">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-beige/60 md:px-8 lg:px-12">
          ©2026 Greenlife Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
