"use client";

import Reveal from "@/components/Reveal";
import { ComingSoonCard } from "@/components/ui/Card";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectPreview() {
  const { t } = useLanguage();
  const p = t.projectPreview;

  return (
    <section className="container-page section-spacing">
      <Reveal>
        <h2 className="text-h2">{p.heading}</h2>
        <p className="mt-2 max-w-xl text-ink/60">{p.subtitle}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 max-w-md">
        <ComingSoonCard title={p.cardTitle} description={p.cardDesc} label={p.comingSoonBadge} />
      </Reveal>
    </section>
  );
}
