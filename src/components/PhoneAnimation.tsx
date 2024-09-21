"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";
import Logo from "./Logo";

type Props = {};

export default function PhoneAnimation({}: Props) {
  return (
    <MotionConfig transition={{ duration: 2, ease: "easeOut" }}>
      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(2px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="absolute"
        >
          <Logo className="w-16" />
        </motion.div>

        <div
          className="absolute -z-10 h-96 w-96 translate-y-40 bg-foreground/40 blur-3xl"
          style={{ borderRadius: "52% 48% 63% 37% / 30% 30% 70% 70% " }}
        ></div>

        <div
          className="absolute -z-10 h-96 w-96 -translate-y-40 bg-foreground/20 blur-3xl"
          style={{ borderRadius: "17% 83% 19% 81% / 19% 66% 34% 81%" }}
        ></div>

        <motion.svg
          width="301"
          height="611"
          viewBox="0 0 301 611"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            x="4.52203"
            y="1.89835"
            width="292.735"
            height="607.139"
            rx="50"
            stroke="currentColor"
            stroke-width="2"
            className="fill-background"
            style={{ rotateX: 180 }}
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            x="17.5599"
            y="14.977"
            width="268.645"
            height="580.938"
            rx="37"
            className="fill-background"
            stroke="currentColor"
            stroke-width="2"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            x="102.439"
            y="587.746"
            width="95.6887"
            height="2.45312"
            rx="1.22656"
            className="fill-background"
            stroke="currentColor"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            d="M299.257 194.049L299.257 266.602"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            d="M2.63483 162.926L2.63482 207.349"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            d="M2.27936 119.356L2.27936 140.678"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            d="M2.63483 221.568L2.63482 265.992"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </motion.svg>
      </div>
    </MotionConfig>
  );
}
