import React from "react";
import "../../css/clients.css";
import della from "../../assets/clients/della.jpg";
import dine from "../../assets/clients/dine.jpg";
import fountains from "../../assets/clients/fountains.png";
import imagica from "../../assets/clients/imagica.svg";
import jawed from "../../assets/clients/jawed habib.webp";
import jazzup from "../../assets/clients/jazzup.png";
import jd from "../../assets/clients/jd.png";
import funcity from "../../assets/clients/logo_funcity.png";
import pizza from "../../assets/clients/pizza.svg";
import splash from "../../assets/clients/splash.png";
import srl from "../../assets/clients/srl.png.webp";
import surya from "../../assets/clients/surya.svg";
import suzuki from "../../assets/clients/suzuki.jpg";
import talwalkers from "../../assets/clients/talwalkers.jpg";
import toss from "../../assets/clients/toss.jpg";
import yamaha from "../../assets/clients/yamaha.webp";

const clientslist = [
  {
    cl_name: 1,
    client_img: della,
  },
  {
    cl_name: 2,
    client_img: dine,
  },
  {
    cl_name: 3,
    client_img: fountains,
  },
  {
    cl_name: 4,
    client_img: imagica,
  },
  {
    cl_name: 5,
    client_img: jawed,
  },
  {
    cl_name: 6,
    client_img: jazzup,
  },
  {
    cl_name: 7,
    client_img: jd,
  },
  {
    cl_name: 8,
    client_img: funcity,
  },
  {
    cl_name: 9,
    client_img: pizza,
  },
  {
    cl_name: 10,
    client_img: splash,
  },
  {
    cl_name: 11,
    client_img: srl,
  },
  {
    cl_name: 12,
    client_img: surya,
  },
  {
    cl_name: 13,
    client_img: suzuki,
  },
  {
    cl_name: 14,
    client_img: talwalkers,
  },
  {
    cl_name: 15,
    client_img: toss,
  },
  {
    cl_name: 16,
    client_img: yamaha,
  },
];

function Clients() {
  return (
    <div className="clients px-10 py-10 bg-[#dfe4fd]">
      <h1 className="text-start text-[#011a41] text-4xl font-bold">
        Our <span className="text-[#1479EA]">Clients</span>
      </h1>
      <div className="clent-list mt-10 p-10 rounded-xl flex justify-center flex-wrap items-center gap-10">
        {clientslist.map((c) => (
          <img
            key={c.cl_name}
            src={c.client_img}
            alt="Prudct image"
            className="w-30 mb-8"
          />
        ))}
      </div>
    </div>
  );
}

export default Clients;
