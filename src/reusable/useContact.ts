import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";

export const useContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendMail = () => {
    window.location.href = "mailto:pokhrelprashant9@gmail.com";
  };
  const navigateGithub = () => {
    window.open("https://github.com/shadoweminence", "_blank");
  };
  const navigateLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/pokhrel-prashant-578a93209/",
      "_blank",
    );
  };

  const contacts = [
    {
      id: 1,
      icon: MdMailOutline,
      title: "Email",
      content: "pokhrelprashant9@gmail.com",
    },
    {
      id: 2,
      icon: LuLinkedin,
      title: "LinkedIn",
      content: "in/pokhrel-prashant-578a93209/",
    },
    {
      id: 3,
      icon: IoLogoGithub,
      title: "Github",
      content: "@shadoweminence",
    },
  ];
  const handleClick = (id: number) => {
    if (id === 1) sendMail();
    if (id === 2) navigateLinkedIn();
    if (id === 3) navigateGithub();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully");
    } else {
      alert("Message failed to send");
    }
  };

  return {
    contacts,
    handleClick,
    handleSubmit,
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
  };
};
