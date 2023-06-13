import ExtraInformation from "@components/ExtraInformation";
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
          className={`relative w-full duration-200 pb-12 ${
            isNavbar && "translate-y-5 opacity-60"
          }`}
        >
          <div className="fixed top-0 left-0 z-30 w-full h-8 pointer-events-none bg-gradient-to-t from-transparent to-background-clr" />
          {children}
          <ExtraInformation />
        </main>
      </div>
    );
  } else {
    return <main>{children}</main>;
  }
}
