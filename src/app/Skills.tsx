import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "React",
      designation: "Frontend",
    },
    {
      name: "Next.js",
      designation: "Frontend",
    },
    {
      name: "Tailwind",
      designation: "Frontend",
    },
    {
      name: "GitHub",
      designation: "Version Control",
    },
    {
      name: "Django",
      designation: "Backend",
    },
    {
      name: "Tamagui",
      designation: "Frontend",
    },
  ];

  const specialization = [
    {
      id: 1,
      title: "Primary Stack",
      stack: "React/Next.js + TypeScript",
    },
    {
      id: 2,
      title: "Specialization",
      stack: "Frontend Development",
    },
    {
      id: 3,
      title: "Currently Learning",
      stack: "Angular + Django",
    },
  ];

  return (
    <div
      id="skills"
      className="py-20 flex flex-col justify-center min-h-screen items-center px-4"
    >
      <div className="w-full max-w-5xl">
        <div className="bg-background flex flex-col md:grid md:grid-cols-3 justify-center text-primary">
          <div className="col-span-1 ">
            <h2 className="text-4xl md:text-6xl font-semibold text-header leading-tight">
              Technical Expertise
            </h2>
          </div>
          <div className="hidden md:block"></div>
          <p className="pt-4 md:pt-15 font-light">
            A carefully honed skillset built through years of hands-on
            experience building production applications at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 my-15">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-header/20 rounded-3xl "
            >
              <div className="p-7 flex flex-col gap-2">
                <p className="text-primary text-xs">
                  {skill.designation.toUpperCase()}
                </p>
                <p className="text-header text-xl md:text-2xl font-semibold">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-primary/20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {specialization.map((specialization) => (
            <div key={specialization.id} className=" ">
              <div className="p-7 flex flex-col gap-2">
                <p className="text-primary text-xs">
                  {specialization.title.toUpperCase()}
                </p>
                <p className="text-header text-lg md:text-xl ">
                  {specialization.stack}
                </p>
              </div>
            </div>
          ))}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
