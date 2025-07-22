"use client";
import React, { useRef } from "react";
import ETS from "../../public/ETS.png";
import MeroStore from "../../public/merostore.png";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);

  const projects = [
    {
      name: "Expense Tracking System",
      img: ETS,
      url: "https://office.truenary.com/",
      Role: "Frontend (React)",
    },
    {
      name: "Mero-Store (admin-side) ",
      img: MeroStore,
      url: "https://storetest.merostyle.com/login/",
      Role: "Frontend (React)",
    },
    {
      name: "Mero-Store (client-side) ",
      img: MeroStore,
      url: "https://prashant-store.storetest.merostyle.com/",
      Role: "Frontend (Next)",
    },
  ];

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const items = container?.querySelectorAll("a");
    const item = items?.[index];
    if (item) {
      item.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  const scrollToNext = () => {
    if (currentIndexRef.current >= projects.length - 1) {
      currentIndexRef.current = 0;
    } else {
      currentIndexRef.current++;
    }
    scrollToIndex(currentIndexRef.current);
  };

  const scrollToPrevious = () => {
    if (currentIndexRef.current <= 0) {
      currentIndexRef.current = projects.length - 1;
    } else {
      currentIndexRef.current--;
    }
    scrollToIndex(currentIndexRef.current);
  };

  return (
    <div className="bg-gray-200  pb-10 flex justify-center text-black p-4">
       <div className="relative w-full lg:max-w-[700px] md:max-w-[500px] max-w-[450px] flex items-center">
      <button
        onClick={scrollToPrevious}
        className="absolute cursor-pointer top-[70px] left-0 hover:bg-gray-300 rounded-2xl p-2"
      >
        <FaChevronLeft size={20} />
      </button>

      <div
        ref={containerRef}
        className="flex md:ml-12 ml-7 items-center overflow-hidden lg:max-w-150 md:max-w-100 max-w-80 space-x-4"
      >
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            <div className="flex-shrink-0 lg:w-[500px] md:w-[300px] w-[300px] border-2 border-black bg-black text-white rounded-2xl p-4">
              <Image
                src={project.img}
                alt={project.name}
                height={50}
                width={50}
                className="rounded-lg object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{project.name}</h3>
              <p className="text-sm text-gray-300">{project.Role}</p>
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={scrollToNext}
        className="absolute top-[70px] cursor-pointer right-0 hover:bg-gray-300 rounded-2xl p-2"
      >
        <FaChevronRight size={20} />
      </button>
      </div>
    </div>
  );
};

export default Projects;
