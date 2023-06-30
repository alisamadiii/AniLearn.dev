import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, GivingComment, Tabs, Button, Playground } from "@components/Tech";
import { activateButton } from "@utils/ClassName";

type Props = {};

export default function FlexPosition({}: Props) {
  const [tab, setTab] = useState(1);

  return (
    <>
      <MetaTag
        title="flex-position"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>flex position</h1><p>Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as “flex container”) whereas the others are meant to be set on the children (said “flex items”).</p><p>If “regular” layout is based on both block and inline flow directions, the flex layout is based on “flex-flow directions”. Please have a look at this figure from the specification, explaining the main idea behind the flex layout.</p>" />

        <Workplace className="overflow-hidden">
          <Tabs
            tabs={["Justify & Align", "Align-Content"]}
            stateValue={tab}
            setStateValue={setTab}
          />
          <AnimatePresence
            mode="wait"
            initial={false}>
            {tab == 1 ? <FirstTab key={1} /> : <SecondTab key={2} />}
          </AnimatePresence>
        </Workplace>
      </Container>
    </>
  );
}

export const FirstTab = () => {
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignItems, setAlignItems] = useState("start");

  const Codes = `.container {
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
}`; // Use backtick for writing your code

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <CodeBlocks
        codeString={Codes}
        language="css"
        fileName="style.css"
      />

      <LiveChanges className="">
        <Playground
          className={`max-w-playground flex gap-2 h-36`}
          style={{ justifyContent, alignItems }}>
          <AnimatePresence initial={false}>
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                exit={{ y: -10, opacity: 0 }}
                layout
                transition={{ type: "spring", damping: 15 }}
                className={`bg-black dark:bg-white rounded-lg w-11 h-11`}
              />
            ))}
          </AnimatePresence>
        </Playground>
      </LiveChanges>
      <GivingComment comment="Justify Content">
        <BringChanges className="flex flex-wrap justify-center gap-3 mt-8">
          <Button
            onClick={() => setJustifyContent("start")}
            variant={"workplace"}
            className={`${activateButton(justifyContent, "start")}`}>
            start
          </Button>
          <Button
            onClick={() => setJustifyContent("end")}
            variant={"workplace"}
            className={`${activateButton(justifyContent, "end")}`}>
            end
          </Button>
          <Button
            onClick={() => setJustifyContent("center")}
            variant={"workplace"}
            className={`${activateButton(justifyContent, "center")}`}>
            center
          </Button>
          <Button
            onClick={() => setJustifyContent("space-between")}
            variant={"workplace"}
            className={`${activateButton(justifyContent, "space-between")}`}>
            space-between
          </Button>
          <Button
            onClick={() => setJustifyContent("space-evenly")}
            variant={"workplace"}
            className={`${activateButton(justifyContent, "space-evenly")}`}>
            space-evenly
          </Button>
          <Button
            onClick={() => setJustifyContent("space-around")}
            variant={"workplace"}
            className={`${activateButton(justifyContent, "space-around")}`}>
            space-around
          </Button>
        </BringChanges>
      </GivingComment>
      <GivingComment comment="Align Items">
        <BringChanges className="flex flex-wrap justify-center gap-3 mt-8">
          <Button
            onClick={() => setAlignItems("start")}
            variant={"workplace"}
            className={`${activateButton(alignItems, "start")}`}>
            start
          </Button>
          <Button
            onClick={() => setAlignItems("end")}
            variant={"workplace"}
            className={`${activateButton(alignItems, "end")}`}>
            end
          </Button>
          <Button
            onClick={() => setAlignItems("center")}
            variant={"workplace"}
            className={`${activateButton(alignItems, "center")}`}>
            center
          </Button>
        </BringChanges>
      </GivingComment>
    </motion.div>
  );
};

export const SecondTab = () => {
  const [alignContent, setAlignContent] = useState("start");

  const Codes = `.container {
  display: flex;
  flex-wrap: wrap;
  align-content: ${alignContent};
}

.items {
  flex-basis: 384px;
}`; // Use backtick for writing your code

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <CodeBlocks
        codeString={Codes}
        language="css"
        fileName="style.css"
      />

      <LiveChanges className="">
        <Playground
          className={`max-w-playground flex flex-wrap gap-1 h-60`}
          style={{ alignContent }}>
          <AnimatePresence initial={false}>
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                exit={{ y: -10, opacity: 0 }}
                layout
                transition={{ type: "spring", damping: 15 }}
                className={`bg-black dark:bg-white rounded-lg basis-96 h-6 md:h-11`}
              />
            ))}
          </AnimatePresence>
        </Playground>
      </LiveChanges>
      <BringChanges className="flex flex-wrap justify-center gap-3 mt-8">
        <Button
          onClick={() => setAlignContent("start")}
          variant={"workplace"}
          className={`${activateButton(alignContent, "start")}`}>
          start
        </Button>
        <Button
          onClick={() => setAlignContent("end")}
          variant={"workplace"}
          className={`${activateButton(alignContent, "end")}`}>
          end
        </Button>
        <Button
          onClick={() => setAlignContent("center")}
          variant={"workplace"}
          className={`${activateButton(alignContent, "center")}`}>
          center
        </Button>
        <Button
          onClick={() => setAlignContent("space-between")}
          variant={"workplace"}
          className={`${activateButton(alignContent, "space-between")}`}>
          space-between
        </Button>
        <Button
          onClick={() => setAlignContent("space-evenly")}
          variant={"workplace"}
          className={`${activateButton(alignContent, "space-evenly")}`}>
          space-evenly
        </Button>
        <Button
          onClick={() => setAlignContent("space-around")}
          variant={"workplace"}
          className={`${activateButton(alignContent, "space-around")}`}>
          space-around
        </Button>
      </BringChanges>
    </motion.div>
  );
};
