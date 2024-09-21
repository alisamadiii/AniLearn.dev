"use client";

import React from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils";

type Props = {
  children?: React.ReactNode;
  align?: "start" | "end" | "center";
  exit?: boolean | "mobile" | "desktop";
};

const lists = ["Hello", "World", "This", "Is", "A", "Test"];

export function Dropdown({ children, align = "center", exit = true }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[#0974ED] outline-none disabled:opacity-50"
          aria-label="Customise options"
          disabled={isOpen}
        >
          Open
        </button>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu.Content
            asChild
            forceMount
            sideOffset={8}
            align={align}
            className="z-50"
          >
            <motion.div
              initial={{ scale: "var(--initial-scale)" }}
              animate={{ scale: "var(--animate-scale)" }}
              exit={{ scale: "var(--exit-scale)" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.3,
                bounce: 0.3,
              }}
              className={cn(
                "w-[200px] rounded-xl bg-white shadow-[0_0_40px_0px_rgba(0,0,0,0.1)] [--animate-scale:1] [--initial-scale:0]",
                align === "start" && "origin-top-left",
                align === "end" && "origin-top-right",
                align === "center" && "origin-top",
                exit === true && "[--exit-scale:0]",
                exit === "mobile" && "max-md:[--exit-scale:0]",
                exit === "desktop" && "md:[--exit-scale:0]"
              )}
            >
              {/* {lists.map((list) => (
                <DropdownMenu.Item className="flex h-8 items-center px-8 outline-none">
                  <span>{list}</span>
                </DropdownMenu.Item>
              ))} */}
              {children}
            </motion.div>
          </DropdownMenu.Content>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}
