"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function TextAnimation({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: innerWidth >= 768 ? 1 : 0, duration: 0.6 }}
      className="flex flex-col items-center justify-center text-center"
    >
      {children}
    </motion.div>
  );
}
