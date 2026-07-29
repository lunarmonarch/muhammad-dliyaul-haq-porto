"use client";

import { BarChart3, Cog, ShieldCheck, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/components/LanguageProvider";

const icons = [BarChart3, Cog, ShieldCheck, Users];

export default function SkillsHighlight() {
  const { t } = useLanguage();

  return (
    <section className="container-page section-spacing">
      <Reveal>
        <h2 className="text-h2">{t.skillsHighlight.heading}</h2>
        <p className="mt-2 max-w-xl text-ink/60">{t.skillsHighlight.subtitle}</p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.skillsHighlight.items.map((h, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={h.title} delay={i * 0.08}>
              <Card className="h-full">
                <Icon className="mb-4 text-primary" size={28} strokeWidth={1.75} />
                <h3 className="mb-2 text-h3">{h.title}</h3>
                <p className="text-sm text-ink/60">{h.desc}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
