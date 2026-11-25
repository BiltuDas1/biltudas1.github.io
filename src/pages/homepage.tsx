import Navbar from "../components/layout/navbar";
import bgImg from "../assets/img/hero-img.png";
import Hero from "../components/sections/homepage/hero";
import SelectedProjects from "../components/sections/homepage/projects";
import Explorations from "../components/sections/homepage/explorations";
import Experience from "../components/sections/homepage/experience";

export default function Homepage() {
  return (
    <div className="w-full bg-background relative z-0">
      <div className="absolute inset-0 z-1 pointer-events-none flex flex-row justify-end">
        <img src={bgImg} className="w-150 h-screen" />
      </div>

      <header className="relative z-2 px-30">
        <Navbar showResume />
      </header>
      <main className="w-full relative z-2 px-30 flex flex-col gap-10">
        <div className="max-w-full h-full mb-30">
          <Hero />
        </div>
        <SelectedProjects />
        <Explorations />
        <Experience />
      </main>
      <footer className="relative z-2"></footer>
    </div>
  );
}
