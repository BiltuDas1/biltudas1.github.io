import type { ExplorationCardType } from "../../../types/explorationcard";
import ExplorationCard from "../../ui/homepage/explorationcard";

type ExplorationsProps = {
  description: string;
  cards: ExplorationCardType[];
};

export default function Explorations({
  description,
  cards,
}: ExplorationsProps) {
  return (
    <section
      className={`${cards.length == 0 && "hidden"} w-full flex flex-col gap-8`}
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-quicksand font-bold text-4xl text-text-primary">
          Explorations
        </h1>
        <p className="font-saira font-normal text-base text-text-secondary">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-12 gap-y-14">
        {cards.map((card) => (
          <ExplorationCard title={card.title} description={card.description} />
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <button className="h-12 w-42 font-quicksand font-bold text-lg border border-secondary-light rounded-sm">
          All explorations
        </button>
      </div>
    </section>
  );
}
