import React from "react";

type Props = {
  children: React.ReactNode;
};

import { BiCheckShield } from "react-icons/bi";

export default function Success({ children }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mb-3 border-2 rounded-lg border-success shadow-success">
      <span className="text-success">
        <BiCheckShield />
      </span>
      {children}
    </div>
  );
}
