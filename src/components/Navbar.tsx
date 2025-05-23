"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky flex w-full h-16 justify-between items-center px-10 bg-slate-100 dark:bg-black backdrop-blur-xl">
      <div className="flex ">
        <p className="text-3xl font-extrabold text-remaster">K</p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 items-center">
        <p>Home</p>
        <p>Projects</p>
        <p>Blog</p>
        <button className="dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md">
          Contact
        </button>
      </div>

      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer"
      >
        {theme === "dark" ? (
          <Sun className="cursor-pointer" />
        ) : (
          <Moon className="cursor-pointer" />
        )}
      </div>
    </div>
  );
}
