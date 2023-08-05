"use client";

import { Tab } from "@headlessui/react";
import Content from "./content";

const tabs_1 = [
  {
    key: "gallery",
    display: "Gallery",
  },
  {
    key: "inventory",
    display: "Inventory",
  },
];

const tabs_2 = [
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

export default function Navbar() {
  return (
    <div className="flex flex-col items-center h-full">
      <Tab.Group>
        <div className="flex flex-wrap justify-center">
          <Tab.List className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
            {tabs_1.map((tab) => (
              <Tab key={tab.key} className="p-2 uppercase">
                {({ selected }) => (
                  <span className={selected ? "text-stone-500" : "text-black"}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.List className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
            {tabs_2.map((tab) => (
              <Tab key={tab.key} className="p-2 uppercase">
                {({ selected }) => (
                  <span className={selected ? "text-stone-500" : "text-black"}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Content />
      </Tab.Group>
    </div>
  );
}
