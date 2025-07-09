import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
// import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <>
    {/* <ThemeToggle /> */}
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
