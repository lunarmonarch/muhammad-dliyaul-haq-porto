"use client";

import { Mail, Linkedin, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/lib/data";

export default function ContactContent() {
  const { t } = useLanguage();
  const c = t.contactPage;

  return (
    <>
      <Navbar />
      <main className="container-page section-spacing">
        <Reveal className="max-w-xl">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
            {c.eyebrow}
          </span>
          <h1 className="text-h1">{c.heading}</h1>
          <p className="mt-3 text-ink/60">{c.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink">{c.emailLabel}</p>
                  <p className="text-sm text-ink/60">{contact.email}</p>
                </div>
              </div>
              <a href={`mailto:${contact.email}`} className="mt-5 block">
                <Button variant="primary" className="w-full">
                  {c.sendEmail}
                </Button>
              </a>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink">{c.linkedinLabel}</p>
                  <p className="text-sm text-ink/60">{c.linkedinDesc}</p>
                </div>
              </div>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block"
              >
                <Button variant="secondary" className="w-full">
                  {c.openLinkedin}
                </Button>
              </a>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="rounded-2xl bg-primary px-8 py-14 text-center md:px-16">
            <h2 className="text-h2 text-white">{c.cvHeading}</h2>
            <p className="mx-auto mt-2 max-w-md text-white/80">{c.cvSubtitle}</p>
            <a href="/cv-muhammad-dliyaul-haq.pdf" download className="mt-7 inline-block">
              <Button variant="secondary" size="lg" className="!bg-white !text-primary">
                <Download size={18} /> {c.downloadCv}
              </Button>
            </a>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
