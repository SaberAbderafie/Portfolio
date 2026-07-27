import Image from "next/image";
const journey = [
  {
    period: "Mon Aventure  dans l'univers Digitale",
    title: "Développeur logiciel Full Stack",
    description:
      "Passionné par le développement web, J'ai découvert le frontend en créant mon premier site e-commerce. J'ai adoré concevoir l'interface, jouer avec les couleurs et les animations pour offrir une expérience fluide. Ce projet m'a donné envie d'approfondir les bonnes pratiques et de structurer mon code. En formation de développement de logiciels, j'ai consolidé mes bases en HTML/CSS et appris React, Tailwind et les logiques backend. Je continue à explorer le design tech et à développer mes compétences sur la logique métier, tout en m'initiant avec enthousiasme au développement mobile avec Flutter. Je suis actuellement à la recherche d'un stage pour mettre en pratique mes compétences et contribuer à des projets innovants.",
  },
    {
    period: "AEC en développement logiciel",
    title: "Collège de Maisonneuve",
    description:
      "J'ai suivi un programme de formation en développement logiciel au Collège de Maisonneuve, où j'ai acquis des compétences solides en programmation, en conception d'applications et en gestion de bases de données. Cette formation m'a permis de développer des projets concrets et de travailler sur des applications web complètes, renforçant ainsi ma compréhension des technologies modernes.",},
  {
    period: "Premier cours de programmation web : HTML/CSS",
    title: "Introduction au développement web",
    description:
      "J'ai commencé mon parcours en développement web avec un cours d'introduction à HTML et CSS. J'ai appris à structurer des pages web, à styliser des éléments et à créer des mises en page réactives. Cette première expérience m'a donné une base solide pour explorer davantage le monde du développement web.",
  },
  {
    period: "Programmation approfondie",
    title: "Cours avancé de développement web",
    description:
      " J'ai poursuivi mon apprentissage avec un cours avancé de développement web, où j'ai approfondi mes connaissances en JavaScript, en frameworks front-end et en gestion des états. J'ai également exploré les concepts de responsive design et d'accessibilité, ce qui m'a permis de créer des applications web plus inclusives et performantes.",
  },
  {
    period: "Développement mobile avec Flutter",
    title: "Exploration du développement mobile",
    description:
      "Je me suis initié au développement mobile avec Flutter, un framework qui permet de créer des applications multiplateformes. J'ai appris à concevoir des interfaces utilisateur attrayantes et à gérer la logique métier pour les applications mobiles. Cette expérience m'a ouvert de nouvelles perspectives dans le développement d'applications et m'a permis d'élargir mes compétences techniques.",
  },
  {
    period: "Apprentissage du web transactionnel, de Flutter et de la cybersécurité ",
    title: "Cours avancé de développement web et cybersécurité",
    description:
      "J'ai suivi un cours avancé de développement web axé sur le web transactionnel, où j'ai appris à créer des applications sécurisées et performantes. J'ai également approfondi mes connaissances en Flutter pour le développement mobile et en cybersécurité pour protéger les applications contre les menaces potentielles. Cette formation m'a permis de renforcer mes compétences techniques et de mieux comprendre les enjeux liés à la sécurité des applications.",
  },
{
  period: "Expérience professionnelle",
  title: "Stage en développement logiciel chez PandoraBrains",
  description:
    "J'ai effectué un stage en développement logiciel, où j'ai travaillé sur des projets réels et collaboré avec une équipe de développeurs. J'ai participé à la conception et à la mise en œuvre de fonctionnalités, à la résolution de problèmes techniques et à l'amélioration des performances des applications. Cette expérience m'a permis de mettre en pratique mes compétences et d'acquérir une expérience précieuse dans le domaine du développement logiciel.",
},

];

export default function Holla() {
  return (
    <section id="parcours" className="scroll-mt-20 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-400">
            Parcours
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Une base technique solide, du réseau au développement Full Stack
          </h2>
<br />
    <div className="relative w-fit overflow-hidden rounded-2xl border-4 border-white /10 bg-white/5 p-1 transition hover:border-green-500/90 hover:bg-white-400/[0.07] hover:shadow-lg hover:shadow-green-400/20">
  <Image
    src="/profil/me.jpeg"
    alt="Abderrafie Saber"
    width={300}
    height={400}
    className="
      block h-auto w-full max-w-[300px]
      cursor-pointer object-contain
      transition-transform duration-500 ease-out
      hover:rotate-12 hover:scale-105
      active:rotate-6 active:scale-95
    "
  />
</div>
<br />
          <p className="mt-6 text-sm leading-relaxed text-zinc-200/90">
            Mon parcours en réseaux informatiques m’a donné une compréhension
            concrète des systèmes et de l’infrastructure. Je l’ai ensuite
            complété par une spécialisation en développement logiciel afin de
            concevoir des applications complètes, sécurisées et faciles à
            maintenir.
          </p>
        </div>

        <div className="space-y-5">
          {journey.map((item) => (
            <article
              key={`${item.period}-${item.title}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-green-400/40 hover:bg-white/[0.07]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/90">
                {item.description}
              </p>
            </article>
          ))}

          <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-6">
            <h3 className="font-semibold text-green-300">
              Ce que je peux apporter
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-100/90">
              Une approche polyvalente, de la compréhension du besoin jusqu’au
              déploiement, avec un souci constant de lisibilité, de fiabilité
              et de collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
