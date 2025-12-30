import { Github, ExternalLink, Play } from "lucide-react";

type Project = {
  slug?: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  links: { code: string; demo?: string; video?: string };
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-1 text-sm text-zinc-300/90">{p.tagline}</p>

      <p className="mt-4 text-sm text-zinc-200/90">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200/90"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm text-zinc-200/90">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={p.links.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-green-700 transition"
        >
          <Github size={16} />
          Code
        </a>

        {p.links.demo ? (
          <a
            href={p.links.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-500 transition"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        ) : null}

        {p.links.video ? (
          <a
            href={p.links.video}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl  bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-500 transition"
          >
            <Play size={16} />
            Vidéo
          </a>
        ) : null}
      </div>
    </div>
  );
}
