import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Button_Tech, GivingComment, Tabs } from "@components/Tech";

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
        <div
          className={`w-full max-w-playground mx-auto h-36 bg-box/50 dark:bg-box-d/50 border border-white-low-opacity dark:border-white-low-opacity-d rounded-lg flex gap-1 overflow-hidden`}
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
        </div>
      </LiveChanges>
      <GivingComment comment="Justify Content">
        <BringChanges className="flex flex-wrap justify-center gap-3 mt-8">
          <Button_Tech
            value="start"
            classNameValue="start"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="end"
            classNameValue="end"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="center"
            classNameValue="center"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="space-between"
            classNameValue="space-between"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="space-evenly"
            classNameValue="space-evenly"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="space-around"
            classNameValue="space-around"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
        </BringChanges>
      </GivingComment>
      <GivingComment comment="Align Items">
        <BringChanges className="flex flex-wrap justify-center gap-3 mt-8">
          <Button_Tech
            value="start"
            classNameValue="start"
            className={alignItems}
            setClassName={setAlignItems}
          />
          <Button_Tech
            value="end"
            classNameValue="end"
            className={alignItems}
            setClassName={setAlignItems}
          />
          <Button_Tech
            value="center"
            classNameValue="center"
            className={alignItems}
            setClassName={setAlignItems}
          />
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
        <div
          className={`w-full max-w-playground mx-auto h-60 bg-box/50 dark:bg-box-d/50 border border-white-low-opacity dark:border-white-low-opacity-d rounded-lg flex flex-wrap gap-1 overflow-hidden`}
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
        </div>
      </LiveChanges>
      <BringChanges className="flex flex-wrap justify-center gap-3 mt-8">
        <Button_Tech
          value="start"
          classNameValue="start"
          className={alignContent}
          setClassName={setAlignContent}
        />
        <Button_Tech
          value="end"
          classNameValue="end"
          className={alignContent}
          setClassName={setAlignContent}
        />
        <Button_Tech
          value="center"
          classNameValue="center"
          className={alignContent}
          setClassName={setAlignContent}
        />
        <Button_Tech
          value="space-between"
          classNameValue="space-between"
          className={alignContent}
          setClassName={setAlignContent}
        />
        <Button_Tech
          value="space-evenly"
          classNameValue="space-evenly"
          className={alignContent}
          setClassName={setAlignContent}
        />
        <Button_Tech
          value="space-around"
          classNameValue="space-around"
          className={alignContent}
          setClassName={setAlignContent}
        />
      </BringChanges>
    </motion.div>
  );
};
