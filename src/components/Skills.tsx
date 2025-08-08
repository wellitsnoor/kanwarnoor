"use client";

import { motion } from "framer-motion";
import Block from "./Block";
import React from "react";

export default function Skills() {
  const skills = [
    {
      name: "React",
      // image: "/skills/react.png",
      size: "large",
    },
    {
      name: "Next.js",
      // image: "/skills/next.jpg",
      size: "large",
    },
    {
      name: "Tailwind CSS",
      image: "/skills/tailwind.jpg",
      size: "medium",
    },
    {
      name: "TypeScript",
      image: "/skills/typescript.jpg",
      size: "small",
    },
    {
      name: "JavaScript",
      image: "/skills/javascript.jpg",
      size: "small",
    },
    {
      name: "Git",
      image: "/skills/git.jpg",
      size: "small",
    },
    {
      name: "AWS",
      // image: "/skills/aws.jpg",
      size: "large",
    },
    {
      name: "Python",
      image: "",
      size: "medium",
    },
    {
      name: "Java",
      image: "/skills/java.jpg",
      size: "small",
    },
    {
      name: "C++",
      image: "/skills/cpp.jpg",
      size: "small",
    },
    {
      name: "MongoDB",
      image: "/skills/mongodb.jpg",
      size: "small",
    },
    {
      name: "Framer Motion",
      image: "/skills/framer.jpg",
      size: "medium",
    },
    {
      name: "GSAP",
      image: "/skills/gsap.jpg",
      size: "small",
    },
  ];

  return (
    <div className=" w-full h-full flex flex-row items-center justify-center">
      <div className="w-fit h-fit mr-auto pl-10 flex flex-col justify-center items-center">
        {Array.from({ length: 5 }).map((_, index) => {
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
              className="text-[10rem] font-bold flex leading-[8rem] hover:text-white/50 transition-all duration-100 cursor-pointer"
            >
              Skills
            </motion.p>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-fit h-fit  grid gap-3 items-center justify-center grid-cols-2 grid-rows-5">
          {skills.map((skill, index) => {
            return <Block key={index} name={skill.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
