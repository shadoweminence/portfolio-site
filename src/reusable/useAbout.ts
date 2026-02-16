import { GiCoffeeCup } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";

export const useAbout = () => {
  const time = () => {
    const startTime = new Date("2025-02-13");
    const today = new Date();
    const yearsDiff = today.getFullYear() - startTime.getFullYear();
    const monthsDiff = today.getMonth() - startTime.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;
    const years = totalMonths / 12;

    return years;
  };
  const years = time();

  const experiences = [
    {
      id: 1,
      no: years,
      text: "years experience",
    },
    {
      id: 2,
      no: 10,
      text: "projects completed",
    },
    {
      id: 3,
      no: 3,
      text: "happy clients",
    },
  ];
  const hobbies = [
    {
      icon: GiCoffeeCup,
      name: "Coffee Enthusiast",
    },
    {
      icon: GoBook,
      name: "Web Novels",
    },
    {
      icon: SiFuturelearn,
      name: "Learning  things",
    },
    {
      icon: MdElectricBolt,
      name: "Open Source",
    },
  ];

  const location = "Nepal, Kathmandu";

  const available = true;
  return {
    experiences,
    hobbies,
    location,
    available,
    years,
  };
};
