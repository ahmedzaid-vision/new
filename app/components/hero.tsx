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
      title: "Who We Are ?",
      src: "/here-imgs/img1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere qui reiciendis rem saepe. Adipisci consequuntur, dignissimos doloremque error est et, fugiat in itaque mollitia nemo nobis odit optio recusandae sequi soluta temporibus ullam.      ",
    },
    {
      title: "Who We Are ?",
      src: "/here-imgs/img2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere qui reiciendis rem saepe. Adipisci consequuntur, dignissimos doloremque error est et, fugiat in itaque mollitia nemo nobis odit optio recusandae sequi soluta temporibus ullam.      ",
    },
    {
      title: "Who We Are ?",
      src: "/here-imgs/img3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere qui reiciendis rem saepe. Adipisci consequuntur, dignissimos doloremque error est et, fugiat in itaque mollitia nemo nobis odit optio recusandae sequi soluta temporibus ullam.      ",
    },
    
  ];

  return (
    <div className="" id="home">
      
      <Banner />
      <div
        className="h-[70vh]"
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
        className="px-8 py-10"
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
              <Image src={item.src} alt={item.title} width={600} height={600} className="w-full " />
              <div className="mt-3">
                <h2 className="text-[30px] font-bold text-white ">{item.title}</h2>
                <div className="text-white">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
