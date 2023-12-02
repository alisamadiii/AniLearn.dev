"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, type Variants, motion } from "framer-motion";

export default function ScrollUp() {
  const [show, setShow] = useState(false);

  const animate: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          variants={animate}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2, type: "tween" }}
          className="py-1 text-sm text-muted hover:text-foreground"
        >
          Scroll to top
        </motion.a>
      )}
    </AnimatePresence>
  );
}
