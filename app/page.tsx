import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SkillsHighlight from "@/components/sections/SkillsHighlight";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import ProjectPreview from "@/components/sections/ProjectPreview";
import CertificationsStrip from "@/components/sections/CertificationsStrip";
import CTA from "@/components/sections/CTA";

/**
 * Home Page — Milestone M2.
 * Menggantikan halaman style-guide preview dari M1.
 * Urutan section mengikuti wireframe Home di Blueprint (bagian 4.1):
 * Hero -> Skills Highlight -> Experience Preview -> Project Preview
 * -> Certifications -> CTA.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsHighlight />
      <ExperiencePreview />
      <ProjectPreview />
      <CertificationsStrip />
      <CTA />
      <Footer />
    </>
  );
}
