import React from "react";
import Link from "next/link";

interface ButtenProps {
  text?: string;
  link?: string;
  type: "primary" | "secondary";
}

export default function Butten(Props: ButtenProps) {
  if (Props.type === "primary") {
    return (
      <Link
        href={Props.link || "/"}
        className="text-base w-fit bg-white text-black px-4  py-2 flex items-center justify-center"
      >
        {Props.text || "Know more"}
      </Link>
    );
  }
  return (
    <Link
      href={Props.link || "/"}
      className="text-base w-fit border-2 border-dashed text-white  px-4 py-2"
    >
      {Props.text || "Know more"}
    </Link>
  );
}
