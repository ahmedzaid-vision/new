"use client";
import Image from "next/image";
import Slider from "./slider";
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
        <h2 className="text-xl  mb-4 pb-2 text-white text-center ">
          Latest Projects
        </h2>
        <div className="w-[13%] h-[2px] bg-white  mx-auto  ">

        </div>

        <div className="h-[400px] mt-8  flex flex-wrap gap-7 justify-center">
           <Slider projects={projects}  />

        </div>
      </div>
    </div>
  );
};

export default Projects;






// {projects.map((project, index) => (
//   <div
//     className="w-full md:w-[47%] lg:w-[31%] xl:w-[20%] h-[300px] mt-8 bg-[#005826] rounded-lg shadow-lg"
//     key={index}
//   >
//     <SwiperSlide className="">
//       <Image
//         src={project.src}
//         alt="Square Contracting Logo"
//         width={300}
//         height={300}
//         className={`w-[100%]  object-cover transition-transform duration-150  `}
//       />
//     </SwiperSlide>
//   </div>
// ))}
