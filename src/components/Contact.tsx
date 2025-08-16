"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    // simple contact form
    <div className="flex w-full h-full flex-col items-center justify-center">
      <div className="flex flex-row">
        {Array.from("Contact").map((letter, index) => {
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

      <div className="flex flex-col items-center justify-center">
        <form action="/api/send" method="POST" className="flex flex-col">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="bg-white text-black px-4 py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
