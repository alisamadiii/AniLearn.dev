import React from "react";

type Props = {
  children: React.ReactNode;
};

import { BiCheckShield } from "react-icons/bi";
import { AiFillWarning } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

export function Success({ children }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mb-3 border-2 rounded-lg border-success shadow-success">
      <span className="text-success">
        <BiCheckShield />
      </span>
      {children}
    </div>
  );
}

export function Warning({ children }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mb-3 border-2 rounded-lg border-warning shadow-warning">
      <span className="text-warning">
        <AiFillWarning />
      </span>
      {children}
    </div>
  );
}

export function Error({ children }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mb-3 border-2 rounded-lg border-error shadow-error">
      <span className="text-error">
        <BiErrorCircle />
      </span>
      {children}
    </div>
  );
}
