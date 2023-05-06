import Navbar_Tech from "@components/Navbar_Tech";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layouts({ children }: Props) {
  const router = useRouter();

  if (router.pathname != "/") {
    return (
      <div className="flex">
        <Navbar_Tech />
        <main className="relative w-full">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-l from-primary to-secondary blur-[100px] -z-50" />
          <div className="absolute inset-0 w-full bg-pattern -z-40" />
          {children}
        </main>
      </div>
    );
  } else {
    return <main>{children}</main>;
  }
}
