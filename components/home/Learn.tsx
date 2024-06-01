"use client";

import React, { useEffect, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import IconHome from "./icons.home";

export default function Learn() {
  const [currentTech, setCurrentTech] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prevTech) => (prevTech % 4) + 1); // Increment currentTech cyclically from 1 to 4
    }, 3000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex h-full flex-col">
      <h3 className="flex h-24 items-center justify-center text-3xl text-[#263C48]">
        Learn
      </h3>
      <div
        className={`relative flex h-full grow items-center justify-center ${currentTech === 4 ? "gap-4 px-4" : "gap-8"}`}
      >
        <LayoutGroup>
          {currentTech === 1 && (
            <div
              className="h-full w-[110%]"
              style={{
                flex: "0 0 auto",
              }}
            />
          )}
          {[1, 2, 3].map((tech) => (
            <motion.div
              key={tech}
              layoutId={`icon-home-${tech}`}
              className="flex h-full w-1/2 items-center justify-center"
              animate={
                tech !== currentTech && currentTech !== 4
                  ? { filter: "blur(10px)" }
                  : {}
              }
              transition={{
                type: "spring",
                bounce: 0,
                duration: currentTech > 4 ? 0.5 : 1,
              }}
              style={{ flex: currentTech !== 4 ? "0 0 auto" : "" }}
            >
              <motion.div layout>
                <IconHome
                  name={tech === 1 ? "html" : tech === 2 ? "css" : "js"}
                />
              </motion.div>
            </motion.div>
          ))}
          {currentTech === 3 && (
            <div
              className="h-full w-[110%]"
              style={{
                flex: "0 0 auto",
              }}
            />
          )}
        </LayoutGroup>
      </div>
    </div>
  );
}
