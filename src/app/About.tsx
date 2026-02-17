"use client";
import React from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import { useAbout } from "@/reusable/useAbout";

const About = () => {
  const { experiences, hobbies, location, available, years } = useAbout();
  return (
    <div
      id="about"
      className="bg-background flex flex-col md:flex-row gap-12 max-w-5xl md:h-screen items-center mx-auto text-primary py-20 px-4"
    >
      <div className="max-w-xl mx-auto flex flex-col gap-6 md:gap-8 justify-center font-light">
        <h2 className="text-6xl md:text-8xl text-header/10 font-semibold">
          About
        </h2>
        <span>
          <p className="text-header text-3xl md:text-5xl">Creative Engineer </p>
          <p className="text-primary text-3xl md:text-5xl">& Product Builder</p>
        </span>

        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            I&apos;m a developer who believes that great code is not just
            functional, it&apos;s elegant, maintainable, and built with the end
            user in mind. My journey in tech started with a curiosity about how
            things work and evolved into a passion for building products that
            people love.
          </p>
          <p>
            With over{" "}
            {Number(years) >= 1
              ? `${years.toFixed(1)} ${years > 1 ? "years" : "year"}`
              : `${Number(years * 12).toFixed(0)} ${years * 12 > 1 ? "months" : "month"}`}{" "}
            of experience, I&apos;ve worked with established companies and made
            some projects of my own too. I specialize in building systems that
            are both technically sound and user-focused, bridging the gap
            between engineering excellence and user needs.
          </p>
        </div>
        <hr className="border-header/10" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex flex-col">
              <span className="text-header text-2xl md:text-3xl font-bold">
                {exp.no}+
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider">
                {exp.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <div className="border border-header/20 p-6 md:p-8 rounded-2xl">
          <h4 className="text-xl md:text-2xl text-header ">Philosophy</h4>
          <p className="mt-4 text-sm md:text-base font-light italic">
            &apos;Clean code, thoughtful architecture, and user-centric design
            are not optional. They&apos;re the foundation of products that stand
            the test of time.&apos;
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="border border-header/10 rounded-lg p-4 flex flex-col items-center text-center"
            >
              <hobby.icon size={24} className="text-primary mb-2" />
              <p className="text-xs">{hobby.name}</p>
            </div>
          ))}
        </div>
        <div className="border border-header/10 rounded-lg text-primary p-4 md:px-8 my-6">
          <p className="text-xs uppercase tracking-wider">
            Currently based in{" "}
          </p>
          <h3 className="text-header text-xl md:text-2xl font-semibold my-1">
            {location}
          </h3>
          <p className="text-xs">Open to remote opportunities worldwide</p>
        </div>
        <div className="border border-header/10 flex items-center gap-3 rounded-lg text-primary p-4 md:px-8">
          {available ? (
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
          ) : (
            <IoIosRadioButtonOff className="text-primary " />
          )}
          <p className="text-sm">Available for new projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
