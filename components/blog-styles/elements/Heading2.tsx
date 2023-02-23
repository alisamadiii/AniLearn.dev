import React from "react";

type props = {
  children: React.ReactNode;
};

export default function Heading2({ children }: props) {
  return (
    <h2 className="mt-8 mb-4 text-3xl font-bold opacity-80">{children}</h2>
  );
}
