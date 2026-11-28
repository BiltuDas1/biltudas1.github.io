import { ChevronRight } from "lucide-react";

type ProjectCardProps = {
  name: string;
  domain: string;
  overview: string;
  thumbnail: string;
  caseStudiesUrl?: string | null;
  deploymentUrl?: string | null;
  sourceCodeUrl?: string | null;
};

export default function ProjectCard({
  name,
  domain,
  overview,
  thumbnail,
  caseStudiesUrl = null,
  deploymentUrl = null,
  sourceCodeUrl = null,
}: ProjectCardProps) {
  return (
    <div className="relative w-full h-96 hover:cursor-default group">
      <div className="w-full h-full">
        <img src={thumbnail} className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-primary-blue px-16 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="font-saira w-full h-full flex flex-col gap-2">
          <div className="flex flex-row gap-1 items-start">
            <h1 className="uppercase font-bold text-lg underline text-white underline-offset-8 pb-2">
              {name}
            </h1>
            <ChevronRight
              height={28}
              width={20}
              className="text-white select-none"
            />
          </div>
          <div>
            <h1 className="font-normal text-base text-primary-orange select-none">
              Domain
            </h1>
            <p className="font-normal text-lg text-white line-clamp-2">
              {domain}
            </p>
          </div>
          <div>
            <h1 className="font-normal text-base text-primary-orange select-none">
              Overview
            </h1>
            <p className="font-normal text-lg text-white line-clamp-4">
              {overview}
            </p>
          </div>
          <div className="mt-auto flex flex-row text-white gap-2 text-sm select-none">
            <a
              className={`hover:text-accent-light hover:decoration-accent-light underline underline-offset-2 cursor-pointer ${!caseStudiesUrl && "hidden"}`}
              href={caseStudiesUrl || "javascript:;"}
              target="_blank"
            >
              View Case Studies
            </a>
            <a
              className={`hover:text-accent-light hover:decoration-accent-light underline underline-offset-2 cursor-pointer ${!deploymentUrl && "hidden"}`}
              href={deploymentUrl || "javascript:;"}
              target="_blank"
            >
              See Deployments
            </a>
            <a
              className={`hover:text-accent-light hover:decoration-accent-light underline underline-offset-2 cursor-pointer ${!sourceCodeUrl && "hidden"}`}
              href={sourceCodeUrl || "javascript:;"}
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
