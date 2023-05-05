import { Heading_1, Heading_2, Heading_3 } from "@components/Headings";
import Container from "@layouts/Container";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

// Icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Button_Tech from "@components/Button_Tech";

export default function Flex_Position({}: Props) {
  const [rectsNum, setRectsNum] = useState(3);
  // First State Management
  const [justifyContent, setJustifyContent] = useState("justify-start");
  const [alignItems, setAlignItems] = useState("items-start");

  // Second State Management
  const [alignContent, setAlignContent] = useState("align-start");

  // Third State Management
  const [justifySelf, setJustifySelf] = useState("justify-self-start");
  const [alignSelf, setAlignSelf] = useState("self-start");

  const rectsFunction = (value: "increase" | "decrease") => {
    if (value == "increase") {
      setRectsNum(rectsNum + 1);
      if (rectsNum >= 10) setRectsNum(10); // max=10
    } else {
      setRectsNum(rectsNum - 1);
      if (rectsNum <= 3) setRectsNum(3); // min=3
    }
  };

  return (
    <Container className="py-12">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        flex-box
      </small>

      <Heading_1 className="mt-1 mb-3 text-5xl">Flexbox Position</Heading_1>
      <p className="mb-3 text-lg font-light">
        Since flexbox is a whole module and not a single property, it involves a
        lot of things including its whole set of properties. Some of them are
        meant to be set on the container (parent element, known as “flex
        container”) whereas the others are meant to be set on the children (said
        “flex items”).
      </p>
      <p className="text-lg font-light">
        If “regular” layout is based on both block and inline flow directions,
        the flex layout is based on “flex-flow directions”. Please have a look
        at this figure from the specification, explaining the main idea behind
        the flex layout.
      </p>

      <Heading_2 className="mt-12 mb-3 text-4xl">Working Place</Heading_2>
      <p className="text-lg font-light">
        This is the place where you can try them.
      </p>

      {/* Counts */}
      <div
        className="flex items-center justify-between p-4 my-8 rounded-lg"
        style={{
          background: `rgba(18, 20, 24, ${
            rectsNum == 10 ? "1" : `.${rectsNum}`
          })`,
        }}
      >
        <motion.span
          key={rectsNum}
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl"
        >
          {rectsNum}
        </motion.span>
        <div className="flex flex-col">
          <button
            value="increase"
            onClick={(e: any) => rectsFunction(e.target.value)}
          >
            <IoIosArrowUp className="pointer-events-none" />
          </button>
          <button
            value="decrease"
            onClick={(e: any) => rectsFunction(e.target.value)}
          >
            <IoIosArrowDown className="pointer-events-none" />
          </button>
        </div>
      </div>

      <Heading_3 className="mt-8 text-3xl">
        justify-content & align-items
      </Heading_3>
      {/* Workplace */}
      <div className="mt-8">
        {/* Demo */}
        <div
          className={`w-full max-w-[905px] mx-auto h-36 bg-box border border-white-low-opacity rounded-lg flex gap-1 overflow-hidden ${justifyContent} ${alignItems}`}
        >
          <AnimatePresence initial={false}>
            {[...Array(rectsNum)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                layout
                className="bg-white rounded-lg w-11 h-11"
              />
            ))}
          </AnimatePresence>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button_Tech
            value="start"
            classNameValue="justify-start"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="end"
            classNameValue="justify-end"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="center"
            classNameValue="justify-center"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="space-between"
            classNameValue="justify-between"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="space-evenly"
            classNameValue="justify-evenly"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
          <Button_Tech
            value="space-around"
            classNameValue="justify-around"
            className={justifyContent}
            setClassName={setJustifyContent}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button_Tech
            value="start"
            classNameValue="items-start"
            className={alignItems}
            setClassName={setAlignItems}
          />
          <Button_Tech
            value="end"
            classNameValue="items-end"
            className={alignItems}
            setClassName={setAlignItems}
          />
          <Button_Tech
            value="center"
            classNameValue="items-center"
            className={alignItems}
            setClassName={setAlignItems}
          />
        </div>
      </div>

      <Heading_3 className="mt-8 text-3xl">align-content</Heading_3>
      {/* Workplace */}
      <div className="mt-8">
        {/* Demo */}
        <div
          className={`w-full max-w-[905px] mx-auto bg-box border border-white-low-opacity rounded-lg flex gap-1 overflow-hidden ${alignContent} flex-wrap`}
          style={{ height: 50 * rectsNum }}
        >
          <AnimatePresence initial={false}>
            {[...Array(rectsNum)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                layout
                className="bg-white rounded-lg w-11 h-11 basis-1/3 grow"
              />
            ))}
          </AnimatePresence>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button_Tech
            value="start"
            classNameValue="content-start"
            className={alignContent}
            setClassName={setAlignContent}
          />
          <Button_Tech
            value="end"
            classNameValue="content-end"
            className={alignContent}
            setClassName={setAlignContent}
          />
          <Button_Tech
            value="center"
            classNameValue="content-center"
            className={alignContent}
            setClassName={setAlignContent}
          />
          <Button_Tech
            value="space-between"
            classNameValue="content-between"
            className={alignContent}
            setClassName={setAlignContent}
          />
          <Button_Tech
            value="space-evenly"
            classNameValue="content-evenly"
            className={alignContent}
            setClassName={setAlignContent}
          />
          <Button_Tech
            value="space-around"
            classNameValue="content-around"
            className={alignContent}
            setClassName={setAlignContent}
          />
          <Button_Tech
            value="stretch"
            classNameValue="content-scratch"
            className={alignContent}
            setClassName={setAlignContent}
          />
          <Button_Tech
            value="baseline"
            classNameValue="content-baseline"
            className={alignContent}
            setClassName={setAlignContent}
          />
        </div>
      </div>

      <Heading_3 className="mt-8 text-3xl">justify-self & align-self</Heading_3>
      {/* Workplace */}
      <div className="mt-8">
        {/* Demo */}
        <div
          className={`w-full max-w-[905px] mx-auto h-36 bg-box border border-white-low-opacity rounded-lg grid grid-cols-3 gap-1 overflow-hidden`}
        >
          <AnimatePresence initial={false}>
            {[...Array(rectsNum)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                layout
                className={`bg-white rounded-lg grow text-black basis-32 ${
                  index == 0 && `${justifySelf} ${alignSelf} bg-primary`
                }`}
              >
                {index} Items
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button_Tech
            value="start"
            classNameValue="justify-self-start"
            className={justifySelf}
            setClassName={setJustifySelf}
          />
          <Button_Tech
            value="end"
            classNameValue="justify-self-end"
            className={justifySelf}
            setClassName={setJustifySelf}
          />
          <Button_Tech
            value="center"
            classNameValue="justify-self-center"
            className={justifySelf}
            setClassName={setJustifySelf}
          />
          <Button_Tech
            value="stretch"
            classNameValue="justify-self-stretch"
            className={justifySelf}
            setClassName={setJustifySelf}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button_Tech
            value="start"
            classNameValue="self-start"
            className={alignSelf}
            setClassName={setAlignSelf}
          />
          <Button_Tech
            value="end"
            classNameValue="self-end"
            className={alignSelf}
            setClassName={setAlignSelf}
          />
          <Button_Tech
            value="center"
            classNameValue="self-center"
            className={alignSelf}
            setClassName={setAlignSelf}
          />
        </div>
      </div>
    </Container>
  );
}
