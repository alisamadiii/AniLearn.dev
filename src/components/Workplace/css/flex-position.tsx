import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button_Tech from "@components/Button_Tech";

type Props = {};

export function JustifyContent({}: Props) {
  // First State Management
  const [justifyContent, setJustifyContent] = useState("justify-start");

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <div className="absolute h-24 w-52 bg-primary/20 blur-3xl -z-10" />
        {/* Demo */}
        <Playground flexClassName={justifyContent} />
        <div className="flex flex-wrap gap-3 mt-8">
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
      </div>
    </div>
  );
}

export function AlignItems({}: Props) {
  // First State Management
  const [alignItems, setAlignItems] = useState("item-start");

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <div className="absolute h-24 w-52 bg-primary/20 blur-3xl -z-10" />
        {/* Demo */}
        <Playground flexClassName={alignItems} />
        <div className="flex flex-wrap gap-3 mt-8">
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
    </div>
  );
}

export function AlignContent({}: Props) {
  // First State Management
  const [alignContent, setAlignContent] = useState("content-start");

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <div className="absolute h-24 w-52 bg-primary/20 blur-3xl -z-10" />
        {/* Demo */}
        <Playground
          flexClassName={alignContent}
          extraClassNameContainer="flex-wrap"
          extraClassNameRect="basis-[300px] grow"
        />
        <div className="flex flex-wrap gap-3 mt-8">
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
        </div>
      </div>
    </div>
  );
}

type PlaygroundProps = {
  flexClassName: string;
  extraClassNameContainer?: string;
  extraClassNameRect?: string;
};

export const Playground = ({
  flexClassName,
  extraClassNameContainer,
  extraClassNameRect,
}: PlaygroundProps) => {
  return (
    <div
      className={`w-full max-w-[905px] mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex gap-1 overflow-hidden ${flexClassName} ${extraClassNameContainer}`}
    >
      <AnimatePresence initial={false}>
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            layout
            className={`bg-white rounded-lg w-11 h-11 ${extraClassNameRect}`}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
