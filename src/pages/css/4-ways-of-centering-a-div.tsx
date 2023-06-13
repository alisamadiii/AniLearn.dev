import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";

// you can use these components
import { Checkbox, Information, CodeBlocks, Tabs } from "@components/Tech";

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
  const [showLine, setShowLine] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(1);

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
              tab == 1 ? "" : "opacity-50 scale-95"
            }`}
          />
          <CodeBlocks
            codeString={way2}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${
              tab == 2 ? "" : "opacity-50 scale-95"
            }`}
          />
          <CodeBlocks
            codeString={way3}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${
              tab == 3 ? "" : "opacity-50 scale-95"
            }`}
          />
          <CodeBlocks
            codeString={way4}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${
              tab == 4 ? "" : "opacity-50 scale-95"
            }`}
          />
        </div>

        <Workplace className="">
          <Tabs
            tabs={["Flex", "Grid", "Grid II", "Transform"]}
            stateValue={tab}
            setStateValue={setTab}
          />

          <BringChanges className="w-full mx-auto mb-6 max-w-playground">
            <Checkbox
              name="Show Line"
              checked={showLine}
              onChange={() => setShowLine(!showLine)}
            />
          </BringChanges>

          <LiveChanges className="">
            <AnimatePresence mode="wait" initial={false}>
              {tab == 1 ? (
                <Playground key={1} state={showLine} />
              ) : tab == 2 ? (
                <Playground key={2} state={showLine} />
              ) : tab == 3 ? (
                <Playground key={3} state={showLine} />
              ) : tab == 4 ? (
                <Playground key={4} state={showLine} />
              ) : (
                <h1>Nothing</h1>
              )}
            </AnimatePresence>
          </LiveChanges>
        </Workplace>
      </Container>
    </>
  );
}

type PlaygroundProps = {
  state: boolean;
};

export const Playground = ({ state }: PlaygroundProps) => {
  return (
    <motion.div
      variants={PlaygroundAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`isolate relative w-full max-w-playground mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2`}
    >
      <AnimatePresence>
        {state && (
          <>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              exit={{ height: 0 }}
              className="absolute w-[2px] h-full bg-red-700 -z-10"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              className="absolute w-full h-[2px] bg-red-700 -z-10"
            />
          </>
        )}
      </AnimatePresence>
      <motion.div
        layout
        className={`rounded-lg w-11 h-11 duration-200 ${
          state ? "bg-white/80" : "bg-white"
        }`}
      />
    </motion.div>
  );
};

type TestingProps = {
  state: boolean;
};
