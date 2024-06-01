import React, { useEffect, useState } from "react";
import { RxCopy } from "react-icons/rx";
import { TbClipboardCheck } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  value: string;
}

export default function CopyButton({ value }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value || "");

    setIsCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsCopied(false), 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  return (
    <button
      className="active-button absolute right-4 top-[9px] z-10 text-lg text-white"
      onClick={handleCopy}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.span
            key={"copied"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
            className="inline-block"
          >
            <TbClipboardCheck />
          </motion.span>
        ) : (
          <motion.span
            key={"copy"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
            className="inline-block"
          >
            <RxCopy />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
