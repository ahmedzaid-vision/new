'use client'

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      src: "/no-one.jpg",
      position: "CEO, Company ABC",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 1,
      name: "John Doe",
      src: "/no-one.jpg",
      position: "CEO, Company ABC",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 1,
      name: "John Doe",
      src: "/no-one.jpg",
      position: "CEO, Company ABC",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
  ];

  return (
    <div
      className="py-12 px-8 h-[70vh] "
      style={{
        backgroundImage: `url('/testimonials-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold mb-4 pb-2 text-[#005826] text-center ">
          Testimonials
        </h2>
        <div className="w-[10%] h-[2px] bg-[#005826] mx-auto "></div>
        <div className="mt-16">
          <Swiper
            modules={[Pagination]}
            className="mySwiper h-[400px] p-7 mt-6 text-center "
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text-center flex justify-center items-center">
                  <Image
                    src={item.src}
                    alt="Square Contracting Logo"
                    width={200}
                    height={200}
                    className="rounded-full  border-[3px]"
                  />
                </div>
                <div className="mt-2 text-[#005826] text-[23px]">
                  {item.name}
                </div>
                <div className="">{item.position}</div>
                <div className="mt-5 w-full md:w-[60%] mx-auto">
                  {item.comment}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
