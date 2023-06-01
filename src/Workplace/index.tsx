import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
};

// ===== Workplace =====

export default function Workplace({ children, className }: Props) {
  return <div className={twMerge("relative mt-12", className)}>{children}</div>;
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
