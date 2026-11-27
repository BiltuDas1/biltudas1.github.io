import { ArrowUpRight } from "lucide-react";

type ExplorationCardProps = {
  title: string;
  description: string;
};

export default function ExplorationCard({
  title,
  description,
}: ExplorationCardProps) {
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
