import About from "@/sections/home/About";
import Contact from "@/sections/home/Contact";
import Experience from "@/sections/home/Experience";
import Hero from "@/sections/home/Hero";
import Projects from "@/sections/home/Projects";
import TechStack from "@/sections/home/TechStack";


export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Projects/>
   <TechStack/>
   <Experience/>
   <Contact/>
   
   </>
  );
}
