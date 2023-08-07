export default function Footer() {
  return (
    <footer className="h-[90px] flex justify-center items-center font-medium text-sm sm:text-base lg:text-lg shrink-0 mt-5 bg-stone-50">
      <div className="flex-col lg:w-[1200px] px-6">
        <div className="flex text-center flex-wrap justify-center">
          <span className="mr-2">
            <span className="font-semibold">Phone:</span> (949) 308-8999
          </span>
          <span className="mr-2">
            <span className="font-semibold">Email:</span> hello@hcofurniture.com
          </span>
          <span>
            <span className="font-semibold">Address:</span> 27201 Cabot Rd,
            Laguna Niguel, CA 92677
          </span>
        </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} HCOFurniture. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
