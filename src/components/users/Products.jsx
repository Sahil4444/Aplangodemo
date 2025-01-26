import React from "react";
import "../../css/products.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prod1 from "../../assets/products/image1.jpg";
import prod2 from "../../assets/products/image2.jpg";
import prod3 from "../../assets/products/image3.jpg";
import prod4 from "../../assets/products/image4.jpg";
import prod5 from "../../assets/products/image5.jpg";
import prod6 from "../../assets/products/image6.jpg";
import prod7 from "../../assets/products/image7.jpg";
import prod8 from "../../assets/products/image8.jpg";

const data = [
  {
    prod_name: "Product1",
    prod_img: prod1,
    prod_price: "Rs 200",
  },
  {
    prod_name: "Product2",
    prod_img: prod2,
    prod_price: "Rs 300",
  },
  {
    prod_name: "Product3",
    prod_img: prod3,
    prod_price: "Rs 400",
  },
  {
    prod_name: "Product4",
    prod_img: prod5,
    prod_price: "Rs 500",
  },
  {
    prod_name: "Product5",
    prod_img: prod6,
    prod_price: "Rs 600",
  },
  {
    prod_name: "Product6",
    prod_img: prod7,
    prod_price: "Rs 700",
  },
  {
    prod_name: "Product7",
    prod_img: prod4,
    prod_price: "Rs 800",
  },
  {
    prod_name: "Product8",
    prod_img: prod8,
    prod_price: "Rs 900",
  },
];

function Products() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };
  return (
    <div className="products px-10 py-10 bg-white">
      <h1 className="text-start text-[#011a41] text-4xl font-bold">Products</h1>
      <div className="slides-container mt-10 p-10 rounded-xl">
        <Slider {...settings} className="">
          {data.map((d) => (
            <div
              key={d.prod_name}
              className="container bg-[#fff] h-[350px] text-[#011a41] rounded-xl"
            >
              <div className="rounded-t-xl h-56 flex justify-center items-center">
                <img
                  src={d.prod_img}
                  alt="Prudct image"
                  className="h-44 w-44"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="font-semibold">{d.prod_name}</p>
                <p>{d.prod_price}</p>
                <button className="bg-indigo-500 text-white text-sm px-6 py-2 rounded-sm">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Products;
