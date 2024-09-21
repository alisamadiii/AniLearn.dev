import React, { HTMLAttributes } from "react";

import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Wrapper({ children, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative mb-12 flex min-h-96 flex-col items-center justify-center gap-6 overflow-hidden rounded-md border-wrapper px-4 py-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
