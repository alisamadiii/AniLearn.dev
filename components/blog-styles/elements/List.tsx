import React from "react";

type props = {
  children: React.ReactNode;
};

export const UlList = ({ children }: props) => {
  return (
    <ul className="pl-8 mb-8 list-disc md:leading-8 md:text-lg">{children}</ul>
  );
};

export const OlList = ({ children }: props) => {
  return (
    <ol className="pl-8 mb-8 list-decimal md:leading-8 md:text-lg">
      {children}
    </ol>
  );
};
