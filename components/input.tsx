import { cn } from "@/utils";
import React, { type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: Props) {
  return (
    <input
      type="text"
      className={cn(
        "w-full rounded border border-foreground/20 bg-transparent p-2 outline-none duration-200 focus:shadow-ham-menu",
        className
      )}
      {...props}
    />
  );
}
