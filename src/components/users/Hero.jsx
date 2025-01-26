import React from "react";
import "../../css/hero.css";
import logo from "../../assets/logo.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Hero() {
    const handleScrollLogin = () => {
        window.scroll({
          top: 540, // Scroll vertically to 100 pixels
          left: 0, // Don't change horizontal position
          behavior: "smooth", // Smooth scroll
        });
      };
  return (
    <div className="hero w-full h-screen px-7 pt-20 pb-10 text-center">
      <div className="flex items-center justify-around">
        <div className="head text-white text-center">
          <h1 className="font-bold text-6xl">
            Welcome <br /> <span className="ml-5">To -</span>
          </h1>
        </div>
        <div className="title text-white flex items-center justify-center gap-2">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="moto text-xl items-center mt-20 text-[#1479EA] font-bold">
        " Leading Rewards & Loyalty Solutions Company "
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <span className="text-[#fff] font-semibold mb-4 mt-4">
          Explore more
        </span>
        <MdKeyboardDoubleArrowDown
          className="text-[white] text-3xl animate-bounce"
          cursor="pointer"
          onClick={handleScrollLogin}
        />
      </div>
    </div>
  );
}

export default Hero;
