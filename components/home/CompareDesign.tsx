"use client";

import React, { useEffect, useState } from "react";
import { useAnimate, motion, AnimatePresence } from "framer-motion";

export default function CompareDesign() {
  const [generateNum, setGenerateNum] = useState(0);
  const [generateNum2, setGenerateNum2] = useState(0);

  const [section, setSection] = useState<"text" | "compare" | null>(null);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const interval = setInterval(() => {
      const randNum1 = Math.floor(Math.random() * 68);
      setGenerateNum(randNum1);

      const randNum2 = Math.floor(Math.random() * 68);
      setGenerateNum2(randNum2);
    }, 1000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    animate([
      [".thumb-1", { left: `${(generateNum / 68) * 100}%` }, { duration: 0.4 }],
      [
        ".slider-1",
        { width: `${(generateNum / 68) * 100}%` },
        { duration: 0.4, at: "<" },
      ],
    ]);
    animate([[".square-1", { borderRadius: generateNum }, { duration: 0.4 }]]);

    animate([
      [
        ".thumb-2",
        { left: `${(generateNum2 / 68) * 100}%` },
        { duration: 0.4 },
      ],
      [
        ".slider-2",
        { width: `${(generateNum2 / 68) * 100}%` },
        { duration: 0.4, at: "<" },
      ],
    ]);
    animate([[".square-2", { borderRadius: generateNum2 }, { duration: 0.4 }]]);
  }, [generateNum, generateNum2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSection("text");
    }, 4500);

    const timeout2 = setTimeout(() => {
      setSection("compare");
    }, 7000);
    const timeout3 = setTimeout(() => {
      setSection(null);
    }, 14000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="flex h-full flex-col text-[#263C48]">
      <h3 className="flex h-16 items-center px-7 text-xl">Compare design</h3>
      <div
        ref={scope}
        className={`relative grid grow gap-4 px-4 ${section !== "compare" ? "grid-cols-1" : "grid-cols-2"}`}
      >
        {/* First */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={"first"}
            layout
            className="flex h-full w-full flex-col items-center justify-center gap-8"
          >
            <motion.div
              layout
              className="relative flex h-1 w-full items-center rounded-full"
            >
              <div className="relative h-1 w-full overflow-hidden rounded-full bg-[#F2F8FB]">
                <motion.div className="slider-1 absolute h-full bg-[#263C48]"></motion.div>
              </div>
              <motion.div
                layout
                className="thumb-1 absolute h-4 w-4 rounded-full bg-[#263C48]"
              ></motion.div>
            </motion.div>
            <motion.div
              layout
              className="square-1 flex aspect-square w-full max-w-44 items-center justify-center bg-[#DEE9EE]"
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={generateNum}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5, transition: { delay: 0.2 } }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  className="text-3xl font-black"
                >
                  {generateNum}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Intro */}
          <AnimatePresence>
            {section === "text" && (
              <motion.div
                initial={{ y: "100%", filter: "blur(10px)" }}
                animate={{ y: "0", filter: "blur(0px)" }}
                exit={{ y: "100%", filter: "blur(10px)" }}
                transition={{ duration: 0.5, type: "spring", bounce: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-white/20 text-lg backdrop-blur-lg"
              >
                <p>Why not comparing them?</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Second */}

          {section === "compare" && (
            <motion.div
              key={"second"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                bounce: 0,
                duration: 1,
              }}
              className="flex h-full w-full flex-col items-center justify-center gap-8"
            >
              <div className="relative flex h-1 w-full items-center rounded-full">
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-[#F2F8FB]">
                  <motion.div className="slider-2 absolute h-full bg-[#263C48]"></motion.div>
                </div>
                <motion.div className="thumb-2 absolute h-4 w-4 rounded-full bg-[#263C48]"></motion.div>
              </div>
              <div className="square-2 flex aspect-square w-full max-w-44 items-center justify-center bg-[#DEE9EE]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={generateNum2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5, transition: { delay: 0.2 } }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    className="text-3xl font-black"
                  >
                    {generateNum2}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
