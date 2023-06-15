import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks } from "@components/Tech";

import { Gradients } from "@contents/Gradients";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {};

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

  const Codes = `div {
  /* Background Gradient */
  background: linear-gradient(${45}deg, ${Gradients[
    selectedGradient
  ].colors.join(", ")}); // ${Gradients[selectedGradient].name}

  /* Text Gradient */
  background: linear-gradient(${45}deg, ${Gradients[
    selectedGradient
  ].colors.join(", ")}); // ${Gradients[selectedGradient].name}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`; // Use backtick for writing your code

  return (
    <>
      <MetaTag title="gradient" image={null} description="" />
      <Container>
        <Information content="<h1>gradient</h1><p>The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the <code>gradient</code> data type, which is a special kind of <code>image</code>.</p>" />
        <CodeBlocks codeString={Codes} language="css" fileName="style.css" />

        <Workplace className="">
          <LiveChanges className="">
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
                className="w-full py-4 font-medium text-center text-font-clr h-52 rounded-xl"
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
          </LiveChanges>
          <BringChanges className="">
            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 text-font-clr duration-200 border-2 rounded-md border-button bg-button focus:border-primary"
                onClick={() => changingGradient("decrease")}
              >
                <IoIosArrowBack />
              </button>
              <button
                className="px-4 py-2 text-font-clr duration-200 border-2 rounded-md border-button bg-button focus:border-primary"
                onClick={() => changingGradient("increase")}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
