import React from "react";
import Image from "next/image";

interface BlockProps {
  name: string;
  image?: string;
  link?: string;
  description?: string;
}

export default function Block({ name, image, description, link }: BlockProps) {
  return (
    <div
      
      className="w-fit h-full flex flex-row justify-center items-center text-white rounded-xl cursor-pointer text-center  transition-all duration-300 p-5 gap-3"
      onClick={(e) => {
        if (link) {
          e.preventDefault();
          window.open(link, "_blank");
        }
      }}
    >
      {image && (
        <div className="w-[60px] h-auto flex flex-col justify-center items-center">
          <Image
            src={image}
            alt={name}
            width={0}
            height={0}
            sizes="100% 100%"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-col rounded-xlitems-start text-left gap-3">
        <p className="text-2xl font-bold">{name}</p>
        {/* <div className="w-full h-2 rounded-full border-1 border-white"></div> */}
        {/* <p className="text-md font-medium ">{description}</p> */}
      </div>
    </div>
  );
}
