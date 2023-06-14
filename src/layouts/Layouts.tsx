import ExtraInformation from "@components/ExtraInformation";
import Navbar_Tech from "@components/Navbar_Tech";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

import { HiMenuAlt2 } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

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
          <div className="fixed bottom-0 left-0 z-30 w-full h-8 pointer-events-none bg-gradient-to-b from-transparent to-background-clr" />
          <div className="sticky top-0 z-40 flex items-center justify-end gap-4 px-4 text-2xl text-white h-14 bg-box/90 backdrop-blur-sm">
            <a href="#">
              <AiFillGithub />
            </a>
            <HiMenuAlt2
              className="md:hidden"
              onClick={() => setIsNavbar(true)}
            />
          </div>
          {children}
          <ExtraInformation />
        </main>
      </div>
    );
  } else {
    return <main>{children}</main>;
  }
}
