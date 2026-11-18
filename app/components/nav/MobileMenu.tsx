"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";
import { cn } from "@/app/lib/cn";
import GreenTexture from "../ui/GreenTexture";
import { isActivePath } from "./NavLink";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/pilates", label: "Pilates" },
  { href: "/personaltraining", label: "PT & Nutrition" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Placeholders: same as the footer
const socials = [
  { href: "https://instagram.com/yourhandle", label: "Instagram", icon: FaInstagram },
  { href: "https://facebook.com/", label: "Facebook", icon: FaFacebookF },
  { href: "https://tiktok.com/", label: "TikTok", icon: FaTiktok },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  // While open: stop the page behind from scrolling, and close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
      className={cn(
        "fixed inset-0 z-60 flex flex-col overflow-hidden bg-sage-dark text-beige transition-[opacity,visibility] duration-300 lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <GreenTexture />

      {/* Top bar: light logo + close */}
      <div className="relative flex h-18 shrink-0 items-center justify-between px-6">
        <Link href="/" onClick={onClose} aria-label="Home">
          <Image
            src="/gls-logo-footer.svg"
            alt="Green Life Studio"
            width={120}
            height={40}
            className="h-14 w-auto"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="relative -mr-2 h-11 w-11"
        >
          <span className="absolute top-1/2 left-1/2 h-px w-6 -translate-x-1/2 rotate-45 bg-current" />
          <span className="absolute top-1/2 left-1/2 h-px w-6 -translate-x-1/2 -rotate-45 bg-current" />
        </button>
      </div>

      <nav className="relative flex flex-1 flex-col overflow-y-auto px-6 pt-8 pb-10">
        <ul className="flex flex-col gap-4">
          {mainLinks.map((link, i) => {
            const active = isActivePath(pathname, link.href);
            return (
              <li
                key={link.href}
                className={cn(
                  "transition-all duration-500 ease-out",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block py-1 text-2xl font-medium uppercase tracking-[0.12em] sm:text-3xl",
                    // Current page: lighter sage and underlined
                    active
                      ? "text-sage underline decoration-1 underline-offset-8"
                      : "text-beige",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className={cn(
            "mt-auto pt-12 transition-opacity duration-500",
            open ? "opacity-100 delay-500" : "opacity-0",
          )}
        >
          <ul className="flex justify-center gap-8">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-beige/80 hover:text-beige"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
