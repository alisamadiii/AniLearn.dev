import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

export default function GridBackground() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], ["0%", "-100%"]);

  return (
    <motion.div
      style={{ y }}
      className="fade-out-faq fixed inset-0 -z-50 flex flex-wrap"
    >
      {Array.from({ length: 400 }).map((_, index) => (
        <div
          key={index}
          className={`aspect-square w-14 grow border border-primary/[.02] ${[56, 82, 30, 5].includes(index) ? "bg-primary/5" : ""}`}
        ></div>
      ))}
    </motion.div>
  );
}
