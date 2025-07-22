"use client"
import React from "react";

const About = () => {
  const experience = () => {
    const startTime = new Date("2025-02-13");
    const today = new Date();
    const yearsDiff = today.getFullYear() - startTime.getFullYear();
    const monthsDiff = today.getMonth() - startTime.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;
    const years = totalMonths / 12;

    return years;
  };
  const company = '"Truenary Solutions"';
  const years = experience();
  return (
    <div id="about" className="bg-gray-200 text-black py-16 px-10 ">
      <div className=" flex justify-center mt-10 text-3xl ">
        <h2 className="border-4 w-50 text-center border-black p-4 ">
          About Me
        </h2>
      </div>
      <div className="mt-10 max-w-xl mx-auto flex justify-center  font-light">
        <p>
          I’m Prashant, a frontend developer with about{" "}
          {Number(years) >= 1
            ? `${years.toFixed(1)} years`
            : `${Number(years * 12).toFixed(0)} months`}{" "}
          of hands-on experience building responsive web applications. I’m
          currently working at {company}, where I use React, Next.js,
          TypeScript, and Tailwind CSS to turn ideas into clean, user-friendly
          interfaces. I enjoy learning new tools, writing maintainable code, and
          making the web a little nicer — one component at a time.
        </p>
      </div>

      <div className="flex justify-center items-center mt-8">
        <p className="text-5xl mb-2">|</p>

        <button
          className="cursor-pointer hover:bg-white p-2 pr-5 pl-5"
          onClick={() =>
            document
              .getElementById("portfolio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore
        </button>
        <p className="text-5xl mb-2">|</p>
      </div>
      <footer className="mt-20 max-w-100 mx-auto flex items-center justify-center gap-6 px-4">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-0.5 bg-gray-400 rotate-45"></div>
          <div className="w-3 h-0.5 bg-gray-400 -rotate-45"></div>
        </div>
        <div className="flex-grow border-t border-gray-400"></div>
      </footer>
    </div>
  );
};

export default About;
