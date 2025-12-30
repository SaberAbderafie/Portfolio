import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      title="À propos"
      subtitle="Qui je suis, ce que je cherche, et ce que je peux apporter en stage."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {/* Carte 1 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-base font-semibold">Profil</h3>
          <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
            Étudiant en développement logiciel à Montréal. J’aime construire des
            applications web modernes (front/back) avec une approche propre :
            architecture claire, UI soignée, gestion d’erreurs, et bonnes
            pratiques sécurité (auth, rôles, OWASP).
          </p>
        </div>

        {/* Carte 2 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-base font-semibold">Études</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>
                Collège de Maisonneuve — Développement logiciel (Montréal, QC)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>
                Stack : React / Next.js, Node, Python, SQL, AWS
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>
                Projets : auth + abonnements, API REST, PostgreSQL, déploiement
              </span>
            </li>
          </ul>
        </div>

        {/* Carte 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-base font-semibold">Objectif stage</h3>
          <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
            Je cherche un <span className="font-medium">stage de 300h</span> en
            développement web / full-stack. Objectif : contribuer à une vraie
            application, livrer des features propres, et progresser en équipe
            (Git, code review, qualité).
          </p>

          <div className="mt-5 rounded-xl border border-white/10 bg-zinc-900/40 p-4">
            <p className="text-xs text-green-500">Disponibilité</p>
            <p className="mt-1 text-sm font-medium">
              Stage 300h — 05-Janvier-2026 à 28-Février-2026
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
