type NavbarProps = {
  showResume?: boolean;
};

export default function Navbar({ showResume = false }: NavbarProps) {
  return (
    <nav className="flex flex-row py-6 justify-between">
      <h1 className="font-quicksand font-bold text-2xl text-text-primary">
        Biswajit Das
      </h1>
      <ul className="font-saira font-normal text-lg flex flex-row text-text-secondary gap-8">
        <li>Projects</li>
        <li>Explorations</li>
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
