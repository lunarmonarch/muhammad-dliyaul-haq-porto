import type { Metadata } from "next";
import ExperienceContent from "@/components/sections/ExperienceContent";

export const metadata: Metadata = {
  title: "Pengalaman — Muhammad Dliya'ul Haq",
  description:
    "Studi kasus pengalaman magang di PT Realfood Winta Asia — preventive maintenance, SOP, penilaian kinerja, dan stock opname.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
