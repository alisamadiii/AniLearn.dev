"use client";

import { PreviewWrapper } from "@/components/Wrapper";
import React, { useState } from "react";
import {
  AnimatePresence,
  type Variants,
  motion,
  MotionConfig,
} from "framer-motion";
import Image from "next/image";

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, type: "spring", bounce: 0 },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.2, type: "spring", bounce: 0 },
    },
  };

  return (
    <PreviewWrapper className="px-4 md:px-14 lg:px-24">
      <div className="mb-4 flex justify-center">
        {usePlatforms.map((platform, index) => (
          <button
            key={index}
            className={`relative isolate cursor-pointer px-3 py-1 capitalize ${platform === platforms && "text-white"}`}
            onClick={() => {
              setPlatforms(platform);
            }}
          >
            {platform}
            {platform === platforms && (
              <motion.span
                layoutId="platforms-button"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 -z-10 rounded bg-primary"
              />
            )}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
        {platforms === "facebook" ? (
          <motion.div key={"facebook"} className="bg-[#3a3b3c] text-white">
            <motion.img
              layoutId="same-image-open-graph"
              width={800}
              height={600}
              alt=""
              className="aspect-video w-full object-cover"
              src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
            />
            <div className="-space-y-1 px-4 py-1 pb-2">
              <motion.small
                layoutId="small-open-graph"
                className="inline-block font-light uppercase opacity-60"
              >
                www.alirezasamadi.com
              </motion.small>
              <motion.h3
                layoutId="heading-open-graph"
                className="text-lg font-medium"
              >
                Ali Reza - Portfolio
              </motion.h3>
              <motion.p
                layoutId="paragraph-open-graph"
                className="text-sm/5 font-light opacity-60"
              >
                As a front-end developer, I specialize in building and
                maintaining the user interface of web applications.
              </motion.p>
            </div>
          </motion.div>
        ) : platforms === "twitter" ? (
          <motion.div key={"twitter"} className="overflow-hidden rounded-2xl">
            <motion.img
              layoutId="same-image-open-graph"
              width={800}
              height={600}
              alt=""
              className="aspect-video w-full object-cover"
              src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
            />
            <div className="-space-y-1 rounded-b-2xl border-2 border-t-0 border-foreground/10 px-4 py-1 pb-2">
              <motion.small
                layoutId="small-open-graph"
                className="inline-block font-light uppercase opacity-60"
              >
                www.alirezasamadi.com
              </motion.small>
              <motion.h3
                layoutId="heading-open-graph"
                className="text-font-clr"
              >
                Ali Reza - Portfolio
              </motion.h3>
              <motion.p
                layoutId="paragraph-open-graph"
                className="text-sm/5 font-light opacity-60"
              >
                As a front-end developer, I specialize in building and
                maintaining the user interface of web applications.
              </motion.p>
            </div>
          </motion.div>
        ) : platforms === "discord" ? (
          <motion.div
            key={"discord"}
            className="rounded-md border-l-2 border-[#1c1e21] bg-[#25272b] p-4"
          >
            <div className="mb-2 py-1 pb-2">
              <motion.h3
                layoutId="heading-open-graph"
                className="text-lg/8 font-semibold text-sky-600"
              >
                Ali Reza - Portfolio
              </motion.h3>
              <motion.p layoutId="paragraph-open-graph" className="text-white">
                As a front-end developer, I specialize in building and
                maintaining the user interface of web applications.
              </motion.p>
            </div>
            <motion.img
              layoutId="same-image-open-graph"
              width={800}
              height={600}
              alt=""
              className="aspect-video w-full object-cover"
              src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
            />
          </motion.div>
        ) : (
          platforms === "linkedin" && (
            <motion.div key={"linkedin"} className="bg-slate-700 text-white">
              <motion.img
                layoutId="same-image-open-graph"
                width={800}
                height={600}
                alt=""
                className="aspect-video w-full object-cover"
                src="https://www.alirezasamadi.com/opengraph-image.png?4d5769bf8ffd2998"
              />
              <div className="px-4 py-1 pb-2">
                <motion.h3 layoutId="heading-open-graph">
                  <motion.p layout>Ali Reza - Portfolio</motion.p>
                </motion.h3>
                <motion.small
                  layoutId="small-open-graph"
                  className="inline-block font-light"
                >
                  www.alirezasamadi.com
                </motion.small>
              </div>
            </motion.div>
          )
        )}
      </MotionConfig>
    </PreviewWrapper>
  );
}
