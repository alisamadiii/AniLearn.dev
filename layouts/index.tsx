import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layouts({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className="background"></div>
      <main>{children}</main>
    </div>
  );
}
