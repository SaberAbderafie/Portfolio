import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projets"
      subtitle="3–5 projets solides, bien présentés, avec stack + contributions concrètes."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
