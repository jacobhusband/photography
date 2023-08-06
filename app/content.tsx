"use client";

import { Tab } from "@headlessui/react";
import { StaticImageData } from "next/image";

import FAQ from "./subpages/faq";
import About from "./subpages/about";
import Home from "./subpages/home";
import Gallery from "./subpages/gallery";
import Contact from "./subpages/contact";

interface NavbarProps {
  images: StaticImageData[];
}

const Content: React.FC<NavbarProps> = ({ images }) => {
  return (
    <Tab.Panels className="h-full bg-opacity-80 max-w-[1200px] w-full p-2 sm:p-4">
      <Tab.Panel>
        <Home />
      </Tab.Panel>
      <Tab.Panel>
        <Gallery images={images} />
      </Tab.Panel>
      <Tab.Panel>
        <Contact />
      </Tab.Panel>
      <Tab.Panel>
        <About />
      </Tab.Panel>
      <Tab.Panel>
        <FAQ />
      </Tab.Panel>
    </Tab.Panels>
  );
};

export default Content;
