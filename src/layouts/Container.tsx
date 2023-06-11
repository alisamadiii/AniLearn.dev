import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "w-full max-w-container mx-auto px-4 md:px-12 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
