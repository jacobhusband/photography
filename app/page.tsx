"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import sofaImages from "./components/sofa_import";
import Header from "./components/header";

export default function Page() {
  const [indexSelected, setIndexSelected] = useState(0);

  return (
    <div className="h-full overflow-auto flex flex-col ">
      <Header setIndexSelected={setIndexSelected} />
      <main className="pt-[110px] sm:pt-[130px] lg:pt-[150px] flex flex-col grow">
        <Navbar
          images={sofaImages}
          indexSelected={indexSelected}
          setIndexSelected={setIndexSelected}
        />
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
