import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "~/contexts/StoreProvider";

const BoxIcon = ({
  icon,
  to,
  title,
  bgColor = "bg-black",
  textColor = "text-white",
  border = "none",
  setIsOpenSidebar,
  titleSidebar,
  setTitleSidebar
}) => {
  const { countItem, countItemFavor } = useContext(StoreContext);
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={`p-1 text-xs  md:text-lg  rounded-full ${border} ${bgColor} ${textColor}`}
        >
          {icon}
        </Link>
      ) : (
        <button
          onClick={() => {
            setIsOpenSidebar(true);
            setTitleSidebar({
              ...titleSidebar,
              icon: icon,
              title: title
            });
          }}
          className={`p-2 text-xs md:text-lg rounded-full relative ${border} ${bgColor} ${textColor}`}
        >
          {icon}
          {title == "cart" && (
            <div className="absolute text-xs top-0 right-0 px-1 translate-x-1 -translate-y-1 py-0 bg-black text-white rounded-full">
              {countItem}
            </div>
          )}
          {title == "favorite" && (
            <div className="absolute text-xs top-0 right-0 px-1 translate-x-1 -translate-y-1 py-0 bg-black text-white rounded-full">
              {countItemFavor}
            </div>
          )}
        </button>
      )}
    </>
  );
};

export default BoxIcon;
