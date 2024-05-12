"use client";

import {
  type Variants,
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { IoMdMenu, IoMdClose } from "react-icons/io";
import Button, { buttonVariants } from "./button";
import { useGlobalStore } from "@/context";
import Theme from "./theme";
import { usePathname } from "next/navigation";

const navItems = {
  "/learn": {
    name: "Learn",
  },
  "/components": {
    name: "Components",
  },
  "/compare-design": {
    name: "Compare design",
  },
  "/resources": {
    name: "Resources",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  console.log("navbar");

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 h-20 w-full">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-16 -z-20 h-screen w-full bg-white/50 backdrop-blur-sm dark:bg-black/50 md:hidden"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          )}
        </AnimatePresence>
        <div
          className={`mx-auto flex h-full items-center justify-between border-b border-[#DEE7EB] bg-[#F3F7F9] duration-200 ${pathName !== "/" ? "max-w-full px-4" : "max-w-4xl px-4 md:px-0"} `}
        >
          <Link
            href={"/"}
            className="text-xl font-medium text-[#263C48] duration-200 active:scale-95"
          >
            AniLearn
          </Link>
          <ul
            id="nav-links"
            className="col-span-3 hidden justify-center md:flex"
          >
            {Object.entries(navItems).map(([path, { name }], index) => {
              return (
                <li key={name} className="px-4 text-[#263C48]">
                  <Link
                    href={path}
                    className="inline-block w-full duration-200 active:scale-95"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-3">
            {/* <Theme /> */}
            <button
              className="active-button relative text-2xl text-foreground/80 duration-100 md:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <IoMdMenu />
            </button>
            <div className="hidden md:block">
              <Button variant={"default"}>Get start</Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              type: "spring",
              duration: 0.4,
              bounce: 0,
            }}
            className="bg fixed left-0 top-0 z-50 h-dvh w-full overflow-hidden rounded-b-xl bg-white md:hidden"
          >
            <ul className="flex flex-col gap-2 p-4 backdrop-blur-sm">
              <button
                onClick={() => setIsOpen(false)}
                className="mb-4 w-full text-start opacity-50"
              >
                Close
              </button>
              {Object.entries(navItems).map(([path, { name }], index) => {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index + 0.1,
                      type: "tween",
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="text-foreground/70 hover:text-foreground"
                  >
                    <Link href={path} className="inline-block w-full text-2xl">
                      {name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
