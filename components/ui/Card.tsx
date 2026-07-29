"use client";

import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

/**
 * Card dasar. hoverEffect=true memberi efek "lift" 6px + shadow lebih dalam
 * saat hover — dipakai pada card project & pengalaman.
 */
export default function Card({
  className,
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={clsx(
        "rounded-xl border border-border bg-surface-card p-6 shadow-card",
        hoverEffect && "hover:shadow-card-hover",
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Varian khusus untuk project yang berstatus "Coming Soon".
 * Badge diberi efek shimmer halus agar terasa "sedang berjalan", bukan kosong.
 */
export function ComingSoonCard({
  title,
  description,
  label = "Coming Soon",
}: {
  title: string;
  description: string;
  label?: string;
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pending/10 px-3.5 py-1.5">
        <span
          className="h-2 w-2 rounded-full bg-pending animate-pulse"
          aria-hidden
        />
        <span
          className={clsx(
            "bg-[linear-gradient(110deg,#F59E0B,45%,#FCD34D,55%,#F59E0B)] bg-[length:200%_100%]",
            "bg-clip-text text-sm font-semibold text-transparent animate-shimmer"
          )}
        >
          {label}
        </span>
      </div>
      <h3 className="mb-2 text-h3">{title}</h3>
      <p className="text-ink/70">{description}</p>
    </Card>
  );
}
