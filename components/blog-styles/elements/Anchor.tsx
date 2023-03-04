import React from "react";

type props = {
  children: React.ReactNode;
};

const Anchor = ({ ...props }: props) => {
  return (
    <a
      className="relative px-1 py-1 font-medium text-blue-600 duration-200 hover:text-white isolate"
      id="anchor"
      target={"_blank"}
      {...props}
    />
  );
};

export default Anchor;
