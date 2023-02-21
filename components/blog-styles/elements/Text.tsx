import React from "react";

type props = {
  children: React.ReactNode;
};

const Text = ({ children }: props) => {
  return <p className="my-3">{children}</p>;
};

export default Text;
