"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/lib/data";

export default function ProjectDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    <>
      <Navbar />
      <main className="container-page section-spacing max-w-2xl">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-primary"
          >
            <ArrowLeft size={16} /> {t.projectsPage.backToProjects}
          </Link>

          <div className="mt-6">
            {project.status === "coming-soon" && (
              <Badge variant="pending">{t.projectPreview.comingSoonBadge}</Badge>
            )}
            <h1 className="text-h1 mt-3">{t.projectPreview.cardTitle}</h1>
            <p className="mt-4 text-lg text-ink/70">{t.projectPreview.cardDesc}</p>

            {project.status === "coming-soon" && (
              <div className="mt-8 rounded-xl border border-dashed border-border p-8 text-center text-ink/50">
                {t.projectsPage.comingSoonNote}
              </div>
            )}
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
