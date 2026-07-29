"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Card from "@/components/ui/Card";
import SkillMatrix from "@/components/sections/SkillMatrix";
import { useLanguage } from "@/components/LanguageProvider";
import { profile, certificateImages } from "@/lib/data";
import { Award, GraduationCap } from "lucide-react";

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;
  const gpaPercent = (profile.education.gpa / profile.education.maxGpa) * 100;

  return (
    <>
      <Navbar />
      <main className="container-page section-spacing space-y-20">
        <Reveal>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
            {a.eyebrow}
          </span>
          <h1 className="text-h1 max-w-2xl">{a.heading}</h1>
        </Reveal>

        {/* Narasi */}
        <Reveal delay={0.1} className="max-w-2xl space-y-5">
          {a.narrative.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink/75">
              {p}
            </p>
          ))}
        </Reveal>

        {/* Pendidikan */}
        <Reveal>
          <h2 className="text-h2 mb-6">{a.educationHeading}</h2>
          <Card className="max-w-xl">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <p className="font-heading font-semibold text-ink">
                  {profile.education.institution}
                </p>
                <p className="mt-1 text-sm text-ink/60">{a.major}</p>

                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-ink/60">{a.gpaLabel}</span>
                    <span className="font-semibold text-ink">
                      {profile.education.gpa.toFixed(2)} / {profile.education.maxGpa.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${gpaPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Sertifikasi */}
        <Reveal>
          <h2 className="text-h2 mb-6">{a.certHeading}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.certifications.items.map((c, i) => {
              const image = certificateImages[i];
              return (
                <a
                  key={c.name}
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
                  <div className="flex items-center gap-4 p-5">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-ink">{c.name}</p>
                      <p className="text-sm text-ink/60">{c.issuer}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* Skill Matrix */}
        <Reveal>
          <h2 className="text-h2 mb-2">{a.skillMatrixHeading}</h2>
          <p className="mb-6 max-w-xl text-ink/60">{a.skillMatrixSubtitle}</p>
          <SkillMatrix />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
