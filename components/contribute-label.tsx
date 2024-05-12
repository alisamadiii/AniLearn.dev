import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ContributeLabel({}: Props) {
  return (
    <div className="mb-4 mt-12 flex items-center justify-center">
      <a href="#">
        <button className="active-button relative h-7 rounded-full bg-primary px-4 text-sm text-white">
          Contribute now
          <motion.div
            animate={{ scaleX: 1.2, scaleY: 1.5, opacity: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              repeatDelay: 1,
            }}
            className="absolute inset-0 -z-20 rounded-full border bg-slate-500"
          />
          <motion.div
            animate={{ scaleX: 1.2, scaleY: 1.5, opacity: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              repeatDelay: 1,
              delay: 0.3,
            }}
            className="absolute inset-0 -z-20 rounded-full border bg-slate-500"
          />
          <motion.div
            animate={{ scaleX: 1.2, scaleY: 1.5, opacity: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              repeatDelay: 1,
              delay: 0.5,
            }}
            className="absolute inset-0 -z-20 rounded-full border bg-slate-500"
          />
        </button>
      </a>
    </div>
  );
}
