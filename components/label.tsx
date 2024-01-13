import { cn } from "@/utils";
import React, { type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLLabelElement> {}

export default function Label({ className, ...props }: Props) {
  return (
    <label
      className={cn("flex select-none items-center gap-2", className)}
      {...props}
    />
  );
}
