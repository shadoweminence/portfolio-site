"use client"

import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";


export default function Contact() {
  const sendMail=()=>{
    window.location.href = "mailto:pokhrelprashant9@gmail.com";
  }
  const navigateGithub=()=>{
    window.open("https://github.com/shadoweminence", "_blank");
  }
  const navigateLinkedIn=()=>{
    window.open("https://www.linkedin.com/in/pokhrel-prashant-578a93209/", "_blank");
  }
  return (

<div>
        <button className="w-20 cursor-pointer" onClick={sendMail}>
        <IoIosMail size={40}/>
        </button>
        <button className="w-20 cursor-pointer" onClick={navigateGithub}>
        <IoLogoGithub size={40} />
        </button>
        <button className="w-20 cursor-pointer" onClick={navigateLinkedIn}>
        <CiLinkedin size={40} />
        </button>
      
    </div>

  );
}
