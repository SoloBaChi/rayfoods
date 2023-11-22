import React from "react";
import ProductCard from "./productCard";
import BestSellingProductCard from "./bestSellingProductCard";
import { Data } from "../data/data";

function Main() {
  return (
    <div className="main-container px-[5%] py-[_1.5rem] lg:px-[_7%]">
      <section className="top-selling-items mb-32">
        <h3 className="font-[_700] text-4xl mb-4">Top Selling Items</h3>
        <ProductCard sellingItems={Data[0].topSellingItems} />
      </section>

      <section className="best-selling-rice">
        <h3 className="font-[_700] text-4xl">Best Selling Rice</h3>
        <BestSellingProductCard bestSellingItems={Data[0].bestSellingRice} />
      </section>
    </div>
  );
}

export default Main;
