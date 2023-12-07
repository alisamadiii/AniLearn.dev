"use client";

import { cn } from "@/utils";
import React, { type HTMLAttributes } from "react";
import { type HTMLMotionProps, motion } from "framer-motion";

type Props = HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">;

export function Rect({ className, style, ...props }: Props) {
  return (
    <motion.div
      className={cn(
        "mx-auto h-40 w-40 rounded-xl bg-primary dark:shadow-[inset_0_-2px_10px_black]",
        className
      )}
      style={style}
      {...props}
    />
  );
}
