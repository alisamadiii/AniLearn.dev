import React from "react";

type props = {
  children: React.ReactNode;
};

const Text = ({ children }: props) => {
  return <h1 className="text-4xl opacity-80 mb-8 font-bold">{children}</h1>;
};

export default Text;
