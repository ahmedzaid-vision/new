import Image from "next/image";
import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Professional Crew",
      src: "/icons/icon1.png",
      description:
        "Expert team at every stage of the project to ensure a successful job.",
    },
    {
      title: "Time Management",
      src: "/icons/icon2.png",
      description:
        "We always consider time parameter as a main element in our success, as time equals money ",
    },
    {
      title: "Value Engineering",
      src: "/icons/icon3.png",
      description:
        "We use the latest and most developed engineering software to deliver the most economic solution.",
    },
    {
      title: "Creative Ideas",
      src: "/icons/icon4.png",
      description:
        "Our long years of experience grants creative and adaptive solutions for our clients.",
    },
    {
      title: "Accuracy In Work",
      src: "/icons/icon5.png",
      description:
        "We precisely study every aspect of the project to sustain and ensure delivery of highest quality.",
    },
    {
      title: "Customer Satisfaction",
      src: "/icons/icon6.png",
      description:
        "Our customers are our success partners. Customer satisfaction is our main concern at every stage of the project.",
    },
  ];

  return (
    <div
      className="py-12 px-8"
      style={{
        backgroundImage: `url('/bg-why.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto w-full md:w-[70%] ">
        <h2 className="  font-bold mb-4 pb-2 text-[#005826] text-center ">
          Why Square Contracting?
        </h2>
        <div className="w-[20%] h-[2px] bg-[#005826] mx-auto "></div>
        <div className="flex justify-between flex-wrap gap-10 mt-10">
          {servicesData.map((service, index) => (
            <div
              className="flex  gap-5 items-start w-full lg:w-[47%]"
              key={index}
            >
              <div className="w-[16%]">
                <Image
                  src={service?.src}
                  alt="Square Contracting Logo"
                  width={100}
                  height={100}
                  className="w-[200px] "
                />
              </div>
              <div key={index} className=" rounded-lg w-full">
                <h3 className=" text-xl mb-2 text-[#005826] uppercase">
                  {service.title}
                </h3>
                <p className="font-sans">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
