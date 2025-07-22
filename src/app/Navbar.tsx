"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../../public/logo.png"
import Image from "next/image";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const handleToggleNav = () => {
    setShowMobileMenu((prev) => !prev);
  };
  const handleContact=()=>{
    window.open("https://wa.me/9779823860141", "_blank");
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) return; // ignore negative scroll (bounce on some devices)

      if (currentScrollY > lastScrollY.current) {
        // scrolling down — hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up — show navbar
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Portfolio", link: "#portfolio" },
  ];

  return (
    <>
      <nav
        className={`fixed w-screen top-0 left-0 right-0 z-50 bg-black transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="grid grid-cols-2 p-4 items-center">
          <div className="cursor-pointer"   onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
            <li>
              <Image src={logo} alt="logo" height={40} width={40}/>
            </li>
          </div>
          <div className="hidden md:flex gap-8 justify-end mr-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:bg-gray-600 px-2 rounded-xl"
              >
                <button
                  onClick={() =>
                    document
                      .getElementById(item.link.slice(1))
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li className="bg-white cursor-pointer hover:bg-gray-600 text-black rounded-xl px-2">
              <button onClick={handleContact}>Contact Me</button>
            </li>
          </div>

          <div className="md:hidden flex justify-end">
            <button
              onClick={handleToggleNav}
              className={`text-3xl transition-transform duration-300 ${
                showMobileMenu ? "rotate-90" : ""
              }`}
            >
              {showMobileMenu ? <RxCross1 size={20} /> : <RxHamburgerMenu size={20} />}
            </button>
          </div>
        </ul>

        {showMobileMenu && (
          <div className="flex justify-center border-t-2 w-screen md:hidden">
            <ul className="mt-2 text-center">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="p-2 cursor-pointer hover:bg-gray-600 px-2 rounded-xl"
                >
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.link.slice(1))
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li className="p-2 cursor-pointer bg-white text-black w-screen hover:bg-gray-600 px-2 rounded-xl">
                <button>Contact Me</button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="pt-16" />
    </>
  );
};

export default Navbar;
