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
      className={`${SuisseIntl.className} mt-1 mb-3 text-5xl text-white`}
      {...otherProps}
    >
      {children}
    </h1>
  );
}

export function Heading_2({ children }: Props) {
  return (
    <h2 className={`${SuisseIntl.className} text-4xl text-white mt-12 mb-3`}>
      {children}
    </h2>
  );
}

export function Heading_3({ children }: Props) {
  return (
    <h3 className={`${SuisseIntl.className} text-3xl text-white mt-12 mb-3`}>
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
