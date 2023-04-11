import React, { useState } from "react";
import { Variants, motion } from "framer-motion";
import confetti from "canvas-confetti";

type Props = {
  setOpen: (a: boolean) => void;
};

import { CiDiscount1 } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";

const ItemVariants: Variants = {
  hidden: { opacity: 0, y: 1000 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "tween", delay: 1 },
  },
  exit: { opacity: 0, y: 1000, transition: { duration: 1 } },
};

export default function Discount_Code({ setOpen }: Props) {
  const [copied, setCopied] = useState(false);

  const onDragging = (event: any, info: any) => {
    info.offset.y > 100 ? setOpen(false) : setOpen(true);
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
    setCopied(true);
  };

  return (
    <motion.div
      variants={ItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      drag="y"
      dragConstraints={{ bottom: 0, top: 0 }}
      onDragEnd={onDragging}
      className="fixed bottom-0 flex flex-col px-4 py-2 pb-4 bg-white right-4 w-72 rounded-t-xl"
      style={{ boxShadow: "0 0px 20px 2px rgba(0, 255, 0, .2)" }}
    >
      <div className="self-center w-24 h-1 mb-3 bg-gray-300 rounded-full"></div>
      <h3 className="flex items-center gap-2 text-lg font-bold text-green-700">
        <CiDiscount1 className="text-xl" /> <span>Discount Code</span>
      </h3>
      <p className="my-1 text-sm">
        Once the package is released, you may redeem the code to receive a
        discount.
      </p>
      <div className="flex items-center mt-2 overflow-hidden bg-gray-100 rounded-lg">
        <code className="px-3 grow">anilearn83</code>
        <button
          onClick={() => copyToClipboard("anilearn83")}
          className={`px-3 py-2 text-white duration-200 ${
            copied ? "bg-black" : "bg-green-800"
          }`}
        >
          <FiCopy />
        </button>
      </div>
    </motion.div>
  );
}
