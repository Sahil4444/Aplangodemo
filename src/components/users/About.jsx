import React from "react";
import team from "../../assets/team.svg";
import team2 from "../../assets/team2.png";

function About() {
  return (
    <div className="avail px-10 py-10 bg-[#dfe4fd]">
      <h1 className="text-start text-[#011a41] text-4xl font-bold">
        Who <span className='text-[#1479EA]'>We Are ?</span>
      </h1>
      <div className="info flex gap-4 justify-center items-center">
        <div className="desc w-[80%] text-xl">
          At Aplango, we are passionate about connecting businesses and
          customers through the power of savings and value. As a dynamic
          company, we specialize in offering exclusive coupons, discounts, and
          carefully curated products that create win-win opportunities for
          businesses and consumers alike. <br className="mt-2" />
          <br />
          Our mission is simple: 
          To help our
          clients grow their customer base and foster loyalty by providing
          enticing discounts that make shopping an exciting and rewarding
          experience. 
          Whether you’re a business looking to attract new customers
          or a shopper searching for the best deals, Aplango is your trusted
          partner in delivering value that benefits everyone. 
          <br /><br />Join us as we
          redefine the way businesses and customers connect—through innovation,
          affordability, and unbeatable offers.{" "}
        </div>
        <div className="image w-[50%]">
          <img src={team2} className="h-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
