"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

/**
 * Navbar — menyusut & memberi background blur saat halaman discroll.
 * Toggle bahasa terhubung ke LanguageProvider (state global).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.experience, href: "/experience" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <motion.header
      animate={{
        paddingTop: scrolled ? 12 : 24,
        paddingBottom: scrolled ? 12 : 24,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`sticky top-0 z-50 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        <Link href="/" className="font-heading font-semibold text-ink">
          Dliya&apos;ul Haq
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLocale}
            aria-label="Ganti bahasa / Switch language"
            className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm text-ink/70 hover:border-primary-light hover:text-primary"
          >
            <Globe size={16} /> {locale.toUpperCase()}
          </button>
          <button
            aria-label="Ganti tema gelap/terang"
            className="rounded-full border border-border p-2 text-ink/70 hover:border-primary-light hover:text-primary"
          >
            <Moon size={16} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Buka menu"
          className="md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="container-page mt-4 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-ink/80"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLocale}
            className="flex w-fit items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm text-ink/70"
          >
            <Globe size={16} /> {locale.toUpperCase()}
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
