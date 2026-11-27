import { ArrowUpRight } from "lucide-react";
import type { ExplorationCardType } from "../../../types/explorationcard";

export default function ExplorationCard({
  title,
  description,
}: ExplorationCardType) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-1">
        <h1 className="font-quicksand font-bold text-2xl text-text-primary">
          {title}
        </h1>
        <ArrowUpRight size={20} className="text-text-ternary" />
      </div>
      <p className="font-saira font-normal text-lg text-text-secondary">
        {description}
      </p>
    </div>
  );
}
