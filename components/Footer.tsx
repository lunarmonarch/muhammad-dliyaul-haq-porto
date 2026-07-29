"use client";

import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-center gap-4 py-10 md:flex-row md:justify-between">
        <p className="text-sm text-ink/60">
          © {new Date().getFullYear()} Muhammad Dliya&apos;ul Haq. {t.footer.builtWith}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            aria-label="Kirim email"
            className="flex items-center gap-2 text-sm text-ink/70 hover:text-primary"
          >
            <Mail size={16} /> {t.footer.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi LinkedIn"
            className="flex items-center gap-2 text-sm text-ink/70 hover:text-primary"
          >
            <Linkedin size={16} /> {t.footer.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
