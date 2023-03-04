import HeadingText from "@/layouts/HeadingText";
import React from "react";

type props = {
  children: React.ReactNode;
};

export function Heading({ children }: props) {
  return (
    <HeadingText className="border-b-2 pb-4 relative mb-8 text-4xl font-black opacity-80 before:hidden xl:before:block before:content-['#'] before:absolute before:-left-8 before:opacity-0 hover:before:opacity-100 before:text-primary">
      {children}
    </HeadingText>
  );
}

export function Heading2({ children }: props) {
  return (
    <h2 className="relative mt-8 mb-4 text-3xl font-bold opacity-80 before:hidden xl:before:block before:content-['#'] before:absolute before:-left-8 before:opacity-0 hover:before:opacity-100 before:text-primary">
      {children}
    </h2>
  );
}

export function Heading3({ children }: props) {
  return (
    <h3 className="relative mt-8 mb-4 text-2xl font-bold opacity-80 before:hidden xl:before:block before:content-['#'] before:absolute before:-left-8 before:opacity-0 hover:before:opacity-100 before:text-primary">
      {children}
    </h3>
  );
}

export function Heading4({ children }: props) {
  return (
    <h4 className="relative mt-8 mb-4 text-xl font-bold opacity-80 before:hidden xl:before:block before:content-['#'] before:absolute before:-left-8 before:opacity-0 hover:before:opacity-100 before:text-primary">
      {children}
    </h4>
  );
}
