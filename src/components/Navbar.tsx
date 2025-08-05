"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Blog",
      href: "#blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [path, setPath] = useState("");

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  React.useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <>
      <div className="w-full h-16 flex flex-row items-center top-0 absolute z-50">
        <motion.p
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-3xl font-bold cursor-pointer title pl-10 z-10"
          onClick={() => router.push("/")}
        >
          K.
        </motion.p>

        <div className="absolute pr-10 flex flex-row ml-auto w-full h-full justify-center items-center ">
          {!scroll &&
            links.map((link, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
                key={index}
                className="bg-red0 w-[10%] h-full flex items-center justify-center text-white"
              >
                <Link
                  key={index}
                  href={link.href}
                  className="text-base font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
        </div>
      </div>

      <AnimatePresence>
        {scroll && (
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full h-16  flex flex-row items-center justify-center top-0 fixed z-50 "
          >
            <p
              className="text-3xl font-bold cursor-pointer title"
              onClick={() => router.push("/")}
            >
              K.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

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
