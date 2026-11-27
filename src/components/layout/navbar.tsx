type NavbarProps = {
  name: string;
  showResume?: boolean;
};

export default function Navbar({ name, showResume = false }: NavbarProps) {
  return (
    <nav className="flex flex-row py-6 justify-between select-none">
      <h1 className="font-quicksand font-bold text-2xl text-text-primary">
        {name}
      </h1>
      <ul className="font-saira font-normal text-lg flex flex-row text-text-secondary gap-8">
        <li className="line-through decoration-double opacity-50 cursor-not-allowed">
          Projects
        </li>
        <li className="line-through decoration-double opacity-50 cursor-not-allowed">
          Explorations
        </li>
        <li>Contact</li>
      </ul>
      <p
        className={`font-saira font-bold text-lg text-white ${!showResume && "hidden"}`}
      >
        Resume
      </p>
    </nav>
  );
}
