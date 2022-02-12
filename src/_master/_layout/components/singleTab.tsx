import { Fragment } from "react";
import RightArrow from "../../assets/rightArrowIcon.svg";

const tabArr: Array<string> = [
  "All for you",
  "Recommended",
  "Top Manufacturers",
  "Winter Special",
  "Demin Special",
  "Women’s wear",
  "Kid’s wear",
  "T-shirts",
  "Men’s Fashion",
  "Men’s Fashion",
];

export const SingleTab = ({
  name,
  isActive,
}: {
  name: string;
  isActive?: boolean;
}) => {
  if (isActive) {
    return (
      <button className="whitespace-nowrap px-3 font-[500] py-2 bg-green-900 rounded-md text-white-0">
        {name}
      </button>
    );
  }
  return (
    <button className="whitespace-nowrap px-3 font-[500] py-2 border-2 border-[#ebebeb] rounded-md text-[#2a2a2e]">
      {name}
    </button>
  );
};

const Tabs = () => {
  return (
    <div className="relative grid grid-cols-12 bg-white-0 drop-shadow-sm h-[70px]">
      <div className="no-scrollbar col-span-12 ml-4 md:ml-8 mr-16 overflow-x-auto flex items-center space-x-3">
        {tabArr?.map((item, index) => (
          <Fragment key={index}>
            <SingleTab name={item} isActive={index === 0} />
          </Fragment>
        ))}
      </div>
      <div className="absolute top-2 right-4 m-4">
        <div className="shadowImageOverlay"></div>
      </div>

      <div className="absolute top-2 right-4 m-4">
        <img className="cursor-pointer" src={RightArrow} alt="rightIcon" />
      </div>
    </div>
  );
};

export default Tabs;
