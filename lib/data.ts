export const profile = {
  name: "Saber Abderrafie",
  title: "Développeur Web / Full-Stack (Next.js, React, Node, Python, SQL)",
  location: "Saint-Zotique, QC",
  pitch:
    "Je développe des applications web modernes (front/back) avec une approche qualité, architecture claire, et des bonnes pratiques sécurité (auth, rôles, OWASP).",
  links: {
    github: "https://github.com/SaberAbderafie",
    linkedin: "https://www.linkedin.com/in/abderrafie-saber-65230b3a3/",
    email: "mailto:saberabderrafie@gmail.com",
    numero: "438-531-6360",
    cv: "", // mets ton CV dans /public/cv.pdf
  },
};

export const projects = [
  {
    slug: "streamflex",
    title: "StreamFlex",
    tagline: "Plateforme vidéo (abonnements, auth, cloud)",
    description:
      "Application web full-stack avec authentification, plans et abonnements, et déploiement cloud.",
    tech: [
      "Next.js",
      "Prisma",
      "PostgreSQL (Neon)",
      "Clerk",
      "Stripe",
      "AWS (S3/KMS)",
    ],
    highlights: [
      "Gestion des plans + page /plans + achat",
      "Abonnements, activation codes, rôles (admin/user)",
      "Déploiement et exploitation (PM2, bonnes pratiques cloud)",
    ],
    links: {
      code: "https://github.com/A25-PESLMDT/BDK",
      demo: "/profil/stream.png", 
    },
  },
  {
    title: "VivaVistaTV",
    tagline: "Admin CRUD + page publique plans",
    description:
      "Projet Next.js orienté produit avec interface admin, formulaires, et endpoints API.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    highlights: [
      "CRUD des plans (admin)",
      "UI cartes/formulaires cohérente",
      "Routes API propres + validations",
    ],
    links: {
      code: "https://github.com/SaberAbderafie/Projet--Final-Web-Transactionnelle---Eddine-",
      video: "/Videos/Vivavistatv.mp4",
    },
  },
  {
    title: "CasaMode",
    tagline: "E-commerce (API produits + avis)",
    description:
      "Backend + endpoints REST et gestion d’avis produits, avec protections et CORS.",
    tech: ["React", "Flask", "SQLAlchemy", "PostgreSQL"],
    highlights: [
      "Routes reviews et logique auth/roles",
      "Gestion erreurs côté client",
      "Structuration API + bonnes pratiques",
    ],
    links: {
      code: "https://github.com/liliaouldhocine/e25-ds-orange",
      demo: "/profil/casamode.png",
    },
  },

  {
    slug: "quiz-master",
    title: "Quiz-master",
    tagline: "Application de quiz multi-modes (MVVM, Provider, Firebase)",
    description:
      "Application Flutter de quiz avec plusieurs types de questions, modes de jeu, timer, score, révision des erreurs, et thème clair/sombre.",
    tech: [
      "Flutter",
      "Dart",
      "Provider (state management)",
      "Firebase Core",
      "Cloud Firestore",
      "SharedPreferences",
    ],
    highlights: ["Types de questions : QCM, Vrai/Faux, Réponse courte, QCM avec image",
    "Modes : Normal, Rapide, Marathon, Survie, Défi quotidien (1 fois/jour)",
    "Timer par question + score en temps réel + écran résultat + révision des erreurs",
    "Thème clair/sombre + UI responsive (mobile/web) + effets visuels optionnels (neige)",],
    links: {
      code: "https://github.com/SaberAbderafie/-QUIZ-MASTER---Application-de-Quiz-Multith-mes",
      demo: "",
      video:"/Videos/Quiz.mp4",
    },
  },
];

// export const skills = [
//   { group: "Front-end", items: ["React", "Next.js (App Router)", "Tailwind CSS", "UI/UX basics"] },
//   { group: "Back-end", items: ["Node.js", "Express", "Flask/Django", "REST API", "Auth/Roles"] },
//   { group: "Base de données", items: ["PostgreSQL", "SQL", "Prisma ORM", "Modélisation"] },
//   { group: "Cloud/DevOps", items: ["AWS EC2", "S3", "IAM", "PM2", "Nginx (base)"] },
//   { group: "Qualité & Sécurité", items: ["OWASP basics", "Validation", "Gestion d’erreurs", "Clean code"] },
// ];
export const skills = [
  {
    group: "Technologies",
    items: ["React", "Tailwind CSS", "Flutter", "VirtualBox"],
  },
  { group: "Outils / Design", items: ["Git", "UI/UX Design", "PySide"] },
  { group: "Langages", items: ["Python", "Java", "JavaScript", "TypeScript"] },
  { group: "Web", items: ["HTML", "CSS", "Bootstrap", "Next.js"] },
  { group: "Base de données", items: ["SQL", "Django", "Prisma"] },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
