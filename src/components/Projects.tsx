"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";
import useEmblaCarousel from "embla-carousel-react";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const data = [
    {
      title: "Remaster",
      des: "A platform for buying and selling music",
      image: "/bully.jpg",
      animation: "center",
      link: "https://remaster.in/",
      tags: ["all", "personal"],
    },
    {
      title: "Ardent Co.",
      des: "something",
      image: "/bully.jpg",
      animation: "center",
      tags: ["all", "client"],
    },
    {
      title: "Guru Nanak Dev University",
      des: "something",
      image: "/bully.jpg",
      animation: "center",
      tags: ["all", "client"],
    },
    {
      title: "Fullscreen",
      des: "something 2",
      image: "/bully.jpg",
      animation: "center",
      tags: ["all", "personal"],
    },
  ];

  const [filter, setFilter] = useState([
    {
      name: "All",
      sort: 0,
      active: true,
    },
    {
      name: "Personal",
      sort: 1,
      active: false,
    },
    {
      name: "Client",
      sort: 2,
      active: false,
    },
    {
      name: "Collaboration",
      sort: 3,
      active: false,
    },
  ]);

  const activeFilter = filter.find((f) => f.active)?.name.toLowerCase();

  const filteredData = data.filter((item) => {
    if (activeFilter === "all") return true;
    return item.tags.includes(activeFilter || "");
  });

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-row">
        {Array.from("Projects").map((letter, index) => {
          return (
            <motion.p
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(20px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-7xl font-bold flex"
            >
              {letter}
            </motion.p>
          );
        })}
      </div>
      <div className="flex mr-auto pt-5 pb-3 pl-10 flex-row  gap-10">
        <div className="flex flex-row gap-3">
          {filter.map((item, index) => {
            return (
              <motion.p
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  color: "black",
                }}
                animate={{
                  backgroundColor:
                    item.active === true
                      ? "rgba(255, 255, 255, 1)"
                      : "transparent",
                  color: item.active === true ? "black" : "white",
                }}
                key={index}
                className={`text-base cursor-pointer font-bold rounded-full px-4 py-2  `}
                onClick={() =>
                  setFilter(
                    filter.map((item, index1) => {
                      if (index === index1) {
                        return { ...item, active: true };
                      }
                      return { ...item, active: false };
                    })
                  )
                }
              >
                <motion.span
                  key={
                    filter.sort((a, b) => Number(b.active) - Number(a.active))[
                      index
                    ].name
                  }
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {
                    filter.sort((a, b) => Number(b.active) - Number(a.active))[
                      index
                    ].name
                  }
                </motion.span>
              </motion.p>
            );
          })}
        </div>
      </div>
      <div className="overflow-hidden flex mr-auto pl-10" ref={emblaRef}>
        <div className="flex flex-row gap-10">
          {filteredData.length === 0 && (
            <div className="flex flex-col">
              <p className="flex text-2xl font-bold">No projects found :/</p>
            </div>
          )}
          {filteredData.map((item) => {
            return (
              <InfoCard
                title1={item.title}
                des={item.des}
                image={item.image}
                link={item.link}
                animation={"center"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
