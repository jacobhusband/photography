import React from "react";
import Image from "next/image";

import truckLeaning from "/public/truck-leaning.webp";

export default function About() {
  return (
    <div>
      <Image
        src={truckLeaning}
        alt="furniture salesmen"
        sizes="100vw"
        placeholder="blur"
        className="py-1"
      ></Image>
      <p>
        HCO Furniture is an online refurbished furniture store that offers
        couches, dining tables and mattresses. We serve Orange County and
        surrounding counties in Southern California. A family business, HCO or
        H-Co, stands for Husband Company furniture, with Husband being the
        family last name (weird/different I know). Our goal is to bring the
        highest quality, yet affordable furniture to our local community.
      </p>
      <br></br>
      <p>
        We strive to make the furniture sales process as easy and transparent as
        possible. All of our listings will show exactly what you will get with
        high quality photos and accompanying video tours.
      </p>
      <br></br>
      <p>
        In person tours of the furniture is also available so you can see and/or
        test before you buy! We also offer free delivery to all Orange County
        Residents! (Delivery to surrounding counties as well for an added fee).
        If you live in Southern California and need high quality furniture but
        don&apos;t want to break the bank to furnish your living space, then you
        came to the right place!
      </p>
      <br></br>
    </div>
  );
}
