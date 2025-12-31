import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Holla from "@/components/Holla";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-6xl px-4">
        <About />
        <Holla />
        <Projects />
        
        <Skills />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
