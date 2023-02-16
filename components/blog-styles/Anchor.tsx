import React from "react";

type props = {
  children: React.ReactNode;
};

const Anchor = ({ ...props }: props) => {
  return (
    <a
      className="text-blue-600 font-medium underline hover:no-underline"
      {...props}
    />
  );
};

export default Anchor;
