import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1012] text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
