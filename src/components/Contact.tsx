"use client";

import React from "react";
import Butten from "./Butten";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    // simple contact form
    <div className="flex w-full h-full flex-col items-center justify-center">
      <div className="flex flex-row">
        {Array.from(`Connect with me`).map((letter, index) => {
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
      <p className="text-xl w-1/2 mt-3 text-center">
        I'm always looking for new opportunities and collaborations. If you have
        any questions or want to work together, please feel free to contact me.
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-20">
        <div className="w-1/2 flex justify-center items-center mt-20">
          <form className="flex flex-col w-1/2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required
                className="bg-transparent border-2 px-3 py-2 border-black text-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                className="bg-transparent border-2 px-3 py-2 border-black text-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                required
                className="px-3 py-2 border-2 border-black text-black"
              ></textarea>
            </div>
            <div className="w-full flex justify-center items-center">
              <Butten type="primary" theme="light" text="Send" link="#" />
            </div>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center w-1/2">
          <p className="text-2xl font-bold">Other ways to connect :-</p>
          <div className="flex flex-row gap-5">
            <a href="https://www.linkedin.com/in/wellitsnoor/">Linkedin</a>
            <a href="https://www.linkedin.com/in/kanwarnoor-singh-b0b1b0200/">Instagram</a>
            <a href="mailto:wellitsnoor@gmail.com">wellitsnoor@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
