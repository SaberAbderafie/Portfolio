import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Projets</h1>
        <p className="mt-2 text-sm text-zinc-300/90">
          Une sélection de projets (stack + contributions concrètes).
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition"
            >
              <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-1 text-sm text-zinc-300/90">{p.tagline}</p>
              <p className="mt-4 text-sm text-zinc-200/90">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-blue-400">
                Voir le détail →
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
