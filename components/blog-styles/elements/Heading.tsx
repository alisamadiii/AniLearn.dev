import HeadingText from "@/layouts/HeadingText";
import React from "react";

type props = {
  children: React.ReactNode;
};

export function Heading({ children }: props) {
  return (
    <HeadingText className="relative py-4 mb-8 text-4xl font-black border-b-2 opacity-80 link-heading">
      {children}
    </HeadingText>
  );
}

export function Heading2({ children }: props) {
  return (
    <h2 className="relative mt-8 mb-4 text-3xl font-bold leading-10 text-heading opacity-80 link-heading">
      {children}
    </h2>
  );
}

export function Heading3({ children }: props) {
  return (
    <h3 className="relative flex items-center gap-1 mt-8 mb-4 text-2xl font-bold text-heading opacity-80 link-heading">
      {children}
    </h3>
  );
}

export function Heading4({ children }: props) {
  return (
    <h4 className="relative mt-8 mb-4 text-xl font-bold text-heading opacity-80 link-heading">
      {children}
    </h4>
  );
}
