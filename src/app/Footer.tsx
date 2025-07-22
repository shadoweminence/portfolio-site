"use client";
import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 flex flex-col items-center gap-6">
      <button
        className="flex flex-col items-center hover:text-blue-400 cursor-pointer"
        onClick={() =>
          document
            .getElementById("hero")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <FaAngleDoubleUp size={30} />
        <span>Back to top</span>
      </button>
      <div className="max-w-lg w-full text-center ml-5">
        <Contact />
      </div>

      <p className="text-sm opacity-70">
        &copy; 2025 Prashant Pokhrel. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
