import React from "react";
import Lander from "@/components/Lander";

export default function Page() {
  return (
    <>
      <Lander />

      <div className="w-full h-screen bg-black flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p>Projects</p>
        </div>
      </div>

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
