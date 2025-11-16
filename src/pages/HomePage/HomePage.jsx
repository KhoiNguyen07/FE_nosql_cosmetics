import React from "react";

import BestProducts from "~/pages/HomePage/components/BestProducts/BestProducts";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import Banner from "./components/Banner/Banner";
import SaleHomePage from "./components/SaleHomePage/SaleHomePage";

const HomePage = () => {
  return (
    <>
      {/* Header */}
      <div className="relative  z-40">
        <section className="absolute top-0 left-0 right-0">
          <Header />
        </section>
      </div>
      <div className="space-y-28">
        {/* Banner */}
        <section>
          <Banner />
        </section>
        {/* Our best product */}
        <section className="container px-3">
          <BestProducts />
        </section>
        {/* Sale */}
        <section>
          <SaleHomePage />
        </section>
        {/* Footer */}
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default HomePage;
