import React from "react";

type props = {
  children: React.ReactNode;
};

export function Heading({ children }: props) {
  return <h1 className="mb-8 text-4xl font-bold opacity-80">{children}</h1>;
}

export function Heading2({ children }: props) {
  return (
    <h2 className="mt-8 mb-4 text-3xl font-bold opacity-80">{children}</h2>
  );
}

export function Heading3({ children }: props) {
  return (
    <h3 className="mt-8 mb-4 text-2xl font-bold opacity-80">{children}</h3>
  );
}

export function Heading4({ children }: props) {
  return <h4 className="mt-8 mb-4 text-xl font-bold opacity-80">{children}</h4>;
}
