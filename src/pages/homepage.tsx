import type { Route } from "./+types/homepage";
import { getDb } from "../lib/db.server";
import { settings } from "../db/schema";
import Navbar from "../components/layout/navbar";
import bgImg from "../assets/img/hero-img.webp";
import Hero from "../components/sections/homepage/hero";
import SelectedProjects from "../components/sections/homepage/projects";
import Explorations from "../components/sections/homepage/explorations";
import Experience from "../components/sections/homepage/experience";
import Contact from "../components/sections/homepage/contact";

export function meta({ loaderData }: Route.MetaArgs) {
  const settings = loaderData.settings;
  const name = settings["first_name"] + " " + settings["last_name"];

  return [
    { title: name },
    {
      name: "description",
      content: `Portfolio of ${name}, a backend developer.`,
    },
    { property: "og:title", content: name },
    {
      property: "og:description",
      content: `Explore ${name}'s projects and experience.`,
    },
    { property: "og:type", content: "website" },
  ];
}

export async function loader() {
  const db = await getDb();
  const result = await db.select().from(settings);
  const settingsMap = Object.fromEntries(
    result.map(({ key, value }) => [key, value]),
  );

  return {
    settings: settingsMap,
  };
}

export default function Homepage({ loaderData }: Route.ComponentProps) {
  const year = new Date().getFullYear();
  const settings = loaderData.settings;
  const name = settings["first_name"] + " " + settings["last_name"];
  const hero_heading = settings["hero_heading"];
  const hero_description = settings["hero_description"];
  const projects_description = settings["projects_description"];
  const explorations_description = settings["explorations_description"];

  return (
    <div className="w-full bg-background relative z-0">
      <div className="absolute inset-0 z-1 pointer-events-none flex flex-row justify-end">
        <img src={bgImg} className="w-150 h-screen" />
      </div>

      <header className="relative z-2 px-30">
        <Navbar name={name} showResume />
      </header>
      <main className="w-full relative z-2 px-30 flex flex-col gap-10">
        <div className="max-w-full h-full mb-30">
          <Hero heading={hero_heading} description={hero_description} />
        </div>
        <SelectedProjects description={projects_description} />
        <Explorations description={explorations_description} />
        <Experience />
        <Contact />
      </main>
      <footer className="w-full relative z-2 px-30 select-none">
        <p className="font-saira font-normal text-base text-text-ternary text-center py-6">
          {year} © {name}
        </p>
      </footer>
    </div>
  );
}
