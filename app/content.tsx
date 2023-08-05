"use client";

import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import Image from "next/image";

import sofa1 from "../public/sofa_1.jpg";
import sofa2 from "../public/sofa_2.jpg";
import sofa3 from "../public/sofa_3.jpg";
import sofa4 from "../public/sofa_4.jpg";
import sofa5 from "../public/sofa_5.jpg";

const sofas = [sofa1, sofa2, sofa3, sofa4, sofa5];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Content() {
  return (
    <Tab.Panels className="h-full bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
      <Tab.Panel>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName=""
        >
          <Image
            src={sofa1}
            placeholder="blur"
            className="my-4"
            alt="sofa-1"
          ></Image>
          <Image
            src={sofa2}
            placeholder="blur"
            className="my-4"
            alt="sofa-2"
          ></Image>
          <Image
            src={sofa3}
            placeholder="blur"
            className="my-4"
            alt="sofa-3"
          ></Image>
          <Image
            src={sofa4}
            placeholder="blur"
            className="my-4"
            alt="sofa-4"
          ></Image>
          <Image
            src={sofa5}
            placeholder="blur"
            className="my-4"
            alt="sofa-5"
          ></Image>
        </Masonry>
      </Tab.Panel>
      <Tab.Panel>Browser insert for facebook marketplace inventory</Tab.Panel>
      <Tab.Panel>Contact information</Tab.Panel>
      <Tab.Panel>About information</Tab.Panel>
      <Tab.Panel>FAQ information</Tab.Panel>
    </Tab.Panels>
  );
}
