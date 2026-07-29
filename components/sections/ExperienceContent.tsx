"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Badge from "@/components/ui/Badge";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperienceContent() {
  const { t } = useLanguage();
  const e = t.experiencePage;

  return (
    <>
      <Navbar />
      <main className="container-page section-spacing">
        <Reveal>
          <Badge variant="outline">{e.badge}</Badge>
          <h1 className="text-h1 mt-3 max-w-2xl">PT Realfood Winta Asia</h1>
          <p className="mt-3 max-w-xl text-ink/60">{e.subtitle}</p>
        </Reveal>

        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </main>
      <Footer />
    </>
  );
}
