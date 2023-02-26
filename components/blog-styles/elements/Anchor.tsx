import React from "react";

type props = {
  children: React.ReactNode;
};

const Anchor = ({ ...props }: props) => {
  return (
    <a
      className="font-medium text-blue-600 underline hover:no-underline"
      target={"_blank"}
      {...props}
    />
  );
};

export default Anchor;
