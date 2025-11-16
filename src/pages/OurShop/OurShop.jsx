import React, { useEffect, useRef, useState } from "react";
import BannerTimerCountdown from "~/components/BannerTimerCountdown/BannerTimerCountdown";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import SubRoutePage from "~/pages/OurShop/components/SubRoutePage/SubRoutePage";
import SortProduct from "~/pages/OurShop/components/SortProduct/SortProduct";
import ShowAllProduct from "~/pages/OurShop/components/ShowAllProduct/ShowAllProduct";
import bannerImage from "~/assets/images/bannerOurShop.jpeg";
import { productService } from "~/apis/productService";
import { useSorting } from "~/hooks/useSorting";
import Button from "~/components/Button/Button";

// arr select box
const sortArr = [
  { title: "Sort by price: low to high", value: "ascending" },
  { title: "Sort by price: high to low", value: "descending" }
];
const itemPerPageArr = [
  { title: "8", value: 8 },
  { title: "16", value: 16 },
  { title: "All", value: 0 }
];

const OurShop = () => {
  // List product from API
  const [listProduct, setListProduct] = useState([]);
  const [listProductAll, setListProductAll] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [listProductRender, setListProductRender] = useState([]);
  const childRef = useRef();
  const updateSetListProductRender = (value) => {
    setListProductRender(value);
  };

  useEffect(() => {
    const { sortedList } = useSorting(
      listProduct,
      sortArr[0].value,
      itemPerPageArr[0].value
    );
    setListProductRender(sortedList());
  }, [listProduct]);

  // call api
  useEffect(() => {
    productService
      .getAllProduct()
      .then((res) => {
        setListProductAll(res.data);
        // apply current category filter
        const filtered =
          selectedCategory && selectedCategory !== "All"
            ? res.data.filter((p) => p.category === selectedCategory)
            : res.data;
        setListProduct(filtered);
      })
      .catch((err) => console.log(err));
  }, []);

  // fetch categories for filter
  useEffect(() => {
    productService
      .getAllCategories()
      .then((res) => {
        setCategories(res.data || []);
      })
      .catch((err) => console.log(err));
  }, []);

  // when selectedCategory changes, update listProduct from full list
  useEffect(() => {
    const filtered =
      selectedCategory && selectedCategory !== "All"
        ? listProductAll.filter((p) => p.category === selectedCategory)
        : listProductAll;
    setListProduct(filtered);
  }, [selectedCategory, listProductAll]);

  // loading more
  const handleLoadingMoreItem = () => {
    childRef.current.handleOnclickMoreItem();
  };

  return (
    <>
      <div className="container">
        {/* Header */}
        <section className="relative z-40">
          <Header />
        </section>

        {/* sub route navigate */}
        <section>
          <SubRoutePage />
        </section>

        {/* Banner our shop */}
        <section>
          <div className="md:h-[280px] border">
            <BannerTimerCountdown
              targetDate={"2030-12-21"}
              title={"The classics make a comeback"}
              btnContent={"Buy now"}
              bannerImg={bannerImage}
            />
          </div>
        </section>

        {/* Sorting */}
        <section>
          <SortProduct
            sortArr={sortArr}
            itemPerPageArr={itemPerPageArr}
            ref={childRef}
            listProduct={listProduct}
            updateSetListProductRender={updateSetListProductRender}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>
        {/* Show products */}
        <section className="px-3 md:px-0">
          <ShowAllProduct listProduct={listProductRender} />
        </section>
        {/* Loading more product */}
        {listProductRender.length != listProduct.length && (
          <section>
            {/* Loading more */}
            <div className="text-center pt-32">
              <Button
                onClick={handleLoadingMoreItem}
                content={"LOAD MORE PRODUCT"}
                hoverTextColor={"hover:text-white"}
                bgColor={"bg-transparent"}
                hoverBgColor={"hover:bg-black"}
                textColor={"text-black"}
              />
            </div>
          </section>
        )}
      </div>

      {/* footer */}
      <section className="mt-32">
        <Footer />
      </section>
    </>
  );
};

export default OurShop;
