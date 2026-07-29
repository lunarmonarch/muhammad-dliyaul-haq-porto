import { HTMLAttributes } from "react";
import clsx from "clsx";

type BadgeVariant = "default" | "success" | "pending" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  pending: "bg-pending/10 text-pending",
  outline: "bg-transparent text-ink border border-border",
};

/**
 * Badge dipakai untuk skill chips (variant "default") dan status seperti
 * "Coming Soon" pada project (variant "pending").
 */
export default function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
