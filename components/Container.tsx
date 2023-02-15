import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`w-full max-w-[1196px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
