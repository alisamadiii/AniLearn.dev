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
import SearchBox from "@components/SearchBox";
import Footer from "@components/Footer";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Container from "./Container";
import Logo from "@assets/Logo";

export default function Layouts({ children }: Props) {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const [navbarBg, setNavbarBg] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    isNavbar ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
  }, [isNavbar]);

  useEffect(() => {
    theme == "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 100 ? setNavbarBg(true) : setNavbarBg(false);
    });
  }, []);

  if (router.pathname.includes("/css") || router.pathname.includes("/html")) {
    return (
      <>
        <div className="flex">
          <Navbar_Tech
            isNavbar={isNavbar}
            setIsNavbar={setIsNavbar}
          />
          <main className={`relative w-full duration-200 pb-12 ${isNavbar && "translate-y-5 opacity-60"}`}>
            <div className="fixed bottom-0 left-0 z-30 w-full h-8 pointer-events-none bg-gradient-to-b from-transparent to-background-clr dark:to-background-clr-d" />
            <div className="sticky top-0 z-40 flex items-center justify-end gap-4 px-4 text-font-clr dark:text-font-clr-d h-14 bg-box/70 dark:bg-box-d/70 backdrop-blur-sm">
              <SearchBox />
              <Dropdown
                name="Theme"
                lists={["dark", "light"]}
                stateValue={theme}
                setStateValue={setTheme}
                margin={false}
              />
              <a
                href="#"
                className="text-2xl">
                <AiFillGithub />
              </a>
              <HiMenuAlt2
                className="text-2xl md:hidden"
                onClick={() => setIsNavbar(true)}
              />
            </div>
            <main>{children}</main>
            <ExtraInformation />
          </main>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <nav
          className={`fixed top-0 left-0 z-50 flex items-center w-full h-16 duration-200 backdrop-blur ${
            navbarBg && "bg-background-clr/60 dark:bg-background-clr-d/60"
          }`}>
          <Container className="flex items-center justify-between">
            <Link
              href={"/"}
              className="flex items-center gap-1 text-lg font-semibold text-black dark:text-white group">
              <Logo />
              AniLearn.dev
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/AliReza1083/AniLearn.dev"
                target="_blank"
                className="text-2xl hover:text-font-clr dark:hover:text-white">
                <AiFillGithub />
              </a>
              <Link
                href={"#get-started"}
                scroll={false}
                className="flex items-center px-4 py-2 text-xs rounded-full bg-button dark:bg-button-d group">
                Start Now
                <IoIosArrowForward className="duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Container>
        </nav>
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
