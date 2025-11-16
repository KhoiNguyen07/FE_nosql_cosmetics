import React from "react";
import Button from "~/components/Button/Button";
import "./style.scss";

import { subBannerArr } from "~/assets/ContentArrProject/Banner/BannerContent";

const Banner = () => {
  return (
    <>
      {/* Banner content */}
      <div className="Banner flex flex-col justify-center items-center text-center space-y-5 border px-5 text-white relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <h2 className="z-20 text-5xl">Comestics</h2>
        {/* <h2 className="text-5xl">Hoang Luu Nhu Quynh</h2> */}

        <p className="z-20 text-xl text-third">
          Make yours celebrations even more special this years with beautiful.
        </p>
        <div className="z-20">
          <Button content={"Go to shop"} />
        </div>
      </div>

      {/* SubBanner */}
      <div className="mx-3 relative z-20">
        <div className="container mt-[-85px] flex flex-wrap bg-black justify-between xl:px-20 xl:py-8">
          {subBannerArr.map((item) => (
            <div className="flex items-center text-white space-x-5 w-full md:w-2/4 xl:w-1/4 p-4">
              <div className="text-5xl text-sub">{item.logo}</div>
              <div className="space-y-2">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-xl text-sub">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
