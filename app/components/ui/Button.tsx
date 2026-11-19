import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/app/lib/cn";

const base =
  "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors";

const variants = {
  green: "bg-sage-dark text-white hover:bg-sage hover:text-sage-dark",
  white: "bg-white text-sage-dark hover:bg-sage-dark hover:text-white",
};

type Variant = keyof typeof variants;

type ButtonProps = ComponentProps<"button"> & {
  href?: undefined;
  variant?: Variant;
};
type LinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  variant?: Variant;
};

export default function Button({
  variant = "green",
  className,
  ...props
}: ButtonProps | LinkProps) {
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    return <Link {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
