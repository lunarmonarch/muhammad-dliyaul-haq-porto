import type { Metadata } from "next";
import ProjectsContent from "@/components/sections/ProjectsContent";

export const metadata: Metadata = {
  title: "Project — Muhammad Dliya'ul Haq",
  description: "Project analisis data yang sedang dikerjakan oleh Muhammad Dliya'ul Haq.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
