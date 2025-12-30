import { profile } from "@/lib/data";
import MatrixRain from "@/components/MatrixRain";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(60svh-24px)] overflow-hidden">
      {/* ✅ background DOIT AVOIR LA HAUTEUR DU HERO */}
      <div className="absolute inset-0 -z-10 min-h-[100svh]">
        <MatrixRain
          className="absolute inset-0 opacity-200"
          color="#22c55e"
          fontSize={20}
          speed={1.5}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
      </div>

      {/* ✅ wrapper contenu DOIT aussi faire 100svh */}
      <div className="mx-auto flex min-h-[100svh] max-w-6xl items-center px-4 pt-24 pb-16">
        <div className=" ">
          <p className="text-sm text-zinc-300/90">{profile.location}</p>
          <span className="mt-2 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200/90">
            Disponible : Stage 300h — 05-Janvier 2026 À 28-Février 2026
          </span>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {profile.title}
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-200/90">{profile.pitch}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-green-700  transition"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-green-700 transition"
            >
              GitHub
            </a>
            <a
              href={profile.links.email}
              className="rounded-xl bg-green-500 px-4 py-2 text-sm font-medium hover:bg-green-700 transition"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <Stat label="Focus" value="Full-Stack + Qualité" />
            <Stat label="Stack" value="Next/React • SQL • AWS" />
            <Stat label="Objectif" value="Stage 300h — Janvier 2026" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-zinc-300/80">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}
