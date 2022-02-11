function CompanyCard({ item }: any) {
  const imgLength = item?.meta?.banners?.length;

  return (
    <>
      <div className="text-gray-0 m-2 relative drop-shadow-md hover:drop-shadow-xl cursor-default transition-all duration-300 p-2 bg-white-0 col-span-1 rounded-[8px] h-[300px]">
        {/* Images Section */}
        <div className={`grid grid-cols-${imgLength}`}>
          {item?.meta?.banners?.map((img: any) => (
            <div className="col-span-1 px-[2px] h-[90px]">
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
          <div className="text-[14px]">
            <div className="leading-loose flex items-center">
              <span className="text-gray-10">
                {item?.addresses[0]?.city}, {item?.addresses[0]?.country}
              </span>
              <span className="bg-[#9797a0] w-[3px] h-[3px] mx-2 rounded-full"></span>
              <span className="text-green-900">
                Min Qty: {item?.minOrderQty}
              </span>
            </div>
            {/* Categories */}
            <div className="truncate text-gray-10">
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