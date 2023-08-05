import Link from "next/link";
import Navbar from "./navbar";

export default function Page() {
  return (
    <div className="h-full overflow-auto">
      <header className="fixed w-full top-0 z-10 flex justify-between items-center h-[90px] px-6">
        <span className="uppercase font-bold text-sm sm:text-base lg:text-lg">
          HCO Furniture
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-black text-stone-200 px-3 py-2 hover:bg-opacity-90 text-sm sm:text-base lg:text-lg"
        >
          Get in touch
        </Link>
      </header>
      <main className="pt-[100px]">
        <Navbar />
      </main>
      <footer className="h-[90px] flex justify-center items-center uppercase font-medium text-sm sm:text-base lg:text-lg">
        HCO Furniture
      </footer>
    </div>
  );
}
