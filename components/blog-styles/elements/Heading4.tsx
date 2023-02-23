import React from "react";

type props = {
  children: React.ReactNode;
};

export default function Heading4({ children }: props) {
  return <h4 className="mt-8 mb-4 text-xl font-bold opacity-80">{children}</h4>;
}
