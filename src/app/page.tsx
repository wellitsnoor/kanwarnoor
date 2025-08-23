import React from "react";
import Lander from "@/components/Lander";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <Loader />
      <Lander />

      <Navbar />

      <section
        id="projects"
        className="w-full h-screen bg-black flex flex-row items-center justify-center"
      >
        <Projects />
      </section>

      <section
        id="skills"
        className="w-full h-screen bg-black flex flex-row items-center justify-center overflow-hidden"
      >
        <Skills />
      </section>

      <div className="w-full h-screen bg-black flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Blog</p>
        </div>
      </div>

      <section
        id="contact"
        className="w-full h-screen bg-white text-black flex flex-row items-center justify-center overflow-hidden"
      >
        <Contact />
      </section>

      <div className="w-full h-screen bg-black text-white flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Footer</p>
        </div>
      </div>
    </>
  );
}
