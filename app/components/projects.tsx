"use client";
import Image from "next/image";
import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      src: "/projects/p1.jpg",
      category: "all",
    },
    {
      src: "/projects/p2.jpg",
      category: "all",
    },
    {
      src: "/projects/p3.jpg",
      category: "one",
    },
    {
      src: "/projects/p4.jpg",
      category: "one",
    },
    {
      src: "/projects/p6.jpg",
      category: "tow",
    },
    {
      src: "/projects/p6.jpg",
      category: "tow",
    },
    {
      src: "/projects/p7.jpg",
      category: "three",
    },
    {
      src: "/projects/p8.jpg",
      category: "three",
    },
    {
      src: "/projects/p9.jpg",
      category: "three",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtedProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div
      className="py-12 px-8 "
      id="projects"
      style={{
        backgroundImage: `url('/projects/projects-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto w-full  md:w-[90%] ">
        <h2 className="text-md smtext-xl  md:text-3xl font-semibold mb-4 pb-2 text-white text-center ">
          Latest Projects
        </h2>
        <div className="w-[13%] h-[2px] bg-white  mx-auto  "></div>
        {/* tabs  */}
        <div className="mt-6 flex gap-6 justify-center flex-wrap  ">
          <button
            className={`border hover:text-black  hover:bg-white px-10 py-2 w-[120px] text-center ${
              selectedCategory === "all" ? "bg-white text-black " : "text-white"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`border  hover:text-black  hover:bg-white px-10 py-2 w-[120px] ${
              selectedCategory === "one" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setSelectedCategory("one")}
          >
            one
          </button>
          <button
            className={`border hover:text-black  hover:bg-white px-10 py-2 w-[120px] ${
              selectedCategory === "tow" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setSelectedCategory("tow")}
          >
            tow
          </button>
          <button
            className={`border hover:text-black  hover:bg-white px-10 py-2 w-[120px] ${
              selectedCategory === "three" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setSelectedCategory("three")}
          >
            three
          </button>
        </div>

        <div className="flex flex-wrap gap-7 justify-center">
          {filtedProjects.map((project, index) => (
            <div
              className="w-full md:w-[47%] lg:w-[31%] xl:w-[20%] h-[300px] mt-8 bg-[#005826] rounded-lg shadow-lg"
              key={index}
            >
              <Image
                src={project.src}
                alt="Square Contracting Logo"
                width={300}
                height={300}
                className={`w-[100%] h-full object-cover transition-transform duration-150  ${selectedCategory === project.category ? "scale-100" : "scale-0"} `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <Image
            src={'/here-imgs/img1.png'}
            alt="Square Contracting Logo"
            width={100}
            height={100}
            className="w-[100%] "
          /> */
}
