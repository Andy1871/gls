import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

const sizes = {
  xs: "text-lg",
  sm: "text-3xl",
  md: "text-4xl md:text-5xl",
  lg: "text-5xl md:text-6xl",
};

export default function SectionHeader({
  children,
  size = "md",
  className,
}: {
  children: ReactNode;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <h2 className={cn("font-heading font-medium", sizes[size], className)}>
      {children}
    </h2>
  );
}
