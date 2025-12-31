# Saber Abderrafie — Portfolio

Portfolio professionnel développé avec **Next.js (App Router)**, **TypeScript** et **Tailwind CSS**, présentant mes compétences, mes projets et un moyen simple de me contacter pour un **stage 300h (Janvier 2026)**.

**Next.js · TypeScript · Tailwind CSS · Vercel**

---

## Table des matières
- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Formulaire de contact](#formulaire-de-contact)
- [Déploiement](#déploiement)
- [Personnalisation](#personnalisation)
- [Contact](#contact)

---

## Aperçu

Portfolio responsive présentant :

- Une section **Hero** full-screen avec **animation Matrix (Canvas)** (optionnelle)
- Une section **À propos** orientée recruteur
- Une section **Projets** avec page dédiée `/projects` + pages détail `/projects/[slug]`
- Une section **Compétences** (style “pills/badges”)
- Une section **Contact** avec formulaire fonctionnel (Formspree) + liens rapides (GitHub / LinkedIn / CV)



---

## Fonctionnalités

### Hero
- Hero **plein écran** (100% viewport)
- Animation **Matrix Rain (Canvas)** en background sur toute la section
- Carte centrale “glass” (backdrop blur) pour un rendu pro
- Call-to-action : LinkedIn, GitHub, Contact, CV

### Projets
- Page liste : **`/projects`**
- Page détail : **`/projects/[slug]`**
- Boutons : **Code / Démo / Vidéo** (si disponibles)
- Mise en avant de la stack + points clés (highlights)

### Compétences
- Grille de badges arrondis (pills)
- Catégories possibles (Langages / Web / Outils / etc.)

### Contact
- Formulaire **Nom / Email / Message**
- Envoi via **Formspree** (sans backend)
- Message de succès/erreur + reset du formulaire
- Liens rapides + bouton “Télécharger le CV”

### Design & UX
- Dark mode moderne
- Responsive (mobile → desktop)
- Effets hover/transition (cartes, boutons, badges)
- Navigation claire + sections structurées

---

## Technologies utilisées

### Frontend
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**

### Outils / UI
- (Optionnel) **lucide-react** (icônes)

### Services externes
- **Formspree** (formulaire de contact)
- **Canvas API** (animation Matrix Rain)

---

## Installation

### Prérequis
- **Node.js 18+** (recommandé)
- **npm** (ou pnpm/yarn)

### Étapes d'installation
1. ### Cloner le repository
```bash
# 1) Cloner
git clone https://github.com/SaberAbderafie/Portfolio.git

```
2. ### Installer les dépendances
```bash
npm install
```
3. ### Lancer le serveur de développement
```bash
npm run dev
```
4. ### Ouvrir dans le navigateur
```bash
http://localhost:3000
```
## Scripts disponibles
```bash
# Développement - Lance le serveur avec hot reload
npm run dev

# Build - Compile pour la production
npm run build

# Preview - Prévisualise le build de production
npm run preview

# Lint - Vérifie le code avec ESLint
npm run lint
```
## Structure du projet
```bash
saber-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   ├── MatrixRain.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts
├── public/
│   ├── cv/               # CV PDF (optionnel)
│   └── images/           # images projets / assets (optionnel)
├── app/globals.css
├── postcss.config.mjs
├── package.json
└── README.md

```
## Formulaire de contact

- Ce projet utilise Formspree .
1. ##  Crée

- Crée un formulaire sur Formspree et récupère l'endpoint du type :

 - https://formspree.io/f/abcdwxyz

2. ## Ajouter l'URL dans le
Dans components/ContactForm.tsx, remplacer :

```ts
Dans components/ContactForm.tsx, remplacer :
```
par :

```ts
const FORMSPREE_URL = "https://formspree.io/f/abcdwxyz";

```
## Déploiement
### Vercel
1. Connecte ton repository GitHub à Vercel
2. Configure les paramètres :
  - Build Command: npm run build
- Output Directory: dist
3. Deploy

## Contenu
- Projets : Modifie le tableau ```projects``` dans ```src/components/Projects.tsx```
- Technologies : Modifie la grille dans ```src/components/Technologies.tsx```
- À propos : Édite le texte dans ```src/components/About.tsx```
## Contact
### Abderrafie Saber
- **Email :** saberabderrafie@gmail.com
- **LinkedIn :** abderrafie-saber-65230b3a3

