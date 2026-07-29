"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { certificateImages } from "@/lib/data";

export default function CertificationsStrip() {
  const { t } = useLanguage();

  return (
    <section className="container-page section-spacing">
      <Reveal>
        <h2 className="text-h2">{t.certifications.heading}</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {t.certifications.items.map((c, i) => {
          const image = certificateImages[i];
          return (
            <Reveal key={c.name} delay={i * 0.1}>
              <a
                href={image?.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-border bg-surface-card shadow-card transition-shadow hover:shadow-card-hover"
              >
                {image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-5">
                  <p className="font-heading font-semibold text-ink">{c.name}</p>
                  <p className="text-sm text-ink/60">{c.issuer}</p>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
