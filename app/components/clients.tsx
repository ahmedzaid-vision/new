import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const clients = [
  { id: 1, logo: "/clients/img1.png" },
  { id: 1, logo: "/clients/img2.png" },
  { id: 1, logo: "/clients/img3.png" },
  { id: 1, logo: "/clients/img4.png" },
  { id: 1, logo: "/clients/img5.png" },
  { id: 1, logo: "/clients/img6.png" },
];

export default function ClientSlider() {
  return (
    <div className="py-10  px-8">
      <div className="container mx-auto ">
        <div className="text-xl text-center mb-10  text-[#005826] ">
          Our Clients
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwipernpy"
         
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <Image
                src={client.logo}
                width={100}
                height={100}
                alt={`Company ${client.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
