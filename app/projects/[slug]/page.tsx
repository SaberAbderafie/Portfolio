import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <main>
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <Link href="/projects" className="text-sm text-zinc-300/90 hover:text-white">
          ← Retour aux projets
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-zinc-300/90">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.code ? (
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              Code
            </a>
          ) : null}

          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500 transition"
            >
              Démo
            </a>
          ) : null}

          {project.links.video ? (
            <a
              href={project.links.video}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              Vidéo
            </a>
          ) : null}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
            {project.description}
          </p>

          <h3 className="mt-6 text-base font-semibold">Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200/90"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-6 text-base font-semibold">Points clés</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
