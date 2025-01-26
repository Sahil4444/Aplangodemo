import React from "react";
import "../../css/contact.css";

function Contact() {
  return (
    <div className="contact px-10 py-10 w-full flex flex-col justify-center items-center">
      <h1 className="text-start text-[#011a41] text-5xl font-bold">
        Contact <span className="text-[#1479EA]">Us</span>
      </h1>
      <div className="container text-justify lg:px-40 py-8 w-[65%] flex flex-col gap-15 justify-center items-center">
        <form
          className="box form__group field py-10 px-10 w-full flex flex-col gap-12"
          action="https://formspree.io/f/mldgeyyk"
          method="POST"
        >
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Name"
              required
              className="border-b w-full border-black py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
            />
          </div>
          <div className="relative">
            <input
              id="username"
              name="username"
              type="email"
              placeholder="Email"
              required
              className="border-b w-full border-black py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
            />
          </div>
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Subject"
              className="border-b w-full border-black py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
            />
          </div>
          <div className="relative">
            <textarea
              name="textarea"
              id="textarea"
              required
              placeholder="Write you message.."
              className="bg-transparent text-black px-4 py-5 placeholder-black"
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
