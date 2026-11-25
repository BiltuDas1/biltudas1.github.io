import { Triangle } from "lucide-react";

export default function Experience() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-quicksand font-bold text-4xl text-text-primary">
        Experience
      </h1>
      <hr className="border-text-secondary" />
      <div className="flex flex-row gap-18">
        <div className="min-w-50">
          <ul className="font-saira font-normal text-lg flex flex-col select-none text-text-secondary">
            <li className="py-4 px-6 hover:bg-option-select border-l-3 border-primary-blue text-primary-blue">
              Inquesta
            </li>
            <li className="py-4 px-6 hover:bg-option-select hover:text-text-primary border-l-3 border-railing">
              Freelance
            </li>
            <li className="py-4 px-6 hover:bg-option-select hover:text-text-primary border-l-3 border-railing">
              Open Source
            </li>
            <li className="py-4 px-6 hover:bg-option-select hover:text-text-primary border-l-3 border-railing">
              Early Work
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row font-quicksand font-bold text-2xl gap-2">
              <h1 className="text-text-primary">Web Developer</h1>
              <span className="text-primary-blue">@</span>
              <h1 className="text-primary-blue">Inquesta Solutions LLP</h1>
            </div>
            <div className="flex flex-row font-saira font-normal text-sm gap-1 text-text-ternary">
              <p>Apr 2026</p>
              <span>–</span>
              <p>Jun 2026</p>
            </div>
          </div>
          <div>
            <ul className="font-saira font-normal text-text-secondary text-lg flex flex-col gap-4">
              <div className="flex flex-row gap-5">
                <Triangle
                  size={18}
                  className="mt-1.5 rotate-90 fill-primary-blue stroke-primary-blue select-none"
                />
                <li>
                  Build and maintain responsive web applications for client
                  projects, from design hand-off through to production release,
                  working across marketing sites, dashboards, and
                  content-managed platforms.
                </li>
              </div>
              <div className="flex flex-row gap-5">
                <Triangle
                  size={18}
                  className="mt-1.5 rotate-90 fill-primary-blue stroke-primary-blue select-none"
                />
                <li>
                  Work alongside designers and backend engineers to turn product
                  requirements into accessible, performant interfaces, with an
                  emphasis on clean component APIs and predictable state.
                </li>
              </div>
              <div className="flex flex-row gap-5">
                <Triangle
                  size={18}
                  className="mt-1.5 rotate-90 fill-primary-blue stroke-primary-blue select-none"
                />
                <li>
                  Improve component structure and front-end tooling across
                  projects, keeping the codebase consistent and easy to extend
                  as new clients and requirements arrive.
                </li>
              </div>
              <div className="flex flex-row gap-5">
                <Triangle
                  size={18}
                  className="mt-1.5 rotate-90 fill-primary-blue stroke-primary-blue select-none"
                />
                <li>
                  Support releases, review contributions, and debug production
                  issues across the studio's client sites, with a focus on
                  keeping deploys small and rollbacks boring.
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
