"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RouteContext } from "@/context/routeContext";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
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
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  const { setRoute } = useContext(RouteContext);

  return (
    <>
      <div
        className="absolute fixed top-0 m-5 z-40 flex cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/logo/logo-white.png" alt="logo" width={35} height={35} />
      </div>

      <div className="absolute fixed bottom-0 left-0 right-0 bg-gradient-to-t z-40">
        <ul className="flex-row text-2xl md:flex hidden gap-10 font-medium m-5 justify-center">
          {links.map((link) => (
            <li
              key={link.name}
              className={`cursor-pointer hover:underline ${
                link.href === pathname ? "underline" : "no-underline"
              }`}
            >
              <Link href={link.href} onClick={() => setRoute(link.href)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
