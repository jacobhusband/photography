import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import Logo from "/public/logo.webp";

export default function Page() {
  return (
    <div className="h-full overflow-auto flex flex-col ">
      <header className="fixed w-full top-0 z-10 flex justify-between items-center h-[90px] px-2 sm:px-4 lg:px-6 bg-opacity-20 bg-zinc-300 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="hco-logo" width={70} height={70}></Image>
          <span className="uppercase font-bold text-base sm:text-lg lg:text-xl">
            HCO Furniture
          </span>
        </div>
        <Link
          href="#"
          className="rounded-3xl bg-black text-stone-200 px-3 py-2 hover:bg-opacity-90 text-sm sm:text-base lg:text-lg"
        >
          Get in touch
        </Link>
      </header>
      <main className="pt-[110px] sm:pt-[130px] lg:pt-[150px] flex flex-col grow">
        <Navbar />
      </main>
      <footer className="h-[90px] flex justify-center items-center uppercase font-medium text-sm sm:text-base lg:text-lg shrink-0">
        <div className="flex-col lg:w-[1200px] px-6">
          <div className="flex text-center flex-wrap justify-center">
            <span className="mr-2">
              <span className="font-semibold">Phone:</span> (949) 308-8999
            </span>
            <span className="mr-2">
              <span className="font-semibold">Email:</span>{" "}
              hello@hcofurniture.com
            </span>
            <span>
              <span className="font-semibold">Address:</span> 27201 Cabot Rd,
              Laguna Niguel, CA 92677
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
