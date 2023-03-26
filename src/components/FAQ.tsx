import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  faq: { num: number; question: string; answer: string };
};

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function FAQ({ faq }: Props) {
  const { num, question, answer } = faq;
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`w-full max-w-[800px] mx-auto rounded-md mb-4 bg-slate-500/10 overflow-hidden text-xl`}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex justify-between items-center p-4 font-semibold duration-150 cursor-pointer ${
          toggle && "text-slate-900 bg-slate-500/20"
        }`}
      >
        <h3>{question}</h3>
        {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <AnimatePresence mode="wait">
        {toggle && (
          <div className={`duration-500 overflow-hidden text-lg p-4 `}>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-2 border-l-2 border-slate-300"
            >
              {answer}
            </motion.p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
