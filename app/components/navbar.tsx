"use client";

import { Tab } from "@headlessui/react";
import Content from "../content";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

const tabs = [
  {
    key: "home",
    display: "Home",
  },
  {
    key: "gallery",
    display: "Gallery",
  },
  {
    key: "contact",
    display: "Contact",
  },
  {
    key: "about",
    display: "About",
  },
  {
    key: "faq",
    display: "FAQ",
  },
];

interface NavbarProps {
  images: StaticImageData[];
  indexSelected: number;
  setIndexSelected: Dispatch<SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({
  images,
  indexSelected,
  setIndexSelected,
}) => {
  return (
    <div className="flex flex-col items-center h-full">
      <Tab.Group selectedIndex={indexSelected}>
        <div className="flex flex-wrap justify-center mx-12 gap-2">
          <Tab.List className="flex items-center text-sm sm:text-lg lg:text-xl mb-5">
            {tabs.map((tab, i) => (
              <Tab
                key={tab.key}
                className="p-2 font-semibold hover:opacity-70 bg-stone-50 border-solid border-2 rounded"
                onClick={() => {
                  setIndexSelected(i);
                }}
              >
                {({ selected }) => (
                  <span className={selected ? "text-stone-500" : "text-black"}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Content images={images} />
      </Tab.Group>
    </div>
  );
};

export default Navbar;
