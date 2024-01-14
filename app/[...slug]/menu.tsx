"use client";

import React, { useEffect, useState } from "react";
import LeftNavbarItems from "./left-navbar";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { TfiMenuAlt } from "react-icons/tfi";
import { useMenuBar } from "@/hooks/useModal";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useMenuBar();
  const [opacity, setOpacity] = useState(0.9);

  const scrollingUp: Variants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
    exit: { y: "100%" },
  };

  useEffect(() => {
    const hiddenBody = () => {
      isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");
    };

    hiddenBody();
  }, [isOpen]);

  const onDragEnd = (event: any, info: any) => {
    if (info.offset.y >= 200) {
      onClose();
      setOpacity(0.9);
    }
  };

  const handleDrag = (event: any, info: any) => {
    // Update the height of the section based on the drag position
    if (isOpen && info.offset.y >= 0) {
      const scaleFactor = 1 - info.offset.y / 800;

      if (scaleFactor <= 0.9) {
        setOpacity(scaleFactor);
      }
    }
  };

  console.log(opacity);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <nav className="fixed bottom-0 left-0 z-50 h-full w-full md:hidden">
            <div className="absolute inset-0 bg-background" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 h-36 w-full bg-background"
            />
            <motion.div
              variants={scrollingUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.2 }}
              drag={"y"}
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={onDragEnd}
              onDrag={handleDrag}
              className="absolute bottom-0 left-0 flex max-h-[75dvh] w-full flex-col rounded-t-xl border-t border-foreground/20 bg-background"
            >
              <div className="absolute left-1/2 top-0 flex h-4 w-full -translate-x-1/2 items-center justify-center bg-background/70 backdrop-blur">
                <div className="h-0.5 w-6 rounded-full bg-muted" />
              </div>
              <div className="h-full px-4 pb-4 pt-8">
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
        onClick={onOpen}
      >
        <TfiMenuAlt />
      </button>
    </>
  );
}
