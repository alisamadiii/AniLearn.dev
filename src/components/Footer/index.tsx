import Logo from "@assets/Logo";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { buttonVariants } from "@components/Button";

export default function Footer({}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    theme == "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [theme]);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex flex-col justify-center w-full gap-4 p-4 mt-12 md:h-24 md:items-center md:flex-row bg-box dark:bg-box-d">
      <h1 className="flex items-center gap-2 text-2xl text-black dark:text-white">
        <Logo />
        AniLearn
      </h1>
      <ul className="flex flex-col md:flex-row">
        <Link
          href={"/"}
          className={buttonVariants({ variant: "footer" })}>
          Home
        </Link>
        <Link
          href={"/about"}
          className={buttonVariants({ variant: "footer" })}>
          About
        </Link>
        <Link
          href={"/html/inputs"}
          className={buttonVariants({ variant: "footer" })}>
          Learning
        </Link>
        <Link
          href={"https://github.com/AliReza1083/AniLearn.dev"}
          className={buttonVariants({ variant: "footer" })}>
          GitHub
        </Link>
        <Link
          href={"/features"}
          className={buttonVariants({ variant: "footer" })}>
          Features
        </Link>
        <Link
          href={"https://github.com/AliReza1083/AniLearn.dev/issues/new/choose"}
          className={buttonVariants({ variant: "footer" })}>
          Found issue?
        </Link>
        <AnimatePresence>
          <button
            onClick={() => setTheme(currentTheme == "dark" ? "light" : "dark")}
            className="self-center p-2 border rounded-md border-white-low-opacity dark:border-white-low-opacity-d">
            {currentTheme == "light" ? (
              <motion.p exit={{ x: 40 }}>
                <BsFillMoonFill />
              </motion.p>
            ) : (
              <motion.p
                exit={{ x: 40 }}
                transition={{ duration: 1 }}>
                <BsSun />
              </motion.p>
            )}
          </button>
        </AnimatePresence>
      </ul>
    </div>
  );
}
