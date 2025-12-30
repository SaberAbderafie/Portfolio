import Section from "./Section";
import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";


export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Tu peux me contacter pour un stage, un projet, ou une discussion technique."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        
        <p className="text-sm text-zinc-200/90">
          Email :{" "}
          <a
            className="text-blue-400 hover:text-green-300"
            href={profile.links.email}
          >
            {profile.links.email.replace("mailto:", "")}
          </a>
        </p>
        {/* Numero */}
         <p className="text-sm text-zinc-200/90">
          Numéro :{" "}
          <span
            className="text-blue-400 hover:text-green-300"
            
          >
            {profile.links.numero.replace("mailto:", "")}
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-green-800 transition"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-green-800 transition"
          >
            GitHub
          </a>
          <a
            href="/Cv_Saber_Abderrafie.pdf"
            download
            className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-800 transition"
          >
            Télécharger le CV
          </a>
        </div>
        
      </div>
      {/* Information */}
      
      <ContactForm />

    </Section>
    
  );
}
