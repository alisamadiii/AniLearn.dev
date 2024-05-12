"use client";

import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

export default function TopBanner() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative z-50 flex items-center">
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full"
          >
            <div className="flex w-full items-center justify-center bg-primary py-2 text-center text-xs md:text-sm">
              <Balancer>
                This project is{" "}
                <a
                  href="https://github.com/AliReza1083/AniLearn.dev"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  open-source
                </a>
                . Come and contribute, and let&apos;s work together to improve
                it. 🎉✨
              </Balancer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="absolute right-4"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <IoCloseSharp />
      </button>
    </div>
  );
}
