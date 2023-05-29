import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

// ===== Workplace =====

export default function Workplace({ children, className }: Props) {
  return <div className={`relative mt-12 ${className}`}>{children}</div>;
}

export function LiveChanges({ children, className }: Props) {
  return <div className={`w-full ${className}`}>{children}</div>;
}

export function BringChanges({ children, className }: Props) {
  return <div className={`w-full ${className}`}>{children}</div>;
}

// ===== Range =====

// ===== checkbox ======

// ===== SaveButton ======
