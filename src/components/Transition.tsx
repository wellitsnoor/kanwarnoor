"use client";

import React, { useState, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { RouteContext } from "@/context/routeContext";
import { motion } from "framer-motion";

export default function Transition() {
  const pathname = usePathname();
  const { route, setRoute } = useContext(RouteContext);
  const router = useRouter();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log(route);
    setAnimate(true);

    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [route]);

  return (
    <>
      {animate && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: pathname !== route ? "0%" : "-100%" }}
          transition={{ duration: 0.5 }}
          className="w-screen h-screen absolute top-0 left-0 bg-front z-50 text-white text-center flex items-center justify-center"
        >
          {/* <p className="text-2xl font-bold">{route || pathname}</p> */}
        </motion.div>
      )}
      {/* <div className="w-screen h-screen absolute top-0 left-0 bg-front z-50 text-white text-center flex items-center justify-center">
        <p className="text-2xl font-bold">{route || pathname}</p>
      </div> */}
    </>
  );
}
