"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Skills",
      href: "/skills",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const [open, setOpen] = useState(false);

  const [path, setPath] = useState("");

  React.useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <>
      <div className="w-full h-16  flex flex-row items-center justify-center top-0 fixed z-50 ">
        <p
          className="text-3xl font-bold cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          K.
        </p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="w-full h-screen fixed bg-black flex flex-col items-center justify-center gap-10"
          >
            {links.map((link, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                key={index}
                onClick={() => setOpen(false)}
              >
                <Link
                  key={index}
                  href={link.href}
                  className={`text-3xl font-medium ${
                    path === link.href ? "underline" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="absolute bottom-5"
            >
              <p className="text-white text-sm">
                Copyright © {new Date().getFullYear()} Kanwarnoor
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
