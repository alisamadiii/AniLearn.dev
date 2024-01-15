"use client";

import { cn } from "@/utils";
import React, { type HTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  comment?: string;
  wrapperClassName?: string;
}

export function PreviewWrapper({
  children,
  wrapperClassName,
  className,
  comment = "",
  ...props
}: Props) {
  const [ref, { height }] = useMeasure();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        animate={{ height: height <= 0 ? "auto" : height }}
        transition={{ duration: 0.05 }}
        className={cn(
          "relative isolate overflow-hidden rounded-lg border border-foreground/20 shadow-lg duration-200",
          wrapperClassName
        )}
        id="grid-preview"
      >
        <div ref={ref} className={cn("relative p-4", className)} {...props}>
          {children}
          {comment?.length !== 0 && (
            <p className="text-end text-sm text-green-500">{comment}</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
