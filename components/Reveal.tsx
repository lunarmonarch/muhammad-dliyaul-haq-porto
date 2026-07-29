"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Reveal — dipakai membungkus tiap section/blok konten agar muncul dengan
 * fade + translateY halus saat masuk viewport (whileInView), bukan animasi
 * yang berulang tiap scroll naik-turun (once: true).
 * Hanya memakai transform & opacity agar GPU-accelerated dan ringan.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
