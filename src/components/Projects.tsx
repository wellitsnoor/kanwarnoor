"use client";

import React from "react";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";

export default function Projects() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-row">
        {Array.from("Projects").map((letter, index) => {
          return (
            <motion.p
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(20px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-7xl font-bold flex"
            >
              {letter}
            </motion.p>
          );
        })}
      </div>

      <div className="pt-10 flex flex-row gap-10">
        <InfoCard
          title1={"Remaster"}
          des="A platform for buying and selling music"
          image={"/bully.jpg"}
          animation={"center"}
          link={"https://remaster.in/"}
        />
         <InfoCard
          title1={"Ardent Co."}
          des="something"
          image={"/bully.jpg"}
          animation={"center"}
        />
         <InfoCard
          title1={"Fullscreen"}
          des="something 2"
          image={"/bully.jpg"}
          animation={"center"}
        />

      </div>
    </div>
  );
}
