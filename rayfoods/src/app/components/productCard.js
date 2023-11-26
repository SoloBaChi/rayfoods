import React from "react";
import Image from "next/image";
import RatingStar from "./ratingStar";
import Link from "next/link";

function ProductCard(props) {
  //  console.log(props)
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[_4%] lg:grid lg:grid-cols-3 mb-4 lg:gap-4">
        {props.sellingItems.map((item) => (
          <figure
            key={item.id}
            className="rounded-lg border border-[_#cbd8cc] basis-[_48%] mb-8"
          >
            <div className="top-section mb-8 overflow-hidden sm:h-[_280px]">
              <Image
                src={item.imgSrc}
                alt={item.title}
                className="rounded-t-lg"
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="bottom-section px-4">
              <div className="product-info">
                <h4 className="product-title text-3xl font-[_600] mb-4">
                  {item.title}
                </h4>
                <p className="product-description">{item.description}</p>
              </div>
              <RatingStar />
              <div className="flex flex-row items-center justify-between my-8">
                <p className="product-price text-2xl font-[_700]">$5</p>
                <button className="buy-btn block bg-[_#E41616] rounded-[_4px]">
                  <Link
                    href="/"
                    className="block p-[_0.7rem] font-[_700] text-2xl text-[_#fff]"
                  >
                    Buy Now
                  </Link>
                </button>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
