import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Cong nghe su dung:</h2>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {(project.link || project.github) && (
          <div className="mb-8 flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Xem du an →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                GitHub →
              </a>
            )}
          </div>
        )}

        <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
          {project.content}
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
