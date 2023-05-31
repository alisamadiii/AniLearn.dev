import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`w-full max-w-container mx-auto ${className} px-4 md:px-12 lg:px-8`}
    >
      {children}
    </div>
  );
}
