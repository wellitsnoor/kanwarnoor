"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create audio element inside useEffect to avoid SSR issues
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/audios/layers.mp3");
      audioRef.current.loop = true;
      audioRef.current.preload = "auto";

      audioRef.current.volume = 0.5;
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle play/pause when SVG buttons are clicked
  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio play/pause failed:", error);
    }
  };

  return (
    <>
      <div className="absolute fixed bottom-0 m-5 right-0  bg-front/70 backdrop-blur-sm p-2 rounded-xl z-40">
        <audio ref={audioRef} src="/audios/layers.mp3" autoPlay />
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src="/images/cristobal.jpg"
            alt="play"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold">Layers</p>
            <p className="text-sm">Cristobal</p>
          </div>

          <div className="flex flex-row items-center justify-center ml-10">
            {!isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handlePlayPause}
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handlePlayPause}
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
