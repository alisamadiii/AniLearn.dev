import ExtraInformation from "@components/ExtraInformation";
import Navbar_Tech from "@components/Navbar_Tech";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Props = {
  children: ReactNode;
};

import { HiMenuAlt2 } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { Dropdown } from "@components/Tech";

export default function Layouts({ children }: Props) {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    isNavbar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isNavbar]);

  useEffect(() => {
    theme == "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [theme]);

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
          <div className="sticky top-0 z-40 flex items-center justify-end gap-4 px-4 text-font-clr h-14 bg-box/95 backdrop-blur-sm">
            <Dropdown
              name="Theme"
              lists={["dark", "light"]}
              stateValue={theme}
              setStateValue={setTheme}
              margin={false}
            />
            <a href="#" className="text-2xl">
              <AiFillGithub />
            </a>
            <HiMenuAlt2
              className="text-2xl md:hidden"
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
