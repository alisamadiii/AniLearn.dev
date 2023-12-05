import React, { useState } from "react";
import { motion } from "framer-motion";

import { PreviewWrapper } from "@/components/Wrapper";

export default function AlignSelf() {
  const [position, setPosition] = useState("start");

  const positions = ["start", "end", "center"];

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
                layoutId="AlignSelf"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 -z-10 rounded bg-foreground/30 dark:bg-foreground/10"
              />
            )}
          </button>
        ))}
      </div>
      <div className="relative flex h-24 gap-4">
        <div className="absolute left-0 top-0 z-20 h-px w-full bg-foreground/30 dark:bg-foreground/10" />
        <div className="absolute left-0 top-1/2 z-20 h-px w-full -translate-y-1/2 bg-foreground/30 dark:bg-foreground/10" />
        <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-foreground/30 dark:bg-foreground/10" />
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            layout
            key={i}
            className={`h-12 w-12 rounded ${
              i === 1 ? "bg-primary" : "bg-foreground"
            }`}
            style={{ alignSelf: i === 1 ? position : undefined }}
          />
        ))}
      </div>
    </PreviewWrapper>
  );
}
