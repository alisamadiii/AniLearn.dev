"use client";

import React, { useEffect } from "react";
import LeftNavbarItems from "./left-navbar";
import { useGlobalStore } from "@/context";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { TfiMenuAlt } from "react-icons/tfi";

export default function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useGlobalStore();

  const scrollingUp: Variants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
    exit: { y: "100%" },
  };
  const vanishing: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    const hiddenBody = () => {
      isMenuOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");
    };

    hiddenBody();
  }, [isMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <nav className="fixed bottom-0 left-0 z-50 h-full w-full md:hidden">
            <motion.div
              variants={vanishing}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-background/90"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
            <motion.div
              variants={scrollingUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.2 }}
              className="absolute bottom-0 left-0 flex max-h-[75dvh] w-full flex-col overflow-hidden rounded-t-xl border-t border-foreground/20 bg-background"
            >
              <div className="absolute left-1/2 top-0 flex h-6 w-full -translate-x-1/2 items-center justify-center bg-background/70 backdrop-blur">
                <div className=" h-0.5 w-6 rounded-full bg-muted" />
              </div>
              <div className="h-full overflow-auto px-4 pb-4 pt-8">
                <LeftNavbarItems techs="HTML" />
                <LeftNavbarItems techs="CSS" />
                <LeftNavbarItems techs="JavaScript" />
              </div>
            </motion.div>
          </nav>
        )}
      </AnimatePresence>

      <button
        className="fixed bottom-4 right-4 z-40 rounded border border-foreground/20 bg-background p-1 text-xl md:hidden"
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <TfiMenuAlt />
      </button>
    </>
  );
}
