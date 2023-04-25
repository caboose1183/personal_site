import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header></Header>
      
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* projects */}

      {/* contact me */}
    </main>
  );
}
