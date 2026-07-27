import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      title="À propos"
      subtitle="Mon profil, mon parcours et la valeur que je peux apporter à une équipe de développement."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {/* Carte 1 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-base font-semibold">Profil</h3>
          <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
            Développeur logiciel Full Stack basé au Québec, titulaire d’une AEC
            en développement de logiciels Web et de bureau. Je conçois des
            applications modernes avec une architecture claire, une interface
            soignée, une gestion fiable des erreurs et de bonnes pratiques de
            sécurité.
          </p>
        </div>

        {/* Carte 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-base font-semibold">Formation et expérience</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>
                AEC — Développement de logiciels Web et de bureau, Collège de
                Maisonneuve
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>
                Expérience pratique en développement logiciel chez PandoraBrains
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>
                Parcours initial en réseaux informatiques — TRI, OFPPT
              </span>
            </li>
          </ul>
        </div>

        {/* Carte 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-base font-semibold">Objectif professionnel</h3>
          <p className="mt-3 text-sm text-zinc-200/90 leading-relaxed">
            Je recherche un{" "}
            <span className="font-medium">
              poste de développeur logiciel Full Stack
            </span>{" "}
            où je pourrai contribuer à des produits utiles, livrer des
            fonctionnalités fiables et collaborer avec une équipe qui valorise
            la qualité du code.
          </p>

          <div className="mt-5 rounded-xl border border-white/10 bg-zinc-900/40 p-4">
            <p className="text-xs text-green-500">Disponibilité</p>
            <p className="mt-1 text-sm font-medium">
              Disponible pour des opportunités au Québec et au Canada
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
