import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  faq: { num: number; question: string; answer: string };
  faqNum: number;
  setFaqNum: (a: number) => void;
};

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function FAQ({ faq, faqNum, setFaqNum }: Props) {
  const { num, question, answer } = faq;
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`w-full max-w-[800px] mx-auto rounded-md mb-4 bg-slate-500/10 overflow-hidden text-xl`}
    >
      <div
        onClick={() => setFaqNum(num)}
        className={`flex justify-between items-center p-4 font-semibold duration-150 cursor-pointer ${
          faqNum == num && "text-slate-900 bg-slate-500/20"
        }`}
      >
        <h3>{question}</h3>
        {faqNum == num ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <AnimatePresence mode="wait">
        {faqNum == num && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
