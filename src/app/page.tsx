"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <>
      <div className="relative w-full h-[25rem] px-5 mt-16">
        <div className="w-full relative h-full bg-red-200 rounded-3xl">
          <div
            className="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none 
               backdrop-blur-xl
               [mask-image:linear-gradient(to_top,black_50%,transparent)]
               [Webkit-mask-image:linear-gradient(to_top,black_50%,transparent)] rounded-b-3xl"
          />
          <Image
            src={"/kanye.jpg"}
            alt={""}
            height={0}
            width={0}
            sizes="100% 100%"
            className="w-full h-full rounded-3xl object-cover object-[0%_10%]"
          ></Image>

          <div className="absolute bottom-0 left-0 w-full h-fit flex px-10 pb-8 rounded-b-3xl  items-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-white text-5xl font-bold">Kanwanroor Singh</p>
              <p className="text-white text-xl font-normal">
                I am a software engineer
              </p>
            </motion.div>
            <div className="flex ml-auto mt-auto gap-5">
              <motion.button
                initial={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => router.push("/contact")}
                className="bg-white/80 backdrop-blur-xl  text-black px-4 py-2 rounded-md dark:bg-black/50 dark:text-white text-xl font-normal transition-colors duration-100"
              >
                Contact
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="w-full h-[50rem]"></div>
      </section>
    </>
  );
}
