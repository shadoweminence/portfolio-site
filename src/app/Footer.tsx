"use client";
import React from "react";
import Image from "next/image";
import { useContact } from "@/reusable/useContact";
import { useNav } from "@/reusable/useNav";

const Footer = () => {
  const { contacts, handleClick } = useContact();
  const { navItems } = useNav();
  return (
    <footer className="bg-background border-t border-header/10 px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Prashant Pokhrel"
                width={40}
                height={40}
                className="grayscale opacity-80"
                unoptimized
              />
              <span className="text-header font-semibold tracking-tight text-xl">
                Prashant Pokhrel
              </span>
            </div>
            <p className="text-primary/70 max-w-xs leading-relaxed font-light">
              Crafting scalable digital solutions with a focus on clean
              architecture, performance, and user-centric design.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-header text-xs uppercase tracking-[0.2em] font-bold opacity-50">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.link.slice(1))
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-primary cursor-pointer hover:text-header transition-colors duration-300 font-medium text-sm text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-header text-xs uppercase tracking-[0.2em] font-bold opacity-50">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => handleClick(contact.id)}
                  className="group cursor-pointer flex items-center justify-center border border-header/10 p-3 rounded-xl hover:bg-header hover:border-header transition-all duration-300"
                  aria-label={contact.title}
                >
                  <contact.icon
                    size={20}
                    className="text-primary group-hover:text-background transition-colors duration-300"
                  />
                </button>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-primary/60 text-xs font-light">
                Based in Kathmandu, Nepal
              </p>
              <p className="text-primary/60 text-xs font-light mt-1">
                Open for remote opportunities worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-header/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-primary/40 font-light">
            &copy; {new Date().getFullYear()} Prashant Pokhrel. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs cursor-pointer text-primary/40 hover:text-header transition-colors duration-300 font-medium uppercase tracking-widest"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
