"use client";
import React from "react";
import Banner from "./banner";
import Header from "./header";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/hero.jpg";
import img1 from "../../public/here-imgs/img1.png";

function Hero() {
  const items = [
    {
      title: "ABOUT SQUARE",
      src: "/here-imgs/img1.png",
      description:
        "SQUARE CONTRACTING has been established in 2015 to serve the Pre-Engineered Buildings (PEB) market with a mixed experience of design, detailing, Fabrication and installation of pre- engineered steel buildings.",
    },
    {
      title: "OUR VISION",
      src: "/here-imgs/img2.png",
      description: "To be one of the leading PEB companies in the region.",
    },
    {
      title: "OUR MISSION",
      src: "/here-imgs/img3.png",
      description:
        "Our mission is to provide engineering services (solutions), supply and install steel buildings in Egypt and African market, although global opportunities will be explored. In doing so, we will meet customer expectations of highest quality; leading engineering software; competitive pricing based on a healthy financial rewards for shareholders, and everything we do, we strive to act with honesty, openness, fairness and integrity",
    },
  ];

  return (
    <>
      <Banner />
      <div className="mt-0" id="home">
        <div
          className="h-[70vh] mt-0"
          style={{
            backgroundImage: `url("/hero1.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />
        </div>
        <div
          className="px-8 py-10  "
          style={{
            backgroundImage: `url("/hero2.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-between flex-wrap gap-10  container mx-auto">
            {items.map((item) => (
              <div
                key={item.title}
                className="item-container w-full md:w-[45%] lg:w-[30%] mb-10 relative"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="w-full "
                />
                <div className="mt-3">
                  <h2 className="text-[18px]  font-bold text-white ">
                    {item.title}
                  </h2>
                  <div className="text-white text-[11px] leading-relaxed ">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
