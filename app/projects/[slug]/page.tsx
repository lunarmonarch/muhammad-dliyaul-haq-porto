import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/sections/ProjectDetailContent";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = projects.some((p) => p.slug === slug);
  if (!exists) return notFound();

  return <ProjectDetailContent slug={slug} />;
}