import Image from "next/image";
import React from "react";

const Projects = () => {
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
        backgroundImage: `url('/projects/projects-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto w-[90%] ">
        <h2 className="text-md smtext-xl  md:text-3xl font-semibold mb-4 pb-2 text-white text-center ">
        Latest Projects
        </h2>
        <div className="w-[13%] h-[2px] bg-white mx-auto "></div>
       
      </div>
    </div>
  );
};

export default Projects;
