import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="font-quicksand font-bold text-4xl text-text-primary">
          Contact
        </h1>
        <hr className="w-full border-text-secondary" />
      </div>
      <div className="w-full font-saira flex flex-col gap-4">
        <div className="w-full py-6 px-8 flex flex-row gap-7 border-2 border-text-ternary rounded-xl items-center">
          <p className="mr-auto text-base text-text-ternary select-none">
            E-mail
          </p>
          <p className="text-lg text-text-primary">xxx@example.com</p>
          <button className="bg-primary-blue w-11 h-11 rounded-lg flex flex-row justify-center items-center select-none">
            <ArrowRight size={24} className="text-white" />
          </button>
        </div>
        <div className="w-full py-6 px-8 flex flex-row gap-7 border-2 border-text-ternary rounded-xl items-center">
          <p className="mr-auto text-base text-text-ternary select-none">
            Linkedin
          </p>
          <p className="text-lg text-text-primary">/xx/xxx</p>
          <button className="bg-primary-blue w-11 h-11 rounded-lg flex flex-row justify-center items-center select-none">
            <ArrowRight size={24} className="text-white" />
          </button>
        </div>
        <div className="w-full py-6 px-8 flex flex-row gap-7 border-2 border-text-ternary rounded-xl items-center">
          <p className="mr-auto text-base text-text-ternary select-none">
            Github
          </p>
          <p className="text-lg text-text-primary">BiltuDas1</p>
          <button className="bg-primary-blue w-11 h-11 rounded-lg flex flex-row justify-center items-center select-none">
            <ArrowRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
