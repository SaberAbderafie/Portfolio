import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Saber Abderrafie — Portfolio",
  description:
    "Portfolio de Saber Abderrafie — Développeur Web / Full-Stack (Next.js, React, Node, Python, SQL) avec focus qualité & sécurité.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Saber Abderrafie — Portfolio",
    description:
      "Projets: StreamFlex, VivaVistaTV, CasaMode — Next.js, React, Prisma, PostgreSQL, AWS.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
