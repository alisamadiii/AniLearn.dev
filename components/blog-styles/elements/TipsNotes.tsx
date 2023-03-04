import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Tips({ children }: Props) {
  return (
    <div
      id="tips"
      className="p-4 border-l-8 border-primary bg-opacity-20 bg-primary"
    >
      <p className="text-xl font-bold">Tips</p>
      {children}
    </div>
  );
}

export function Notes({ children }: Props) {
  return (
    <div
      id="notes"
      className="p-4 bg-opacity-25 border-l-8 border-primary bg-primary"
    >
      <p className="text-xl font-bold">Notes</p>
      {children}
    </div>
  );
}
