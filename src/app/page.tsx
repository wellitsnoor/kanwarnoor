import React from "react";
import Lander from "@/components/Lander";

export default function Page() {
  return (
    <>
      <Lander />

      <section id="projects" className="w-full h-screen bg-black flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Projects</p>
        </div>
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

      <div className="w-full h-screen bg-black flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}
