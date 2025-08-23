import React from "react";
import Image from "next/image";

export default function Navbar() {
  const links = [
    {
      name: "Projects",
    },
    {
      name: "Skills",
    },
    {
      name: "Contact",
    },
    {
      name: "Blog",
    },
  ];

  return (
    <>
      <div className="absolute fixed top-0 m-5">
        <Image src="/logo/logo-white.png" alt="logo" width={35} height={35} />
      </div>

      <div className="absolute fixed bottom-0 left-0 bg-gradient-to-t">
        <ul className="flex flex-row text-2xl gap-10 font-bold m-5">
          {links.map((link) => (
            <li key={link.name} className="cursor-pointer hover:underline">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
