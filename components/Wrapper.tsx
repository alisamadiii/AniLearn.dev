"use client";

import { cn } from "@/utils";
import React, { type HTMLAttributes } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PreviewWrapper({ children, className, ...props }: Props) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height }}
      className="overflow-hidden rounded-lg border border-foreground/20"
    >
      <div ref={ref} className={cn("relative p-4", className)} {...props}>
        {children}
      </div>
    </motion.div>
  );
}
