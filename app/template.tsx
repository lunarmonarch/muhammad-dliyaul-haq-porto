"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * template.tsx dijalankan ulang setiap kali route berubah (berbeda dengan
 * layout.tsx yang persist), sehingga cocok untuk page transition.
 * Fade + translateY halus, durasi singkat agar tetap terasa cepat.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
