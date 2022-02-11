import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { authSlice } from "../../../redux/slices";

import Icon1 from "../../assets/icon1.svg";
import Icon11 from "../../assets/icon11.svg";
import Icon12 from "../../assets/icon12.svg";
import Icon14 from "../../assets/icon14.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Icon4 from "../../assets/icon4.svg";
import Icon5 from "../../assets/icon5.svg";
import Icon6 from "../../assets/icon6.svg";
import Icon7 from "../../assets/icon7.svg";
import LogoSidebar from "../../assets/logoSidebar.svg";

const IconArr = [LogoSidebar, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

const SingleIcon = ({ icon, onClick }: any) => {
  return (
    <span onClick={onClick && onClick} className="my-8 cursor-pointer">
      <img src={icon} alt="logo" />
    </span>
  );
};

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[70px] bg-white-0 fixed top-0 z-10 h-full">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col space-y-4">
            {IconArr?.map((item, index) => (
              <Fragment key={index}>
                <SingleIcon icon={item} />
              </Fragment>
            ))}
          </div>

          <div className="flex flex-col space-y-4 mb-8">
            <span className="cursor-pointer">
              <img src={Icon11} alt="logo" />
            </span>
            <span className="cursor-pointer">
              <img src={Icon12} alt="logo" />
            </span>
            <span
              onClick={() => {
                dispatch(authSlice.SetAuthInfo({}));
                toast.success("Logout success");
              }}
              className="cursor-pointer"
            >
              <img src={Icon14} alt="logo" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
