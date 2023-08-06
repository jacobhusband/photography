import Image from "next/image";
import profile from "/public/fb_marketplace.jpg";

const handleClick = () => {
  window.open(
    "https://www.facebook.com/marketplace/profile/100052202858703/?ref=permalink&mibextid=dXMIcH",
    "_blank"
  );
};

export default function Home() {
  return (
    <>
      <p className="text-2xl text-center my-6 mx-2">
        We are a resale furniture business located in Orange County, CA.
      </p>
      <p className="text-2xl text-center my-6 mx-2">
        We deliver furniture for{" "}
        <span className="font-semibold bg-yellow-100">FREE</span> within the OC
        and elsewhere for a fee.
      </p>
      <p className="text-2xl text-center my-6 mx-2">
        Check out our inventory on facebook marketplace.
      </p>
      <div className="flex justify-center">
        <div
          className="p-2 bg-stone-100 rounded hover:opacity-90 cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex justify-center w-[200px] sm:w-[250px] lg:w-[300px]">
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
    </>
  );
}
