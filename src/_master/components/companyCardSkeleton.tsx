export default function CompanyCardSkeleton() {
  return (
    <>
      <div className="animate-pulse m-2 relative drop-shadow-md hover:drop-shadow-xl cursor-default transition-all duration-300 p-2 bg-white-0 col-span-1 rounded-[8px] h-[300px]">
        {/* Images Section */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-[2px] w-full h-[90px]">
            <div className="rounded bg-gray-200 w-full h-full"></div>
          </div>
          <div className="col-span-1 px-[2px] w-full h-[90px]">
            <div className="rounded bg-gray-200 w-full h-full"></div>
          </div>
          <div className="col-span-1 px-[2px] w-full h-[90px]">
            <div className="rounded bg-gray-200 w-full h-full"></div>
          </div>
        </div>
        {/* Avater */}
        <div className="absolute -mt-12 ml-[15px]">
          <div className="w-[79px] h-[79px] rounded-full border-4 border-white-0 bg-gray-200"></div>
        </div>

        <div className="mt-10 px-2">
          {/* CompanyName */}
          <div className="text-[18px] font-bold w-full py-3 rounded bg-gray-200"></div>
          {/* Qty */}
          <div className="my-2">
            <div className="leading-loose flex items-center">
              <div className="py-2 bg-gray-200 w-1/2 rounded mr-1"></div>
              <div className="py-2 bg-gray-200 w-1/2 rounded ml-1"></div>
            </div>
            {/* Categories */}
            <div className="py-2 bg-gray-200 my-2 w-full rounded mr-1"></div>
          </div>

          <div className="mt-[25px]">
            <button className="px-4 font-bold py-4 w-2/4 hover:opacity-90 rounded-full bg-gray-200"></button>
          </div>
        </div>
      </div>
    </>
  );
}
