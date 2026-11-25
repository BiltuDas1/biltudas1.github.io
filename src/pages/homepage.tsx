import Navbar from "../components/layout/navbar";
import heroImg from "../assets/img/hero-img.png";
import Hero from "../components/sections/homepage/hero";

export default function Homepage() {
  return (
    <div className="bg-background relative z-0">
      <div className="absolute inset-0 z-1 pointer-events-none flex flex-row justify-end">
        <img src={heroImg} className="w-150 h-screen" />
      </div>

      <header className="relative z-2 px-30">
        <Navbar showResume />
      </header>
      <main className="relative z-2 px-30">
        <Hero />
      </main>
      <footer className="relative z-2"></footer>
    </div>
  );
}
