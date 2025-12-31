import { profile } from "@/lib/data";

const nav = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="font-semibold tracking-tight hover:text-green-500">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-200/90 hover:text-green-500 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-green-600 transition"
          >
            GitHub
          </a>
          <a
            href="/cv/Cv_Saber_Abderrafie.pdf"
            download
            className="rounded-lg bg-white/5 px-3 py-2 text-sm font-medium hover:bg-green-500 transition"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
