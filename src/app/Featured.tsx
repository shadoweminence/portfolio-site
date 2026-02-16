"use client";
import Image from "next/image";
import React from "react";
import { CiShare1 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";

const Featured = () => {
  const projects = [
    {
      id: 1,
      name: "Expense Tracking System",
      description:
        "Expense Tracking System is a web application that helps users to track their expenses and income. Made especially to track the expenses of an organization, it can help the organization track the expenses made for the company occasions by the company or any of the employees who needs to be refunded.",
      img: "/expense.jpeg",
      url: "https://office.truenary.com/",
      skills: [
        "React",
        "Tailwind CSS",
        "Redux Toolkit",
        "Django",
        "PostgreSQL",
      ],
      Role: "Frontend (React)",
      users: "10",
      timeline: "2 months",
    },
    {
      id: 2,
      name: "Mero-Store (admin-side) ",
      description:
        "Mero-Store is a SaaS platform for online stores. It helps users to create their own store and then manage their products, orders, customers, and more.",
      img: "/merostylee.png",
      url: "https://app.merostyle.com/",
      url_client: "https://prashant-store.storetest.merostyle.com/",
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Redux Toolkit",
        "Django",
        "PostgreSQL",
      ],
      Role: "Frontend (React)-Admin Side, Frontend (Next)-Client Side",
      users: "100",
      timeline: "3 months",
    },
    {
      id: 3,
      name: "Nyauli (admin-side) ",
      description:
        "Nyauli is a SaaS platform for restaurants. Here users can regsiter their restaurants and then create a dynamic store of their branch where clients can  browse the menu, order and pay.",
      img: "/nyauli.jpeg",
      url: "https://business.dev.retack.ai/",
      url_client: "https://truenaryrest-35ff.nyauli.com/",
      skills: [
        "Tamagui",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Redux Toolkit",
        "Django",
        "PostgreSQL",
      ],
      Role: "Frontend (Tamagui)-Admin Side, Frontend (Next)-Client Side",
      users: "10",
      timeline: "3 months",
    },
    {
      id: 4,
      name: "Topicly",
      img: "/topicly.jpeg",
      url: "https://prashant23.pythonanywhere.com/",
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      Role: "Fullstack (Python + HTML +CSS +JS)",
      users: "5",
      timeline: "3 days",
    },
  ];

  const handleRoute = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div id="projects" className="py-20 px-4">
      <div className="bg-background flex flex-col md:grid md:grid-cols-3 justify-center max-w-5xl mx-auto text-primary">
        <div className="col-span-1 ">
          <h2 className="text-4xl md:text-6xl font-semibold text-header leading-tight">
            Featured Projects
          </h2>
        </div>
        <div className="hidden md:block"></div>
        <p className="pt-4 md:pt-15 font-light">
          Selected works that showcase my approach to solving complex problems
          with elegant, scalable solutions.
        </p>
      </div>
      <div className="flex flex-col gap-10 max-w-5xl mx-auto mt-15">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-header/20 rounded-3xl "
          >
            <div className="relative group overflow-hidden rounded-tl-3xl rounded-tr-3xl">
              <Image
                src={project.img}
                alt={project.name}
                width={2000}
                height={2000}
                className="transition duration-300 group-hover:blur-sm group-hover:brightness-50 object-cover w-full h-full"
                unoptimized
              />

              {/* Overlay container */}
              <div className="absolute inset-0 flex items-center justify-center gap-12 opacity-0 group-hover:opacity-100 transition duration-300">
                {/* Users */}
                <div className="flex flex-col items-center">
                  <FiUsers size={30} className="text-primary mb-2" />
                  <span className="text-header text-3xl ">
                    {project.users}+
                  </span>
                  <span className="text-primary">Users</span>
                </div>

                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <MdOutlineAccessTime
                    size={30}
                    className="text-primary mb-2"
                  />
                  <span className="text-header text-3xl ">
                    {project.timeline}
                  </span>
                  <span className="text-primary">Timeline</span>
                </div>
              </div>
            </div>

            <div className="p-10 flex flex-col gap-2">
              <p className="text-header text-2xl font-semibold">
                {project.name}
              </p>
              <p className="text-primary">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-6">
                {project.skills.map((skill) => (
                  <span
                    className="border border-header/10 px-3 py-1 text-sm rounded-xl whitespace-nowrap"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <hr />
              <div className="flex gap-5 items-center">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleRoute(project.url)}
                >
                  <CiShare1 />
                  <span className="text-primary">Live project</span>
                </div>

                {project.url_client && (
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleRoute(project.url_client)}
                  >
                    <CiShare1 />
                    <span className="text-primary">
                      Live project (Client Side)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
