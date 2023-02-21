import React from "react";

type props = {
  children: React.ReactNode;
};

import { IoMdQuote } from "react-icons/io";

const BlockQuote = ({ children }: props) => {
  return (
    <blockquote className="bg-white px-4 py-2 rounded-lg border-2 text-green-700 flex gap-2 items-center">
      <span>
        <IoMdQuote />
      </span>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
