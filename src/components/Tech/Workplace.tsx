import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
};

import { BsFlag } from "react-icons/bs";

// ===== Workplace =====

export default function Workplace({ children, className }: Props) {
  return (
    <div className="mt-4 mb-12">
      <h1 className="flex gap-2 pb-2 mt-12 text-3xl font-semibold text-black capitalize border-b-2 dark:text-white group border-white-low-opacity dark:border-white-low-opacity-d">
        <BsFlag className="group-hover:animate-flag-icon" />
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
