"use client";

import { cn } from "@/utils";
import React, { type HTMLAttributes } from "react";
import { type HTMLMotionProps, motion } from "framer-motion";

type Props = HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">;

export function Box({ className, ...props }: Props) {
  return (
    <motion.div
      className={cn(
        "h-52 grow rounded-lg border border-foreground/10 bg-box p-2 backdrop-blur-3xl",
        className
      )}
      {...props}
    />
  );
}
