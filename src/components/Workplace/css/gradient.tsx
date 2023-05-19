import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

import { Gradients } from "@contents/Gradients";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SaveButton from "@components/SaveButton";

// ======= Background Gradient ========
export default function Gradient({}: Props) {
  const [selectedGradient, setSelectedGradient] = useState<number>(0);

  const changingGradient = (job: "increase" | "decrease") => {
    if (job == "increase") {
      setSelectedGradient(selectedGradient + 1);
    } else {
      if (selectedGradient == 0) return;

      setSelectedGradient(selectedGradient - 1);
    }
  };

  const Content = `
/* Background Gradient */
background: linear-gradient(${45}deg, ${Gradients[selectedGradient].colors.join(
    ", "
  )}); // ${Gradients[selectedGradient].name}

/* Text Gradient */
background: linear-gradient(${45}deg, ${Gradients[selectedGradient].colors.join(
    ", "
  )}); // ${Gradients[selectedGradient].name}
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  `;

  return (
    <div>
      <motion.section layout className="relative my-12">
        <motion.div
          key={Math.floor(Math.random() * 1000)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute w-full h-52 rounded-xl -z-10 blur-2xl"
          style={{
            background: `linear-gradient(${45}deg, ${Gradients[
              selectedGradient
            ].colors.map((color) => `${color}80`)})`,
          }}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={Math.floor(Math.random() * 1000)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full py-4 font-medium text-center text-white h-52 rounded-xl"
            style={{
              background: `linear-gradient(${45}deg, ${Gradients[
                selectedGradient
              ].colors.join(", ")})`,
            }}
          >
            {Gradients[selectedGradient].name}
          </motion.div>
        </AnimatePresence>
        <div className="relative flex items-center justify-center w-full p-4 mt-12 overflow-hidden border rounded-lg h-52 bg-box border-white-low-opacity">
          <h1
            className="text-4xl md:text-5xl text-center font-black text-transparent !bg-clip-text"
            style={{
              background: `linear-gradient(${45}deg, ${Gradients[
                selectedGradient
              ].colors.join(", ")})`,
            }}
          >
            Text-Gradient
          </h1>
        </div>
        {/* Increasing and Decreasing */}
        <div className="flex gap-4 mt-4">
          <button
            className="px-4 py-2 text-white duration-200 border-2 rounded-md border-button bg-button focus:border-primary"
            onClick={() => changingGradient("decrease")}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="px-4 py-2 text-white duration-200 border-2 rounded-md border-button bg-button focus:border-primary"
            onClick={() => changingGradient("increase")}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <SaveButton content={Content} />
      </motion.section>
    </div>
  );
}
