import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Gradients } from "@contents/Gradients";
import SaveNotification from "@components/SaveNotification";

type Props = {};

export default function ButtonsGradient({}: Props) {
  const [buttonsColor, setButtonsColor] = useState(Gradients);

  const shuffleItems = () => {
    const shuffledItems = [...buttonsColor];
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledItems[i], shuffledItems[j]] = [
        shuffledItems[j],
        shuffledItems[i],
      ];
    }
    setButtonsColor(shuffledItems);
  };

  return (
    <div>
      <button
        onClick={shuffleItems}
        className="z-30 w-full px-4 py-2 mb-8 text-white duration-200 border rounded-md md:sticky top-4 bg-gradient-to-br from-box/50 via-white/5 to-box/50 border-white-low-opacity backdrop-blur"
      >
        Suffle
      </button>
      <motion.div layout className="flex flex-wrap gap-4 mb-8">
        {buttonsColor.map((color) => (
          <Button key={color.name} color={color} />
        ))}
      </motion.div>
    </div>
  );
}

type ButtonProps = {
  color: {
    name: string;
    colors: string[];
  };
};

export const Button = ({ color }: ButtonProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const Content = `
/* Background Gradient */
background: linear-gradient(${45}deg, ${color.colors.join(", ")}); // ${
    color.name
  }`;

  const onClickHandler = () => {
    setIsSaved(true);
    navigator.clipboard.writeText(Content);

    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };

  return (
    <>
      <motion.button
        layout="position"
        transition={{ type: "spring", damping: 17 }}
        className="px-4 py-2 text-white rounded-md hover:!scale-105"
        style={{
          background: `linear-gradient(45deg, ${color.colors.join(", ")})`,
        }}
        onClick={onClickHandler}
      >
        {color.name}
      </motion.button>
      <AnimatePresence>
        {isSaved && <SaveNotification name={`Saved - ${color.name}`} />}
      </AnimatePresence>
    </>
  );
};
