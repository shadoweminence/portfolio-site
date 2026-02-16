import React from "react";

const Journey = () => {
  const experiences = [
    {
      id: 1,
      designation: "Frontend Intern",
      company: "Truenary Solutions",
      duration: "Feb 2025 - Apr 2025",
      description:
        'Worked on the frontend of "expense tracking system" which is a expense tracking app exclusive for the company executives.',
    },
    {
      id: 2,
      designation: "Frontend Developer",
      company: "Truenary Solutions",
      duration: "Apr 2025 - Present",
      description:
        "Developed projects like 'Mero Style' and 'Nyauli' for the company. Maintained documents and reviewed PRs.",
    },
  ];
  return (
    <div
      id="experience"
      className="flex flex-col md:flex-row max-w-5xl mx-auto gap-10 py-20 px-4"
    >
      <div className="bg-background flex flex-col md:w-1/3 text-primary">
        <div className="col-span-1 ">
          <h2 className="text-4xl md:text-6xl font-semibold text-header leading-tight">
            Journey
          </h2>
        </div>

        <p className="pt-4 md:pt-15 font-light">
          A timeline of my professional growth, achievements, and passion
          projects.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 md:w-2/3">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="border border-header/20 rounded-3xl "
          >
            <div className="p-6 md:p-10 flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-header text-xl md:text-2xl font-semibold">
                    {experience.designation}
                  </span>
                  <span className="text-primary text-sm md:text-base">
                    {experience.company}
                  </span>
                </div>

                <span className="text-primary border text-xs md:text-sm rounded-lg p-1 px-2 whitespace-nowrap">
                  {experience.duration}
                </span>
              </div>

              <p className="text-primary text-sm md:text-base font-light">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
