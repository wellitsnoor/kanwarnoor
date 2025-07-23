"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Lander() {

  return (
    <div className="w-full h-screen bg-black flex flex-row items-center justify-center">
      <div className="w-1/2 h-full flex flex-col pl-40 justify-center ">
        <p className="text-7xl font-bold">Kanwarnoor</p>
        <p className="text-3xl font-medium">Fullstack Developer</p>

        <p className="text-base mt-10">
          I'm a software engineer that loves to create.
        </p>

        <div className="flex flex-row gap-3 mt-10">
          <Link
            href="/contact"
            className="text-base w-fit bg-white text-black px-4  py-2 rounded-xl"
          >
            Hire me
          </Link>
          <Link
            href="#more"
            className="text-base  w-fit border-2 text-white  px-4 py-2 rounded-xl"
          >
            Know more
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <Image
          src={"/me.jpg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
