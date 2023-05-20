import React from "react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  content: string;
};

// Icons
import { MdContentCopy } from "react-icons/md";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

export default function SaveButton({ content }: Props) {
  const [disable, setDisable] = useState(false);
  const [isSaved, setIsSaved] = useState<[string, boolean]>(["Copy", false]);

  const copyFunction = () => {
    navigator.clipboard.writeText(content);
    setIsSaved(["Copied", true]);
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
    setDisable(true);

    setTimeout(() => {
      setIsSaved(["Copy", false]);
      setDisable(false);
    }, 3000);
  };

  const duration = 0.1;

  return (
    <motion.button
      onClick={copyFunction}
      className={`flex items-center gap-2 px-3 py-2 mt-7 text-white rounded-md ${
        isSaved[1] ? "bg-green-600" : "bg-primary"
      } ${!disable ? "cursor-pointer" : "cursor-not-allowed"}`}
      disabled={disable}
    >
      <AnimatePresence mode="wait">
        {isSaved[1] ? (
          <motion.span
            key={1}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration }}
          >
            <BsFillClipboard2CheckFill />
          </motion.span>
        ) : (
          <motion.span
            key={2}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration }}
          >
            <MdContentCopy />
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={isSaved[0]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration, delay: 0.04 }}
        >
          {isSaved[0]}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
