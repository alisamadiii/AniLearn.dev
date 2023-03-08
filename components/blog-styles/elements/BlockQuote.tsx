import React from "react";

type props = {
  children: React.ReactNode;
};

import { IoMdQuote } from "react-icons/io";

const BlockQuote = ({ children }: props) => {
  return (
    <blockquote className="flex items-center gap-2 px-4 py-2 mb-3 bg-[#1e293b] text-white rounded-lg">
      <span>
        <IoMdQuote />
      </span>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
