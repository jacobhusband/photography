"use client";

import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import Image from "next/image";

export default function Content() {
  return (
    <Tab.Panels className="h-full bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
      <Tab.Panel>
        <Masonry breakpointCols={3} className="flex gap-2" columnClassName="">
          <Image
            width={280}
            height={280}
            src="/sofa_1.jpg"
            className="my-2"
            alt="sofa-1"
          ></Image>
          <Image
            width={280}
            height={280}
            src="/sofa_2.jpg"
            className="my-2"
            alt="sofa-2"
          ></Image>
          <Image
            width={280}
            height={280}
            src="/sofa_3.jpg"
            className="my-2"
            alt="sofa-3"
          ></Image>
          <Image
            width={280}
            height={280}
            src="/sofa_4.jpg"
            className="my-2"
            alt="sofa-4"
          ></Image>
          <Image
            width={280}
            height={280}
            src="/sofa_5.jpg"
            className="my-2"
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
