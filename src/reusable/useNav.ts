import { useEffect, useRef, useState } from "react";

export const useNav = () => {
  const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Initial check for theme preference
    const savedMode = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedMode) {
      setMode(savedMode);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setMode("light");
    }
  }, []);

  const handleToggleNav = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const handleToggleMode = (newMode: "dark" | "light") => {
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

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

  return {
    navItems,
    showMobileMenu,
    showNavbar,
    mode,
    handleToggleNav,
    handleToggleMode,
    setShowMobileMenu,
  };
};
