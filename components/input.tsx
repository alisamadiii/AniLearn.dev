import { cn } from "@/utils";
import React, { type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: Props) {
  return (
    <input
      type="text"
      className={cn(
        "w-72 rounded border border-foreground/20 bg-background p-2 outline-none duration-100 focus:border-foreground",
        className
      )}
      placeholder="type..."
      {...props}
    />
  );
}
