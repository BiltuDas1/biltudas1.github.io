export default function Hero() {
  return (
    <div className="py-24 w-190 flex flex-col gap-8">
      <h1 className="font-quicksand font-bold text-7xl text-text-primary">
        I build sharp tools for Linux and Android
      </h1>
      <p className="font-saira font-normal text-lg text-text-secondary w-140">
        Systems and tooling developer in Kolkata. I write C++ and Go first, then
        whatever the job needs. 57 public repositories, most of them built to
        scratch an itch.
      </p>
      <div className="font-quicksand font-bold text-lg flex flex-row gap-3">
        <button className="w-44 h-12 bg-primary-blue rounded-sm text-white">
          See the Projects
        </button>
        <button className="w-24 h-12 border border-secondary-light rounded-sm">
          Github
        </button>
      </div>
    </div>
  );
}
