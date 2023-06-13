import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";

// you can use these components
import { Checkbox, Information, CodeBlocks } from "@components/Tech";

type Props = {};

const PlaygroundAnimation: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 8 },
  },
  exit: { opacity: 0, y: -10 },
};

export default function CenteringADiv({}: Props) {
  const [centerDiv, setCenterDiv] = useState<number>(1);

  const way1 = `div {
    display: flex;
    justify-content: center;
    align-items: center;
}`;
  const way2 = `div {
    display: grid;
    justify-content: center;
    align-items: center;
}`;
  const way3 = `div {
    display: flex;
    place-items: center;
}`;
  const way4 = `div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`;

  return (
    <>
      <MetaTag title="4-ways-of-centering-a-div" image={null} description="" />
      <Container>
        <Information content="<h1>4 ways of centering a div</h1><p>In CSS, the term 'box model' is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>" />

        <div className="grid items-start gap-4 my-8 lg:grid-cols-2">
          <CodeBlocks
            codeString={way1}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${
              centerDiv == 1 ? "" : "opacity-50 scale-95"
            }`}
          />
          <CodeBlocks
            codeString={way2}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${
              centerDiv == 2 ? "" : "opacity-50 scale-95"
            }`}
          />
          <CodeBlocks
            codeString={way3}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${
              centerDiv == 3 ? "" : "opacity-50 scale-95"
            }`}
          />
          <CodeBlocks
            codeString={way4}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${
              centerDiv == 4 ? "" : "opacity-50 scale-95"
            }`}
          />
        </div>

        <Workplace className="">
          <LiveChanges className="">
            <AnimatePresence mode="wait" initial={false}>
              {centerDiv == 1 ? (
                <motion.div
                  key={1}
                  variants={PlaygroundAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`relative w-full max-w-playground mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
                >
                  <motion.div
                    layout
                    className="bg-white rounded-lg w-11 h-11"
                  />
                </motion.div>
              ) : centerDiv == 2 ? (
                <motion.div
                  key={2}
                  variants={PlaygroundAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`relative w-full max-w-playground mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
                >
                  <div className="bg-white rounded-lg w-11 h-11" />
                </motion.div>
              ) : centerDiv == 3 ? (
                <motion.div
                  key={3}
                  variants={PlaygroundAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`relative w-full max-w-playground mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
                >
                  <div className="bg-white rounded-lg w-11 h-11" />
                </motion.div>
              ) : centerDiv == 4 ? (
                <motion.div
                  key={4}
                  variants={PlaygroundAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`relative w-full max-w-playground mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
                >
                  <div className="bg-white rounded-lg w-11 h-11" />
                </motion.div>
              ) : (
                <h1>Nothing</h1>
              )}
            </AnimatePresence>
          </LiveChanges>
          <BringChanges className="flex flex-wrap justify-between gap-8 mx-auto mt-8 max-w-playground">
            <Checkbox
              name="Flexbox"
              onChange={() => setCenterDiv(1)}
              checked={centerDiv == 1 ? true : false}
            />
            <Checkbox
              name="Gridbox I"
              onChange={() => setCenterDiv(2)}
              checked={centerDiv == 2 ? true : false}
            />
            <Checkbox
              name="Gridbox II"
              onChange={() => setCenterDiv(3)}
              checked={centerDiv == 3 ? true : false}
            />
            <Checkbox
              name="Transform"
              onChange={() => setCenterDiv(4)}
              checked={centerDiv == 4 ? true : false}
            />
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
