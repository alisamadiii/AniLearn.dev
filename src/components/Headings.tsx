import React, { ReactNode } from "react";
import localFont from "next/font/local";

// Fonts
const SuisseIntl = localFont({
  src: [
    {
      path: "../assets/Fonts/SuisseIntl-Light.otf",
      weight: "400",
    },
  ],
});

type Props = {
  children: ReactNode;
  className: string;
};

export function Heading_1({ children, className }: Props) {
  return <h1 className={`${SuisseIntl.className} ${className}`}>{children}</h1>;
}
