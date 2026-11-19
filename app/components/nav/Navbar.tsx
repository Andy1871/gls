"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const pathname = usePathname();

  // Pages where the nav starts on a solid beige background (glass once scrolled)
  const solidAtTop = pathname === "/about";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/30 bg-beige/25 shadow-sm backdrop-blur-3xl backdrop-saturate-150"
            : solidAtTop
              ? "border-b border-transparent bg-beige"
              : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Desktop */}
        <nav className="mx-auto hidden h-18 max-w-7xl grid-cols-3 items-center px-15 lg:grid">
          <div className="flex items-center gap-30">
            <NavLink href="/pilates">PILATES</NavLink>
            <NavLink href="/personaltraining">PT &amp; NUTRITION</NavLink>
          </div>

          <Link href="/" className="justify-self-center">
            <Image
              src="/gls-logo-nav.svg"
              alt="Green Life Studio"
              width={120}
              height={40}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <div className="flex items-center justify-end gap-30">
            <NavLink href="/about">ABOUT</NavLink>
            {/* <NavLinkButton href="/contact">CONTACT</NavLinkButton> */}
            <NavLink href="/contact">ENQUIRE</NavLink>
          </div>
        </nav>

        {/* Mobile & tablet: logo + menu button */}
        <div className="flex h-18 items-center justify-between px-6 lg:hidden">
          <Link href="/" aria-label="Home">
            <Image
              src="/gls-logo-nav.svg"
              alt="Green Life Studio"
              width={120}
              height={40}
              priority
              className="h-14 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-gray-900"
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-4 self-end mr-2.5 bg-current" />
          </button>
        </div>
      </header>

      {/* Outside the header: its backdrop blur would otherwise trap the fixed overlay */}
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
