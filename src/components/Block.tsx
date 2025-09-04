import React from "react";
import Image from "next/image";

interface BlockProps {
  name: string;
  image?: string;
  link?: string;
}

export default function Block({ name, image, link }: BlockProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm text-white rounded-xl cursor-pointer text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
      {image ? (
        <div className="w-full h-full flex flex-col justify-center items-center rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={0}
            height={0}
            sizes="100vw 100vw"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      ) : (
        <div className=" flex flex-col rounded-xl p-5">
          <p className="text-center text-2xl font-medium ">{name}</p>
        </div>
      )}
    </div>
  );
}
