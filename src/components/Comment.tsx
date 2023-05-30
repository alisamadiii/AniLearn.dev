import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  comment: string;
  className?: string;
};

import { AiOutlineInfoCircle } from "react-icons/ai";

export default function GivingComment({ children, comment, className }: Props) {
  return (
    <div className={`flex flex-col items-start`}>
      {children}
      <small className="flex items-center gap-2 mt-2">
        <AiOutlineInfoCircle />
        {comment}
      </small>
    </div>
  );
}
