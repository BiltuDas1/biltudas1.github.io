import type { Route } from "./+types/homepage";
import { getDb } from "../lib/db.server";
import { experiences, explorations, settings } from "../db/schema";
import Navbar from "../components/layout/navbar";
import bgImg from "../assets/img/hero-img.webp";
import Hero from "../components/sections/homepage/hero";
import SelectedProjects from "../components/sections/homepage/projects";
import Explorations from "../components/sections/homepage/explorations";
import Experience from "../components/sections/homepage/experience";
import Contact from "../components/sections/homepage/contact";
import type { ExplorationCardType } from "../types/explorationcard";
import type { ExperienceCardType } from "../types/experiencecard";
import { desc } from "drizzle-orm";

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

  // Collect Default Configurations
  const settings_resp = await db.select().from(settings);
  const settingsMap = Object.fromEntries(
    settings_resp.map(({ key, value }) => [key, value]),
  );

  // Collect Explorations
  const explorationsMap: ExplorationCardType[] = await db
    .select({
      title: explorations.name,
      description: explorations.description,
    })
    .from(explorations)
    .orderBy(desc(explorations.updatedAt), desc(explorations.id));

  // Collect Experiences
  const experiencesMap: ExperienceCardType[] = await db
    .select({
      company_name: experiences.company_name,
      company_abbreviation: experiences.company_abbreviation,
      role_name: experiences.role_name,
      start_date: experiences.start_date,
      end_date: experiences.end_date,
      work_summary: experiences.work_summary,
    })
    .from(experiences)
    .orderBy(desc(experiences.display_order), desc(experiences.id));

  return {
    settings: settingsMap,
    explorations: explorationsMap,
    experiences: experiencesMap,
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
  const exploration_cards = loaderData.explorations;
  const experience_cards = loaderData.experiences;

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
        <Explorations
          description={explorations_description}
          cards={exploration_cards}
        />
        <Experience cards={experience_cards} />
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
