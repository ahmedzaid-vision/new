import Image from "next/image";
import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Professional Crew",
      src: "/icons/icon1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid animi at atque blanditiis, cupiditate distinctio dolorem doloribus ea eius eveniet ex fugiat fugit incidunt iure laboriosam maiores minus modi nemo neque odio optio placeat praesentium quidem ratione reprehenderit similique sit tenetur vero.",
    },
    {
      title: "Time Saving",
      src: "/icons/icon2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid animi at atque blanditiis, cupiditate distinctio dolorem doloribus ea eius eveniet ex fugiat fugit incidunt iure laboriosam maiores minus modi nemo neque odio optio placeat praesentium quidem ratione reprehenderit similique sit tenetur vero.",
    },
    {
      title: "Developed Tools",
      src: "/icons/icon3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid animi at atque blanditiis, cupiditate distinctio dolorem doloribus ea eius eveniet ex fugiat fugit incidunt iure laboriosam maiores minus modi nemo neque odio optio placeat praesentium quidem ratione reprehenderit similique sit tenetur vero.",
    },
    {
      title: "Professional Crew",
      src: "/icons/icon4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid animi at atque blanditiis, cupiditate distinctio dolorem doloribus ea eius eveniet ex fugiat fugit incidunt iure laboriosam maiores minus modi nemo neque odio optio placeat praesentium quidem ratione reprehenderit similique sit tenetur vero.",
    },
    {
      title: "Accuracy In Work",
      src: "/icons/icon5.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid animi at atque blanditiis, cupiditate distinctio dolorem doloribus ea eius eveniet ex fugiat fugit incidunt iure laboriosam maiores minus modi nemo neque odio optio placeat praesentium quidem ratione reprehenderit similique sit tenetur vero.",
    },
    {
      title: "Accuracy In Work",
      src: "/icons/icon6.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid animi at atque blanditiis, cupiditate distinctio dolorem doloribus ea eius eveniet ex fugiat fugit incidunt iure laboriosam maiores minus modi nemo neque odio optio placeat praesentium quidem ratione reprehenderit similique sit tenetur vero.",
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
      <div className="container mx-auto w-[90%] ">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 pb-2 text-[#005826] text-center ">
          Why Square Contracting?
        </h2>
        <div className="w-[20%] h-[2px] bg-[#005826] mx-auto "></div>
        <div className="flex justify-between flex-wrap gap-10 mt-10">
          {servicesData.map((service, index) => ( 
            <div
              className="flex  gap-5 items-start w-full lg:w-[47%]"
              key={index}
            >
              <div className="w-[250px]">
                <Image
                  src={service?.src}
                  alt="Square Contracting Logo"
                  width={100}
                  height={100}
                  className="w-[100%] "
                />
              </div>
              <div key={index} className=" rounded-lg">
                <h3 className=" text-md  md:text-xl font-semibold mb-2 text-[#005826]">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
