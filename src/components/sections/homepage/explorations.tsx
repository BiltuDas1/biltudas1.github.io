import { ArrowUpRight } from "lucide-react";

export default function Explorations() {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-quicksand font-bold text-4xl text-text-primary">
          Explorations
        </h1>
        <p className="font-saira font-normal text-base text-text-secondary">
          Tools and experiments, mostly made because I needed them myself.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-12 gap-y-14">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <h1 className="font-quicksand font-bold text-2xl text-text-primary">
              unlock-Bootloader
            </h1>
            <ArrowUpRight size={20} className="text-text-ternary" />
          </div>
          <p className="font-saira font-normal text-lg text-text-secondary">
            Unlock the bootloader on Android devices, from a PC or a phone.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <h1 className="font-quicksand font-bold text-2xl text-text-primary">
              unlock-Bootloader
            </h1>
            <ArrowUpRight size={20} className="text-text-ternary" />
          </div>
          <p className="font-saira font-normal text-lg text-text-secondary">
            Unlock the bootloader on Android devices, from a PC or a phone.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <h1 className="font-quicksand font-bold text-2xl text-text-primary">
              unlock-Bootloader
            </h1>
            <ArrowUpRight size={20} className="text-text-ternary" />
          </div>
          <p className="font-saira font-normal text-lg text-text-secondary">
            Unlock the bootloader on Android devices, from a PC or a phone.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <h1 className="font-quicksand font-bold text-2xl text-text-primary">
              unlock-Bootloader
            </h1>
            <ArrowUpRight size={20} className="text-text-ternary" />
          </div>
          <p className="font-saira font-normal text-lg text-text-secondary">
            Unlock the bootloader on Android devices, from a PC or a phone.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <h1 className="font-quicksand font-bold text-2xl text-text-primary">
              unlock-Bootloader
            </h1>
            <ArrowUpRight size={20} className="text-text-ternary" />
          </div>
          <p className="font-saira font-normal text-lg text-text-secondary">
            Unlock the bootloader on Android devices, from a PC or a phone.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button className="h-12 w-42 font-quicksand font-bold text-lg border border-secondary-light rounded-sm">
          All explorations
        </button>
      </div>
    </section>
  );
}
