"use client";

import { PreviewWrapper } from "@/components/Wrapper";
import React, { useState } from "react";
import { AnimatePresence, type Variants, motion } from "framer-motion";

export default function MyOpenGraph() {
  const [platforms, setPlatforms] = useState<
    "facebook" | "twitter" | "linkedin" | "discord"
  >("facebook");

  const usePlatforms: Array<"facebook" | "twitter" | "linkedin" | "discord"> = [
    "facebook",
    "twitter",
    "linkedin",
    "discord",
  ];

  const contentAnimation: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <PreviewWrapper className="px-4 md:px-14 lg:px-24">
      <div className="mb-4 flex justify-center">
        {usePlatforms.map((platform, index) => (
          <button
            key={index}
            className="relative cursor-pointer px-3 py-1 capitalize"
            onClick={() => { setPlatforms(platform); }}
          >
            {platform}
            {platform === platforms && (
              <motion.span
                layoutId="platforms-button"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 -z-10 rounded bg-foreground/30 dark:bg-foreground/10"
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence initial={false} mode="wait">
        {platforms === "facebook" ? (
          <motion.div
            key={"facebook"}
            variants={contentAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#3a3b3c] text-white"
          >
            <img
              className="aspect-video w-full object-cover"
              src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
            />
            <div className="-space-y-1 px-4 py-1 pb-2">
              <small className="font-light uppercase opacity-60">
                www.alirezasamadi.com
              </small>
              <h3 className="text-lg font-medium">Ali Reza - Portfolio</h3>
              <p className="text-sm/5 font-light opacity-60">
                As a front-end developer, I specialize in building and
                maintaining the user interface of web applications.
              </p>
            </div>
          </motion.div>
        ) : platforms === "twitter" ? (
          <motion.div
            key={"twitter"}
            variants={contentAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden rounded-2xl"
          >
            <img
              className="aspect-video w-full object-cover"
              src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
            />
            <div className="-space-y-1 rounded-b-2xl border-2 border-t-0 border-foreground/10 px-4 py-1 pb-2">
              <small className="font-light uppercase opacity-60">
                www.alirezasamadi.com
              </small>
              <h3 className="text-font-clr">Ali Reza - Portfolio</h3>
              <p className="text-sm/5 font-light opacity-60">
                As a front-end developer, I specialize in building and
                maintaining the user interface of web applications.
              </p>
            </div>
          </motion.div>
        ) : platforms === "discord" ? (
          <motion.div
            key={"discord"}
            variants={contentAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="rounded-md border-l-2 border-[#1c1e21] bg-[#25272b] p-4"
          >
            <div className="mb-2 py-1 pb-2">
              <h3 className="text-lg/8 font-semibold text-sky-600">
                Ali Reza - Portfolio
              </h3>
              <p className="text-white">
                As a front-end developer, I specialize in building and
                maintaining the user interface of web applications.
              </p>
            </div>
            <img
              className="aspect-video w-full object-cover"
              src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
            />
          </motion.div>
        ) : (
          platforms === "linkedin" && (
            <motion.div
              key={"linkedin"}
              variants={contentAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-slate-700 text-white"
            >
              <img
                className="aspect-video w-full object-cover"
                src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
              />
              <div className="px-4 py-1 pb-2">
                <h3>Ali Reza - Portfolio</h3>
                <small className="font-light">www.alirezasamadi.com</small>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </PreviewWrapper>
  );
}
