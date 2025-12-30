// import Section from "./Section";
// import { skills } from "@/lib/data";

// export default function Skills() {
//   return (
//     <Section
//       id="skills"
//       title="Compétences & Technologiques"
//       subtitle="Ce que j’utilise vraiment dans mes projets (et ce que je continue de renforcer)."
//     >
//       <div className="grid gap-5 md:grid-cols-2">
//         {skills.map((block) => (
//           <div
//             key={block.group}
//             className="rounded-2xl border border-white/10 bg-white/5 p-6"
//           >
//             <h3 className="text-base font-semibold">{block.group}</h3>
//             <div className="mt-4 flex flex-wrap gap-2">
//               {block.items.map((s) => (
//                 <span
//                   key={s}
//                   className="rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200/90"
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// }
import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  // On aplati toutes les compétences en une seule liste
  const all = skills.flatMap((g) => g.items);

  return (
    <Section
      id="skills"
      title="Compétences Technologiques"
      subtitle="Technologies, outils et langages que j’utilise dans mes projets."
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
