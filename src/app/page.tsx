import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="relative w-full h-[25rem] px-5">
        <div className="w-full h-full bg-red-200 rounded-3xl">
          <Image
            src={"/kanye.jpg"}
            alt={""}
            height={0}
            width={0}
            sizes="100% 100%"
            className="w-full h-full rounded-3xl object-cover object-[0%_10%]"
          ></Image>
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start p-10 rounded-3xl">
            <p className="text-white text-7xl font-bold">Kanye West</p>
            <p className="text-white text-2xl font-bold">
              I am a software engineer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
