import { useState } from "react";
import type { ExperienceCardType } from "../../../types/experiencecard";
import {
  ExperienceDetails,
  ExperienceItem,
} from "../../ui/homepage/experiencecard";

type ExperienceProps = {
  cards: ExperienceCardType[];
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Experience({ cards }: ExperienceProps) {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <section className={`${cards.length == 0 && "hidden"} flex flex-col gap-6`}>
      <h1 className="font-quicksand font-bold text-4xl text-text-primary">
        Experience
      </h1>
      <hr className="w-full border-text-secondary" />
      <div className="flex flex-row gap-18">
        <div className="min-w-50">
          <ul className="font-saira font-normal text-lg flex flex-col select-none text-text-secondary">
            {cards.map((card, index) => (
              <ExperienceItem
                name={card.company_abbreviation}
                key={index}
                selected={selectedId === index}
                onClick={() => setSelectedId(index)}
              />
            ))}
          </ul>
        </div>

        {cards.map((card, index) => (
          <ExperienceDetails
            key={index}
            role_name={card.role_name}
            company_name={card.company_name}
            start_date={formatDate(card.start_date)}
            end_date={card.end_date && formatDate(card.end_date)}
            work_summary={card.work_summary}
            visible={selectedId === index}
          />
        ))}
      </div>
    </section>
  );
}
