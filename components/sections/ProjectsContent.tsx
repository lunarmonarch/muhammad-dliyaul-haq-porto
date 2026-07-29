"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ComingSoonCard } from "@/components/ui/Card";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/lib/data";

export default function ProjectsContent() {
  const { t } = useLanguage();
  const p = t.projectsPage;

  return (
    <>
      <Navbar />
      <main className="container-page section-spacing">
        <Reveal>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
            {p.eyebrow}
          </span>
          <h1 className="text-h1 max-w-2xl">{p.heading}</h1>
          <p className="mt-3 max-w-xl text-ink/60">{p.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <Reveal key={proj.slug} delay={i * 0.1}>
              {proj.status === "coming-soon" ? (
                <ComingSoonCard
                  title={t.projectPreview.cardTitle}
                  description={t.projectPreview.cardDesc}
                  label={t.projectPreview.comingSoonBadge}
                />
              ) : (
                <Link href={`/projects/${proj.slug}`} className="block">
                  <ComingSoonCard
                    title={t.projectPreview.cardTitle}
                    description={t.projectPreview.cardDesc}
                    label={t.projectPreview.comingSoonBadge}
                  />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
