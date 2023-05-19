import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Workplace({ children }: Props) {
  return <div>{children}</div>;
}
