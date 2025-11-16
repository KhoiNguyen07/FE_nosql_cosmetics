import React, { useEffect, useState } from "react";
import Product from "~/components/Product/Product";
import { productService } from "~/apis/productService";
import BannerTimerCountdown from "~/components/BannerTimerCountdown/BannerTimerCountdown";
import bannerImage from "~/assets/images/bannerBestProduct.jpeg";
import Loading from "~/components/Loading/Loading";

const BestProducts = () => {
  const [listProduct, setListProduct] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchData = () => {
      productService
        .getAllProduct()
        .then((res) => {
          if (res.data && res.data.length > 0) {
            setListProduct(res.data);
            clearInterval(intervalId); // có data thì stop
          }
        })
        .catch((err) => console.log(err));
    };

    // gọi lần đầu
    fetchData();
    // gọi lại mỗi 5s
    intervalId = setInterval(fetchData, 5000);

    // cleanup
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* {!listProduct && <Loading />} */}

      {/* title */}
      <div className="container md:flex md:justify-between ">
        <div className="hidden md:block border-t-4 border-double w-1/3"></div>
        <div className="flex flex-col text-center items-center justify-center -translate-y-5">
          <p className="uppercase text-third text-md">
            don't miss super offers
          </p>
          <h2 className="text-3xl">Our best products</h2>
        </div>
        <div className="hidden md:block border-t-4 border-double w-1/3"></div>
      </div>

      {/* banner product */}
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        <BannerTimerCountdown
          targetDate={"2030-12-21"}
          title={"The classics make a comeback"}
          btnContent={"Buy now"}
          gridColSpan="col-span-2"
          bannerImg={bannerImage}
        />
        {/* list product */}
        {listProduct?.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </>
  );
};

export default BestProducts;
