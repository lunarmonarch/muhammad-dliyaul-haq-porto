import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/sections/ProjectDetailContent";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const exists = projects.some((p) => p.slug === params.slug);
  if (!exists) return notFound();

  return <ProjectDetailContent slug={params.slug} />;
}
