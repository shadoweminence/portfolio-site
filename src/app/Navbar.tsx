"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useNav } from "@/reusable/useNav";

const Navbar = () => {
  const {
    navItems,
    showNavbar,
    showMobileMenu,
    mode,
    handleToggleNav,
    handleToggleMode,
    setShowMobileMenu,
  } = useNav();

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 right-0 z-50 bg-background text-primary transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div
            className="cursor-pointer"
            onClick={() => {
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
              setShowMobileMenu(false);
            }}
          >
            <li>
              <Image
                src="/logo.png"
                alt="logo"
                height={40}
                width={40}
                unoptimized
              />
            </li>
          </div>
          <div className="hidden md:flex gap-8 justify-end mr-4">
            {navItems.map((item) => (
              <li key={item.name} className=" hover:opacity-70 px-2 rounded-xl">
                <button
                  onClick={() =>
                    document
                      .getElementById(item.link.slice(1))
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="cursor-pointer font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {mode == "dark" ? (
              <div
                className="cursor-pointer p-2 hover:bg-header/5 rounded-full transition-colors"
                onClick={() => handleToggleMode("light")}
              >
                <MdOutlineWbSunny size={20} />
              </div>
            ) : (
              <div
                className="cursor-pointer p-2 hover:bg-header/5 rounded-full transition-colors"
                onClick={() => handleToggleMode("dark")}
              >
                <FiMoon size={20} />
              </div>
            )}

            <div className="md:hidden flex justify-end">
              <button
                onClick={handleToggleNav}
                className={`text-3xl transition-transform duration-300 ${
                  showMobileMenu ? "rotate-90" : ""
                }`}
              >
                {showMobileMenu ? (
                  <RxCross1 size={20} />
                ) : (
                  <RxHamburgerMenu size={20} />
                )}
              </button>
            </div>
          </div>
        </ul>

        {showMobileMenu && (
          <div className="flex flex-col bg-background border-t border-header/10 w-full md:hidden animate-in slide-in-from-top duration-300">
            <ul className="py-6 flex flex-col gap-4 items-center">
              {navItems.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <button
                    onClick={() => {
                      document
                        .getElementById(item.link.slice(1))
                        ?.scrollIntoView({ behavior: "smooth" });
                      setShowMobileMenu(false);
                    }}
                    className="text-xl font-medium w-full py-2 hover:bg-header/5 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <div className="pt-16" />
    </>
  );
};

export default Navbar;
