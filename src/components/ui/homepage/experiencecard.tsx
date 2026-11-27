import { Triangle } from "lucide-react";

type ExperienceItemProps = {
  name: string;
  selected?: boolean;
  onClick?: () => void;
};

export function ExperienceItem({
  name,
  selected = false,
  onClick,
}: ExperienceItemProps) {
  return (
    <li
      className={`
        py-4 px-6 hover:bg-option-select border-l-3 
        ${selected ? "border-primary-blue text-primary-blue" : "hover:text-text-primary border-railing"}`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

type ExperienceSummaryProps = {
  summaries: string[];
};

function ExperienceSummary({ summaries }: ExperienceSummaryProps) {
  return (
    <ul className="font-saira font-normal text-text-secondary text-lg flex flex-col gap-4">
      {summaries.map((summary, index) => (
        <li className="flex flex-row gap-4" key={index}>
          <Triangle
            size={15}
            className="mt-1 shrink-0 rotate-90 fill-primary-blue stroke-primary-blue select-none"
          />
          <span className="-mt-0.5">{summary}</span>
        </li>
      ))}
    </ul>
  );
}

type ExperienceDetailsProps = {
  role_name: string;
  company_name: string;
  start_date: string;
  end_date?: string | null;
  work_summary?: string | null;
  visible?: boolean;
};

export function ExperienceDetails({
  role_name,
  company_name,
  start_date,
  end_date = null,
  work_summary = null,
  visible = false,
}: ExperienceDetailsProps) {
  let summaries: string[] = [];
  if (work_summary && work_summary.length > 0) {
    summaries = work_summary
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  return (
    <div className={`flex flex-col gap-4 ${!visible && "hidden"}`}>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row font-quicksand font-bold text-2xl gap-2">
          <h1 className="text-text-primary">{role_name}</h1>
          <span className="text-primary-blue">@</span>
          <h1 className="text-primary-blue">{company_name}</h1>
        </div>
        <div className="flex flex-row font-saira font-normal text-sm gap-1 text-text-ternary">
          <p>{start_date}</p>
          <span>–</span>
          <p>{end_date ?? "Present"}</p>
        </div>
      </div>
      <div>{<ExperienceSummary summaries={summaries} />}</div>
    </div>
  );
}
