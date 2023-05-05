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
        <main className="w-full">{children}</main>
      </div>
    );
  } else {
    return <main>{children}</main>;
  }
}
