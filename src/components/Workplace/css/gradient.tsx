import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

import { Gradients } from "@contents/Gradients";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SaveButton from "@components/SaveButton";

// ======= Background Gradient ========
export default function Gradient({}: Props) {
  const [selectedGradient, setSelectedGradient] = useState<number>(0);
  const [toggleShowAll, setToggleShowAll] = useState(false);

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
        {/* Div */}
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
        {/* Text */}
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
        <div className="flex items-center gap-4 mt-8">
          <button
            className="p-2 rounded-md bg-box"
            onClick={() => setToggleShowAll(!toggleShowAll)}
          >
            Show all
          </button>
          <SaveButton content={Content} margin={false} />
        </div>
      </motion.section>

      {toggleShowAll && <AllColors />}
    </div>
  );
}

export const AllColors = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30 }}
      className="relative overflow-hidden"
    >
      <div className="flex flex-wrap gap-4 p-4 overflow-auto rounded-lg w-w-full h-96 bg-box">
        {Gradients.map((gradient) => (
          <Color gradient={gradient} key={gradient.name} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-background-clr to-transparent" />
    </motion.div>
  );
};

type ColorProps = {
  gradient: {
    name: string;
    colors: string[];
  };
};

export const Color = ({ gradient }: ColorProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const savingColorCodes = (content: string) => {
    navigator.clipboard.writeText(content);
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  return (
    <motion.div
      className={`relative overflow-hidden flex items-center justify-center h-24 text-white duration-150 rounded-md basis-44 grow before:content-["Saved"] before:absolute before:inset-0 before:bg-green-600 before:flex before:items-center before:justify-center before:duration-200 ${
        isSaved
          ? "before:translate-y-0 cursor-not-allowed"
          : "before:translate-y-full cursor-pointer"
      }`}
      style={{
        background: `linear-gradient(to top left, ${gradient.colors.join(
          ", "
        )})`,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
      }}
      onClick={() =>
        savingColorCodes(`linear-gradient(${gradient.colors.join(", ")})`)
      }
    >
      {gradient.name}
    </motion.div>
  );
};
