"use client";

import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[35rem] h-[28rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="flex flex-col h-full w-full gap-4">
                <div className="relative flex items-center justify-center w-full h-[200px] lg:h-[250px] overflow-hidden rounded-2xl bg-[#13162D]">
                  <img src="/bg.png" alt="bgimg" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                  <img 
                    src={item.img} 
                    alt="cover" 
                    className="absolute inset-0 w-full h-full object-cover object-center" 
                  />
                </div>

                <div className="flex flex-col flex-grow px-4">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 mt-2"
                    style={{ color: "#BEC1DD" }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{ transform: `translateX(-${5 * index + 2}px)` }}
                        >
                          <img src={icon} alt={`tech-icon-${index}`} className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      {item.status === "in-progress" ? (
                        <p className="flex lg:text-lg md:text-xs text-sm text-yellow-500">
                          In Progress
                        </p>
                      ) : (
                        <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                          View Project
                        </p>
                      )}
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
