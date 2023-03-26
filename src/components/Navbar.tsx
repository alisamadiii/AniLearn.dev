import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/layouts/Container";

type Props = {};

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Logo from "@/assets/Icons/Logo";
import { AiFillGithub } from "react-icons/ai";

export default function Navbar({}: Props) {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 font-medium bg-white bg-opacity-60 backdrop-blur-md">
      <Container className="items-center justify-between hidden h-20 md:flex">
        <Link
          href={"/"}
          className="flex items-center gap-1 text-xl font-bold text-slate-700 dark:text-white"
        >
          <Logo size="30" /> niLearn.dev
        </Link>
        <ul className="items-center hidden gap-8 md:flex">
          <a
            href="https://github.com/AliReza1083/AniLearn.dev"
            target={"_blank"}
            className="text-2xl"
          >
            <AiFillGithub />
          </a>
          <a
            href="#preview"
            className="hover:text-slate-700 dark:hover:text-dark-primary"
          >
            Preview
          </a>
          <a
            href="#pricing"
            className="hover:text-slate-700 dark:hover:text-dark-primary"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-slate-700 dark:hover:text-dark-primary"
          >
            FAQ
          </a>
        </ul>
      </Container>
      <NavbarSmall />
    </nav>
  );
}

const userToggleAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.1 },
};

const NavbarSmall = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <Container className="grid items-center justify-between h-20 grid-cols-3 md:hidden">
      <div
        className="p-2 rounded-lg justify-self-start bg-slate-100 text-slate-400 hover:text-slate-500 dark:bg-dark-primary dark:text-black"
        onClick={() => setIsNavOpen(true)}
      >
        <AiOutlineMenu />
      </div>
      <div className="flex justify-center">
        <Link href={"/"}>
          <Logo size="30" />
        </Link>
      </div>

      <AnimatePresence mode="wait">
        {isNavOpen && (
          <ul className="absolute top-0 left-0 w-full h-screen p-4 isolate">
            <div
              className="absolute top-0 left-0 w-full h-full bg-slate-800/30 -z-10"
              onClick={() => setIsNavOpen(false)}
            ></div>
            <motion.div
              {...userToggleAnimation}
              className="w-full h-auto p-4 bg-white dark:bg-[#2F3437] rounded-xl"
            >
              <div className="flex items-center justify-between">
                <Link
                  href={"/"}
                  className="text-xl font-bold text-slate-700 dark:text-white"
                >
                  AniLearn.dev
                </Link>
                <div
                  className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:text-slate-500 dark:bg-dark-primary dark:text-black"
                  onClick={() => setIsNavOpen(false)}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="flex flex-col mt-2 text-lg font-medium">
                <a
                  href={"#preview"}
                  className="py-2"
                  onClick={() => setIsNavOpen(false)}
                >
                  Preview
                </a>
                <a
                  href={"#pricing"}
                  className="py-2"
                  onClick={() => setIsNavOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href={"#faq"}
                  className="py-2 mb-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="https://github.com/AliReza1083/AniLearn.dev"
                  target={"_blank"}
                  className="mb-4 text-2xl"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.div>
          </ul>
        )}
      </AnimatePresence>
    </Container>
  );
};
