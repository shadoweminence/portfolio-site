import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import emailjs from "@emailjs/browser";

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

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Prashant Pokhrel",
      };

      await emailjs.send(
        "service_91tmmhw", // Replace with your Service ID
        "template_rwuu1tu", // Replace with your Template ID
        templateParams,
        "gO4WqeJuSXP_EwPYD", // Replace with your Public Key
      );

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
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
    loading,
  };
};
