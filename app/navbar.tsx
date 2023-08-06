"use client";

import { Tab } from "@headlessui/react";
import Content from "./content";

const tabs_1 = [
  {
    key: "home",
    display: "Home",
  },
  {
    key: "gallery",
    display: "Gallery",
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
        <div className="flex flex-wrap justify-center mx-12 gap-2">
          <Tab.List className="flex items-center gap-12 sm:gap-2 text-base sm:text-lg lg:text-xl">
            {tabs_1.map((tab) => (
              <Tab
                key={tab.key}
                className="p-2 uppercase font-semibold hover:opacity-70"
              >
                {({ selected }) => (
                  <span className={selected ? "text-stone-500" : "text-black"}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.List className="flex items-center gap-12 sm:gap-2 text-base sm:text-lg lg:text-xl">
            {tabs_2.map((tab) => (
              <Tab
                key={tab.key}
                className="p-2 uppercase font-semibold hover:opacity-70"
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
        <Content />
      </Tab.Group>
    </div>
  );
}
