import React, { ReactNode } from "react";
import localFont from "next/font/local";

type Props = {
  children: ReactNode;
  margin?: boolean;
};

// Fonts
const SuisseIntl = localFont({
  src: [
    {
      path: "../../assets/Fonts/SuisseIntl-Light.otf",
      weight: "400",
    },
  ],
});

export function Heading_1({ children }: Props) {
  return (
    <h1 className={`${SuisseIntl.className} mt-1 mb-3 text-5xl text-white`}>
      {children}
    </h1>
  );
}

export function Heading_2({ children, margin }: Props) {
  return (
    <h2
      className={`${SuisseIntl.className} ${
        margin && "mt-12 mb-3"
      } text-4xl text-white`}
    >
      {children}
    </h2>
  );
}

export function Heading_3({ children, margin }: Props) {
  return (
    <h3
      className={`${SuisseIntl.className} ${
        margin && "mt-8"
      } text-3xl text-white`}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children, margin }: Props) {
  return <p className={`text-lg font-light ${margin && "mb-3"}`}>{children}</p>;
}
