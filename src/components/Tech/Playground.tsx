import React from "react";
import { cn } from "@utils/ClassName";
import { motion, MotionProps } from "framer-motion";

// @ts-expect-error I don't how to work MotionProps Types
interface Props extends React.HTMLAttributes<HTMLDivElement>, MotionProps {}

const Playground = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  return (
    // @ts-expect-error I don't how to work MotionProps Types
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full gap-1 p-4 mx-auto overflow-hidden border rounded-lg isolate bg-box/50 dark:bg-box-d border-white-low-opacity dark:border-white-low-opacity-d",
        className
      )}
      {...props}
    />
  );
});

Playground.displayName = "Playground";

export default Playground;
