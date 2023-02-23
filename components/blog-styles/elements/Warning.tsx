import React from "react";

type Props = {
  children: React.ReactNode;
};

import { AiFillWarning } from "react-icons/ai";

export default function Warning({ children }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mb-3 border-2 rounded-lg border-warning shadow-warning">
      <span className="text-warning">
        <AiFillWarning />
      </span>
      {children}
    </div>
  );
}
