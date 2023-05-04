import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`w-full max-w-[1249px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
