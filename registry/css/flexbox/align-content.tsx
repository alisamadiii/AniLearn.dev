import React, { useState } from "react";
import { motion } from "framer-motion";

import { PreviewWrapper } from "@/components/Wrapper";

export default function AlignContent() {
  const [position, setPosition] = useState("start");

  const positions = [
    "start",
    "end",
    "center",
    "space-between",
    "space-evenly",
    "space-around",
  ];

  return (
    <PreviewWrapper className="flex flex-col gap-6">
      <div>
        {positions.map((p, index) => (
          <button
            key={index}
            className="relative isolate cursor-pointer px-3 py-1 capitalize"
            onClick={() => {
              setPosition(p);
            }}
          >
            {p}
            {position === p && (
              <motion.span
                layoutId="AlignContent"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 -z-10 rounded bg-foreground/30 dark:bg-foreground/10"
              />
            )}
          </button>
        ))}
      </div>
      <div
        className="relative flex h-72 flex-wrap gap-4"
        style={{ alignContent: position }}
      >
        <div className="absolute left-0 top-0 z-20 h-px w-full bg-foreground/30 dark:bg-foreground/10" />
        <div className="absolute left-0 top-1/2 z-20 h-px w-full -translate-y-1/2 bg-foreground/30 dark:bg-foreground/10" />
        <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-foreground/30 dark:bg-foreground/10" />
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            layout
            key={i}
            className="h-12 w-12 grow basis-40 rounded bg-foreground"
          />
        ))}
      </div>
    </PreviewWrapper>
  );
}
