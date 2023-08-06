"use client";

import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import Image from "next/image";

import LightGalleryComponent from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import type { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";
import { GalleryItem } from "lightgallery/lg-utils";

import FAQ from "./subpages/faq";
import About from "./subpages/about";

import sofaImages from "./components/sofa_import";
import profile from "/public/fb_marketplace.jpg";

const sofaSources: GalleryItem[] = sofaImages.map((sofa) => {
  return { src: sofa.src, thumb: sofa.src };
});

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

const handleClick = () => {
  window.open(
    "https://www.facebook.com/marketplace/profile/100052202858703/?ref=permalink&mibextid=dXMIcH",
    "_blank"
  );
};

export default function Content() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <Tab.Panels className="h-full bg-opacity-80 max-w-[1200px] w-full p-2 sm:p-4">
      <Tab.Panel>
        <p className="text-2xl text-center my-6 mx-2">
          We are a resale furniture business located in Orange County, CA.
        </p>
        <p className="text-2xl text-center my-6 mx-2">
          We deliver furniture for{" "}
          <span className="font-semibold bg-yellow-100">FREE</span> within the
          OC and elsewhere for a fee.
        </p>
        <p className="text-2xl text-center my-6 mx-2">
          Check out our inventory on facebook marketplace.
        </p>
        <div className="flex justify-center">
          <div className="p-2 bg-stone-100 rounded hover:opacity-90 cursor-pointer">
            <div
              className="flex justify-center w-[200px] sm:w-[250px] lg:w-[300px]"
              onClick={handleClick}
            >
              <Image
                className="rounded-lg"
                src={profile}
                alt="tyler husband facebook profile picture"
                placeholder="blur"
              ></Image>
            </div>
            <p className="text-center mt-2 uppercase font-bold">View profile</p>
          </div>
        </div>
      </Tab.Panel>
      <Tab.Panel>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName=""
        >
          {sofaSources.map((sofa, index) => (
            <Image
              key={sofa.src}
              src={sofaImages[index]}
              placeholder="blur"
              className="mt-4 hover:opacity-90 cursor-pointer rounded"
              alt="sofa"
              sizes="(max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw"
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

      <Tab.Panel>Contact information</Tab.Panel>
      <Tab.Panel>
        <About />
      </Tab.Panel>
      <Tab.Panel>
        <FAQ />
      </Tab.Panel>
    </Tab.Panels>
  );
}
