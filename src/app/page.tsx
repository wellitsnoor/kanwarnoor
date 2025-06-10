"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function page() {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);
  const container6 = useRef(null);

  const container12 = useRef(null);
  const container22 = useRef(null);
  const container32 = useRef(null);
  const container42 = useRef(null);
  const container52 = useRef(null);
  const container62 = useRef(null);

  const content = [
    {
      letter: "C",
      color: "bg-red-500",
      ref: container1,
      ref2: container12,
    },
    {
      letter: "O",
      color: "bg-red-600",
      ref: container2,
      ref2: container22,
    },
    {
      letter: "M",
      letter2: "S",
      color: "bg-red-700",
      ref: container3,
      ref2: container32,
    },
    {
      letter: "I",
      letter2: "O",
      color: "bg-red-800",
      ref: container4,
      ref2: container42,
    },
    {
      letter: "N",
      letter2: "O",
      color: "bg-red-900",
      ref: container5,
      ref2: container52,
    },
    {
      letter: "G",
      letter2: "N",
      color: "bg-red-950",
      ref: container6,
      ref2: container62,
    },
  ];

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    gsap.set(
      [
        container1.current,
        container2.current,
        container3.current,
        container4.current,
        container5.current,
        container6.current,
      ],
      {
        width: mobile ? "100%" : "0%",
      }
    );

    gsap.set(
      [
        container12.current,
        container22.current,
        container32.current,
        container42.current,
        container52.current,
        container62.current,
      ],
      {
        opacity: 0,
        y: 100,
      }
    );

    const tl = gsap.timeline();

    tl.to(
      [
        container1.current,
        container2.current,
        container3.current,
        container4.current,
        container5.current,
        container6.current,
      ],
      {
        width: mobile ? "100%" : "16.666666666666664%",
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    ).to(
      [
        container12.current,
        container22.current,
        container32.current,
        container42.current,
        container52.current,
        container62.current,
      ],
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=1"
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-row w-screen text-center overflow-hidden text-white bg-red-950">
      <a href="https://instagram.com/wellitsnoor" className="md:hidden flex absolute top-0 left-0 bottom-0 right-0 justify-center items-center text-sm">
        @wellitsnoor
      </a>
      {content.map((item, index) => (
        <div
          ref={item.ref}
          className={`${item.color} flex flex-col w-full h-full`}
          key={index}
        >
          <div ref={item.ref2} className="flex flex-col overflow-hidden">
            <h1 className="text-[15rem] mb-auto font-bold -translate-y-[17%]">
              {item.letter}
            </h1>
            <a
              href="https://instagram.com/wellitsnoor"
              className="md:block hidden"
            >
              @wellitsnoor
            </a>
            {item.letter2 && (
              <h1 className="text-[15rem] font-bold mt-auto">{item.letter2}</h1>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
