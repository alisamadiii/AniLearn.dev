import React from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
};

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

export default function SaveNotification({ name }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed flex items-center gap-1 px-4 py-2 text-font-clr rounded-md bottom-4 right-4 bg-box">
      <motion.p
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 10 }}
        className="text-xl text-green-500">
        <AiFillCheckCircle />
      </motion.p>
      {name}
    </motion.div>
  );
}
