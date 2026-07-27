import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  // On aplati toutes les compétences en une seule liste
  const all = skills.flatMap((g) => g.items);

  return (
    <Section
      id="skills"
      title="Compétences Technologiques"
      subtitle="Une stack complète pour concevoir, développer, tester et déployer des applications modernes."
    >
      <div className="rounded-2xl ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center">
          {all.map((s) => (
            <span
              key={s}
              className="min-w-[180px] text-center rounded-full border border-emerald-400/40 bg-white-100/10 px-6 py-3 text-sm font-semibold text-white-200 hover:bg-green-500 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
