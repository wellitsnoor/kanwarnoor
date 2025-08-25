"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Lander() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-screen h-screen bg-back flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-screen h-screen opacity-100 ">
        {isClient && (
          <>
            <video
              src="/videos/texture2.mp4"
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
              crossOrigin="anonymous"
              className="w-full h-full object-cover mix-blend-hard-light britness-200 contrast-200 hue-rotate-180 overflow-hidden"
            />
          </>
        )}
      </div>
      <div className="flex items-center justify-center gap-5">
        <p className="text-7xl transform font-oswald scale-y-[300%] scale-x-[200%] font-extrabold drop-shadow-[0_0_1px_rgba(255,255,255,1)] drop-shadow-white flex justify-center items-center">
          N
        </p>
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{
            rotate: 360,
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 1.2,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          className="z-10 mt-6"
        >
          <Image
            src="/logo/logo-red.png"
            alt="Lander"
            width={200}
            height={200}
            className="flex justify-center items-center  z-10 cursor-pointer "
          />
        </motion.div>

        <p className="text-7xl transform font-oswald scale-y-[300%] scale-x-[200%] font-extrabold drop-shadow-[0_0_1px_rgba(255,255,255,1)] drop-shadow-white flex justify-center items-center">
          R
        </p>
      </div>

      {/* <p className="text-2xl font-extrabold uppercase">Fullstack Developer</p> */}
    </div>
  );
}
