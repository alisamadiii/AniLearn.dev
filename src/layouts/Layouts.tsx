import Navbar_Tech from "@components/Navbar_Tech";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function Layouts({ children }: Props) {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    isNavbar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isNavbar]);

  if (router.pathname != "/") {
    return (
      <div className="flex">
        <Navbar_Tech isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
        <main
          className={`relative w-full duration-200 ${
            isNavbar && "translate-y-5 opacity-60"
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-l from-primary to-secondary blur-[100px] -z-50" />
          <div className="absolute inset-0 w-full bg-pattern -z-40" />
          {children}
        </main>
      </div>
    );
  } else {
    return <main>{children}</main>;
  }
}
