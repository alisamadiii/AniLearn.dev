import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

import { Manrope } from "@next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export default function HeadingText({ children, className }: Props) {
  return <h1 className={`${manrope.className} ${className}`}>{children}</h1>;
}
