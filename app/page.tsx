import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Projects />
        <Skills />
        <About />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
