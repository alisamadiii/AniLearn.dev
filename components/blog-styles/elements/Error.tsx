import React from "react";

type Props = {
  children: React.ReactNode;
};

import { BiErrorCircle } from "react-icons/bi";

export default function Error({ children }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mb-3 border-2 rounded-lg border-error shadow-error">
      <span className="text-error">
        <BiErrorCircle />
      </span>
      {children}
    </div>
  );
}
