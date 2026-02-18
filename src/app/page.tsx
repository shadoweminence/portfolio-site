import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Featured from "./Featured";
import Journey from "./Journey";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <Featured />
      <Skills />
      <Journey />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
