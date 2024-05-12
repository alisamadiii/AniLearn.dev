"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function GradientWave({}: Props) {
  return (
    <div className="absolute left-0 top-0 -z-10 hidden h-full w-full overflow-hidden md:block">
      {/* Right */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, type: "spring", bounce: 0 }}
        className="absolute right-0 top-0"
      >
        <svg
          width="273"
          height="910"
          viewBox="0 0 273 910"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M152.69 247.749C190.536 29.6385 247.269 -7.53946 270.905 1.13539L348.782 86.3227L292.352 943.458C167.737 967.618 -61.9784 979.698 16.0825 834.741C94.1434 689.784 139.68 383.014 152.69 247.749Z"
            fill="url(#paint0_linear_110_269)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_110_269"
              x1="174.521"
              y1="0"
              x2="174.521"
              y2="958.223"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DEE9EE" />
              <stop offset="1" stop-color="#DEE9EE" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Left */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, type: "spring", bounce: 0 }}
        className="absolute left-0 top-0"
      >
        <svg
          width="266"
          height="910"
          viewBox="0 0 266 910"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M113.073 247.749C75.227 29.6385 18.4939 -7.53946 -5.14178 1.13539L-83.0183 86.3227L-26.5888 943.458C98.0265 967.618 327.742 979.698 249.681 834.741C171.62 689.784 126.084 383.014 113.073 247.749Z"
            fill="url(#paint0_linear_110_270)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_110_270"
              x1="91.2419"
              y1="0"
              x2="91.2419"
              y2="958.223"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DEE9EE" />
              <stop offset="1" stop-color="#DEE9EE" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}
