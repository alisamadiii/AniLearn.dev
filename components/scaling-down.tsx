"use client";

import { useGlobalStore } from "@/context";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ScalingDown({ children }: Props) {
  const { isMenuOpen } = useGlobalStore();

  return (
    <div
      className={`origin-top duration-200 ${
        isMenuOpen ? "-translate-y-12 scale-95" : ""
      }`}
    >
      {children}
    </div>
  );
}
