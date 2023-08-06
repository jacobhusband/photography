"use client";

import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import Image from "next/image";

import sofa1 from "../public/sofa_1.jpg";
import sofa2 from "../public/sofa_2.jpg";
import sofa3 from "../public/sofa_3.jpg";
import sofa4 from "../public/sofa_4.jpg";
import sofa5 from "../public/sofa_5.jpg";

import LightGalleryComponent from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import type { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";
import { GalleryItem } from "lightgallery/lg-utils";

const sofas = [sofa1, sofa2, sofa3, sofa4, sofa5];
const sofaSources: GalleryItem[] = sofas.map((sofa) => {
  return { src: sofa.src, thumb: sofa.src };
});

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Content() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <Tab.Panels className="h-full bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
      <Tab.Panel>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName=""
        >
          {sofas.map((sofa, index) => (
            <Image
              key={sofa.src}
              src={sofa}
              placeholder="blur"
              className="my-4 hover:opacity-90 cursor-pointer"
              alt="sofa"
              onClick={() => {
                lightboxRef.current?.openGallery(index);
              }}
            />
          ))}
        </Masonry>
        <div className="App">
          <LightGalleryComponent
            onInit={(ref) => {
              if (ref) {
                lightboxRef.current = ref.instance;
              }
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            dynamic
            dynamicEl={sofaSources}
          ></LightGalleryComponent>
        </div>
      </Tab.Panel>
      <Tab.Panel>Browser insert for facebook marketplace inventory</Tab.Panel>
      <Tab.Panel>Contact information</Tab.Panel>
      <Tab.Panel>About information</Tab.Panel>
      <Tab.Panel>FAQ information</Tab.Panel>
    </Tab.Panels>
  );
}
