import { StaticImageData } from "next/image";
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

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

interface NavbarProps {
  images: StaticImageData[];
}

const Gallery: React.FC<NavbarProps> = ({ images }) => {
  const lightboxRef = useRef<LightGallery | null>(null);

  const sofaSources: GalleryItem[] = images.map((sofa) => {
    return { src: sofa.src, thumb: sofa.src };
  });

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName=""
      >
        {sofaSources.map((sofa, index) => (
          <Image
            key={sofa.src}
            src={images[index]}
            placeholder="blur"
            className="mb-4 hover:opacity-90 cursor-pointer rounded"
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
    </>
  );
};

export default Gallery;
