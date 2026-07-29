"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/LanguageProvider";
import { photoProfile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="container-page relative flex min-h-[85vh] flex-col items-center justify-center gap-12 py-20 md:flex-row md:justify-between">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.span
          variants={item}
          className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
        >
          {t.hero.badge}
        </motion.span>

        <motion.h1 variants={item} className="text-h1">
          {t.hero.greeting} <span className="text-primary">Muhammad Dliya&apos;ul Haq</span>
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-xl text-ink/70">
          {t.profile.role}
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-xl text-ink/60">
          {t.profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <a href="/cv-muhammad-dliyaul-haq.pdf" download>
            <Button variant="primary" size="lg">
              {t.hero.downloadCv}
            </Button>
          </a>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              {t.hero.contactMe}
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Slot foto profil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative aspect-square w-56 shrink-0 overflow-hidden rounded-2xl border border-border shadow-card sm:w-72 md:w-80"
      >
        <Image
          src={photoProfile.src}
          alt={photoProfile.alt}
          fill
          priority
          sizes="(max-width: 768px) 288px, 320px"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-6 hidden text-ink/30 md:block md:left-10"
        aria-hidden
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
