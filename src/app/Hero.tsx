import { useAbout } from "@/reusable/useAbout";
import Image from "next/image";

export default function Hero() {
  const { experiences } = useAbout();

  return (
    <div
      id="hero"
      className="bg-background grid grid-cols-1 md:grid-cols-3 justify-center max-w-5xl mx-auto text-primary items-center py-20 md:py-0 min-h-screen px-4"
    >
      <div className="md:col-span-2 space-y-8 text-center md:text-left">
        <p className="rounded-full text-header inline-block border p-2 text-xs md:text-sm px-4">
          Full Stack Developer & Product Builder
        </p>
        <div>
          <h1 className="text-5xl md:text-8xl font-serif text-header leading-tight">
            Building <span className="text-primary">Digital</span> Experiences
          </h1>
          <p className="text-xl md:text-3xl text-header mt-5">
            I&apos;m Prashant Pokhrel, a creative developer crafting scalable
            web applications with clean architecture and thoughtful design.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 mt-8 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col border md:border-0 p-4 md:p-0 rounded-2xl md:rounded-none"
            >
              <span className="text-header text-2xl md:text-3xl font-bold">
                {exp.no}+
              </span>
              <span className="text-sm md:text-base">{exp.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className=" md:block hidden flex-shrink-0">
        <Image
          className="rounded-3xl"
          src="/myPic.jpg"
          alt="Prashant Pokhrel"
          width={400}
          height={400}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
