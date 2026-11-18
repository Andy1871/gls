import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

export default function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-medium uppercase tracking-widest text-gray-500 mt-2 mb-2",
        className,
      )}
    >
      {children}
    </p>
  );
}
