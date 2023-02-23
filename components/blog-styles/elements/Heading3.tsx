import React from "react";

type props = {
  children: React.ReactNode;
};

export default function Heading3({ children }: props) {
  return (
    <h3 className="mt-8 mb-4 text-2xl font-bold opacity-80">{children}</h3>
  );
}
