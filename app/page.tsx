"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import sofaImages from "./components/sofa_import";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Page() {
  const [indexSelected, setIndexSelected] = useState(0);

  return (
    <div className="h-full overflow-auto flex flex-col ">
      <Header setIndexSelected={setIndexSelected} />
      <main className="pt-[102px] flex flex-col grow">
        <Navbar
          images={sofaImages}
          indexSelected={indexSelected}
          setIndexSelected={setIndexSelected}
        />
      </main>

      <Footer />
    </div>
  );
}
