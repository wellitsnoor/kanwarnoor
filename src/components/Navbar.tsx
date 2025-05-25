"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

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
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="fixed top-0 flex w-full h-16 justify-between items-center px-10 z-10">
        <div className="absolute left-1/2 -translate-x-1/2 flex w-full text-center justify-center">
          <Link href="/" className="text-5xl font-extrabold text-remaster mb-1">
            K.
          </Link>
        </div>

        {/* <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 items-center">
        <p>Home</p>
        <p>Projects</p>
        <p>Blog</p>
        <button className="dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md">
          Contact
        </button>
      </div> */}

        {mounted && (
          <div
            onClick={toggleTheme}
            className="cursor-pointer z-10 ml-auto"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="cursor-pointer size-6" />
            ) : (
              <Moon className="cursor-pointer size-6" />
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 h-10 flex w-full text-center justify-center mb-5">
        <div className="flex gap-14 font-bold text-remaster items-center justify-center">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
