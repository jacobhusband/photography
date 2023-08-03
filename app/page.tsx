import Link from "next/link";
import Navbar from "./navbar";

export default function Page() {
  return (
    <div className="h-full flex flex-col">
      <header className="flex justify-between items-center h-[90px] px-6">
        <div>HCO Furniture</div>
        <Link
          href="#"
          className="rounded-3xl bg-black text-stone-200 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
      <main className="grow">
        <Navbar />
      </main>
      <footer className="h-[60px] flex justify-center items-center">
        HCO Furniture
      </footer>
    </div>
  );
}
