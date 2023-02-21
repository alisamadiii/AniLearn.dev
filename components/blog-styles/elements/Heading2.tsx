import React from "react";

type props = {
  children: React.ReactNode;
};

const Text = ({ children }: props) => {
  return (
    <h2 className="text-2xl opacity-80 mt-8 mb-4 font-bold">{children}</h2>
  );
};

export default Text;
