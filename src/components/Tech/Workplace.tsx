import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
};

// ===== Workplace =====

export default function Workplace({ children, className }: Props) {
  return (
    <div className="mt-4 mb-12">
      <h1 className="pb-2 mt-8 text-3xl font-semibold text-white capitalize border-b-2 border-white-low-opacity before:absolute before:w-3 before:h-3 before:bg-primary before:left-0 before:-translate-x-1 before:rounded-full">
        Working Place
      </h1>
      <p className="mt-2 mb-8">This is the place where you can try them.</p>
      <div className={twMerge("relative", className)}>{children}</div>
    </div>
  );
}

export function LiveChanges({ children, className }: Props) {
  return <div className={twMerge("w-full", className)}>{children}</div>;
}

export function BringChanges({ children, className }: Props) {
  return <div className={twMerge("w-full", className)}>{children}</div>;
}

// ===== Range =====

// ===== checkbox ======

// ===== SaveButton ======
