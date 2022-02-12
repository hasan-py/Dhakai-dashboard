function CompanyCard({ item }: any) {
  return (
    <>
      <div className="text-gray-0 m-2 relative drop-shadow-md hover:drop-shadow-xl cursor-default transition-all duration-300 p-2 bg-white-0 col-span-1 rounded-[8px] h-[300px]">
        {/* Images Section */}
        <div className={`grid grid-cols-2`}>
          {item?.meta?.banners?.slice(0, 2)?.map((img: any, index: number) => (
            <div className="col-span-1 px-[2px] h-[90px]" key={index}>
              <img
                src={img?.url}
                alt={img?.name}
                className="w-full h-full rounded object-cover object-center"
              />
            </div>
          ))}
        </div>
        {/* Avater */}
        <div className="absolute -mt-12 ml-[15px]">
          <img
            src={item?.meta?.logo?.url}
            alt="as"
            // className="w-[79px] h-[79px] rounded-full border-4 border-white-0"
            className="w-[79px] h-[79px] rounded-full"
          />
        </div>

        <div className="mt-10 px-2">
          {/* CompanyName */}
          <div className="text-[17px] font-bold truncate">
            {item?.meta?.companyName || ""}
          </div>
          {/* Qty */}
          <div>
            <div className="leading-loose flex items-center">
              {item?.addresses?.length > 0 ? (
                <>
                  <span className="text-sm md:text-[14px] text-gray-10">
                    {item?.addresses[0]?.city}, {item?.addresses[0]?.country}
                  </span>
                  <span className="bg-[#9797a0] w-[3px] h-[3px] mx-2 rounded-full"></span>
                </>
              ) : null}

              <span className="text-sm md:text-[14px] text-green-900">
                Min Qty: {item?.minOrderQty}
              </span>
            </div>
            {/* Categories */}
            <div className="text-sm md:text-[14px] truncate text-gray-10">
              {item?.productGroups?.map((productGroup: any, index: number) => (
                <>
                  {productGroup?.name}
                  {index !== item?.productGroups?.length - 1 ? ", " : null}{" "}
                </>
              ))}
            </div>
          </div>

          <div className="mt-[25px]">
            <button className="px-4 font-bold py-1 hover:opacity-90 rounded-full bg-green-300 text-green-900">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyCard;
