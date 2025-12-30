import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-300/80">
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <div className="flex gap-4 text-sm">
          <a className="text-zinc-300/80 hover:text-white" href="#projects">Projets</a>
          <a className="text-zinc-300/80 hover:text-white" href="#skills">Compétences</a>
          <a className="text-zinc-300/80 hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
