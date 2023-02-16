import React from "react";

type props = {
  children: React.ReactNode;
};

const Text = ({ children }: props) => {
  return (
    <h1
      style={{
        fontSize: "2em",
        opacity: "0.8",
        lineHeight: "2",
        fontWeight: "bold",
      }}
    >
      {children}
    </h1>
  );
};

export default Text;
