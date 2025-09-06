"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import Block from "./Block";
import React from "react";
import { LoadingContext } from "@/context/loadingContext";

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

  const { loading } = useContext(LoadingContext);

  return (
    <div className=" w-full h-full flex flex-row-reverse  items-center justify-center">
      {/* <div className="flex flex-col items-center justify-center">
        <div className="w-fit h-fit mr-auto pr-4 flex flex-row gap-2 justify-center items-center">
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
                className="text-[10rem] font-bold font-bebas flex leading-[8rem] hover:text-white/80 transition-all text-red-700 duration-100 cursor-pointer"
              >
                Skills
              </motion.p>
            );
          })}
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center">
        {!loading && Array.from({ length: 10 }).map((_, realIndex) => {
          return (
            <div
              className="w-fit h-fit mr-auto pr-4 flex flex-row gap-2 justify-center items-center"
              key={realIndex}
            >
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <motion.p
                    key={index}
                    initial={{
                      opacity: 0,
                      filter: "blur(20px)",
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className={`text-[10rem] font-bold font-bebas flex leading-[8rem] hover:text-white/80 transition-all text-red-700 duration-100 cursor-pointer ${
                      realIndex === 5 && index === 6
                        ? "text-white"
                        : "text-red-700"
                    }`}
                  >
                    Skills
                  </motion.p>
                );
              })}
            </div>
          );
        })}
      </div>

      {!loading && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="bg-back w-[65%] rounded-r-full h-[150%] left-0 rounded-xl absolute blur-3xl -translate-x-[15%]"
          ></motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: "-10%",
            }}
            animate={{
              opacity: 1,
              x: "0%",
            }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="absolute flex flex-col items-center justify-center w-fit h-fit mr-auto left-0 ml-10 "
          >
            <div className="w-fit h-fit  grid gap-3 items-center justify-center grid-cols-3 grid-rows-3">
              {skills.map((skill, index) => {
                return <Block key={index} name={skill.name} />;
              })}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
