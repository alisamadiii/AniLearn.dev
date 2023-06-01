import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  comment: string;
  className?: string;
};

import { AiOutlineInfoCircle } from "react-icons/ai";

export default function GivingComment({ children, comment, className }: Props) {
  return (
    <div className={twMerge("flex flex-col", className)}>
      {children}
      <small className="flex items-center gap-2 mt-2">
        <AiOutlineInfoCircle />
        {comment}
      </small>
    </div>
  );
}
