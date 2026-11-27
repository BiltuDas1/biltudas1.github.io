type HeroProps = {
  heading: string;
  description: string;
};

export default function Hero({ heading, description }: HeroProps) {
  return (
    <section className="py-24 w-190 h-133 flex flex-col gap-8">
      <h1 className="font-quicksand font-bold text-7xl text-text-primary">
        {heading}
      </h1>
      <p className="font-saira font-normal text-lg text-text-secondary w-140">
        {description}
      </p>
      <div className="font-quicksand font-bold text-lg flex flex-row gap-3 select-none">
        <button className="w-44 h-12 bg-primary-blue rounded-sm text-white">
          See the Projects
        </button>
        <button className="w-24 h-12 border border-secondary-light rounded-sm">
          Github
        </button>
      </div>
    </section>
  );
}
