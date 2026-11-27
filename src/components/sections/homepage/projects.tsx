type SelectedProjectsProps = {
  description: string;
};

export default function SelectedProjects({
  description,
}: SelectedProjectsProps) {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-quicksand font-bold text-4xl text-text-primary">
          Selected projects
        </h1>
        <p className="font-saira font-normal text-base text-text-secondary">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-8">
        <div className="w-full h-96 border"></div>
        <div className="w-full h-96 border"></div>
        <div className="w-full h-96 border"></div>
        <div className="w-full h-96 border"></div>
      </div>
      <div className="flex flex-row justify-center">
        <button className="h-12 w-33 font-quicksand font-bold text-lg border border-secondary-light rounded-sm">
          Show More
        </button>
      </div>
    </section>
  );
}
