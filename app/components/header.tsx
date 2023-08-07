import Image from "next/image";
import logo from "/public/logo.webp";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setIndexSelected: Dispatch<SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ setIndexSelected }) => {
  return (
    <>
      <header
        className="fixed w-full top-0 z-10 flex justify-between items-center h-[90px] px-2 sm:px-4 lg:px-6 bg-opacity-20 bg-zinc-300 backdrop-blur-sm"
        id="section-0"
      >
        <div className="flex items-center gap-2">
          <span className="uppercase font-bold text-base sm:text-lg lg:text-xl">
            HCO Furniture
          </span>
        </div>
        <button
          onClick={() => {
            setIndexSelected(2);
          }}
          className="rounded-3xl bg-black text-stone-200 px-3 py-2 hover:bg-opacity-90 text-sm sm:text-base lg:text-lg"
        >
          Get in touch
        </button>
      </header>
    </>
  );
};

export default Header;
