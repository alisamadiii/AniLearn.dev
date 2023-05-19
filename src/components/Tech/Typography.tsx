import React, { ReactNode } from "react";
import localFont from "next/font/local";

type Props = {
  children: ReactNode;
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

export function Heading_1({ children, ...otherProps }: Props) {
  return (
    <h1
      className={`${SuisseIntl.className} relative mt-1 mb-3 pb-2 text-5xl text-white border-b-2 border-white-low-opacity`}
      {...otherProps}
    >
      {children}
    </h1>
  );
}

export function Heading_2({ children, ...otherProps }: Props) {
  return (
    <h2
      className={`${SuisseIntl.className} relative text-4xl text-white mt-12 mb-3`}
      {...otherProps}
    >
      {children}
    </h2>
  );
}

export function Heading_3({ children, ...otherProps }: Props) {
  return (
    <h3
      className={`${SuisseIntl.className} relative text-3xl text-white mt-12 mb-3`}
      {...otherProps}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children }: Props) {
  return <p className={`text-lg font-light mb-3`}>{children}</p>;
}

export function Small_Gradient({ children }: Props) {
  return (
    <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
      {children}
    </small>
  );
}
