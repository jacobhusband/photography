"use client";

import { Tab } from "@headlessui/react";
import Content from "./content";

const tabs = [
  {
    key: "gallery",
    display: "Gallery",
  },
  {
    key: "inventory",
    display: "Inventory",
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

export default function Navbar() {
  return (
    <div className="flex flex-col items-center h-full">
      <Tab.Group>
        <Tab.List className="flex items-center gap-12">
          {tabs.map((tab) => (
            <Tab key={tab.key} className="p-2">
              {({ selected }) => (
                <span className={selected ? "text-stone-500" : "text-black"}>
                  {tab.display}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Content />
      </Tab.Group>
    </div>
  );
}
