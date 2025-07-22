import Greeting from "./Greeting";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Projects from "./Projects";

export default function Home() {

  return (
    <div className="flex flex-col ">
   <Hero/>
    <Greeting/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Projects/>
    </div>
  );
}
