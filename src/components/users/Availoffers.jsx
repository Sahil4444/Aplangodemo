import React from "react";
import "../../css/availoffers.css";
import card from "../../assets/card.jpg";

function Availoffers() {
  return (
    <div className="avail px-10 py-10 bg-[#dfe4fd]">
      <h1 className="text-start text-[#011a41] text-4xl font-bold">
        How To Avail <span className='text-[#1479EA]'>Offers & Coupons</span>
      </h1>
      <div className="info mt-3 py-8 px-3 flex justify-between items-center">
        <div className="desc w-[50%] text-justify text-xl">
          <p className="mb-2">
            First, register on our platform by creating an account and
            completing the registration process. Once registered, you’ll need to
            purchase our exclusive membership card, which serves as your key to
            unlocking all available offers and discounts. This card gives you
            access to exclusive deals, ensuring you enjoy significant savings on
            a wide range of products and services. With your membership card,
            you can seamlessly redeem offers and stay updated as new discounts
            and benefits are introduced regularly. Start your journey with us
            today and make the most of these exceptional perks!
          </p>
          <a href="#" className="text-blue-600 mt-5">Login here..</a>
          <br />
          <a href="#" className="text-blue-600 mt-5">Register here..</a>
        </div>
        <div className="card-img text-center w-[40%]">
          <img className="w-100" src={card} alt="Your Card" />
        </div>
      </div>
    </div>
  );
}

export default Availoffers;
