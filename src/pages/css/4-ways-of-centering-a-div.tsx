import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Checkbox, Information, CodeBlocks, Tabs } from "@components/Tech";

type Props = {};

const PlaygroundAnimation: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 8 }
  },
  exit: { opacity: 0, y: -10 }
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
      <MetaTag
        title="4-ways-of-centering-a-div"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>4 ways of centering a div</h1><p>In CSS, the term 'box model' is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>" />

        <div className="grid items-start gap-4 my-8 lg:grid-cols-2">
          <CodeBlocks
            codeString={way1}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${tab == 1 ? "" : "opacity-50 scale-95"}`}
          />
          <CodeBlocks
            codeString={way2}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${tab == 2 ? "" : "opacity-50 scale-95"}`}
          />
          <CodeBlocks
            codeString={way3}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${tab == 3 ? "" : "opacity-50 scale-95"}`}
          />
          <CodeBlocks
            codeString={way4}
            language="css"
            fileName="style.css"
            className={`my-0 duration-200 ${tab == 4 ? "" : "opacity-50 scale-95"}`}
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
            <AnimatePresence
              mode="wait"
              initial={false}>
              {tab == 1 ? (
                <Flex
                  key={1}
                  state={showLine}
                />
              ) : tab == 2 ? (
                <Grid
                  key={2}
                  state={showLine}
                />
              ) : tab == 3 ? (
                <GridWay2
                  key={3}
                  state={showLine}
                />
              ) : tab == 4 ? (
                <Transform
                  key={4}
                  state={showLine}
                />
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

type WaysOfCenteringADivProps = {
  state: boolean;
};

export const Flex = ({ state }: WaysOfCenteringADivProps) => {
  const [display, setDisplay] = useState("block");
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignItems, setAlignItems] = useState("start");

  return (
    <motion.div
      variants={PlaygroundAnimation}
      initial="hidden"
      animate="visible"
      exit="exit">
      <motion.div
        className={`isolate relative w-full max-w-playground mx-auto h-36 bg-box/50 dark:bg-box-d border border-white-low-opacity dark:border-white-low-opacity-d rounded-lg gap-1 overflow-hidden p-2`}
        style={{ display, justifyContent, alignItems }}>
        <AnimatePresence>{state && <ShowLinesComponent />}</AnimatePresence>
        <motion.div
          layout
          className={`rounded-lg w-11 h-11 transition-colors duration-200 ${
            state ? "bg-black/80 dark:bg-white/80" : "bg-black dark:bg-white"
          }`}
        />
      </motion.div>
      <BringChanges className="w-full mx-auto mt-6 space-y-3 max-w-playground">
        <Checkbox
          name="Flex"
          onChange={(e) => setDisplay(e.target.checked == true ? "flex" : "block")}
        />
        <Checkbox
          name="Justify-Content"
          onChange={(e) => setJustifyContent(e.target.checked == true ? "center" : "start")}
        />
        <Checkbox
          name="align-items"
          onChange={(e) => setAlignItems(e.target.checked == true ? "center" : "start")}
        />
      </BringChanges>
    </motion.div>
  );
};

export const Grid = ({ state }: WaysOfCenteringADivProps) => {
  const [display, setDisplay] = useState("block");
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignItems, setAlignItems] = useState("start");

  return (
    <motion.div
      variants={PlaygroundAnimation}
      initial="hidden"
      animate="visible"
      exit="exit">
      <motion.div
        className={`isolate relative w-full max-w-playground mx-auto h-36 bg-box/50 dark:bg-box-d border border-white-low-opacity dark:border-white-low-opacity-d rounded-lg gap-1 overflow-hidden p-2`}
        style={{ display, justifyContent, alignItems }}>
        <AnimatePresence>{state && <ShowLinesComponent />}</AnimatePresence>
        <motion.div
          layout
          className={`rounded-lg w-11 h-11 transition-colors duration-200 ${
            state ? "bg-black/80 dark:bg-white/80" : "bg-black dark:bg-white"
          }`}
        />
      </motion.div>
      <BringChanges className="w-full mx-auto mt-6 space-y-3 max-w-playground">
        <Checkbox
          name="Grid"
          onChange={(e) => setDisplay(e.target.checked == true ? "grid" : "block")}
        />
        <Checkbox
          name="Justify-Content"
          onChange={(e) => setJustifyContent(e.target.checked == true ? "center" : "start")}
        />
        <Checkbox
          name="align-items"
          onChange={(e) => setAlignItems(e.target.checked == true ? "center" : "start")}
        />
      </BringChanges>
    </motion.div>
  );
};

export const GridWay2 = ({ state }: WaysOfCenteringADivProps) => {
  const [display, setDisplay] = useState("block");
  const [placeItems, setPlaceItems] = useState("start");

  return (
    <motion.div
      variants={PlaygroundAnimation}
      initial="hidden"
      animate="visible"
      exit="exit">
      <motion.div
        className={`isolate relative w-full max-w-playground mx-auto h-36 bg-box/50 dark:bg-box-d border border-white-low-opacity dark:border-white-low-opacity-d rounded-lg gap-1 overflow-hidden p-2`}
        style={{ display, placeItems }}>
        <AnimatePresence>{state && <ShowLinesComponent />}</AnimatePresence>
        <motion.div
          layout
          className={`rounded-lg w-11 h-11 transition-colors duration-200 ${
            state ? "bg-black/80 dark:bg-white/80" : "bg-black dark:bg-white"
          }`}
        />
      </motion.div>
      <BringChanges className="w-full mx-auto mt-6 space-y-3 max-w-playground">
        <Checkbox
          name="Grid"
          onChange={(e) => setDisplay(e.target.checked == true ? "grid" : "block")}
        />
        <Checkbox
          name="Place-Items"
          onChange={(e) => setPlaceItems(e.target.checked == true ? "center" : "start")}
        />
      </BringChanges>
    </motion.div>
  );
};

export const Transform = ({ state }: WaysOfCenteringADivProps) => {
  const [position, setPosition] = useState("static");
  const [top, setTop] = useState("0%");
  const [left, setLeft] = useState("0%");
  const [transform, setTransform] = useState(false);

  return (
    <motion.div
      variants={PlaygroundAnimation}
      initial="hidden"
      animate="visible"
      exit="exit">
      <motion.div
        className={`isolate relative w-full max-w-playground mx-auto h-36 bg-box/50 dark:bg-box-d border border-white-low-opacity dark:border-white-low-opacity-d rounded-lg gap-1 overflow-hidden p-2`}>
        <AnimatePresence>{state && <ShowLinesComponent />}</AnimatePresence>
        <motion.div
          layout
          className={`rounded-lg w-11 h-11 transition-colors duration-200 ${
            state ? "bg-black/80 dark:bg-white/80" : "bg-black dark:bg-white"
          } ${position} ${transform && "!-translate-x-1/2 !-translate-y-1/2"}`}
          style={{
            top,
            left
          }}
        />
      </motion.div>
      <BringChanges className="w-full mx-auto mt-6 space-y-3 max-w-playground">
        <Checkbox
          name="Position"
          onChange={(e) => setPosition(e.target.checked == true ? "absolute" : "static")}
        />
        <Checkbox
          name="Top"
          onChange={(e) => setTop(e.target.checked == true ? "50%" : "0%")}
        />
        <Checkbox
          name="Left"
          onChange={(e) => setLeft(e.target.checked == true ? "50%" : "0%")}
        />
        <Checkbox
          name="Transform"
          onChange={(e) => setTransform(e.target.checked)}
        />
      </BringChanges>
    </motion.div>
  );
};

export const ShowLinesComponent = () => {
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        exit={{ height: 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-red-700 -z-10"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-red-700 -z-10"
      />
    </>
  );
};
