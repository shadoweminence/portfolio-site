import React from 'react'
import react from "../../public/react.svg"
import next from "../../public/next.png"
import git from "../../public/github.svg"
import Image from "next/image"

const Skills = () => {

  const skills = [
    {
      name: "React",
      icon: react,
    },
    {
      name: "Next",
      icon: next,
    },
    {
      name: "GitHub",
      icon: git
    }
  ]

  return (
    <div id='skills' className='bg-gray-200 text-black py-16 px-10 '>
      <div className='flex justify-center text-3xl '>
        <h2 className='border-4 w-50 mx-auto text-center border-black p-4'>Skills</h2>
      </div>

      <div className="flex justify-center gap-20 mt-10">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <Image src={skill.icon} alt={skill.name} width={100} height={100} />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
