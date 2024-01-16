"use client";

import { type Variants, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { IoMdMenu, IoMdClose } from "react-icons/io";
import Button, { buttonVariants } from "./button";
import { useGlobalStore } from "@/context";
import Theme from "./theme";

const navItems = {
  "/techs/html": {
    name: "HTML",
  },
  "/techs/css": {
    name: "CSS",
  },
  "/techs/javascript": {
    name: "JavaScript",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setHoverTech } = useGlobalStore();

  const listAnimate: Variants = {
    hidden: { height: 0 },
    visible: { height: "auto" },
    exit: { height: 0 },
  };
  const itemsAnimate: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -30, opacity: 0 },
  };

  const mouseMove = (value: "html" | "css" | "javascript") => {
    setHoverTech(value);
  };
  const mouseLeave = () => {
    setHoverTech(null);
  };

  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-background px-4 shadow-navbar">
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="text-xl font-bold">
            AniLearn.dev
          </Link>
          <ul className="hidden md:flex">
            {Object.entries(navItems).map(([path, { name }], index) => {
              return (
                <motion.li
                  key={index}
                  variants={itemsAnimate}
                  transition={{
                    delay: 0.05 * index,
                    type: "tween",
                    ease: "easeOut",
                  }}
                  className="px-4 text-foreground/70 hover:text-foreground"
                  /* eslint-disable */
                  // @ts-ignore
                  onMouseEnter={() => mouseMove(name.toLowerCase())}
                  /* eslint-enable */
                  onMouseLeave={mouseLeave}
                >
                  <Link href={path} className="inline-block w-full text-sm">
                    {name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={listAnimate}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", ease: [0.33, 1, 0.68, 1] }}
                className="absolute left-0 top-16 w-full overflow-hidden rounded-b-xl md:hidden"
              >
                <ul className="flex flex-col gap-2 bg-background/90 p-4 backdrop-blur-sm">
                  {Object.entries(navItems).map(([path, { name }], index) => {
                    return (
                      <motion.li
                        key={index}
                        variants={itemsAnimate}
                        transition={{
                          delay: 0.05 * index,
                          type: "tween",
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        className="text-foreground/70 hover:text-foreground"
                      >
                        <Link href={path} className="inline-block w-full">
                          {name}
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    variants={itemsAnimate}
                    transition={{
                      delay: 0.1,
                      type: "tween",
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="mt-4"
                  >
                    <Link
                      href={""}
                      className={buttonVariants({
                        variant: "default",
                        className: "py-2",
                      })}
                    >
                      Get started
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3">
          <Theme />
          <button
            className="relative rounded border border-foreground/20 p-0.5 text-xl text-foreground/80 duration-200 focus:border-foreground focus:shadow-ham-menu md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
          <div className="hidden md:block">
            <Button variant={"default"}>Get start</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
