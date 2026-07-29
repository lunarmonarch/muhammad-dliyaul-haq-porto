"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperiencePreview() {
  const { t } = useLanguage();
  const e = t.experiencePreview;

  return (
    <section className="container-page section-spacing">
      <Reveal>
        <h2 className="text-h2">{e.heading}</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <Card className="md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <Badge variant="outline">{e.position}</Badge>
              <h3 className="mt-3 text-h3">PT Realfood Winta Asia</h3>
              <p className="mt-3 max-w-xl text-ink/70">{e.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {e.highlights.map((h) => (
                  <Badge key={h} variant="default">
                    {h}
                  </Badge>
                ))}
              </div>
            </div>

            <Link
              href="/experience"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              {e.viewDetail} <ArrowRight size={16} />
            </Link>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
