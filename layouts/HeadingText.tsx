import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

import { Manrope } from "@next/font/google";
import { Inter } from "@next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export default function HeadingText({ children, className }: Props) {
  return (
    <h1
      className={`${inter.className} text-heading tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
}
