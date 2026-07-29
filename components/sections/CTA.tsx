"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="container-page section-spacing">
      <Reveal>
        <div className="rounded-2xl bg-primary px-8 py-16 text-center md:px-16">
          <h2 className="text-h2 text-white">{t.cta.heading}</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">{t.cta.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="!bg-white !text-primary">
                {t.cta.sendEmail}
              </Button>
            </Link>
            <a href="/cv-muhammad-dliyaul-haq.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-primary"
              >
                {t.cta.downloadCv}
              </Button>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
