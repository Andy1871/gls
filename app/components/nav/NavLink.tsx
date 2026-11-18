"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

// True when the link points at the page being viewed (or a page inside it, e.g. /pilates/...)
export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLink({ href, children }: NavLinkProps) {
  const active = isActivePath(usePathname(), href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative text-sm tracking-wider font-medium text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none",
        // Current page keeps its underline showing
        active && "after:scale-x-100",
      )}
    >
      {children}
    </Link>
  );
}

export function NavLinkButton({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="rounded-full bg-white px-4 py-2 font-medium tracking-wider text-sm hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}
