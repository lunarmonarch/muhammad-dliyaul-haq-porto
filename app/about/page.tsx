import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "Tentang Saya — Muhammad Dliya'ul Haq",
  description:
    "Lulusan Teknik Industri Untag Surabaya (IPK 3.70), bersertifikat K3 BNSP dan CEFR B2 British Council.",
};

export default function AboutPage() {
  return <AboutContent />;
}
