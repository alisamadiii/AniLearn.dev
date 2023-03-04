import React from "react";

type props = {
  children: React.ReactNode;
};

import { IoMdQuote } from "react-icons/io";

const BlockQuote = ({ children }: props) => {
  return (
    // <blockquote className="flex items-center gap-2 px-4 py-2 mb-3 text-green-700 bg-white border-2 border-green-600 rounded-lg">
    //   <span>
    //     <IoMdQuote />
    //   </span>
    //   {children}
    // </blockquote>
    <blockquote className="flex items-center gap-2 px-4 py-2 mb-3 bg-[#ffe564] bg-opacity-60 rounded-lg">
      <span>
        <IoMdQuote />
      </span>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
