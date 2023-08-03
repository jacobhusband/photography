"use client";

import { Tab } from "@headlessui/react";

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
    <div className="flex flex-col items-center">
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
        <Tab.Panels>
          <Tab.Panel>Images for gallery</Tab.Panel>
          <Tab.Panel>
            Browser insert for facebook marketplace inventory
          </Tab.Panel>
          <Tab.Panel>Contact information</Tab.Panel>
          <Tab.Panel>About information</Tab.Panel>
          <Tab.Panel>FAQ information</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
