import React from "react";
import Lander from "@/components/Lander";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <>
      <Lander />

      <section id="projects" className="w-full h-screen bg-black flex flex-row items-center justify-center">
       <Projects/>
      </section>

      <div className="w-full h-screen bg-black flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Skills</p>
        </div>
      </div>
      <div className="w-full h-screen bg-black flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Blog</p>
        </div>
      </div>

      <div className="w-full h-screen bg-white text-black flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Contact</p>
        </div>
      </div>

      <div className="w-full h-screen bg-black text-white flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Footer</p>
        </div>
      </div>
    </>
  );
}
