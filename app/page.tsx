import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Faq />
      <Process />
      <Blog />
    </>
  );
}
