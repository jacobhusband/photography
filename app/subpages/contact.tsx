export default function Contact() {
  return (
    <>
      <p className="text-center text-lg sm:text-xl lg:text-2xl">
        Please feel free to reach out via phone or email to schedule a viewing.
      </p>
      <p className="mt-4 text-center text-lg sm:text-xl lg:text-2xl">
        Phone:{" "}
        <a href="tel:+19493088999" className="underline text-blue-400">
          (949) 308-8999
        </a>
      </p>
      <p className="text-center text-lg sm:text-xl lg:text-2xl">
        Email:{" "}
        <a
          href="mailto:hello@hcofurniture.com"
          className="underline text-blue-400"
        >
          hello@hcofurniture.com
        </a>
      </p>
      <p className="text-center text-lg sm:text-xl lg:text-2xl">
        Address:{" "}
        <a
          className="underline text-blue-400"
          href="https://www.google.com/maps/dir//Public+Storage,+27201+Cabot+Rd,+Laguna+Niguel,+CA/@33.5678751,-117.7107694,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dceee8cd953375:0xbcbedb157379c8b!2m2!1d-117.6757509!2d33.5678803"
        >
          Public Storage, 27201 Cabot Rd, Laguna Niguel, CA 92677
        </a>
      </p>
    </>
  );
}
